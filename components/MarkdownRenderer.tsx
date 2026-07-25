"use client";

import React, { useLayoutEffect, useEffect, useRef } from "react";

export interface SentenceTiming {
  index: number;
  startRatio: number;
  endRatio: number;
}

interface MarkdownRendererProps {
  content: string;
  // The sentence index to highlight (always visible regardless of sync state)
  highlightIndex?: number | null;
  // Whether auto-scrolling is active (highlighting still shows even when false)
  autoScrollEnabled?: boolean;
  onSentenceClick?: (index: number) => void;
  onSentenceMapChange?: (map: SentenceTiming[]) => void;
  onManualScroll?: () => void;
}

export default function MarkdownRenderer({
  content,
  highlightIndex,
  autoScrollEnabled = true,
  onSentenceClick,
  onSentenceMapChange,
  onManualScroll,
}: MarkdownRendererProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastAutoScrolledRef = useRef<number | null>(null);
  const isProgrammaticScrollRef = useRef(false);

  // Detect user manual wheel/touch scrolling to pause auto-scroll
  useEffect(() => {
    const handleUserScroll = () => {
      if (isProgrammaticScrollRef.current) return;
      if (onManualScroll) onManualScroll();
    };
    window.addEventListener("wheel", handleUserScroll, { passive: true });
    window.addEventListener("touchmove", handleUserScroll, { passive: true });
    return () => {
      window.removeEventListener("wheel", handleUserScroll);
      window.removeEventListener("touchmove", handleUserScroll);
    };
  }, [onManualScroll]);

  // Auto-scroll: runs ONLY when autoScrollEnabled is true and highlightIndex changes
  useLayoutEffect(() => {
    if (!autoScrollEnabled) return;
    if (
      highlightIndex !== null &&
      highlightIndex !== undefined &&
      highlightIndex >= 0 &&
      highlightIndex !== lastAutoScrolledRef.current
    ) {
      lastAutoScrolledRef.current = highlightIndex;
      const el = document.getElementById(`blog-sentence-${highlightIndex}`);
      if (el) {
        isProgrammaticScrollRef.current = true;
        el.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        setTimeout(() => { isProgrammaticScrollRef.current = false; }, 900);
      }
    }
  }, [highlightIndex, autoScrollEnabled]);

  // Build the sentence timing map during render (so it is always up-to-date)
  let globalSentenceCounter = 0;
  let cumulativeCharCount = 0;
  const sentenceTimings: SentenceTiming[] = [];

  const totalCleanLength = content
    .replace(/```[\s\S]*?```/g, "")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/\n+/g, " ")
    .trim().length;

  const splitSentences = (text: string): string[] => {
    if (!text.trim()) return [];
    const matched = text.match(/[^.!?]+[.!?]+(?=\s|$)|[^.!?]+$/g);
    return matched && matched.length > 0 ? matched : [text];
  };

  const renderSentences = (text: string): React.ReactNode[] => {
    return splitSentences(text).map((sent) => {
      const idx = globalSentenceCounter++;
      const startRatio = totalCleanLength > 0 ? cumulativeCharCount / totalCleanLength : 0;
      cumulativeCharCount += sent.length;
      const endRatio = totalCleanLength > 0 ? cumulativeCharCount / totalCleanLength : 1;
      sentenceTimings.push({ index: idx, startRatio, endRatio });

      const isHighlighted = highlightIndex === idx;

      return (
        <span
          key={idx}
          id={`blog-sentence-${idx}`}
          onClick={() => onSentenceClick && onSentenceClick(idx)}
          className={`transition-colors duration-200 ease-out inline rounded px-1 py-0.5 cursor-pointer select-text ${
            isHighlighted
              ? "bg-amber-300/90 dark:bg-amber-500/40 text-amber-950 dark:text-amber-100 font-semibold shadow-sm ring-2 ring-amber-400/60 dark:ring-amber-400/40 border-b-2 border-amber-500 dark:border-amber-400"
              : "hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
          }`}
          title="Click to seek to this sentence"
        >
          {sent}{" "}
        </span>
      );
    });
  };

  const parseInline = (text: string): React.ReactNode => {
    // Handle hyperlinks
    const linkMatches: RegExpExecArray[] = [];
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let m: RegExpExecArray | null;
    while ((m = linkRegex.exec(text)) !== null) linkMatches.push(m);

    let parts: React.ReactNode[] = [];
    if (linkMatches.length > 0) {
      let pos = 0;
      linkMatches.forEach((lm, i) => {
        if (lm.index > pos) parts.push(text.substring(pos, lm.index));
        parts.push(
          <a key={`lnk-${i}`} href={lm[2]} target="_blank" rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold">
            {lm[1]}
          </a>
        );
        pos = lm.index + lm[0].length;
      });
      if (pos < text.length) parts.push(text.substring(pos));
    } else {
      parts = [text];
    }

    return parts.map((part, pIdx) => {
      if (typeof part !== "string") return part;
      const boldParts = part.split(/\*\*([\s\S]*?)\*\*/g);
      if (boldParts.length > 1) {
        return (
          <React.Fragment key={pIdx}>
            {boldParts.map((bp, bIdx) =>
              bIdx % 2 === 1
                ? <strong key={bIdx} className="font-bold text-zinc-950 dark:text-white">{renderSentences(bp)}</strong>
                : renderSentences(bp)
            )}
          </React.Fragment>
        );
      }
      return renderSentences(part);
    });
  };

  // Build elements from markdown lines
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let codeBlock: string[] = [];
  let insideCode = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim().startsWith("```")) {
      if (insideCode) {
        elements.push(
          <pre key={i} className="p-4 bg-zinc-900 dark:bg-black text-zinc-100 rounded-xl overflow-x-auto text-xs font-mono my-4 border border-zinc-800">
            <code>{codeBlock.join("\n")}</code>
          </pre>
        );
        codeBlock = []; insideCode = false;
      } else { insideCode = true; }
      continue;
    }
    if (insideCode) { codeBlock.push(line); continue; }

    if (line.startsWith("# ")) {
      elements.push(<h2 key={i} className="text-3xl sm:text-4xl font-serif font-bold text-zinc-900 dark:text-white mt-8 mb-4 leading-tight">{parseInline(line.substring(2))}</h2>);
    } else if (line.startsWith("## ")) {
      elements.push(<h3 key={i} className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 dark:text-white mt-6 mb-3">{parseInline(line.substring(3))}</h3>);
    } else if (line.startsWith("### ")) {
      elements.push(<h4 key={i} className="text-xl sm:text-2xl font-serif font-bold text-zinc-900 dark:text-white mt-5 mb-2">{parseInline(line.substring(4))}</h4>);
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      const items: React.ReactNode[] = [];
      let j = i;
      while (j < lines.length && (lines[j].startsWith("- ") || lines[j].startsWith("* "))) {
        items.push(<li key={j} className="text-zinc-700 dark:text-zinc-300 text-base mb-1">{parseInline(lines[j].substring(2))}</li>);
        j++;
      }
      elements.push(<ul key={`ul-${i}`} className="ml-6 list-disc space-y-1 my-3">{items}</ul>);
      i = j - 1;
    } else if (/^\d+\.\s/.test(line)) {
      const items: React.ReactNode[] = [];
      let j = i;
      while (j < lines.length && /^\d+\.\s/.test(lines[j])) {
        items.push(<li key={j} className="text-zinc-700 dark:text-zinc-300 text-base mb-1">{parseInline(lines[j].replace(/^\d+\.\s/, ""))}</li>);
        j++;
      }
      elements.push(<ol key={`ol-${i}`} className="ml-6 list-decimal space-y-1 my-3">{items}</ol>);
      i = j - 1;
    } else if (line.trim() === "") {
      continue;
    } else {
      elements.push(<p key={i} className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">{parseInline(line)}</p>);
    }
  }

  // Notify parent of sentence timing map after render
  useEffect(() => {
    if (onSentenceMapChange && sentenceTimings.length > 0) {
      onSentenceMapChange([...sentenceTimings]);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  return (
    <div ref={containerRef} className="prose dark:prose-invert max-w-none">
      {elements}
    </div>
  );
}
