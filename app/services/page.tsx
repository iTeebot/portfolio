import Link from "next/link";
import { ArrowRight, Cpu, Smartphone, Code, Palette, Cloud } from "lucide-react";
import { constructMetadata } from "@/lib/seo";
import { services } from "@/lib/data/services";
import JsonLd from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "Professional AI, Web, Mobile & Automation Services | Teebot",
  description: "Explore our range of professional technology services, from AI Agent and workflow automation to custom mobile app and web development.",
  path: "/services",
});

export default function ServicesPage() {
  // Group services by category for structured cataloging
  const categories = [
    { id: "automation", name: "AI & Automation", icon: Cpu, desc: "Intelligent workflows, LLM systems, custom AI Agents and MCP servers." },
    { id: "mobile", name: "Mobile App Development", icon: Smartphone, desc: "Native iOS & Android apps, cross-platform Flutter and React Native solutions." },
    { id: "web", name: "Web & Full Stack Engineering", icon: Code, desc: "Fast, SEO-optimized frontends, Next.js setups, and NestJS backends." },
    { id: "cloud", name: "Cloud & DevOps", icon: Cloud, desc: "Serverless systems, Terraform infrastructure-as-code, and automated CI/CD pipelines." },
    { id: "design", name: "UI/UX Design", icon: Palette, desc: "Premium responsive wireframing, interactive prototypes, and design systems in Figma." },
  ];

  return (
    <>
      {/* Schema - Organization & WebPage */}
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Teebot Professional Services",
          "description": "Catalog of custom software development, AI automation, and cloud engineering services.",
          "url": "https://www.iteebot.com/services"
        }}
      />

      <section className="py-12 sm:py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
              Our Professional Services
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              We design, build, and deploy premium bespoke software systems to streamline operations, automate decision workflows, and accelerate growth.
            </p>
          </div>

          {/* Catalog Grouped by Category */}
          <div className="space-y-24">
            {categories.map((category) => {
              const categoryServices = services.filter(
                (service) => service.category === category.id
              );
              const Icon = category.icon;

              if (categoryServices.length === 0) return null;

              return (
                <div key={category.id} className="border-t border-zinc-200 dark:border-zinc-800 pt-12">
                  <div className="grid lg:grid-cols-3 gap-12">
                    {/* Category Column */}
                    <div className="lg:col-span-1">
                      <div className="flex items-center gap-3 mb-4">
                        <Icon className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                        <h2 className="text-2xl font-serif font-bold text-zinc-900 dark:text-white">
                          {category.name}
                        </h2>
                      </div>
                      <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed">
                        {category.desc}
                      </p>
                    </div>

                    {/* Services Column */}
                    <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
                      {categoryServices.map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="group relative block p-6 bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-white transition-all duration-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-500/5 flex flex-col justify-between"
                        >
                          <div>
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                              {service.title}
                            </h3>
                            <p className="text-zinc-600 dark:text-zinc-400 text-sm line-clamp-3 mb-6">
                              {service.metaDescription}
                            </p>
                          </div>
                          <div className="flex items-center text-sm font-semibold text-zinc-900 dark:text-white gap-1 group-hover:gap-2 transition-all mt-auto">
                            <span>Explore Service</span>
                            <ArrowRight className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
