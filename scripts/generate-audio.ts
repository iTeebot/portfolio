import fs from "fs";
import path from "path";
import { execSync } from "child_process";

/**
 * Automatically load environment variables from .env if present
 */
function loadEnv() {
  const envPath = path.join(process.cwd(), ".env");
  if (fs.existsSync(envPath)) {
    const content = fs.readFileSync(envPath, "utf-8");
    content.split("\n").forEach((line) => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith("#")) {
        const [key, ...valParts] = trimmed.split("=");
        if (key && valParts.length > 0) {
          const val = valParts.join("=").trim().replace(/^['"]|['"]$/g, "");
          process.env[key.trim()] = val;
        }
      }
    });
  }
}

loadEnv();

/**
 * Clean Markdown formatting tags so the Text-To-Speech engine reads natural text.
 */
function cleanMarkdownText(markdown: string): string {
  return markdown
    .replace(/```[\s\S]*?```/g, "")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/\[([^\]]+)\]\(.*?\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/(\*\*|__)(.*?)\1/g, "$2")
    .replace(/(\*|_)(.*?)\1/g, "$2")
    .replace(/^\s*>\s+/gm, "")
    .replace(/^\s*[\*\-\+]\s+/gm, "")
    .replace(/^\s*\d+\.\s+/gm, "")
    .replace(/<[^>]*>/g, "")
    .replace(/\n{2,}/g, ". ")
    .replace(/\n/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

interface PostMetadata {
  title?: string;
  audioUrl?: string;
  lastModified?: string;
  date?: string;
}

/**
 * Extract YAML frontmatter metadata and body content from Markdown file.
 */
function parseMarkdownFile(filePath: string): { metadata: PostMetadata; body: string } {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const match = fileContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);

  if (!match) {
    return { metadata: {}, body: fileContent };
  }

  const yamlBlock = match[1];
  const body = match[2];
  const metadata: PostMetadata = {};

  yamlBlock.split("\n").forEach((line) => {
    const parts = line.split(":");
    if (parts.length >= 2) {
      const key = parts[0].trim() as keyof PostMetadata;
      const value = parts.slice(1).join(":").trim().replace(/^['"]|['"]$/g, "");
      metadata[key] = value;
    }
  });

  return { metadata, body };
}

/**
 * Split text into sentence chunks for TTS synthesis (stay within TTS rate limits)
 */
function splitIntoSentenceChunks(text: string, maxLength: number = 200): string[] {
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  const chunks: string[] = [];

  for (let sentence of sentences) {
    sentence = sentence.trim();
    if (!sentence) continue;

    if (sentence.length <= maxLength) {
      chunks.push(sentence);
    } else {
      const words = sentence.split(" ");
      let currentChunk = "";
      for (const word of words) {
        if ((currentChunk + " " + word).trim().length <= maxLength) {
          currentChunk = (currentChunk + " " + word).trim();
        } else {
          if (currentChunk) chunks.push(currentChunk);
          currentChunk = word;
        }
      }
      if (currentChunk) chunks.push(currentChunk);
    }
  }
  return chunks;
}

/**
 * Generate TTS audio using Windows SAPI (Microsoft David Desktop - Male voice)
 * Falls back to Google TTS if SAPI is not available.
 */
async function generateTTSAudio(text: string, outputPath: string): Promise<boolean> {
  try {
    // 1. Try Windows SAPI via PowerShell (Microsoft David Desktop - Male voice)
    const isWindows = process.platform === "win32";
    if (isWindows) {
      const tmpWav = outputPath.replace(/\.mp3$/, "_tmp.wav");
      const escapedText = text.replace(/'/g, "''").replace(/"/g, '""');

      const psScript = `
Add-Type -AssemblyName System.Speech
$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer
$voices = $synth.GetInstalledVoices()
$maleVoice = $voices | Where-Object { $_.VoiceInfo.Gender -eq 'Male' } | Select-Object -First 1
if ($maleVoice) { $synth.SelectVoice($maleVoice.VoiceInfo.Name) }
$synth.SetOutputToWaveFile('${tmpWav.replace(/\\/g, "\\\\")}')
$synth.Rate = 0
$synth.Volume = 100
$synth.Speak('${escapedText}')
$synth.Dispose()
Write-Output "OK:$($maleVoice.VoiceInfo.Name)"
`.trim();

      try {
        const result = execSync(`powershell -ExecutionPolicy Bypass -Command "${psScript.replace(/\n/g, "; ")}"`, {
          timeout: 120000,
          stdio: "pipe",
        }).toString().trim();

        if (fs.existsSync(tmpWav) && fs.statSync(tmpWav).size > 1000) {
          // Convert WAV to MP3 using ffmpeg if available, otherwise copy WAV as-is
          try {
            execSync(`ffmpeg -y -i "${tmpWav}" -codec:a libmp3lame -qscale:a 2 "${outputPath}"`, {
              timeout: 60000,
              stdio: "pipe",
            });
            fs.unlinkSync(tmpWav);
          } catch {
            // ffmpeg not available — rename WAV to MP3 (browsers can play WAV from <audio>)
            fs.renameSync(tmpWav, outputPath);
          }

          const voiceName = result.replace("OK:", "").trim();
          console.log(`\x1b[32m[SUCCESS]\x1b[0m Generated male voice MP3 via Windows SAPI (${voiceName}) — ${fs.statSync(outputPath).size} bytes`);
          return true;
        }
      } catch (sapErr: any) {
        console.warn(`\x1b[33m[WARN]\x1b[0m Windows SAPI failed: ${sapErr.message?.split("\n")[0]}`);
        if (fs.existsSync(tmpWav)) fs.unlinkSync(tmpWav);
      }
    }

    // 2. Fallback: Google TTS (female voice — only used if SAPI unavailable)
    console.log(`[TTS Fallback] Synthesizing via Google TTS for ${path.basename(outputPath)}...`);
    const sentenceChunks = splitIntoSentenceChunks(text, 180);
    const audioBuffers: Buffer[] = [];

    for (const chunk of sentenceChunks) {
      const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(chunk)}&tl=en&client=tw-ob`;
      const response = await fetch(url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        },
      });

      if (response.ok) {
        const arrayBuf = await response.arrayBuffer();
        if (arrayBuf.byteLength > 0) audioBuffers.push(Buffer.from(arrayBuf));
      }
    }

    if (audioBuffers.length > 0) {
      const fullAudioBuffer = Buffer.concat(audioBuffers);
      fs.writeFileSync(outputPath, fullAudioBuffer);
      console.log(`\x1b[32m[SUCCESS]\x1b[0m Generated audio via Google TTS (${fullAudioBuffer.byteLength} bytes) at ${path.basename(outputPath)}`);
      return true;
    }

    throw new Error("All TTS providers failed to produce audio");
  } catch (error: any) {
    console.warn(`\x1b[33m[WARN]\x1b[0m Audio generation failed for ${path.basename(outputPath)}: ${error.message || error}`);
    return false;
  }
}

async function main() {
  console.log("\x1b[36m%s\x1b[0m", "=== Next.js Build-Time Blog Audio Generator ===");

  const blogDir = path.join(process.cwd(), "content/blog");
  const outputDir = path.join(process.cwd(), "public/audio/blogs");

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  if (!fs.existsSync(blogDir)) {
    console.log("No blog directory found at content/blog. Exiting.");
    return;
  }

  const files = fs.readdirSync(blogDir).filter((file) => file.endsWith(".md"));

  for (const file of files) {
    const slug = file.replace(/\.md$/, "");
    const filePath = path.join(blogDir, file);
    const { metadata, body } = parseMarkdownFile(filePath);

    const audioRelativePath = metadata.audioUrl || `/audio/blogs/${slug}.mp3`;
    const targetAudioFile = path.join(process.cwd(), "public", audioRelativePath.replace(/^\//, ""));

    const sourceStat = fs.statSync(filePath);
    const lastModifiedDateStr = metadata.lastModified || metadata.date;
    const lastModifiedTime = lastModifiedDateStr ? new Date(lastModifiedDateStr).getTime() : 0;

    if (fs.existsSync(targetAudioFile)) {
      const destStat = fs.statSync(targetAudioFile);
      if (destStat.size > 1000) {
        const isFileModified = sourceStat.mtimeMs > destStat.mtimeMs;
        const isDateUpdated = lastModifiedTime > destStat.mtimeMs;

        if (!isFileModified && !isDateUpdated) {
          console.log(`\x1b[32m[SKIP]\x1b[0m MP3 for "${slug}" is already up to date (${destStat.size} bytes).`);
          continue;
        } else {
          console.log(`\x1b[33m[UPDATE DETECTED]\x1b[0m Content changed for "${slug}". Regenerating...`);
        }
      } else {
        console.log(`[INVALID FILE] Existing audio for "${slug}" is empty. Regenerating...`);
      }
    } else {
      console.log(`[NEW POST] Generating initial audio for "${slug}"...`);
    }

    const cleanedText = cleanMarkdownText(body);

    if (!cleanedText) {
      console.log(`\x1b[33m[SKIP]\x1b[0m Empty body text for "${slug}"`);
      continue;
    }

    console.log(`[PROC] Synthesizing audio narration for "${slug}" (${cleanedText.length} characters)...`);
    await generateTTSAudio(cleanedText, targetAudioFile);
  }

  console.log("\x1b[32m%s\x1b[0m", "✅ Build-time audio generation step complete!\n");
}

main().catch((err) => {
  console.warn("\x1b[33m[WARN]\x1b[0m Error running generate-audio script:", err);
  process.exit(0);
});
