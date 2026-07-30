import React from "react";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Terms of Service | Teebot",
  description: "Read Teebot's terms of service and standard development project parameters.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <section className="py-12 sm:py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-zinc-900 dark:text-white mb-8">
          Terms of Service
        </h1>
        <p className="text-zinc-500 text-sm mb-8">Last Updated: October 2025</p>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing this website, you agree to be bound by these Terms of Service and agree that you are responsible for compliance with any applicable local laws.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">2. Intellectual Property (IP)</h2>
            <p>
              All software architectures, code snippets, graphics assets, and project data published on this website are owned by Teebot, except where client names, logo placeholders, or open-source licenses are specified.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">3. Liability Limits</h2>
            <p>
              Under no circumstances shall Teebot be held liable for any data loss, server downtime, or project delays arising from your use of resources or integration suggestions published here.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">4. Revisions & Errata</h2>
            <p>
              The materials appearing on Teebot&apos;s website could include technical, typographical, or photographic errors. We do not warrant that any of the materials on this website are accurate, complete, or current.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
