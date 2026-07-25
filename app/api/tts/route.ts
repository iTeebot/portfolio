import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { getBlogPost } from "@/lib/blog";

/**
 * Strips markdown symbols for TTS narration
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

/**
 * Split text into readable sentence chunks for TTS synthesis
 */
function splitIntoSentenceChunks(text: string, maxLength: number = 180): string[] {
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

export async function POST(req: NextRequest) {
  try {
    const { slug } = await req.json();

    if (!slug || typeof slug !== "string" || !/^[a-zA-Z0-9-_]+$/.test(slug)) {
      return NextResponse.json({ error: "Invalid slug provided" }, { status: 400 });
    }

    const publicAudioDir = path.join(process.cwd(), "public", "audio", "blogs");
    const audioFileName = `${slug}.mp3`;
    const targetFilePath = path.join(publicAudioDir, audioFileName);
    const publicAudioUrl = `/audio/blogs/${audioFileName}`;

    // 1. If valid audio file (>1KB) already exists on server disk, return cached URL immediately
    if (fs.existsSync(targetFilePath)) {
      const stat = fs.statSync(targetFilePath);
      if (stat.size > 1000) {
        return NextResponse.json({
          audioUrl: publicAudioUrl,
          cached: true,
          message: "Loaded existing saved MP3 file from server",
        });
      }
    }

    // 2. Ensure destination directory exists
    if (!fs.existsSync(publicAudioDir)) {
      fs.mkdirSync(publicAudioDir, { recursive: true });
    }

    // 3. Load blog post and prepare text
    const post = getBlogPost(slug);
    if (!post) {
      return NextResponse.json({ error: "Blog post not found" }, { status: 404 });
    }

    const cleanedText = cleanMarkdownText(post.content);
    if (!cleanedText) {
      return NextResponse.json({ error: "Blog post contains no readable content" }, { status: 400 });
    }

    // 4. Use Windows SAPI (Microsoft David Desktop — male voice) to generate audio
    try {
      const tmpWav = targetFilePath.replace(/\.(mp3|wav)$/, "_tmp.wav");
      const escapedText = cleanedText.replace(/'/g, "''");
      const psCmd = [
        `Add-Type -AssemblyName System.Speech`,
        `$synth = New-Object System.Speech.Synthesis.SpeechSynthesizer`,
        `$maleVoice = ($synth.GetInstalledVoices() | Where-Object { $_.VoiceInfo.Gender -eq 'Male' } | Select-Object -First 1)`,
        `if ($maleVoice) { $synth.SelectVoice($maleVoice.VoiceInfo.Name) }`,
        `$synth.SetOutputToWaveFile('${tmpWav.replace(/\\/g, "\\\\")}')`,
        `$synth.Rate = 0; $synth.Volume = 100`,
        `$synth.Speak('${escapedText}')`,
        `$synth.Dispose()`,
        `Write-Output "OK:$($maleVoice.VoiceInfo.Name)"`,
      ].join("; ");

      const result = execSync(`powershell -ExecutionPolicy Bypass -Command "${psCmd}"`, {
        timeout: 120000,
        stdio: "pipe",
      }).toString().trim();

      if (fs.existsSync(tmpWav) && fs.statSync(tmpWav).size > 1000) {
        try {
          execSync(`ffmpeg -y -i "${tmpWav}" -codec:a libmp3lame -qscale:a 2 "${targetFilePath}"`, { timeout: 60000, stdio: "pipe" });
          fs.unlinkSync(tmpWav);
        } catch {
          fs.renameSync(tmpWav, targetFilePath);
        }

        const voiceName = result.replace("OK:", "").trim();
        return NextResponse.json({
          audioUrl: publicAudioUrl,
          cached: false,
          message: `Generated male voice audio via Windows SAPI (${voiceName})`,
        });
      }
    } catch (sapiErr: any) {
      console.warn("Windows SAPI unavailable:", sapiErr.message?.split("\n")[0]);
    }

    return NextResponse.json({
      message: "Fallback to client browser Speech Synthesis.",
      useWebSpeech: true,
      textToSpeak: cleanedText,
    });
  } catch (error: any) {
    console.error("TTS Route Error:", error);
    return NextResponse.json({ error: error.message || "Internal server error" }, { status: 500 });
  }
}
