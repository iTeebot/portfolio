import React from "react";
import { constructMetadata } from "@/lib/seo";

export const metadata = constructMetadata({
  title: "Privacy Policy | Teebot",
  description: "Read Teebot's privacy policy. Learn how we handle and protect user data and maintain compliance.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="py-12 sm:py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-zinc-900 dark:text-white mb-8">
          Privacy Policy
        </h1>
        <p className="text-zinc-500 text-sm mb-8">Last Updated: October 2025</p>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">1. Information Collection</h2>
            <p>
              We collect information that you voluntarily provide when you submit contact inquiries, subscribe to our newsletters, or schedule consultations. This may include your name, email address, company profile, and project requirements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">2. Data Security & Storage</h2>
            <p>
              We implement industry-standard encryption protocols (AES-256) to protect personal identifiers and project briefs. Our server networks are hosted on secure, restricted VPC subnets. We do not sell or lease user information to third-party advertisers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">3. Cookies & Analytics</h2>
            <p className="mb-4">
              We utilize analytics identifiers (such as Google Analytics) to monitor website traffic, CTR, and core loading speeds, allowing us to continuously improve our layout accessibility.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">4. Contact Information</h2>
            <p>
              If you have any questions regarding our privacy rules or wish to request data deletions, please contact us at:{" "}
              <a href="mailto:hello@iteebot.com" className="text-indigo-650 dark:text-indigo-400 font-semibold hover:underline">
                hello@iteebot.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
