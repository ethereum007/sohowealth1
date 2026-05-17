import { supabase } from "@/integrations/supabase/client";
import type { LeadAttribution } from "@/lib/lead-attribution";

type LeadPayload = {
  name: string;
  phone: string;
  email: string;
  portfolio_size: string;
  is_nri: boolean;
  call_time?: string | null;
  referral_source?: string | null;
  source?: string | null;
  notes?: string | null;
} & Partial<LeadAttribution>;

function isSchemaCacheColumnError(error: { message?: string } | null) {
  return Boolean(error?.message?.includes("schema cache") && error.message.includes("portfolio_leads"));
}

function stripAttribution(payload: LeadPayload) {
  const basePayload = { ...payload };
  delete basePayload.landing_page;
  delete basePayload.page_path;
  delete basePayload.referrer;
  delete basePayload.utm_source;
  delete basePayload.utm_medium;
  delete basePayload.utm_campaign;
  delete basePayload.utm_term;
  delete basePayload.utm_content;
  delete basePayload.notes;
  return basePayload;
}

export async function submitPortfolioLead(payload: LeadPayload) {
  let insert = await supabase.from("portfolio_leads").insert([payload]);
  if (insert.error && isSchemaCacheColumnError(insert.error)) {
    insert = await supabase.from("portfolio_leads").insert([stripAttribution(payload)]);
  }

  if (insert.error) {
    return { error: insert.error };
  }

  const emailResponse = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!emailResponse.ok) {
    const result = await emailResponse.json().catch(() => ({}));
    console.warn("[submitPortfolioLead] Lead saved but email notification failed", result);
  }

  return { error: null };
}
