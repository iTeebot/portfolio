import React from "react";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { ArrowRight, Sparkles } from "lucide-react";
import { caseStudies } from "@/lib/data/caseStudies";
import { portfolioItems } from "@/lib/data/portfolio";
import { services } from "@/lib/data/services";
import { solutions } from "@/lib/data/solutions";

interface RelatedProjectsProps {
  currentSlug: string;
  type: "case-studies" | "portfolio" | "solutions" | "services";
  title?: string;
  subtitle?: string;
  count?: number;
}

export default function RelatedProjects({
  currentSlug,
  type,
  title,
  subtitle,
  count = 3,
}: RelatedProjectsProps) {
  if (type === "case-studies") {
    const items = caseStudies.filter((item) => item.slug !== currentSlug).slice(0, count);
    if (items.length === 0) return null;

    return (
      <section className="py-16 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 rounded-3xl p-8 sm:p-12 mb-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              {subtitle || "Explore More Results"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 dark:text-white">
              {title || "Related Case Studies"}
            </h3>
          </div>
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 transition-colors"
          >
            <span>View all case studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/case-studies/${item.slug}`}
              className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-indigo-500 dark:hover:border-indigo-500 transition-all flex flex-col justify-between"
            >
              <div className="relative h-44 w-full bg-zinc-100 dark:bg-zinc-800">
                <SafeImage
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 block mb-1">
                    {item.metric}
                  </span>
                  <h4 className="font-bold text-lg text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed mb-4">
                    {item.metaDescription}
                  </p>
                </div>
                <div className="flex items-center text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
                  <span>Read Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    );
  }

  if (type === "portfolio") {
    const items = portfolioItems.filter((item) => item.slug !== currentSlug).slice(0, count);
    if (items.length === 0) return null;

    return (
      <section className="py-16 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 rounded-3xl p-8 sm:p-12 mb-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              {subtitle || "Client Works"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 dark:text-white">
              {title || "Related Projects"}
            </h3>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 transition-colors"
          >
            <span>View full portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/portfolio/${item.slug}`}
              className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden hover:border-indigo-500 dark:hover:border-indigo-500 transition-all flex flex-col justify-between"
            >
              <div className="relative h-44 w-full bg-zinc-100 dark:bg-zinc-800">
                <SafeImage
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 block mb-1">
                    {item.client}
                  </span>
                  <h4 className="font-bold text-lg text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed mb-4">
                    {item.overview}
                  </p>
                </div>
                <div className="flex items-center text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
                  <span>View Project Details</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    );
  }

  if (type === "solutions") {
    const items = solutions.filter((item) => item.slug !== currentSlug).slice(0, count);
    if (items.length === 0) return null;

    return (
      <section className="py-16 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 rounded-3xl p-8 sm:p-12 mb-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              {subtitle || "Targeted Architectures"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 dark:text-white">
              {title || "Related Solutions"}
            </h3>
          </div>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 transition-colors"
          >
            <span>View all solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/solutions/${item.slug}`}
              className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 block mb-2">
                  Solution Blueprint
                </span>
                <h4 className="font-bold text-lg text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed mb-4">
                  {item.metaDescription || item.introduction}
                </p>
              </div>
              <div className="flex items-center text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
                <span>Explore Solution</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    );
  }

  if (type === "services") {
    const items = services.filter((item) => item.slug !== currentSlug).slice(0, count);
    if (items.length === 0) return null;

    return (
      <section className="py-16 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 rounded-3xl p-8 sm:p-12 mb-16">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              {subtitle || "Engineering Capabilities"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-zinc-900 dark:text-white">
              {title || "Related Services"}
            </h3>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 transition-colors"
          >
            <span>View all services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link
              key={item.slug}
              href={`/services/${item.slug}`}
              className="group bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 block mb-2">
                  Technical Service
                </span>
                <h4 className="font-bold text-lg text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed mb-4">
                  {item.metaDescription || item.introduction}
                </p>
              </div>
              <div className="flex items-center text-xs font-semibold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform">
                <span>View Service Details</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    );
  }

  return null;
}
