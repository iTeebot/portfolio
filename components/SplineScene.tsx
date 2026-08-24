"use client";

import { useState, useRef, useEffect } from "react";
import Spline from "@splinetool/react-spline";

const SPLINE_SCENE = "https://prod.spline.design/GEMQ6RSqvNA3853T/scene.splinecode";

/** Spline injects a fixed-position "Built with Spline" badge into document.body.
 *  Their logo is a green star almost identical to Trustpilot's.
 *  We nuke it using every known selector + periodic polling as a fallback. */
function purgeSplineBadges() {
  // All known Spline watermark selectors
  const selectors = [
    'a[href*="spline.design"]',
    'a[href*="spline"]',
    '#spline-watermark',
    '.spline-watermark',
    '[class*="spline-watermark"]',
    '[id*="spline-watermark"]',
    '[data-spline]',
  ];
  document.querySelectorAll(selectors.join(",")).forEach((el) => el.remove());

  // Also catch any <a> whose visible text mentions "spline" or "built with"
  document.querySelectorAll("a").forEach((a) => {
    const href = a.getAttribute("href") ?? "";
    const text = (a.textContent ?? "").toLowerCase();
    if (href.includes("spline") || text.includes("spline") || text.includes("built with")) {
      a.remove();
    }
  });

  // Nuke any fixed-position div that contains only one child anchor pointing to spline
  document.querySelectorAll("div").forEach((div) => {
    const style = window.getComputedStyle(div);
    if (style.position === "fixed" || style.position === "absolute") {
      const anchors = div.querySelectorAll("a");
      if (anchors.length === 1 && (anchors[0].href?.includes("spline") || (div.textContent ?? "").toLowerCase().includes("spline"))) {
        div.remove();
      }
    }
  });
}

/**
 * Attaches capture-phase wheel/touch interceptors to a canvas element.
 * CSS pointer-events:none does NOT stop wheel/touch events — only click-based
 * events. We must intercept at the capture phase to prevent Spline from
 * swallowing scroll and pass it up to the document.
 */
function disableCanvasScrollInterception(canvas: HTMLCanvasElement) {
  const wheelHandler = (e: WheelEvent) => {
    e.stopImmediatePropagation();
    const cloned = new WheelEvent("wheel", {
      bubbles: true,
      cancelable: true,
      deltaX: e.deltaX,
      deltaY: e.deltaY,
      deltaZ: e.deltaZ,
      deltaMode: e.deltaMode,
      clientX: e.clientX,
      clientY: e.clientY,
      ctrlKey: e.ctrlKey,
      shiftKey: e.shiftKey,
    });
    canvas.parentElement?.dispatchEvent(cloned);
  };

  const touchHandler = (e: TouchEvent) => {
    e.stopImmediatePropagation();
  };

  canvas.addEventListener("wheel", wheelHandler, { capture: true, passive: true });
  canvas.addEventListener("touchstart", touchHandler, { capture: true, passive: true });
  canvas.addEventListener("touchmove", touchHandler, { capture: true, passive: true });

  return () => {
    canvas.removeEventListener("wheel", wheelHandler, { capture: true });
    canvas.removeEventListener("touchstart", touchHandler, { capture: true });
    canvas.removeEventListener("touchmove", touchHandler, { capture: true });
  };
}

function LoadingScreen() {
  return (
    <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
      <div className="w-8 h-8 border-2 border-white/40 border-t-white/90 rounded-full animate-spin" />
    </div>
  );
}

export default function SplineScene() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void)[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const patchCanvas = (canvas: HTMLCanvasElement) => {
      canvas.style.pointerEvents = "none";
      canvas.style.touchAction = "none";
      const cleanup = disableCanvasScrollInterception(canvas);
      cleanupRef.current.push(cleanup);
    };

    // Patch already-present canvases
    container.querySelectorAll<HTMLCanvasElement>("canvas").forEach(patchCanvas);

    // MutationObserver: watch whole document for Spline badge injection
    const observer = new MutationObserver(() => {
      container.querySelectorAll<HTMLCanvasElement>("canvas").forEach(patchCanvas);
      purgeSplineBadges();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Polling fallback — Spline sometimes delays badge injection past mutation events
    const pollInterval = setInterval(purgeSplineBadges, 500);
    // Stop polling after 15 seconds (scene is fully loaded by then)
    const stopPoll = setTimeout(() => clearInterval(pollInterval), 15_000);

    return () => {
      observer.disconnect();
      clearInterval(pollInterval);
      clearTimeout(stopPoll);
      cleanupRef.current.forEach((fn) => fn());
      cleanupRef.current = [];
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      style={{ isolation: "isolate" }}
    >
      {!isLoaded && !hasError && <LoadingScreen />}

      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <p className="text-zinc-600 dark:text-zinc-500 text-xs tracking-widest uppercase">
            3D Unavailable
          </p>
        </div>
      ) : (
        <div
          className={`w-full h-full transition-opacity duration-1000 ${
            isLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ pointerEvents: "none", width: "100%", height: "100%" }}
        >
          <Spline
            scene={SPLINE_SCENE}
            style={{ width: "100%", height: "100%", pointerEvents: "none" }}
            onLoad={(splineApp: any) => {
              setIsLoaded(true);
              try {
                // Kill pointer events on Spline's canvas
                if (splineApp?._canvas) {
                  const c = splineApp._canvas as HTMLCanvasElement;
                  c.style.pointerEvents = "none";
                  c.style.touchAction = "none";
                  const cleanup = disableCanvasScrollInterception(c);
                  cleanupRef.current.push(cleanup);
                }
                // Remove WebGL watermark via runtime API (all known paths)
                const renderer = splineApp?._renderer;
                renderer?.pipeline?.setWatermark?.(null);
                renderer?.setWatermark?.(null);
                if (renderer?.domElement) {
                  // Also null out any watermark property directly
                  try { renderer.domElement._splineWatermark?.remove?.(); } catch {}
                }
                // Run badge purge immediately after load
                purgeSplineBadges();

                // Hide logo/NEXBOT text
                const logoObj = splineApp.findObjectByName?.("logo");
                if (logoObj) logoObj.visible = false;
                const traverse = (obj: any) => {
                  if (obj?.name?.toLowerCase() === "logo") obj.visible = false;
                  obj?.children?.forEach(traverse);
                };
                splineApp?._scene?.children?.forEach(traverse);
              } catch (e) {
                console.warn("Spline cleanup:", e);
              }
            }}
            onError={() => setHasError(true)}
          />
        </div>
      )}
    </div>
  );
}
