import fs from "fs";
import path from "path";

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  author: string;
  keywords: string[];
  image: string;
  content: string;
}

const blogDirectory = path.join(process.cwd(), "content/blog");

// Self-bootstrap: Create directories if they do not exist
function ensureBlogDir() {
  if (!fs.existsSync(blogDirectory)) {
    fs.mkdirSync(blogDirectory, { recursive: true });
    // Write a dummy blog post so it is not empty
    const dummyPost = `---
title: "AI Agents for Business Automation"
date: "2026-07-19"
description: "How autonomous AI agents are revolutionizing standard workflow automation and operational efficiency."
author: "Ateeb Noone"
keywords: "AI agents, business automation, workflow automation"
image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"
---

# Introduction to AI Agents

Artificial Intelligence is transitioning from passive chatbots to **autonomous agents**. These agents can plan, use tools, call APIs, and self-correct when errors arise.

## Why AI Agents?

Unlike traditional rule-based workflow automations, agentic systems can handle ambiguity:
1. **Understand context**: Reason through complex instructions.
2. **Execute steps**: Choose appropriate tools sequentially.
3. **Handle errors**: Retry operations and adjust strategies automatically.

## Conclusion

Integrating AI agents into your CRM and ERP workflows increases operational speed and reduces manual errors by over 90%.
`;
    fs.writeFileSync(path.join(blogDirectory, "ai-agents-for-business.md"), dummyPost);
  }
}

export function getBlogSlugs(): string[] {
  ensureBlogDir();
  const files = fs.readdirSync(blogDirectory);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    ensureBlogDir();
    const filePath = path.join(blogDirectory, `${slug}.md`);
    if (!fs.existsSync(filePath)) return null;

    const fileContent = fs.readFileSync(filePath, "utf-8");

    // Parse Frontmatter
    const match = fileContent.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
    if (!match) {
      return {
        slug,
        title: slug.replace(/-/g, " "),
        date: new Date().toISOString().split("T")[0],
        description: "",
        author: "Teebot",
        keywords: [],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
        content: fileContent,
      };
    }

    const yamlBlock = match[1];
    const content = match[2];
    const metadata: Record<string, string> = {};

    yamlBlock.split("\n").forEach((line) => {
      const parts = line.split(":");
      if (parts.length >= 2) {
        const key = parts[0].trim();
        const value = parts.slice(1).join(":").trim().replace(/^['"]|['"]$/g, "");
        metadata[key] = value;
      }
    });

    const keywords = metadata.keywords
      ? metadata.keywords.split(",").map((k) => k.trim())
      : [];

    return {
      slug,
      title: metadata.title || slug.replace(/-/g, " "),
      date: metadata.date || new Date().toISOString().split("T")[0],
      description: metadata.description || "",
      author: metadata.author || "Teebot",
      keywords,
      image: metadata.image || "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      content,
    };
  } catch (error) {
    console.error(`Error loading blog post ${slug}:`, error);
    return null;
  }
}

export function getAllBlogPosts(): BlogPost[] {
  const slugs = getBlogSlugs();
  const posts = slugs
    .map((slug) => getBlogPost(slug))
    .filter((post): post is BlogPost => post !== null);

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
