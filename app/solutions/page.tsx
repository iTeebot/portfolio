import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { constructMetadata } from "@/lib/seo";
import { solutions } from "@/lib/data/solutions";
import JsonLd from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "Bespoke Enterprise Software Solutions | Teebot",
  description: "Browse our custom software solution architectures, including CRM platforms, dynamic booking systems, inventory tracking, and RAG chatbots.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Teebot Software Solutions Catalog",
          "description": "Information on pre-architected software modules like CRM, ERP, Booking engines, and custom APIs.",
          "url": "https://www.iteebot.com/solutions"
        }}
      />

      <section className="py-12 sm:py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
              Pre-Architected Solutions
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We maintain ready-to-customize architecture patterns for key business operations. Launch customized systems in weeks, not months.
            </p>
          </div>

          {/* Grid lists */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((sol) => (
              <Link
                key={sol.slug}
                href={`/solutions/${sol.slug}`}
                className="group relative block p-8 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-white transition-all duration-300 rounded-3xl hover:shadow-xl hover:shadow-indigo-500/5 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-serif font-bold text-zinc-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-8">
                    {sol.metaDescription}
                  </p>
                </div>

                <div className="flex items-center text-sm font-semibold text-zinc-900 dark:text-white gap-1 group-hover:gap-2 transition-all mt-auto">
                  <span>View Solution Architecture</span>
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
