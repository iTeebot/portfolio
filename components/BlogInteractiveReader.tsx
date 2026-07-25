"use client";

import React, { useState, useCallback } from "react";
import BlogAudioPlayer from "@/components/BlogAudioPlayer";
import MarkdownRenderer, { SentenceTiming } from "@/components/MarkdownRenderer";

interface BlogInteractiveReaderProps {
  slug: string;
  initialAudioUrl?: string;
  content: string;
}

export default function BlogInteractiveReader({
  slug,
  initialAudioUrl,
  content,
}: BlogInteractiveReaderProps) {
  // The sentence that is visually highlighted (always reflects manual click OR audio sync)
  const [highlightIndex, setHighlightIndex] = useState<number | null>(null);
  // Whether the audio player is allowed to drive auto-scroll
  const [autoSyncEnabled, setAutoSyncEnabled] = useState(true);
  // Sentence timing map built by the renderer on mount
  const [sentenceMap, setSentenceMap] = useState<SentenceTiming[]>([]);
  // Index to seek audio to (set by transcript click)
  const [seekToIndex, setSeekToIndex] = useState<number | null>(null);

  // Called by audio player on every timeupdate — only updates highlight, does NOT change scroll
  const handleHighlightChange = useCallback((index: number | null) => {
    setHighlightIndex(index);
  }, []);

  // Called when user clicks a sentence in transcript
  const handleSentenceClick = useCallback((index: number) => {
    // Highlight the clicked sentence immediately (manual highlight always works)
    setHighlightIndex(index);
    // Seek audio to that sentence
    setSeekToIndex(index);
    // Disable auto-scrolling so transcript stays static after the click
    setAutoSyncEnabled(false);
  }, []);

  // Called when user manually scrolls the page
  const handleManualScroll = useCallback(() => {
    setAutoSyncEnabled(false);
  }, []);

  // Re-enable auto-sync (called when play button is pressed or Resume button is clicked)
  const handleResumeSync = useCallback(() => {
    setAutoSyncEnabled(true);
  }, []);

  return (
    <div>
      <BlogAudioPlayer
        slug={slug}
        initialAudioUrl={initialAudioUrl}
        content={content}
        sentenceMap={sentenceMap}
        autoSyncEnabled={autoSyncEnabled}
        onHighlightChange={handleHighlightChange}
        seekToIndex={seekToIndex}
        onResumeSync={handleResumeSync}
      />
      <MarkdownRenderer
        content={content}
        highlightIndex={highlightIndex}
        autoScrollEnabled={autoSyncEnabled}
        onSentenceClick={handleSentenceClick}
        onSentenceMapChange={setSentenceMap}
        onManualScroll={handleManualScroll}
      />
    </div>
  );
}
