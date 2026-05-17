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
    const clicked = e.target as HTMLElement;
    const link = clicked.closest<HTMLAnchorElement>("a[href]");
    if (link) {
      const href = link.href;
      const label = link.textContent?.trim().slice(0, 80) || link.getAttribute("aria-label") || "unknown";
      if (href.includes("wa.me/")) {
        trackEvent("whatsapp_click", { cta_label: label, cta_href: href });
      } else if (href.startsWith("tel:")) {
        trackEvent("phone_click", { cta_label: label, cta_href: href });
      } else if (href.startsWith("mailto:")) {
        trackEvent("email_click", { cta_label: label, cta_href: href });
      }
    }

    const target = clicked.closest<HTMLElement>(
      "[class*='bg-gradient-gold'], [style*='background-color: rgb(201, 168, 76)'], [style*='#C9A84C']"
    );
    if (target) {
      const label = target.textContent?.trim().slice(0, 60) || "unknown";
      trackEvent("cta_click", { cta_label: label });
    }
  });
}
