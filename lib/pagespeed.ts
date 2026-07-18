export interface PerformanceMetrics {
  lcp: string;
  size: string;
  isLive: boolean;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getLivePageSpeedMetrics(
  deployedUrl?: string,
  fallbackMetrics?: { lcp: string; size: string }
): Promise<PerformanceMetrics> {
  const fallback = fallbackMetrics || { lcp: "1.2s", size: "320KB" };

  if (!deployedUrl) {
    return { ...fallback, isLive: false };
  }

  // Ensure it is a valid, scannable http/https web link
  if (
    !deployedUrl.startsWith("http://") &&
    !deployedUrl.startsWith("https://")
  ) {
    return { ...fallback, isLive: false };
  }

  // Filter out app store downloads or file download release links
  if (
    deployedUrl.includes("apps.apple.com") ||
    deployedUrl.includes("play.google.com") ||
    deployedUrl.endsWith(".apk") ||
    deployedUrl.endsWith(".ipa")
  ) {
    return { ...fallback, isLive: false };
  }

  let apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
    deployedUrl
  )}&category=performance`;

  if (process.env.PAGESPEED_API_KEY) {
    apiUrl += `&key=${process.env.PAGESPEED_API_KEY}`;
  }

  const attempts = 3;
  for (let i = 0; i < attempts; i++) {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 15000); // 15-second per-attempt timeout

    try {
      const res = await fetch(apiUrl, {
        next: { revalidate: 86400 },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (res.status === 429) {
        // Enforce random backoff (2000ms to 6000ms) to spread out parallel Next.js worker threads
        const waitMs = Math.floor(Math.random() * 4000) + 2000;
        console.warn(
          `PageSpeed API rate limited (429) for ${deployedUrl}. Retrying in ${waitMs}ms (attempt ${
            i + 1
          }/${attempts})...`
        );
        await delay(waitMs);
        continue;
      }

      if (!res.ok) {
        throw new Error(`PageSpeed API responded with status ${res.status}`);
      }

      const data = await res.json();
      const audits = data.lighthouseResult?.audits;

      if (!audits) {
        return { ...fallback, isLive: false };
      }

      const lcpMs = audits["largest-contentful-paint"]?.numericValue;
      const lcp = lcpMs ? `${(lcpMs / 1000).toFixed(1)}s` : fallback.lcp;

      const bytes = audits["total-byte-weight"]?.numericValue;
      let size = fallback.size;
      if (bytes) {
        size =
          bytes > 1024 * 1024
            ? `${(bytes / (1024 * 1024)).toFixed(1)}MB`
            : `${(bytes / 1024).toFixed(0)}KB`;
      }

      return { lcp, size, isLive: true };
    } catch (error: unknown) {
      clearTimeout(timeoutId);
      console.error(
        `PageSpeed check failed for ${deployedUrl} (attempt ${
          i + 1
        }/${attempts}):`,
        error
      );
      if (i === attempts - 1) {
        return { ...fallback, isLive: false };
      }
      await delay(2000);
    }
  }

  return { ...fallback, isLive: false };
}
