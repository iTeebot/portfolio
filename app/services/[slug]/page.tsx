import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/lib/data/services";
import { constructMetadata } from "@/lib/seo";
import { ArrowRight, CheckCircle2, ChevronRight, HelpCircle, Info, Calendar, DollarSign, ArrowLeft } from "lucide-react";
import JsonLd, { getServiceSchema, getFAQSchema } from "@/components/JsonLd";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return constructMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${slug}`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  // Find related service data
  const relatedServicesData = services.filter((s) =>
    service.relatedServices.includes(s.slug)
  );

  return (
    <>
      {/* Schema Injection */}
      <JsonLd data={getServiceSchema(service.title, service.metaDescription, `https://www.iteebot.com/services/${service.slug}`)} />
      {service.faqs.length > 0 && <JsonLd data={getFAQSchema(service.faqs)} />}

      <article className="py-12 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-semibold text-zinc-500 hover:text-zinc-900 dark:hover:text-white mb-8 transition-colors gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Services</span>
          </Link>

          {/* Hero Section */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16 items-start">
            <div className="lg:col-span-2">
              <span className="inline-block bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-semibold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider mb-6">
                {service.category} Specialization
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-zinc-900 dark:text-white leading-tight mb-8">
                {service.title}
              </h1>
              <p className="text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed font-light">
                {service.introduction}
              </p>
            </div>

            {/* Quick Box (Pricing / Timeline / CTA) */}
            <div className="lg:col-span-1 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-xl shadow-zinc-200/5">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">Service Overview</h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">Estimated Timeline</h4>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">{service.timeline}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <DollarSign className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-semibold text-zinc-900 dark:text-white">Pricing Approach</h4>
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm">{service.pricingApproach}</p>
                  </div>
                </div>
              </div>

              <Link
                href="/contact"
                className="block w-full text-center py-3 bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl font-semibold transition-colors shadow-lg"
              >
                Request Quotation
              </Link>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="mb-20">
            <h2 className="text-3xl font-serif font-bold text-zinc-900 dark:text-white mb-10 border-b border-zinc-200 dark:border-zinc-800 pb-4">
              Business Benefits
            </h2>
            <div className="grid sm:grid-cols-3 gap-8">
              {service.businessBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200/60 dark:border-zinc-800/60 rounded-2xl"
                >
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-emerald-500 mb-4" />
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Process Timeline */}
          <div className="mb-20">
            <h2 className="text-3xl font-serif font-bold text-zinc-900 dark:text-white mb-10 border-b border-zinc-200 dark:border-zinc-800 pb-4">
              Our Methodology
            </h2>
            <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-4 space-y-12">
              {service.process.map((step) => (
                <div key={step.step} className="relative pl-8">
                  <div className="absolute -left-3.5 top-0 w-7 h-7 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center rounded-full text-xs font-bold font-mono border border-white dark:border-zinc-900">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Features, Tech and Industries */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            {/* Features */}
            <div className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/60 dark:border-zinc-800/60 rounded-3xl p-8">
              <h2 className="text-2xl font-serif font-bold text-zinc-900 dark:text-white mb-6">
                Core Capabilities
              </h2>
              <ul className="space-y-4">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex gap-3 text-zinc-700 dark:text-zinc-300">
                    <ChevronRight className="w-5 h-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech stack & Industries */}
            <div className="space-y-8">
              {/* Tech */}
              <div className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/60 dark:border-zinc-800/60 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Technologies Leveraged</h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium bg-indigo-50 dark:bg-indigo-900/20 text-indigo-700 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-800 px-3 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Industries */}
              <div className="bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-200/60 dark:border-zinc-800/60 rounded-3xl p-8">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-4">Target Verticals</h3>
                <div className="flex flex-wrap gap-2">
                  {service.industriesServed.map((ind) => (
                    <span
                      key={ind}
                      className="text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 px-3 py-1 rounded-md"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          {service.faqs.length > 0 && (
            <div className="mb-20 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8">
              <h2 className="text-3xl font-serif font-bold text-zinc-900 dark:text-white mb-8 flex items-center gap-2">
                <HelpCircle className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="border-b border-zinc-200 dark:border-zinc-800 pb-6 last:border-b-0 last:pb-0">
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                      {faq.question}
                    </h4>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Services */}
          {relatedServicesData.length > 0 && (
            <div>
              <h2 className="text-2xl font-serif font-bold text-zinc-900 dark:text-white mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-4">
                Related Services
              </h2>
              <div className="grid sm:grid-cols-3 gap-6">
                {relatedServicesData.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/services/${rel.slug}`}
                    className="p-5 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl hover:border-zinc-900 dark:hover:border-white transition-colors group flex justify-between items-center"
                  >
                    <div>
                      <h4 className="font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {rel.title}
                      </h4>
                      <p className="text-zinc-500 text-xs mt-1 capitalize">{rel.category}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-zinc-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
