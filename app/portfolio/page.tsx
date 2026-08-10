import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import { ArrowRight, ExternalLink } from "lucide-react";
import { constructMetadata } from "@/lib/seo";
import { portfolioItems } from "@/lib/data/portfolio";
import JsonLd from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "Engineering Portfolio & Client Works | Teebot",
  description: "Explore our software engineering history, full stack systems, blockchain secure ledgers, and dynamic learning management systems.",
  path: "/portfolio",
});

function getBannerStyles(slug: string) {
  if (slug === "virlio") {
    return {
      container: "relative h-64 w-full bg-zinc-900 overflow-hidden",
      image: "object-cover object-top transition-transform duration-500 group-hover:scale-102",
    };
  }
  if (slug === "wooltogether") {
    return {
      container: "relative h-64 w-full bg-[#FAF6F0] dark:bg-zinc-900 overflow-hidden",
      image: "object-contain transition-transform duration-500 group-hover:scale-102",
    };
  }
  return {
    container: "relative h-64 w-full bg-zinc-200 dark:bg-zinc-800",
    image: "object-cover transition-transform duration-500 group-hover:scale-102",
  };
}

export default function PortfolioPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Teebot Technical Project Portfolio",
          "description": "Selected database of engineering works including full-stack e-commerce platforms, blockchain voters registries, and EdTech portals.",
          "url": "https://www.iteebot.com/portfolio"
        }}
      />

      <section className="py-12 sm:py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
              Selected Works
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              A record of production software systems, robust architectures, and client project results built by our team.
            </p>
          </div>

          {/* Grid lists */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => {
              const isExternal = item.isExternal;
              const targetUrl = item.deployedUrl || item.websiteUrl;
              const bannerStyles = getBannerStyles(item.slug);

              if (isExternal && targetUrl) {
                return (
                  <a
                    key={item.slug}
                    href={targetUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden hover:border-zinc-900 dark:hover:border-white transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className={bannerStyles.container}>
                      <SafeImage
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className={bannerStyles.image}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 to-transparent pointer-events-none" />
                      <div className="absolute bottom-4 left-6">
                        <span className="text-indigo-300 font-semibold text-xs uppercase tracking-wider block mb-1">
                          {item.client}
                        </span>
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                          {item.title}
                          <ExternalLink className="w-4 h-4 opacity-75 group-hover:opacity-100 transition-opacity" />
                        </h3>
                      </div>
                    </div>

                    <div className="p-6 flex flex-col flex-grow justify-between">
                      <div>
                        <span className="inline-block bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-800 text-xs font-semibold px-3 py-1 rounded-md mb-4">
                          {item.metric}
                        </span>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                          {item.metaDescription}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mb-8">
                          {item.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs bg-zinc-200/50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2 py-0.5 rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center text-sm font-semibold text-zinc-900 dark:text-white gap-1 group-hover:gap-2 transition-all mt-auto border-t border-zinc-200 dark:border-zinc-800 pt-4">
                        <span>Visit Website</span>
                        <ExternalLink className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                      </div>
                    </div>
                  </a>
                );
              }

              return (
                <Link
                  key={item.slug}
                  href={`/portfolio/${item.slug}`}
                  className="group bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden hover:border-zinc-900 dark:hover:border-white transition-all duration-300 flex flex-col justify-between"
                >
                  <div className={bannerStyles.container}>
                    <SafeImage
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={bannerStyles.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-6">
                      <span className="text-indigo-300 font-semibold text-xs uppercase tracking-wider block mb-1">
                        {item.client}
                      </span>
                      <h3 className="text-xl font-bold text-white">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <span className="inline-block bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border border-emerald-100 dark:border-emerald-800 text-xs font-semibold px-3 py-1 rounded-md mb-4">
                        {item.metric}
                      </span>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                        {item.metaDescription}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-8">
                        {item.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs bg-zinc-200/50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 px-2 py-0.5 rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center text-sm font-semibold text-zinc-900 dark:text-white gap-1 group-hover:gap-2 transition-all mt-auto border-t border-zinc-200 dark:border-zinc-800 pt-4">
                      <span>View Project Details</span>
                      <ArrowRight className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
