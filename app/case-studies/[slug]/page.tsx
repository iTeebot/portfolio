import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { caseStudies } from "@/lib/data/caseStudies";
import { portfolioItems } from "@/lib/data/portfolio";
import { constructMetadata } from "@/lib/seo";
import { ArrowLeft, ShieldCheck, Trophy, Sparkles, CheckCircle2, Globe, Github, Smartphone } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import PerformanceStats from "@/components/PerformanceStats";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};

  return constructMetadata({
    title: study.metaTitle,
    description: study.metaDescription,
    image: study.image,
    path: `/case-studies/${slug}`,
  });
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  const portfolioItem = portfolioItems.find((p) => p.slug === slug);
  const fallbackPerformance = portfolioItem?.performance || { lcp: "1.2s", size: "320KB" };

  return (
    <>
      {/* Schema Injection */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": study.title,
          "description": study.clientBackground,
          "url": `https://www.iteebot.com/case-studies/${study.slug}`
        }}
      />

      <article className="py-12 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            href="/case-studies"
            className="inline-flex items-center text-sm font-semibold text-zinc-500 hover:text-zinc-900 dark:hover:text-white mb-8 transition-colors gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Case Studies</span>
          </Link>

          {/* Hero Row */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16 items-start">
            <div className="lg:col-span-2">
              <span className="inline-block bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-semibold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-6">
                Business Case Study
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-zinc-900 dark:text-white leading-tight mb-8">
                {study.title} Case Study
              </h1>
              <p className="text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-light">
                {study.clientBackground}
              </p>
            </div>

            {/* Specs and ROI Box */}
            <div className="lg:col-span-1 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-xl shadow-zinc-200/5">
              <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider block mb-1">
                PROJECT METRIC
              </span>
              <div className="text-xl font-bold text-emerald-600 dark:text-emerald-500 mb-6">
                {study.metric}
              </div>

              <div className="space-y-4 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                <div>
                  <h4 className="text-xs font-bold text-zinc-500 uppercase mb-1">Estimated ROI</h4>
                  <p className="text-zinc-900 dark:text-white font-semibold text-sm">{study.roi}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-500 uppercase mb-1">Client Profile</h4>
                  <p className="text-zinc-900 dark:text-white font-semibold text-sm">{study.client}</p>
                </div>
                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <PerformanceStats
                    url={study.deployedUrl || study.websiteUrl}
                    fallbackLcp={fallbackPerformance.lcp}
                    fallbackSize={fallbackPerformance.size}
                  />
                </div>
              </div>

              {/* Project Action Links */}
              <div className="mt-8 space-y-3 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                {(study.deployedUrl || study.websiteUrl) && (
                  <a
                    href={study.deployedUrl || study.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl font-semibold text-sm transition-colors shadow-md"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Launch Live Site</span>
                  </a>
                )}
                
                {portfolioItem?.githubUrl && !portfolioItem.isPrivate && (
                  <a
                    href={portfolioItem.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-950 dark:text-white rounded-xl font-semibold text-sm transition-colors border border-zinc-200 dark:border-zinc-700"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Source</span>
                  </a>
                )}

                {portfolioItem?.playStoreUrl && (
                  <a
                    href={portfolioItem.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-950 dark:text-white rounded-xl font-semibold text-sm transition-colors border border-zinc-200 dark:border-zinc-700"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>Play Store App</span>
                  </a>
                )}

                {portfolioItem?.appStoreUrl && (
                  <a
                    href={portfolioItem.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-950 dark:text-white rounded-xl font-semibold text-sm transition-colors border border-zinc-200 dark:border-zinc-700"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>App Store Download</span>
                  </a>
                )}

                {portfolioItem?.isPrivate && (
                  <div className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-900/40 text-zinc-400 dark:text-zinc-500 rounded-xl text-xs border border-dashed border-zinc-200 dark:border-zinc-800/40">
                    <Github className="w-3.5 h-3.5" />
                    <span>Proprietary Private Source</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Case Study Image Banner */}
          <div className="relative h-[25rem] sm:h-[35rem] w-full rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 mb-16">
            <SafeImage
              src={study.image}
              alt={study.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Business Problem vs Research */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/60 dark:border-zinc-800/60 rounded-3xl p-8">
              <h3 className="text-2xl font-serif font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-red-600 dark:text-red-500" />
                The Business Problem
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">{study.businessProblem}</p>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/60 dark:border-zinc-800/60 rounded-3xl p-8">
              <h3 className="text-2xl font-serif font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                Research & Planning
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm mb-4">{study.research}</p>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">{study.planning}</p>
            </div>
          </div>

          {/* Methodology & Work phases */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h3 className="text-2xl font-serif font-bold text-zinc-900 dark:text-white mb-4">Design & Architecture</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm mb-4">{study.design}</p>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">{study.architecture}</p>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-zinc-900 dark:text-white mb-4">Implementation & Testing</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm mb-4">{study.implementation}</p>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">{study.testing}</p>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-zinc-900 dark:text-white mb-4">Deployment & Outcomes</h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm mb-4">{study.deployment}</p>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">{study.results}</p>
              </div>
            </div>

            {/* Performance Indicators Checklist */}
            <div className="lg:col-span-1 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 space-y-8">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  Key Outcomes
                </h3>
                <ul className="space-y-4">
                  {study.metrics.map((metric, i) => (
                    <li key={i} className="flex gap-2 text-zinc-700 dark:text-zinc-300 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-500 mt-0.5 flex-shrink-0" />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-zinc-200 dark:border-zinc-800 pt-6">
                <h4 className="font-semibold text-zinc-950 dark:text-white mb-2">Lessons Learned</h4>
                <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed">{study.lessonsLearned}</p>
              </div>
            </div>
          </div>

          {/* Client Feedback quote */}
          <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 sm:p-12 mb-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 dark:bg-indigo-900/10 rounded-full blur-2xl pointer-events-none" />
            <span className="text-4xl font-serif text-zinc-300 dark:text-zinc-700 block mb-4">“</span>
            <p className="text-xl sm:text-2xl font-serif italic text-zinc-800 dark:text-zinc-200 leading-relaxed mb-6">
              {study.clientFeedback.quote}
            </p>
            <div>
              <h4 className="font-bold text-zinc-900 dark:text-white">{study.clientFeedback.author}</h4>
              <p className="text-zinc-500 text-sm">{study.clientFeedback.role}</p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
