"use client";

import React, { useState, useRef, useEffect, Component, type ReactNode } from "react";
import Spline from "@splinetool/react-spline";

const SPLINE_SCENE = "https://prod.spline.design/GEMQ6RSqvNA3853T/scene.splinecode";

interface SplineAppObject {
  name?: string;
  visible?: boolean;
  children?: SplineAppObject[];
  [key: string]: unknown;
}

interface SplineAppInstance {
  _canvas?: HTMLCanvasElement;
  _renderer?: {
    pipeline?: { setWatermark?: (val: unknown) => void };
    setWatermark?: (val: unknown) => void;
    domElement?: HTMLElement & { _splineWatermark?: { remove?: () => void } };
  };
  _scene?: {
    children?: SplineAppObject[];
  };
  findObjectByName?: (name: string) => SplineAppObject | undefined;
}

interface ErrorBoundaryProps {
  fallback: ReactNode;
  onError?: () => void;
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class SplineErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.warn("Spline WebGL failed to initialize:", error?.message || error);
    this.props.onError?.();
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function isWebGLAvailable(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    return Boolean(gl);
  } catch {
    return false;
  }
}

/** Spline injects a fixed-position "Built with Spline" badge into document.body.
 *  We remove it using every known selector + periodic polling as a fallback. */
function purgeSplineBadges() {
  if (typeof document === "undefined") return;

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

  document.querySelectorAll("a").forEach((a) => {
    const href = a.getAttribute("href") ?? "";
    const text = (a.textContent ?? "").toLowerCase();
    if (href.includes("spline") || text.includes("spline") || text.includes("built with")) {
      a.remove();
    }
  });

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
  const [isSupported] = useState<boolean>(() => isWebGLAvailable());
  const containerRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void)[]>([]);

  useEffect(() => {
    if (!isSupported) return;

    const container = containerRef.current;
    if (!container) return;

    const patchCanvas = (canvas: HTMLCanvasElement) => {
      canvas.style.pointerEvents = "none";
      canvas.style.touchAction = "none";
      const cleanup = disableCanvasScrollInterception(canvas);
      cleanupRef.current.push(cleanup);
    };

    container.querySelectorAll<HTMLCanvasElement>("canvas").forEach(patchCanvas);

    const observer = new MutationObserver(() => {
      container.querySelectorAll<HTMLCanvasElement>("canvas").forEach(patchCanvas);
      purgeSplineBadges();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    const pollInterval = setInterval(purgeSplineBadges, 500);
    const stopPoll = setTimeout(() => clearInterval(pollInterval), 15_000);

    return () => {
      observer.disconnect();
      clearInterval(pollInterval);
      clearTimeout(stopPoll);
      cleanupRef.current.forEach((fn) => fn());
      cleanupRef.current = [];
    };
  }, [isSupported]);

  if (isSupported === false || hasError) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
      style={{ isolation: "isolate" }}
    >
      {!isLoaded && !hasError && isSupported && <LoadingScreen />}

      <div
        className={`w-full h-full transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ pointerEvents: "none", width: "100%", height: "100%" }}
      >
        {isSupported && (
          <SplineErrorBoundary
            fallback={null}
            onError={() => setHasError(true)}
          >
            <Spline
              scene={SPLINE_SCENE}
              style={{ width: "100%", height: "100%", pointerEvents: "none" }}
              onLoad={(splineApp: SplineAppInstance) => {
                setIsLoaded(true);
                try {
                  if (splineApp?._canvas) {
                    const c = splineApp._canvas;
                    c.style.pointerEvents = "none";
                    c.style.touchAction = "none";
                    const cleanup = disableCanvasScrollInterception(c);
                    cleanupRef.current.push(cleanup);
                  }
                  const renderer = splineApp?._renderer;
                  renderer?.pipeline?.setWatermark?.(null);
                  renderer?.setWatermark?.(null);
                  if (renderer?.domElement) {
                    try {
                      renderer.domElement._splineWatermark?.remove?.();
                    } catch {}
                  }
                  purgeSplineBadges();

                  const logoObj = splineApp.findObjectByName?.("logo");
                  if (logoObj) logoObj.visible = false;
                  const traverse = (obj?: SplineAppObject) => {
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
          </SplineErrorBoundary>
        )}
      </div>
    </div>
  );
}
