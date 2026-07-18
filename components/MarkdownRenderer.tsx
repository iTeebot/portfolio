import React from "react";

export default function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let codeBlock: string[] = [];
  let isInsideCode = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.trim().startsWith("```")) {
      if (isInsideCode) {
        elements.push(
          <pre key={i} className="p-4 bg-zinc-900 dark:bg-black text-zinc-100 dark:text-zinc-200 rounded-xl overflow-x-auto text-xs font-mono my-6 border border-zinc-800">
            <code>{codeBlock.join("\n")}</code>
          </pre>
        );
        codeBlock = [];
        isInsideCode = false;
      } else {
        isInsideCode = true;
      }
      continue;
    }

    if (isInsideCode) {
      codeBlock.push(line);
      continue;
    }

    if (line.startsWith("# ")) {
      elements.push(
        <h1 key={i} className="text-3xl sm:text-4xl font-serif font-bold text-zinc-900 dark:text-white mt-10 mb-4 leading-tight">
          {parseInline(line.substring(2))}
        </h1>
      );
    } else if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 dark:text-white mt-8 mb-4">
          {parseInline(line.substring(3))}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="text-xl sm:text-2xl font-serif font-bold text-zinc-900 dark:text-white mt-6 mb-3">
          {parseInline(line.substring(4))}
        </h3>
      );
    } else if (line.startsWith("- ") || line.startsWith("* ")) {
      elements.push(
        <li key={i} className="ml-6 list-disc text-zinc-700 dark:text-zinc-300 text-base mb-2">
          {parseInline(line.substring(2))}
        </li>
      );
    } else if (/^\d+\.\s/.test(line)) {
      const contentOnly = line.replace(/^\d+\.\s/, "");
      elements.push(
        <li key={i} className="ml-6 list-decimal text-zinc-700 dark:text-zinc-300 text-base mb-2">
          {parseInline(contentOnly)}
        </li>
      );
    } else if (line.trim() === "") {
      elements.push(<div key={i} className="h-4" />);
    } else {
      elements.push(
        <p key={i} className="text-base text-zinc-700 dark:text-zinc-300 leading-relaxed mb-4">
          {parseInline(line)}
        </p>
      );
    }
  }

  return <div className="prose dark:prose-invert max-w-none">{elements}</div>;
}

function parseInline(text: string): React.ReactNode {
  let parts: React.ReactNode[] = [text];

  // Match links: [link text](url)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match;
  const matches = [];
  while ((match = linkRegex.exec(text)) !== null) {
    matches.push(match);
  }

  if (matches.length > 0) {
    const newParts: React.ReactNode[] = [];
    let currentPos = 0;
    matches.forEach((m, idx) => {
      const matchIndex = m.index;
      const linkText = m[1];
      const linkUrl = m[2];

      if (matchIndex > currentPos) {
        newParts.push(text.substring(currentPos, matchIndex));
      }

      newParts.push(
        <a key={idx} href={linkUrl} className="text-indigo-600 dark:text-indigo-400 hover:underline font-semibold" target="_blank" rel="noopener noreferrer">
          {linkText}
        </a>
      );
      currentPos = matchIndex + m[0].length;
    });
    if (currentPos < text.length) {
      newParts.push(text.substring(currentPos));
    }
    parts = newParts;
  }

  // Handle bold inline (**text**) on each string part
  return parts.map((part, pIdx) => {
    if (typeof part !== "string") return part;

    const boldParts = part.split(/\*\*([\s\S]*?)\*\*/g);
    if (boldParts.length > 1) {
      return (
        <React.Fragment key={pIdx}>
          {boldParts.map((bPart, bIdx) =>
            bIdx % 2 === 1 ? (
              <strong key={bIdx} className="font-bold text-zinc-950 dark:text-white">
                {bPart}
              </strong>
            ) : (
              bPart
            )
          )}
        </React.Fragment>
      );
    }
    return part;
  });
}
