import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { ArrowRight, Trophy } from "lucide-react";
import { constructMetadata } from "@/lib/seo";
import { caseStudies } from "@/lib/data/caseStudies";
import JsonLd from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "Case Studies & ROI Outcomes | Teebot",
  description: "Read about our client success metrics, integration processes, and ROI details across multiple custom software projects.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Teebot Client Case Studies",
          "description": "A database of business results and technical case reports demonstrating custom software execution success.",
          "url": "https://www.iteebot.com/case-studies"
        }}
      />

      <section className="py-12 sm:py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
              Case Studies
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Real-world software projects showing detailed development cycles, integration steps, and client business outcomes.
            </p>
          </div>

          {/* Grid lists */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="group bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden hover:border-zinc-900 dark:hover:border-white transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative h-64 w-full bg-zinc-200 dark:bg-zinc-800">
                  <SafeImage
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 to-transparent" />
                  <div className="absolute bottom-4 left-6">
                    <span className="text-indigo-300 font-semibold text-xs uppercase tracking-wider block mb-1">
                      {study.client}
                    </span>
                    <h3 className="text-xl font-bold text-white">
                      {study.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-800 text-xs font-semibold px-3 py-1 rounded-md mb-4">
                      <Trophy className="w-3.5 h-3.5" />
                      <span>{study.metric}</span>
                    </div>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                      {study.businessProblem}
                    </p>
                    <div className="space-y-2 border-t border-zinc-200 dark:border-zinc-800 pt-4 mb-6">
                      <h4 className="text-xs font-bold text-zinc-500 uppercase">Key Metrics</h4>
                      <ul className="space-y-1">
                        {study.metrics.map((metric, i) => (
                          <li key={i} className="text-xs text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5">
                            <div className="w-1 h-1 bg-zinc-900 dark:bg-white rounded-full" />
                            <span>{metric}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center text-sm font-semibold text-zinc-900 dark:text-white gap-1 group-hover:gap-2 transition-all mt-auto border-t border-zinc-200 dark:border-zinc-800 pt-4">
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
