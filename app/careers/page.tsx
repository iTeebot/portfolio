import { constructMetadata } from "@/lib/seo";
import { Briefcase, ArrowRight, Heart, Smile, Sparkles } from "lucide-react";

export const metadata = constructMetadata({
  title: "Careers & Open Positions | Teebot",
  description: "Join Teebot's software engineering and AI automation team. Explore remote career opportunities and open positions.",
  path: "/careers",
});

export default function CareersPage() {
  const roles = [
    { title: "Full Stack Engineer (Next.js & Node)", type: "Full-Time", location: "Remote", dept: "Studio" },
    { title: "AI Integration & Prompt Engineer", type: "Full-Time / Contract", location: "Remote", dept: "Labs" },
    { title: "IoT Systems Architect", type: "Contract", location: "Hybrid (Karachi)", dept: "Systems" }
  ];

  return (
    <section className="py-12 sm:py-20 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-block bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-semibold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-6">
            Join Our Team
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
            Careers at Teebot
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
            We are always looking for passionate engineers, designers, and systems architects to help us build state-of-the-art software systems.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6">
            <Heart className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
            <h3 className="font-bold text-zinc-900 dark:text-white mb-2">Remote-First Culture</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed">
              Work from anywhere in the world. We focus on results, deliverables, and clean execution, not clock hours.
            </p>
          </div>
          <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6">
            <Smile className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
            <h3 className="font-bold text-zinc-900 dark:text-white mb-2">Flexible Hours</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed">
              Arrange your schedules to fit your lifestyle, family needs, and peak focus hours.
            </p>
          </div>
          <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6">
            <Sparkles className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
            <h3 className="font-bold text-zinc-900 dark:text-white mb-2">Modern Tooling</h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed">
              Work with the latest technologies (React 19, Tailwind v4, AI SDKs, Rust) on challenging client architectures.
            </p>
          </div>
        </div>

        {/* Open Positions List */}
        <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 mb-16">
          <h2 className="text-2xl font-serif font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
            Open Positions
          </h2>

          <div className="space-y-4">
            {roles.map((role, idx) => (
              <div
                key={idx}
                className="p-5 bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-850 rounded-2xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-zinc-950 dark:hover:border-white transition-colors"
              >
                <div>
                  <h3 className="font-bold text-zinc-900 dark:text-white">{role.title}</h3>
                  <div className="flex gap-4 text-xs text-zinc-500 mt-1">
                    <span>Dept: {role.dept}</span>
                    <span>•</span>
                    <span>{role.location}</span>
                  </div>
                </div>
                <span className="text-xs bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-semibold px-3 py-1 rounded-md">
                  {role.type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* How to Apply */}
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">How to Apply</h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
            If you are interested in joining Teebot, send your resume, portfolio link, and a brief introduction about your engineering history to:
          </p>
          <a href="mailto:hello@iteebot.com" className="inline-flex items-center gap-2 font-bold text-indigo-600 dark:text-indigo-400 hover:underline">
            <span>hello@iteebot.com</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
