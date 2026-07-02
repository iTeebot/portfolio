import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code2, Cpu, ExternalLink, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Open Source Packages | Teebot Labs",
  description: "Explore high-performance, secure, and idiomatic open-source packages and libraries developed by Teebot Labs.",
  keywords: ["open source", "rust library", "npm package", "tinyxml2-rs", "npm-ai-hooks", "software development"],
};

interface PackageItem {
  id: string;
  title: string;
  version: string;
  type: string;
  language: string;
  description: string;
  tags: string[];
  logo: string;
  localLink: boolean;
  link: string;
  github: string;
}

const packagesList: PackageItem[] = [
  {
    id: "tinyxml2-rs",
    title: "tinyxml2-rs",
    version: "v0.1.13",
    type: "Rust Library",
    language: "Rust",
    description: "A native Rust implementation of the TinyXML2 API. Provides memory-safe XML parsing and DOM generation with a complete C FFI layer for seamless C/C++ integration.",
    tags: ["Rust", "XML DOM", "FFI", "Memory-Safe", "Parser"],
    logo: "/tinyxml2-rs.png",
    localLink: true,
    link: "/packages/tinyxml2-rs",
    github: "https://github.com/iTeebot/tinyxml2-rs",
  },
  {
    id: "npm-ai-hooks",
    title: "npm-ai-hooks",
    version: "v1.2.0",
    type: "NPM Package",
    language: "TypeScript",
    description: "A lightweight, robust React hooks library designed for seamless integration of generative AI models. Stream completions, handle conversations, and integrate voice interfaces.",
    tags: ["React", "TypeScript", "AI Hooks", "SSE Streaming", "Next.js"],
    logo: "/npm-ai-hooks.png",
    localLink: false,
    link: "https://github.com/iTeebot/npm-ai-hooks",
    github: "https://github.com/iTeebot/npm-ai-hooks",
  }
];

export default function PackagesIndexPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Header */}
      <div className="max-w-3xl mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-zinc-900 dark:text-white mb-6 tracking-tight">
          Labs Packages
        </h1>
        <div className="w-16 sm:w-20 h-1 bg-zinc-900 dark:bg-white mb-6 sm:mb-8" />
        <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
          High-performance, secure, and idiomatic open-source tools and libraries designed to push technological boundaries.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {packagesList.map((pkg) => (
          <div
            key={pkg.id}
            className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 hover:border-zinc-900 dark:hover:border-white transition-all group"
          >
            <div>
              {/* Package Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 p-2 flex items-center justify-center">
                    {pkg.logo ? (
                      <Image
                        src={pkg.logo}
                        alt={pkg.title}
                        width={40}
                        height={40}
                        className="object-contain"
                        unoptimized
                      />
                    ) : (
                      pkg.language === "Rust" ? <Cpu className="w-6 h-6 text-zinc-700 dark:text-zinc-300" /> : <Code2 className="w-6 h-6 text-zinc-700 dark:text-zinc-300" />
                    )}
                  </div>
                  <div>
                    <h2 className="font-serif font-bold text-2xl text-zinc-900 dark:text-white group-hover:opacity-85 transition-opacity">
                      {pkg.title}
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider">{pkg.type}</span>
                      <span className="text-[10px] font-mono bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-1.5 py-0.5 rounded">
                        {pkg.version}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
                {pkg.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {pkg.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-0.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-zinc-600 dark:text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center justify-between gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-850">
              <a
                href={pkg.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors inline-flex items-center gap-1.5"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>

              {pkg.localLink ? (
                <Link
                  href={pkg.link}
                  className="text-sm font-semibold text-zinc-900 dark:text-white hover:opacity-80 transition-opacity inline-flex items-center gap-1 group"
                >
                  View Details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              ) : (
                <a
                  href={pkg.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-zinc-900 dark:text-white hover:opacity-80 transition-opacity inline-flex items-center gap-1 group"
                >
                  View Documentation
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
