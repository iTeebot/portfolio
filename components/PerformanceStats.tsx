"use client";

import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

interface PerformanceStatsProps {
  url?: string;
  fallbackLcp: string;
  fallbackSize: string;
}

export default function PerformanceStats({
  url,
  fallbackLcp,
  fallbackSize,
}: PerformanceStatsProps) {
  const [metrics, setMetrics] = useState<{ lcp: string; size: string } | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;

    async function fetchMetrics() {
      if (!url) {
        if (isMounted) {
          setMetrics({ lcp: fallbackLcp, size: fallbackSize });
          setIsLoading(false);
        }
        return;
      }

      try {
        const queryUrl = `/api/pagespeed?url=${encodeURIComponent(
          url
        )}&fallbackLcp=${encodeURIComponent(
          fallbackLcp
        )}&fallbackSize=${encodeURIComponent(fallbackSize)}`;
        const res = await fetch(queryUrl);
        if (!res.ok) throw new Error("Failed to load metrics");
        const data = await res.json();
        if (isMounted) {
          setMetrics({ lcp: data.lcp, size: data.size });
        }
      } catch (err) {
        console.error("Error loading pagespeed metrics client-side:", err);
        if (isMounted) {
          setMetrics({ lcp: fallbackLcp, size: fallbackSize });
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchMetrics();

    return () => {
      isMounted = false;
    };
  }, [url, fallbackLcp, fallbackSize]);

  if (isLoading) {
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center text-sm">
          <span className="text-zinc-500">LCP Speed:</span>
          <div className="h-4 w-12 bg-zinc-200 dark:bg-zinc-800 animate-pulse rounded-md" />
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="text-zinc-500">Page Weight:</span>
          <div className="h-4 w-16 bg-zinc-200 dark:bg-zinc-800 animate-pulse rounded-md" />
        </div>
        <div className="flex items-center gap-1.5 text-xs text-zinc-400 dark:text-zinc-500 justify-end pt-1">
          <Loader2 className="w-3 h-3 animate-spin text-indigo-500" />
          <span>Measuring live core vitals...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between text-sm">
        <span className="text-zinc-500">LCP Speed:</span>
        <span className="font-semibold text-zinc-900 dark:text-white">
          {metrics?.lcp}
        </span>
      </div>
      <div className="flex justify-between text-sm">
        <span className="text-zinc-500">Page Weight:</span>
        <span className="font-semibold text-zinc-900 dark:text-white">
          {metrics?.size}
        </span>
      </div>
      <div className="text-right text-[10px] text-zinc-400 dark:text-zinc-500 pt-1">
        Live metric cached (24h)
      </div>
    </div>
  );
}
