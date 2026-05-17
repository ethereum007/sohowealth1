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

export async function submitPortfolioLead(payload: LeadPayload) {
  const response = await fetch("/api/leads", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok) {
    return {
      error: {
        message: result.error || "Could not submit lead. Please WhatsApp us.",
      },
    };
  }

  return { error: null };
}
