// Service Worker — Production Caching Strategy
// Cache TTL: 1 year (365 days) for static 3D assets (Spline scene, WASM, JS chunks)
// Strategy: Cache-First for 3D assets, Network-First for HTML/API

const CACHE_NAME = "iteebot-static-v1";
const SPLINE_CACHE_NAME = "iteebot-spline-v1";

// Assets to pre-cache on install
const PRECACHE_ASSETS = ["/"];

// Cache-first patterns: match these URLs → serve from cache immediately
const CACHE_FIRST_PATTERNS = [
  /prod\.spline\.design/,          // Spline prod scene files
  /draft\.spline\.design/,         // Spline draft scene files
  /\.splinecode$/,                  // Spline scene files
  /\.wasm$/,                        // WebAssembly binaries
  /runtime-chunk-/,                 // Spline runtime JS chunks
  /runtime-DRACOLoader/,            // Draco decoder
  /runtime-webgpu/,                 // WebGPU runtime
  /runtime\.js/,                    // Spline main runtime
  /_next\/static\//,               // Next.js static assets (hashed, forever)
  /fonts\.gstatic\.com/,           // Google Fonts
  /fonts\.googleapis\.com/,        // Google Fonts CSS
];

// Long TTL: 1 year in seconds
const LONG_TTL_SECONDS = 365 * 24 * 60 * 60; // 31,536,000 seconds

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_ASSETS))
  );
  // Activate immediately — don't wait for old SW to be removed
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  // Remove old caches from previous SW versions
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME && key !== SPLINE_CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

/**
 * Returns true if the request URL matches any cache-first pattern
 */
function isCacheFirst(url) {
  return CACHE_FIRST_PATTERNS.some((pattern) => pattern.test(url));
}

/**
 * Check if a cached response is still fresh (within TTL)
 */
function isFresh(response, ttlSeconds) {
  if (!response) return false;
  const date = response.headers.get("sw-cached-at");
  if (!date) return true; // No timestamp → assume fresh (externally cached)
  const age = (Date.now() - parseInt(date, 10)) / 1000;
  return age < ttlSeconds;
}

/**
 * Wrap a response with a custom sw-cached-at header for TTL tracking
 */
async function stampResponse(response) {
  const cloned = response.clone();
  const headers = new Headers(cloned.headers);
  headers.set("sw-cached-at", Date.now().toString());
  const body = await cloned.arrayBuffer();
  return new Response(body, {
    status: cloned.status,
    statusText: cloned.statusText,
    headers,
  });
}

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = request.url;

  // Only handle GET requests
  if (request.method !== "GET") return;

  // Skip Chrome extension requests and non-HTTP(S)
  if (!url.startsWith("http")) return;

  if (isCacheFirst(url)) {
    // CACHE-FIRST strategy: serve stale, revalidate in background
    event.respondWith(
      caches.open(SPLINE_CACHE_NAME).then(async (cache) => {
        const cached = await cache.match(request);

        if (cached && isFresh(cached, LONG_TTL_SECONDS)) {
          // Serve from cache — no network hit
          return cached;
        }

        // Not in cache or stale → fetch and cache
        try {
          const networkResponse = await fetch(request);
          if (networkResponse.ok) {
            const stamped = await stampResponse(networkResponse);
            cache.put(request, stamped.clone());
            return stamped;
          }
          // If network fails but we have a cached copy, use it (stale-while-revalidate)
          return cached || networkResponse;
        } catch {
          // Offline: return cached copy even if stale
          return cached || new Response("Offline", { status: 503 });
        }
      })
    );
    return;
  }

  // For everything else: Network-first (HTML pages, API routes)
  // Just pass through — no interference
});
