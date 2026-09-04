import { z } from "zod";
import { leadIntents } from "./lead-intents";

const nullableText = (max: number) => z.string().trim().max(max).nullable().optional();

export const leadSubmissionSchema = z.object({
  request_id: z.string().uuid(),
  name: z.string().trim().min(1).max(100),
  phone: z.string().trim().regex(/^\+?[0-9][0-9\s()-]{7,19}$/),
  email: z.union([z.string().trim().email().max(255), z.literal(""), z.null()]).optional(),
  intent: z.enum(Object.keys(leadIntents) as [keyof typeof leadIntents, ...(keyof typeof leadIntents)[]]),
  keyword_cluster: z.string().trim().min(1).max(80),
  lead_offer: z.string().trim().min(1).max(160),
  page_type: z.enum(["home", "service", "tool", "research", "audience"]),
  cta_variant: z.string().trim().min(1).max(100),
  source: z.string().trim().min(1).max(100),
  service: nullableText(120),
  portfolio_size: z.string().trim().min(1).max(80),
  resident_status: z.enum(["resident", "nri"]),
  call_time: nullableText(80),
  message: nullableText(1000),
  qualification_key: nullableText(80),
  qualification_value: nullableText(160),
  privacy_consent: z.literal(true),
  consented_at: z.string().datetime(),
  form_started_at: z.string().datetime(),
  website: z.string().max(0).optional().default(""),
  compared_strategies: z.array(z.string().trim().max(120)).max(3).optional(),
  attribution: z.object({
    first_touch: z.record(z.string(), z.string().nullable()),
    last_touch: z.record(z.string(), z.string().nullable()),
    page_path: z.string().max(500).nullable(),
  }),
}).superRefine((value, context) => {
  const started = Date.parse(value.form_started_at);
  const consented = Date.parse(value.consented_at);
  if (!Number.isFinite(started) || !Number.isFinite(consented) || consented - started < 1500) {
    context.addIssue({ code: "custom", path: ["form_started_at"], message: "Form completed too quickly" });
  }
});

export type ValidLeadSubmission = z.infer<typeof leadSubmissionSchema>;

export function normalizePhone(value: string) {
  const plus = value.trim().startsWith("+") ? "+" : "";
  return `${plus}${value.replace(/\D/g, "")}`;
}

export function toLeadRow(lead: ValidLeadSubmission) {
  return {
    client_request_id: lead.request_id,
    name: lead.name.trim(),
    phone: normalizePhone(lead.phone),
    email: lead.email?.trim().toLowerCase() || null,
    portfolio_size: lead.portfolio_size,
    is_nri: lead.resident_status === "nri",
    call_time: lead.call_time || null,
    notes: lead.message || null,
    source: lead.source,
    service: lead.service || null,
    intent: lead.intent,
    lead_offer: lead.lead_offer,
    keyword_cluster: lead.keyword_cluster,
    page_type: lead.page_type,
    cta_variant: lead.cta_variant,
    qualification_key: lead.qualification_key || null,
    qualification_value: lead.qualification_value || null,
    privacy_consent: lead.privacy_consent,
    consented_at: lead.consented_at,
    consent_scope: "website lead follow-up",
    landing_page: lead.attribution.first_touch.landing_page || null,
    page_path: lead.attribution.page_path,
    referrer: lead.attribution.last_touch.referrer || null,
    utm_source: lead.attribution.last_touch.utm_source || lead.attribution.first_touch.utm_source || null,
    utm_medium: lead.attribution.last_touch.utm_medium || lead.attribution.first_touch.utm_medium || null,
    utm_campaign: lead.attribution.last_touch.utm_campaign || lead.attribution.first_touch.utm_campaign || null,
    utm_term: lead.attribution.last_touch.utm_term || lead.attribution.first_touch.utm_term || null,
    utm_content: lead.attribution.last_touch.utm_content || lead.attribution.first_touch.utm_content || null,
    first_touch: lead.attribution.first_touch,
    last_touch: lead.attribution.last_touch,
    compared_strategies: lead.compared_strategies || [],
  };
}
