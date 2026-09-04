import type { LeadSubmission, LeadSubmitResult } from "@/lib/leads/types";

export async function submitPortfolioLead(payload: LeadSubmission): Promise<{ error: null | Error; result?: LeadSubmitResult }> {
  try {
    const response = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    const result = await response.json().catch(() => ({})) as LeadSubmitResult;
    if (!response.ok || !result.saved) return { error: new Error(result.error || "We could not save your request. Please try again or use WhatsApp."), result };
    return { error: null, result };
  } catch {
    return { error: new Error("We could not save your request. Please try again or use WhatsApp.") };
  }
}
