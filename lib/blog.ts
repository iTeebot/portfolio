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
    try {
      fs.mkdirSync(blogDirectory, { recursive: true });
    } catch (error) {
      console.error("Failed to create blog directory:", error);
      throw new Error(`Blog directory is missing or unwritable: ${blogDirectory}`);
    }
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
  // Validate slug to prevent path traversal or invalid characters
  if (!slug || typeof slug !== "string" || !/^[a-zA-Z0-9-_]+$/.test(slug)) {
    return null;
  }

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
  // Adjust server time to PKT (UTC+5) to align with Pakistan release timezone
  const PKT_OFFSET = 5 * 60 * 60 * 1000;
  const nowPKT = new Date(Date.now() + PKT_OFFSET);

  const year = nowPKT.getUTCFullYear();
  const month = String(nowPKT.getUTCMonth() + 1).padStart(2, "0");
  const day = String(nowPKT.getUTCDate()).padStart(2, "0");
  const todayStr = `${year}-${month}-${day}`;

  const posts = slugs
    .map((slug) => getBlogPost(slug))
    .filter((post): post is BlogPost => {
      if (post === null) return false;
      // Exclude posts whose publication dates are in the future relative to PKT calendar day
      return post.date <= todayStr;
    });

  // Sort by date descending
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
