import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getBlogPost, getBlogSlugs, getAllBlogPosts } from "@/lib/blog";
import { constructMetadata } from "@/lib/seo";
import { ArrowLeft, Calendar, User } from "lucide-react";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import JsonLd, { getArticleSchema } from "@/components/JsonLd";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};

  return constructMetadata({
    title: `${post.title} | Technical Blog | Teebot`,
    description: post.description,
    image: post.image,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  // Load other posts for the sidebar catalog recommendation
  const otherPosts = getAllBlogPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <>
      {/* Schema Injection */}
      <JsonLd
        data={getArticleSchema({
          title: post.title,
          description: post.description,
          url: `https://www.iteebot.com/blog/${post.slug}`,
          imageUrl: post.image,
          datePublished: post.date,
          authorName: post.author,
        })}
      />

      <article className="py-12 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <Link
            href="/blog"
            className="inline-flex items-center text-sm font-semibold text-zinc-500 hover:text-zinc-900 dark:hover:text-white mb-8 transition-colors gap-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Insights</span>
          </Link>

          <div className="grid lg:grid-cols-4 gap-12">
            {/* Article Content */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <span className="inline-block bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-semibold px-3 py-1 rounded-full text-xs uppercase tracking-wider mb-4">
                  Engineering Guide
                </span>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-zinc-900 dark:text-white leading-tight mb-4">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    By {post.author}
                  </span>
                </div>
              </div>

              {/* Banner Image */}
              <div className="relative h-[20rem] sm:h-[30rem] w-full rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 mb-10">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Body */}
              <div className="prose dark:prose-invert max-w-none">
                <MarkdownRenderer content={post.content} />
              </div>
            </div>

            {/* Sidebar (Author bio & Recommended articles) */}
            <div className="lg:col-span-1 space-y-8">
              {/* Author Bio (EEAT signals) */}
              <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">About the Author</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative w-12 h-12 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden border border-zinc-300 dark:border-zinc-700">
                    {/* Placeholder image or initial */}
                    <div className="absolute inset-0 flex items-center justify-center font-bold text-zinc-600 dark:text-zinc-400 text-sm">
                      AN
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zinc-900 dark:text-white text-sm">Ateeb Noone</h4>
                    <p className="text-zinc-500 text-xs">Founder, Teebot</p>
                  </div>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed">
                  Ateeb is a software architect and system engineer building custom workflow automation and AI Agent integrations.
                </p>
              </div>

              {/* Recommended Articles */}
              {otherPosts.length > 0 && (
                <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-4">Read Next</h3>
                  <div className="space-y-4">
                    {otherPosts.map((op) => (
                      <Link
                        key={op.slug}
                        href={`/blog/${op.slug}`}
                        className="group block border-b border-zinc-200 dark:border-zinc-800 pb-4 last:border-0 last:pb-0"
                      >
                        <h4 className="font-bold text-zinc-900 dark:text-white text-sm group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2">
                          {op.title}
                        </h4>
                        <span className="text-zinc-500 text-xs mt-1 block">{op.date}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
