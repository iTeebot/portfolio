import { notFound } from "next/navigation";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { portfolioItems } from "@/lib/data/portfolio";
import { constructMetadata } from "@/lib/seo";
import { ArrowLeft, ArrowRight, Layers, HelpCircle, HardDrive, Clock, Globe, Github, Smartphone } from "lucide-react";
import JsonLd, { getFAQSchema } from "@/components/JsonLd";
import PerformanceStats from "@/components/PerformanceStats";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = portfolioItems.find((p) => p.slug === slug);
  if (!item) return {};

  return constructMetadata({
    title: item.metaTitle,
    description: item.metaDescription,
    image: item.image,
    path: `/portfolio/${slug}`,
  });
}

export default async function PortfolioItemPage({ params }: Props) {
  const { slug } = await params;
  const item = portfolioItems.find((p) => p.slug === slug);
  if (!item) notFound();

  return (
    <>
      {/* Schema Injection */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": item.title,
          "description": item.overview,
          "url": `https://www.iteebot.com/portfolio/${item.slug}`
        }}
      />
      {item.faqs.length > 0 && <JsonLd data={getFAQSchema(item.faqs)} />}

      <article className="py-12 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            href="/portfolio"
            className="inline-flex items-center text-sm font-semibold text-zinc-500 hover:text-zinc-900 dark:hover:text-white mb-8 transition-colors gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          {/* Hero Row */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16 items-start">
            <div className="lg:col-span-2">
              <span className="inline-block bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-semibold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-6">
                Client Project Detail
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-zinc-900 dark:text-white leading-tight mb-8">
                {item.title}
              </h1>
              <p className="text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-light">
                {item.overview}
              </p>
            </div>

            {/* Metrics and Spec Box */}
            <div className="lg:col-span-1 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8">
              <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider block mb-1">
                KEY OUTCOME
              </span>
              <div className="text-xl font-bold text-emerald-600 dark:text-emerald-500 mb-6 pb-6 border-b border-zinc-200 dark:border-zinc-800">
                {item.metric}
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-zinc-500">Client:</span>
                  <span className="font-semibold text-zinc-900 dark:text-white">{item.client}</span>
                </div>
                <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <PerformanceStats
                    url={item.deployedUrl || item.websiteUrl}
                    fallbackLcp={item.performance.lcp}
                    fallbackSize={item.performance.size}
                  />
                </div>
              </div>

              {/* Project Action Links */}
              <div className="mt-8 space-y-3 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                {(item.deployedUrl || item.websiteUrl) && (
                  <a
                    href={item.deployedUrl || item.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl font-semibold text-sm transition-colors shadow-md"
                  >
                    <Globe className="w-4 h-4" />
                    <span>Launch Live Site</span>
                  </a>
                )}
                
                {item.githubUrl && !item.isPrivate && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-950 dark:text-white rounded-xl font-semibold text-sm transition-colors border border-zinc-200 dark:border-zinc-700"
                  >
                    <Github className="w-4 h-4" />
                    <span>View GitHub Source</span>
                  </a>
                )}

                {item.playStoreUrl && (
                  <a
                    href={item.playStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-950 dark:text-white rounded-xl font-semibold text-sm transition-colors border border-zinc-200 dark:border-zinc-700"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>Play Store App</span>
                  </a>
                )}

                {item.appStoreUrl && (
                  <a
                    href={item.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-950 dark:text-white rounded-xl font-semibold text-sm transition-colors border border-zinc-200 dark:border-zinc-700"
                  >
                    <Smartphone className="w-4 h-4" />
                    <span>App Store Download</span>
                  </a>
                )}

                {item.isPrivate && (
                  <div className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-zinc-50 dark:bg-zinc-900/40 text-zinc-400 dark:text-zinc-500 rounded-xl text-xs border border-dashed border-zinc-200 dark:border-zinc-800/40">
                    <Github className="w-3.5 h-3.5" />
                    <span>Proprietary Private Source</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Project Image Banner */}
          <div className="relative h-[25rem] sm:h-[35rem] w-full rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 mb-16">
            <SafeImage
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Problem, Business Goal, Solution */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/60 dark:border-zinc-800/60 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">The Problem</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.problem}</p>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/60 dark:border-zinc-800/60 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">Business Goal</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.businessGoal}</p>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/60 dark:border-zinc-800/60 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-3">Our Solution</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.solution}</p>
            </div>
          </div>

          {/* Architecture and Process */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            <div className="lg:col-span-2">
              {/* Process */}
              <h2 className="text-3xl font-serif font-bold text-zinc-900 dark:text-white mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-4 flex items-center gap-2">
                <Clock className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
                Development Phases
              </h2>
              <div className="space-y-6 mb-12">
                {item.developmentProcess.map((proc, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed">{proc}</p>
                  </div>
                ))}
              </div>

              {/* Challenges & Lessons */}
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Technical Challenges</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{item.challenges}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">Lessons Learned</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{item.lessonsLearned}</p>
                </div>
              </div>
            </div>

            {/* Architecture Details */}
            <div className="lg:col-span-1 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  System Architecture
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{item.architecture}</p>
              </div>

              <div>
                <h4 className="font-semibold text-zinc-900 dark:text-white mb-2 flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-zinc-200/50 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results Block */}
          <div className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-3xl p-8 sm:p-12 mb-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <span className="text-indigo-300 dark:text-indigo-600 font-semibold text-xs uppercase tracking-wider block mb-1">
                PROJECT RESULTS
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-2">
                Delivered Outcomes
              </h2>
              <p className="text-zinc-400 dark:text-zinc-600 text-sm max-w-2xl leading-relaxed">
                {item.results}
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl font-semibold transition-colors flex-shrink-0"
            >
              <span>Build similar system</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* FAQs */}
          {item.faqs.length > 0 && (
            <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-serif font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                Project FAQs
              </h3>
              <div className="space-y-6">
                {item.faqs.map((faq, i) => (
                  <div key={i} className="border-b border-zinc-200 dark:border-zinc-800 pb-4 last:border-0 last:pb-0">
                    <h4 className="font-semibold text-zinc-900 dark:text-white mb-1">{faq.question}</h4>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
