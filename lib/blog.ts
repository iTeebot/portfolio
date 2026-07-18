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

function normalizeDateStr(dateStr: string): string {
  try {
    // If it contains a timezone T, use standard Date parsing
    if (dateStr.includes("T")) {
      const d = new Date(dateStr);
      const year = d.getUTCFullYear();
      const month = String(d.getUTCMonth() + 1).padStart(2, "0");
      const day = String(d.getUTCDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    }
    // Split by dash or slash to handle calendar dates without timezone skew
    const parts = dateStr.split(/[-/]/);
    if (parts.length === 3) {
      const year = parts[0].trim();
      const month = parts[1].trim().padStart(2, "0");
      const day = parts[2].trim().padStart(2, "0");
      if (year.length === 4 && month.length === 2 && day.length === 2) {
        return `${year}-${month}-${day}`;
      }
    }
    const d = new Date(dateStr);
    const year = d.getUTCFullYear();
    const month = String(d.getUTCMonth() + 1).padStart(2, "0");
    const day = String(d.getUTCDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  } catch {
    return dateStr;
  }
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
        date: normalizeDateStr(new Date().toISOString().split("T")[0]),
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
      date: normalizeDateStr(metadata.date || new Date().toISOString().split("T")[0]),
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
  
  // Format current date in Asia/Karachi to YYYY-MM-DD directly using en-CA locale
  const todayStr = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Karachi",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());

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
