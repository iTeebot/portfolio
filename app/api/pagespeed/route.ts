import { NextResponse } from "next/server";
import { getLivePageSpeedMetrics } from "@/lib/pagespeed";

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
