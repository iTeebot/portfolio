import { notFound } from "next/navigation";
import Link from "next/link";
import { solutions } from "@/lib/data/solutions";
import { constructMetadata } from "@/lib/seo";
import { ArrowLeft, CheckCircle2, Cpu, HelpCircle } from "lucide-react";
import JsonLd, { getFAQSchema } from "@/components/JsonLd";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return solutions.map((sol) => ({
    slug: sol.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const sol = solutions.find((s) => s.slug === slug);
  if (!sol) return {};

  return constructMetadata({
    title: sol.metaTitle,
    description: sol.metaDescription,
    path: `/solutions/${slug}`,
  });
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const sol = solutions.find((s) => s.slug === slug);
  if (!sol) notFound();

  return (
    <>
      {/* Schema Injection */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": sol.title,
          "description": sol.metaDescription,
          "url": `https://www.iteebot.com/solutions/${sol.slug}`
        }}
      />
      {sol.faqs.length > 0 && <JsonLd data={getFAQSchema(sol.faqs)} />}

      <article className="py-12 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            href="/solutions"
            className="inline-flex items-center text-sm font-semibold text-zinc-500 hover:text-zinc-900 dark:hover:text-white mb-8 transition-colors gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Solutions</span>
          </Link>

          {/* Hero */}
          <div className="max-w-4xl mb-16">
            <span className="inline-block bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-semibold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-6">
              Core Technical Solution
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-zinc-900 dark:text-white leading-tight mb-8">
              Custom {sol.title} Solution
            </h1>
            <p className="text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-light">
              {sol.introduction}
            </p>
          </div>

          {/* Features and Technologies */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Features Column */}
            <div className="md:col-span-2 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8">
              <h2 className="text-2xl font-serif font-bold text-zinc-900 dark:text-white mb-6">
                Functional Requirements Met
              </h2>
              <ul className="space-y-4">
                {sol.features.map((feature, i) => (
                  <li key={i} className="flex gap-3 text-zinc-700 dark:text-zinc-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-500 flex-shrink-0 mt-1" />
                    <span className="text-base">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies Column */}
            <div className="md:col-span-1 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  Integration Stack
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-xs mb-6 leading-relaxed">
                  Our recommended technology setup for deploying a custom {sol.title.toLowerCase()} platform.
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {sol.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800 px-3 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href="/contact"
                className="w-full text-center py-3 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl font-semibold transition-colors shadow-md"
              >
                Discuss Deploy
              </Link>
            </div>
          </div>

          {/* FAQs */}
          {sol.faqs.length > 0 && (
            <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8">
              <h3 className="text-2xl font-serif font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                Technical FAQs
              </h3>
              <div className="space-y-6">
                {sol.faqs.map((faq, i) => (
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
