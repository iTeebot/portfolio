import React from "react";
import { constructMetadata } from "@/lib/seo";
import { ShieldCheck, Target, Heart, Award, Github, Linkedin } from "lucide-react";
import JsonLd, { getLocalBusinessSchema } from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "About Teebot | Technology Consultancy & System Development",
  description: "Learn about Teebot's engineering history, values, software quality standards, and our security and compliance practices.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* Schema Injection */}
      <JsonLd data={getLocalBusinessSchema()} />

      <section className="py-12 sm:py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <span className="inline-block bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-semibold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-6">
              Who We Are
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
              About Teebot
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
              Teebot is a premium technology consultancy and software development organization. We build intelligent, scalable, future-ready digital systems for clients worldwide, matching strict architectural guidelines and modern engineering standards.
            </p>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8">
              <Target className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mb-6" />
              <h2 className="text-2xl font-serif font-bold text-zinc-900 dark:text-white mb-4">Our Mission</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                To simplify complex corporate operations by engineering automated workflows, custom microservices, and agentic AI systems that eliminate manual overhead and reduce operational errors.
              </p>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8">
              <Award className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mb-6" />
              <h2 className="text-2xl font-serif font-bold text-zinc-900 dark:text-white mb-4">Our Engineering Standards</h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                We believe in clean code, robust static type-checking, thorough load testing, and security-first setups. Every database connection, API call, and server deployment is written to scale safely.
              </p>
            </div>
          </div>

          {/* Core Values & Security */}
          <div className="border-t border-zinc-200 dark:border-zinc-800 pt-16 mb-20">
            <h2 className="text-3xl font-serif font-bold text-zinc-900 dark:text-white mb-10 text-center">
              Trust & Compliance Guidelines
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <ShieldCheck className="w-8 h-8 text-emerald-600 dark:text-emerald-500 mx-auto mb-4" />
                <h3 className="font-bold text-zinc-900 dark:text-white mb-2">SOC2 & GDPR Compliance</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  We deploy private VPC server endpoints, apply strict database encryption (AES-256), and ensure clean data isolation schemas.
                </p>
              </div>
              <div className="text-center p-6">
                <Heart className="w-8 h-8 text-red-600 dark:text-red-500 mx-auto mb-4" />
                <h3 className="font-bold text-zinc-900 dark:text-white mb-2">Expertise and Accountability</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  We write 100% bespoke software. You retain full intellectual property (IP) and git history ownership from day one.
                </p>
              </div>
              <div className="text-center p-6">
                <Award className="w-8 h-8 text-amber-600 dark:text-amber-500 mx-auto mb-4" />
                <h3 className="font-bold text-zinc-900 dark:text-white mb-2">Quality Assurance (QA)</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Every product launch undergoes stress loading, unit testing, and dynamic security audits before traffic routing.
                </p>
              </div>
            </div>
          </div>

          {/* Team Profile (E-E-A-T signals) */}
          <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 sm:p-12">
            <div className="grid md:grid-cols-3 gap-12 items-center">
              <div className="md:col-span-1 text-center sm:text-left">
                <div className="relative w-32 h-32 bg-zinc-200 dark:bg-zinc-800 rounded-full mx-auto sm:mx-0 overflow-hidden border-2 border-zinc-300 dark:border-zinc-700 mb-4">
                  <div className="absolute inset-0 flex items-center justify-center font-bold text-3xl text-zinc-600 dark:text-zinc-400">
                    AN
                  </div>
                </div>
                <h3 className="text-xl font-serif font-bold text-zinc-900 dark:text-white">Ateeb Noone</h3>
                <p className="text-indigo-600 dark:text-indigo-400 text-sm mb-4">Founder & Lead Architect</p>
                <div className="flex justify-center sm:justify-start gap-3">
                  <a
                    href="https://github.com/ateebnoone"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile of Ateeb Noone"
                    className="p-2 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-zinc-900 rounded-md transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ateebnoone"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile of Ateeb Noone"
                    className="p-2 bg-zinc-200 dark:bg-zinc-800 hover:bg-zinc-900 dark:hover:bg-white hover:text-white dark:hover:text-zinc-900 rounded-md transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="md:col-span-2">
                <h4 className="text-2xl font-serif font-bold text-zinc-900 dark:text-white mb-4">Expertise Profile</h4>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm mb-4">
                  Ateeb is a veteran full-stack developer and AI automation consultant. He has engineered complex cloud architectures, cryptographic blockchain secure layers, and LMS platforms. At Teebot, he drives technical direction, ensuring every project is delivered on schedule and with high execution precision.
                </p>
                <p className="text-zinc-500 text-xs italic">
                  &ldquo;We build software that solves business bottlenecks, not generic apps. Our work is clean, performant, and reliable.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
