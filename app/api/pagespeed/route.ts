import { NextResponse } from "next/server";
import { getLivePageSpeedMetrics } from "@/lib/pagespeed";
import { rateLimit, getClientIdentifier } from "@/lib/utils/rateLimit";
import { portfolioItems } from "@/lib/data/portfolio";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const url = searchParams.get("url");
    const fallbackLcp = searchParams.get("fallbackLcp") || "1.2s";
    const fallbackSize = searchParams.get("fallbackSize") || "320KB";

    if (!url) {
      return NextResponse.json(
        { error: "Missing url parameter" },
        { status: 400 }
      );
    }

    // Validate request host against catalog-owned host allowlist
    let targetHostname = "";
    try {
      targetHostname = new URL(url).hostname;
    } catch {
      return NextResponse.json(
        { error: "Invalid URL format" },
        { status: 400 }
      );
    }

    const allowedHosts = new Set<string>();
    portfolioItems.forEach((item) => {
      if (item.deployedUrl) {
        try {
          allowedHosts.add(new URL(item.deployedUrl).hostname);
        } catch {}
      }
      if (item.websiteUrl) {
        try {
          allowedHosts.add(new URL(item.websiteUrl).hostname);
        } catch {}
      }
    });

    const isAllowed = Array.from(allowedHosts).some((allowedHost) => {
      const cleanAllowed = allowedHost.replace(/^www\./, "").toLowerCase();
      const cleanTarget = targetHostname.replace(/^www\./, "").toLowerCase();
      return cleanAllowed === cleanTarget;
    });

    if (!isAllowed) {
      return NextResponse.json(
        { error: "Forbidden: Host not in allowlist" },
        { status: 403 }
      );
    }

    // Rate limiting
    const identifier = getClientIdentifier(request);
    const rateCheck = rateLimit(identifier, 30, 60 * 1000); // 30 requests per minute

    if (!rateCheck.success) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const metrics = await getLivePageSpeedMetrics(url, {
      lcp: fallbackLcp,
      size: fallbackSize,
    });

    // Set high-performance Cache-Control header:
    // s-maxage=86400 instructs the Vercel Edge Network to cache this response globally for 24 hours.
    // stale-while-revalidate allows serving stale data in background while fetching fresh data.
    return NextResponse.json(metrics, {
      headers: {
        "Cache-Control":
          "public, max-age=3600, s-maxage=86400, stale-while-revalidate=600",
      },
    });
  } catch (error) {
    console.error("PageSpeed API route error:", error);
    return NextResponse.json(
      { lcp: "1.2s", size: "320KB", error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
