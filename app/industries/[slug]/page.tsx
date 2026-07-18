import { notFound } from "next/navigation";
import Link from "next/link";
import { industries } from "@/lib/data/industries";
import { constructMetadata } from "@/lib/seo";
import { ArrowLeft, ArrowRight, ShieldAlert, Zap, HelpCircle, Code } from "lucide-react";
import JsonLd, { getFAQSchema } from "@/components/JsonLd";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) return {};

  return constructMetadata({
    title: ind.metaTitle,
    description: ind.metaDescription,
    path: `/industries/${slug}`,
  });
}

export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const ind = industries.find((i) => i.slug === slug);
  if (!ind) notFound();

  return (
    <>
      {/* Schema Injection */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": ind.title,
          "description": ind.metaDescription,
          "url": `https://www.iteebot.com/industries/${ind.slug}`
        }}
      />
      {ind.faqs.length > 0 && <JsonLd data={getFAQSchema(ind.faqs)} />}

      <article className="py-12 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            href="/industries"
            className="inline-flex items-center text-sm font-semibold text-zinc-500 hover:text-zinc-900 dark:hover:text-white mb-8 transition-colors gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Industries</span>
          </Link>

          {/* Hero */}
          <div className="max-w-4xl mb-16">
            <span className="inline-block bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-semibold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-6">
              Industry Vertical Expertise
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-zinc-900 dark:text-white leading-tight mb-8">
              {ind.title}
            </h1>
            <p className="text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-light">
              {ind.introduction}
            </p>
          </div>

          {/* Challenges & Opportunities */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Challenges */}
            <div className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/60 dark:border-zinc-800/60 rounded-3xl p-8">
              <h2 className="text-2xl font-serif font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                <ShieldAlert className="w-6 h-6 text-red-600 dark:text-red-500" />
                Industry Bottlenecks
              </h2>
              <div className="space-y-6">
                {ind.challenges.map((c, i) => (
                  <div key={i}>
                    <h3 className="font-bold text-zinc-900 dark:text-white mb-1">{c.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{c.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Opportunities */}
            <div className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/60 dark:border-zinc-800/60 rounded-3xl p-8">
              <h2 className="text-2xl font-serif font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                <Zap className="w-6 h-6 text-amber-600 dark:text-amber-500" />
                Automation Opportunities
              </h2>
              <div className="space-y-6">
                {ind.opportunities.map((o, i) => (
                  <div key={i}>
                    <h3 className="font-bold text-zinc-900 dark:text-white mb-1">{o.title}</h3>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{o.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech and FAQs */}
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            {/* Tech Column */}
            <div className="lg:col-span-1 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                Recommended Tech
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 leading-relaxed">
                Our recommended stack configuration for modern {ind.title.toLowerCase()} software integrations.
              </p>
              <div className="flex flex-wrap gap-2">
                {ind.recommendedTech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-semibold bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800 px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* FAQs Column */}
            <div className="lg:col-span-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                Common Concerns
              </h3>
              <div className="space-y-6">
                {ind.faqs.map((faq, i) => (
                  <div key={i} className="border-b border-zinc-200 dark:border-zinc-800 pb-4 last:border-0 last:pb-0">
                    <h4 className="font-semibold text-zinc-900 dark:text-white mb-1">{faq.question}</h4>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mb-2">
                Ready to optimize your {ind.title.toLowerCase()} operations?
              </h2>
              <p className="text-zinc-400 dark:text-zinc-600 text-sm max-w-xl">
                Let&apos;s plan custom software integrations that save manual effort, secure audits, and improve profit margins.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-xl font-semibold transition-colors"
            >
              <span>Talk to an Expert</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
