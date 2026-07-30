import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User } from "lucide-react";
import { constructMetadata } from "@/lib/seo";
import { getAllBlogPosts } from "@/lib/blog";
import JsonLd from "@/components/JsonLd";

export const metadata = constructMetadata({
  title: "Insights & Technical Blogging | Teebot",
  description: "Read technical articles on AI agents, workflows automation, web application design, and modern software architectures.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Teebot Technical Blogging",
          "description": "Weekly technical insights on AI integrations, custom software and systems automation.",
          "url": "https://www.iteebot.com/blog"
        }}
      />

      <section className="py-12 sm:py-20 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-zinc-900 dark:text-white mb-6 leading-tight">
              Technical Insights
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Articles and guides covering Large Language Models, custom integrations, cloud deployments, and software engineering.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-12 text-center">
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">No articles published yet</h3>
              <p className="text-zinc-500 text-sm">Check back soon for weekly engineering insights!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden hover:border-zinc-900 dark:hover:border-white transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-60 w-full bg-zinc-200 dark:bg-zinc-800">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-102"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 to-transparent" />
                    <div className="absolute bottom-4 left-6">
                      <span className="text-indigo-300 font-semibold text-xs uppercase tracking-wider block mb-1">
                        AI & Automation
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5" />
                          {post.author}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3">
                        {post.description}
                      </p>
                    </div>

                    <div className="flex items-center text-sm font-semibold text-zinc-900 dark:text-white gap-1 group-hover:gap-2 transition-all mt-auto border-t border-zinc-200 dark:border-zinc-800 pt-4">
                      <span>Read Article</span>
                      <ArrowRight className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
