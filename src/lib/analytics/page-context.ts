import type { LeadIntent } from "@/lib/leads/types";
import { getLeadIntent } from "@/lib/leads/lead-intents";

export function getPageContext(intent: LeadIntent, canonicalPath: string) {
  const config = getLeadIntent(intent);
  return { cluster: config.keywordCluster, pageType: config.pageType, intent: config.intent, audience: intent === "nri-review" ? "NRI" : intent.includes("founder") ? "Founder" : "Investor", offer: config.leadOffer, canonicalPath };
}
