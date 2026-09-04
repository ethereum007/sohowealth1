"use client";

import { trackAnalyticsEvent, type AnalyticsEventName } from "@/lib/analytics/events";
export function trackEvent(eventName: AnalyticsEventName, params?: Record<string, string | number | boolean>) { trackAnalyticsEvent(eventName, params); }

let ctaListenerAttached = false;
export function initCtaTracking() {
  if (ctaListenerAttached) return;
  ctaListenerAttached = true;
  document.addEventListener("click", (event) => {
    const clicked = event.target as HTMLElement;
    const link = clicked.closest<HTMLAnchorElement>("a[href]");
    const explicit = clicked.closest<HTMLElement>("[data-analytics-event]");
    if (explicit) {
      trackAnalyticsEvent((explicit.dataset.analyticsEvent || "cta_click") as AnalyticsEventName, { cta_variant: explicit.dataset.analyticsLabel, source_component: explicit.dataset.analyticsLocation });
      return;
    }
    if (!link) return;
    const label = link.dataset.analyticsLabel || link.getAttribute("aria-label") || link.textContent?.trim().slice(0, 80) || "link";
    if (link.href.includes("wa.me/")) trackAnalyticsEvent("whatsapp_click", { cta_variant: label, source_component: link.dataset.analyticsLocation });
    else if (link.href.startsWith("tel:")) trackAnalyticsEvent("phone_click", { cta_variant: label, source_component: link.dataset.analyticsLocation });
    else if (link.href.startsWith("mailto:")) trackAnalyticsEvent("email_click", { cta_variant: label, source_component: link.dataset.analyticsLocation });
    else if (link.dataset.analyticsBooking === "true") trackAnalyticsEvent("booking_click", { cta_variant: label, source_component: link.dataset.analyticsLocation });
  }, { passive: true });
}
