"use client";

export type AnalyticsEventName = "lead_offer_view" | "cta_click" | "lead_form_start" | "lead_form_step_1_complete" | "lead_form_step_2_view" | "lead_form_submit" | "lead_form_error" | "whatsapp_click" | "phone_click" | "email_click" | "booking_click" | "calculator_complete" | "pms_filter_use" | "pms_strategy_view" | "sample_deliverable_view";
export type AnalyticsContext = { page_path?: string; intent?: string; keyword_cluster?: string; lead_offer?: string; cta_variant?: string; source_component?: string; service?: string; result_band?: string };
const piiKeys = new Set(["name", "email", "phone", "message", "notes", "full_name"]);

export function sanitizeAnalyticsParams(params: Record<string, unknown> = {}) {
  return Object.fromEntries(Object.entries(params).filter(([key, value]) => !piiKeys.has(key.toLowerCase()) && ["string", "number", "boolean"].includes(typeof value))) as Record<string, string | number | boolean>;
}

export function trackAnalyticsEvent(eventName: AnalyticsEventName, params: AnalyticsContext & Record<string, unknown> = {}) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", eventName, sanitizeAnalyticsParams({ ...params, page_path: params.page_path || window.location.pathname }));
}

declare global { interface Window { gtag?: (...args: unknown[]) => void } }
