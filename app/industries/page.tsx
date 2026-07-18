import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { constructMetadata } from "@/lib/seo";
import { industries } from "@/lib/data/industries";
import JsonLd from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "Industry Verticals & Software Experience | Teebot",
  description: "Learn how we support target industries (Healthcare, Finance, Real Estate, Construction, Logistics) with custom software development and AI automations.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Teebot Target Industry Verticals",
          "description": "Information on custom software solutions built for healthcare, fintech, property, logistics, and legal industries.",
          "url": "https://www.iteebot.com/industries"
        }}
      />

      <section className="py-12 sm:py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
              Industries We Serve
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We apply customized AI automation workflows and scalable web/mobile software to address sector-specific operational bottlenecks and scale efficiency.
            </p>
          </div>

          {/* Grid list */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind) => (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group relative block p-8 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-white transition-all duration-300 rounded-3xl hover:shadow-xl hover:shadow-indigo-500/5 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-serif font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-8">
                    {ind.metaDescription}
                  </p>
                </div>

                <div className="flex items-center text-sm font-semibold text-zinc-900 dark:text-white gap-1 group-hover:gap-2 transition-all mt-auto">
                  <span>Explore Industry Solutions</span>
                  <ArrowRight className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
