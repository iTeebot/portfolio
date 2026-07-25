"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Volume2, Play, Pause, Loader2, Download,
  CheckCircle2, AlertCircle, Square, FastForward,
  Sparkles, RefreshCw,
} from "lucide-react";
import { SentenceTiming } from "@/components/MarkdownRenderer";

interface BlogAudioPlayerProps {
  slug: string;
  initialAudioUrl?: string;
  content: string;
  sentenceMap: SentenceTiming[];
  autoSyncEnabled: boolean;
  onHighlightChange: (index: number | null) => void;
  seekToIndex: number | null;
  onResumeSync: () => void;
}

export default function BlogAudioPlayer({
  slug,
  initialAudioUrl,
  content,
  sentenceMap,
  autoSyncEnabled,
  onHighlightChange,
  seekToIndex,
  onResumeSync,
}: BlogAudioPlayerProps) {
  const [audioUrl, setAudioUrl] = useState<string | null>(initialAudioUrl || null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [statusMsg, setStatusMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [isWebSpeechActive, setIsWebSpeechActive] = useState(false);
  const [isWebSpeechPaused, setIsWebSpeechPaused] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  // Keep refs to latest values so stable event handlers always see fresh data
  const sentenceMapRef = useRef<SentenceTiming[]>(sentenceMap);
  const autoSyncRef = useRef(autoSyncEnabled);
  const onHighlightChangeRef = useRef(onHighlightChange);
  const onResumeSyncRef = useRef(onResumeSync);
  const lastEmittedRef = useRef<number | null>(null);

  // Keep refs in sync with props every render (no stale closures)
  useEffect(() => { sentenceMapRef.current = sentenceMap; }, [sentenceMap]);
  useEffect(() => { autoSyncRef.current = autoSyncEnabled; }, [autoSyncEnabled]);
  useEffect(() => { onHighlightChangeRef.current = onHighlightChange; }, [onHighlightChange]);
  useEffect(() => { onResumeSyncRef.current = onResumeSync; }, [onResumeSync]);

  // Check for existing MP3 on mount
  useEffect(() => {
    if (!audioUrl) {
      fetch(`/audio/blogs/${slug}.mp3`, { method: "HEAD" })
        .then(res => { if (res.ok) setAudioUrl(`/audio/blogs/${slug}.mp3`); })
        .catch(() => {});
    }
  }, [slug]);

  // Core sync function — always reads from refs so it's never stale
  const syncHighlight = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || audio.duration <= 0 || isNaN(audio.duration)) return;
    if (!autoSyncRef.current) return;

    const map = sentenceMapRef.current;
    if (!map.length) return;

    const progress = audio.currentTime / audio.duration;
    // Find the sentence whose range contains current progress
    let found = map.find(s => progress >= s.startRatio && progress < s.endRatio);
    // Fallback: clamp to last sentence if past end
    if (!found && progress >= 1) found = map[map.length - 1];
    // Fallback: clamp to first sentence if at start
    if (!found && progress <= 0) found = map[0];

    if (found !== undefined && found.index !== lastEmittedRef.current) {
      lastEmittedRef.current = found.index;
      onHighlightChangeRef.current(found.index);
    }
  }, []); // Intentionally empty: all deps are via refs

  // Re-run sync when sentenceMap becomes available (e.g. audio already playing on mount)
  useEffect(() => {
    if (sentenceMap.length > 0) {
      syncHighlight();
    }
  }, [sentenceMap, syncHighlight]);

  // Register stable audio event listeners once
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => {
      onResumeSyncRef.current();
      syncHighlight();
    };
    const handleEnded = () => {
      lastEmittedRef.current = null;
      onHighlightChangeRef.current(null);
    };
    const handleTimeUpdate = () => syncHighlight();
    const handleSeeked = () => syncHighlight();

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("seeked", handleSeeked);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("seeked", handleSeeked);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [syncHighlight]);

  // Seek audio when user clicks a sentence in transcript
  useEffect(() => {
    if (seekToIndex === null) return;
    const map = sentenceMapRef.current;
    if (!map.length) return;
    const target = map.find(s => s.index === seekToIndex);
    const audio = audioRef.current;
    if (target && audio && audio.duration > 0) {
      audio.currentTime = target.startRatio * audio.duration;
      audio.play().catch(() => {});
    }
  }, [seekToIndex]);

  const changeSpeed = (rate: number) => {
    setPlaybackRate(rate);
    if (audioRef.current) audioRef.current.playbackRate = rate;
  };

  // Clean markdown text for Web Speech
  const getCleanText = (md: string) =>
    md
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
      .replace(/\n+/g, " ")
      .trim();

  const handleGenerateAudio = async () => {
    setIsGenerating(true);
    setErrorMsg(null);
    setStatusMsg("Generating male voice MP3...");
    try {
      const res = await fetch("/api/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug }),
      });
      const data = await res.json();
      if (res.ok && data.audioUrl) {
        setAudioUrl(data.audioUrl);
        setStatusMsg(data.cached ? "Loaded saved MP3!" : "Male voice MP3 generated & saved!");
        setTimeout(() => setStatusMsg(null), 4000);
        setTimeout(() => {
          const audio = audioRef.current;
          if (audio) { audio.playbackRate = playbackRate; audio.play().catch(() => {}); }
        }, 300);
      } else if (data.useWebSpeech) {
        startWebSpeech();
      } else {
        throw new Error(data.error || "Failed to generate MP3");
      }
    } catch {
      startWebSpeech();
    } finally {
      setIsGenerating(false);
    }
  };

  // Select best available male English voice from browser voices
  const getMaleVoice = (): SpeechSynthesisVoice | null => {
    const voices = window.speechSynthesis.getVoices();
    const maleKeywords = ["david", "george", "guy", "alex", "daniel", "james", "mark", "ryan", "eric", "male"];
    // Prefer exact male voice matches
    const exactMatch = voices.find(v =>
      v.lang.startsWith("en") && maleKeywords.some(k => v.name.toLowerCase().includes(k))
    );
    if (exactMatch) return exactMatch;
    // Fallback: any English voice (prefer local/offline ones which tend to be higher quality)
    return voices.find(v => v.lang === "en-US" && v.localService) ||
      voices.find(v => v.lang.startsWith("en") && v.localService) ||
      voices.find(v => v.lang === "en-US") ||
      voices.find(v => v.lang.startsWith("en")) ||
      null;
  };

  const startWebSpeech = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setErrorMsg("Speech synthesis not supported in this browser.");
      return;
    }
    window.speechSynthesis.cancel();
    const text = getCleanText(content);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = playbackRate;
    utterance.pitch = 0.8; // Lower = more masculine

    const speak = () => {
      const voice = getMaleVoice();
      if (voice) utterance.voice = voice;

      utterance.onstart = () => {
        setIsWebSpeechActive(true);
        setIsWebSpeechPaused(false);
        onResumeSyncRef.current();
        setStatusMsg(`Playing via ${utterance.voice?.name || "browser"} voice synthesis...`);
      };

      utterance.onboundary = (event) => {
        if (!autoSyncRef.current) return;
        const map = sentenceMapRef.current;
        if (!map.length || !text.length) return;
        const progress = event.charIndex / text.length;
        const found = map.find(s => progress >= s.startRatio && progress < s.endRatio)
          || (progress >= 1 ? map[map.length - 1] : map[0]);
        if (found && found.index !== lastEmittedRef.current) {
          lastEmittedRef.current = found.index;
          onHighlightChangeRef.current(found.index);
        }
      };

      utterance.onend = () => {
        setIsWebSpeechActive(false);
        setIsWebSpeechPaused(false);
        setStatusMsg(null);
        lastEmittedRef.current = null;
        onHighlightChangeRef.current(null);
      };

      utterance.onerror = () => {
        setIsWebSpeechActive(false);
        setErrorMsg("Speech synthesis error.");
        onHighlightChangeRef.current(null);
      };

      window.speechSynthesis.speak(utterance);
    };

    // Voices may not be loaded yet (async in Chrome)
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) {
      speak();
    } else {
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.onvoiceschanged = null;
        speak();
      };
    }
  };

  const pauseWebSpeech = () => { window.speechSynthesis?.pause(); setIsWebSpeechPaused(true); };
  const resumeWebSpeech = () => { window.speechSynthesis?.resume(); setIsWebSpeechPaused(false); };
  const stopWebSpeech = () => {
    window.speechSynthesis?.cancel();
    setIsWebSpeechActive(false);
    setIsWebSpeechPaused(false);
    setStatusMsg(null);
    lastEmittedRef.current = null;
    onHighlightChangeRef.current(null);
  };

  return (
    <div className="bg-gradient-to-r from-indigo-950/20 via-purple-950/20 to-zinc-900/20 border border-indigo-200/80 dark:border-indigo-800/60 rounded-2xl p-5 mb-8 backdrop-blur-sm shadow-sm sticky top-20 z-20">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-600 dark:bg-indigo-500 text-white flex items-center justify-center shrink-0 shadow-md">
            <Volume2 className="w-5 h-5" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">Male Voice Narrator</h4>
              {audioUrl && (
                <span className="inline-flex items-center gap-1 text-[10px] font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-300 dark:border-emerald-800">
                  <CheckCircle2 className="w-3 h-3" /> MP3 Ready
                </span>
              )}
              {autoSyncEnabled ? (
                <span className="inline-flex items-center gap-1 text-[10px] font-medium bg-amber-100 text-amber-800 dark:bg-amber-950/70 dark:text-amber-300 px-2 py-0.5 rounded-full border border-amber-300 dark:border-amber-800 animate-pulse">
                  <Sparkles className="w-3 h-3" /> Sync Active
                </span>
              ) : (
                <button
                  onClick={onResumeSync}
                  className="inline-flex items-center gap-1 text-[10px] font-medium bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white px-2.5 py-0.5 rounded-full border border-zinc-300 dark:border-zinc-700 transition-colors cursor-pointer"
                >
                  <RefreshCw className="w-3 h-3" /> Auto-Sync Paused — Resume
                </button>
              )}
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              {autoSyncEnabled
                ? "Real-time sentence sync. Scroll or click transcript to take manual control."
                : "Manual mode. Click any sentence to highlight. Press Play or Resume to restore sync."}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-end">
          <div className="flex items-center bg-zinc-100 dark:bg-zinc-800/80 rounded-xl p-1 border border-zinc-200 dark:border-zinc-700">
            <FastForward className="w-3 h-3 text-zinc-500 ml-1.5 mr-1" />
            {[0.75, 1.0, 1.25, 1.5, 2.0].map(rate => (
              <button key={rate} onClick={() => changeSpeed(rate)}
                className={`text-[11px] font-medium px-2 py-0.5 rounded-lg transition-colors cursor-pointer ${
                  playbackRate === rate
                    ? "bg-indigo-600 text-white font-bold"
                    : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                }`}>
                {rate}x
              </button>
            ))}
          </div>

          {!audioUrl && !isWebSpeechActive && (
            <button onClick={handleGenerateAudio} disabled={isGenerating}
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
              {isGenerating
                ? <><Loader2 className="w-4 h-4 animate-spin" /> Generating...</>
                : <><Play className="w-4 h-4 fill-current" /> Generate & Play</>}
            </button>
          )}

          {audioUrl && (
            <a href={audioUrl} download={`${slug}.mp3`}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-700 dark:text-indigo-300 hover:text-indigo-900 dark:hover:text-white bg-indigo-50 dark:bg-indigo-900/40 hover:bg-indigo-100 dark:hover:bg-indigo-900/70 border border-indigo-200 dark:border-indigo-800 px-3 py-1.5 rounded-xl transition-colors">
              <Download className="w-3.5 h-3.5" /> MP3
            </a>
          )}
        </div>
      </div>

      {audioUrl && (
        <div className="mt-4 pt-3 border-t border-indigo-100 dark:border-indigo-900/40">
          <audio ref={audioRef} controls className="w-full h-10 rounded-lg accent-indigo-600" src={audioUrl} />
        </div>
      )}

      {isWebSpeechActive && (
        <div className="mt-4 pt-3 border-t border-indigo-100 dark:border-indigo-900/40 flex items-center justify-between gap-3">
          <span className="text-xs font-medium text-indigo-700 dark:text-indigo-300 flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500" />
            </span>
            Male Speech Synthesis Active
          </span>
          <div className="flex items-center gap-2">
            {isWebSpeechPaused
              ? <button onClick={resumeWebSpeech} className="inline-flex items-center gap-1 text-xs bg-indigo-600 text-white px-3 py-1.5 rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer"><Play className="w-3.5 h-3.5" /> Resume</button>
              : <button onClick={pauseWebSpeech} className="inline-flex items-center gap-1 text-xs bg-amber-600 text-white px-3 py-1.5 rounded-lg hover:bg-amber-700 transition-colors cursor-pointer"><Pause className="w-3.5 h-3.5" /> Pause</button>}
            <button onClick={stopWebSpeech} className="inline-flex items-center gap-1 text-xs bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-3 py-1.5 rounded-lg hover:bg-zinc-300 dark:hover:bg-zinc-700 transition-colors cursor-pointer"><Square className="w-3.5 h-3.5" /> Stop</button>
          </div>
        </div>
      )}

      {statusMsg && (
        <div className="mt-3 text-xs text-indigo-700 dark:text-indigo-300 flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-emerald-500" /> {statusMsg}
        </div>
      )}
      {errorMsg && (
        <div className="mt-3 text-xs text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
          <AlertCircle className="w-3.5 h-3.5 shrink-0" /> {errorMsg}
        </div>
      )}
    </div>
  );
}
