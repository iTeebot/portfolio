"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Home } from "lucide-react";
import JsonLd, { getBreadcrumbSchema } from "./JsonLd";

export default function Breadcrumbs() {
  const pathname = usePathname();

  // Don't render breadcrumbs on homepage
  if (pathname === "/") return null;

  const pathnames = pathname.split("/").filter((x) => x);

  // Helper to format path slugs into readable titles
  const formatSlug = (slug: string) => {
    // Check specific formatting mapping if needed
    const specialMappings: Record<string, string> = {
      "ai-automation": "AI Automation",
      "crm": "CRM",
      "erp": "ERP",
      "pos": "POS",
      "lms": "LMS",
      "nextjs-development": "Next.js Development",
      "ui-ux-design": "UI/UX Design",
    };

    if (specialMappings[slug.toLowerCase()]) {
      return specialMappings[slug.toLowerCase()];
    }

    return slug
      .replace(/-/g, " ")
      .replace(/\b[a-z]/g, (char) => char.toUpperCase());
  };

  const breadcrumbItems = [
    { name: "Home", url: "https://www.iteebot.com" },
    ...pathnames.map((value, index) => {
      const url = `https://www.iteebot.com/${pathnames.slice(0, index + 1).join("/")}`;
      return {
        name: formatSlug(value),
        url,
      };
    }),
  ];

  return (
    <>
      {/* Schema Breadcrumb List */}
      <JsonLd data={getBreadcrumbSchema(breadcrumbItems)} />

      {/* Visual Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="py-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm text-zinc-500 dark:text-zinc-400">
          <li>
            <Link
              href="/"
              className="hover:text-zinc-900 dark:hover:text-white transition-colors flex items-center gap-1"
            >
              <Home className="w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>

          {pathnames.map((value, index) => {
            const last = index === pathnames.length - 1;
            const to = `/${pathnames.slice(0, index + 1).join("/")}`;

            return (
              <li key={to} className="flex items-center space-x-2">
                <ChevronRight className="w-4 h-4 text-zinc-300 dark:text-zinc-700 flex-shrink-0" />
                {last ? (
                  <span className="font-semibold text-zinc-900 dark:text-white" aria-current="page">
                    {formatSlug(value)}
                  </span>
                ) : (
                  <Link
                    href={to}
                    className="hover:text-zinc-900 dark:hover:text-white transition-colors capitalize"
                  >
                    {formatSlug(value)}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
