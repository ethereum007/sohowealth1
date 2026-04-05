"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(eventName: string, params?: Record<string, string | number | boolean>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, {
      ...params,
      page_path: window.location.pathname,
    });
  }
}

let ctaListenerAttached = false;
export function initCtaTracking() {
  if (ctaListenerAttached) return;
  ctaListenerAttached = true;
  document.addEventListener("click", (e) => {
    const target = (e.target as HTMLElement).closest<HTMLElement>(
      "[class*='bg-gradient-gold'], [style*='background-color: rgb(201, 168, 76)'], [style*='#C9A84C']"
    );
    if (target) {
      const label = target.textContent?.trim().slice(0, 60) || "unknown";
      trackEvent("cta_click", { cta_label: label });
    }
  });
}
