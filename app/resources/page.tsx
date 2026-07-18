import { constructMetadata } from "@/lib/seo";
import { ArrowRight, Link2 } from "lucide-react";

export const metadata = constructMetadata({
  title: "Engineering Resources & Guides | Teebot",
  description: "Access Teebot's engineering guidelines, whitepapers, open source codebases, and technical configuration docs.",
  path: "/resources",
});

export default function ResourcesPage() {
  const materials = [
    { title: "AI Automation Deployment Blueprint", desc: "A guide detailing security VPCs, prompts management, and cost scaling optimizations.", type: "Whitepaper" },
    { title: "Standard Enterprise Security Standards", desc: "Our database encryption schemas, HIPAA compliance filters, and CORS configs checklist.", type: "Technical Guide" }
  ];

  return (
    <section className="py-12 sm:py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-semibold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-6">
            Developer & Client Assets
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
            Engineering Resources
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
            Access our open engineering guidelines, research whitepapers, architecture checklists, and configuration logs.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {materials.map((mat, idx) => (
            <div
              key={idx}
              className="p-8 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 block mb-2">
                  {mat.type}
                </span>
                <h3 className="text-2xl font-serif font-bold text-zinc-900 dark:text-white mb-3">
                  {mat.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-8">
                  {mat.desc}
                </p>
              </div>
              <button
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors mt-auto self-start"
                disabled
              >
                <span>Request Asset Access</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* External links */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-12 grid md:grid-cols-2 gap-8">
          <div className="flex gap-4 items-start">
            <Link2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-zinc-900 dark:text-white mb-1">Teebot Labs</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-2 leading-relaxed">
                Check our experimental tools, open-source packages, and research projects.
              </p>
              <a href="https://labs.iteebot.com" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
                Visit labs.iteebot.com
              </a>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <Link2 className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-zinc-900 dark:text-white mb-1">GitHub Repositories</h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-2 leading-relaxed">
                Browse our open-source codebase contributions and developer SDK projects.
              </p>
              <a href="https://github.com/iTeebot" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline">
                View GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
