import { MetadataRoute } from "next";
import { services } from "@/lib/data/services";
import { industries } from "@/lib/data/industries";
import { solutions } from "@/lib/data/solutions";
import { portfolioItems } from "@/lib/data/portfolio";
import { caseStudies } from "@/lib/data/caseStudies";
import { getBlogSlugs } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.iteebot.com";
  const currentDate = new Date();

  // 1. Static Pages
  const staticPaths = [
    "",
    "/about",
    "/careers",
    "/resources",
    "/contact",
    "/privacy",
    "/terms",
  ];
  const staticEntries = staticPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1.0 : 0.8,
  }));

  // 2. Main Index Catalog Pages
  const indexPaths = [
    "/services",
    "/industries",
    "/solutions",
    "/portfolio",
    "/case-studies",
    "/blog",
  ];
  const indexEntries = indexPaths.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // 3. Dynamic Pages
  const serviceEntries = services.map((item) => ({
    url: `${baseUrl}/services/${item.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const industryEntries = industries.map((item) => ({
    url: `${baseUrl}/industries/${item.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const solutionEntries = solutions.map((item) => ({
    url: `${baseUrl}/solutions/${item.slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const portfolioEntries = portfolioItems.map((item) => ({
    url: `${baseUrl}/portfolio/${item.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const caseStudyEntries = caseStudies.map((item) => ({
    url: `${baseUrl}/case-studies/${item.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Safely get blog slugs
  let blogSlugs: string[] = [];
  try {
    blogSlugs = getBlogSlugs();
  } catch (error) {
    console.error("Error reading blog slugs for sitemap:", error);
  }

  const blogEntries = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [
    ...staticEntries,
    ...indexEntries,
    ...serviceEntries,
    ...industryEntries,
    ...solutionEntries,
    ...portfolioEntries,
    ...caseStudyEntries,
    ...blogEntries,
  ];
}
