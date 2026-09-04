import type { LeadAttribution } from "@/lib/lead-attribution";

export type LeadIntent =
  | "portfolio-review"
  | "pms-comparison"
  | "retirement-review"
  | "nri-review"
  | "rsu-review"
  | "sif-vs-pms"
  | "founder-wealth-map"
  | "family-office-research"
  | "hyderabad-consultation";

export type QualificationField = {
  key: "pms_status" | "retirement_horizon" | "nri_region" | "rsu_concentration" | "meeting_preference";
  label: string;
  options: string[];
};

export type LeadIntentConfig = {
  intent: LeadIntent;
  keywordCluster: string;
  leadOffer: string;
  heading: string;
  supportingCopy: string;
  primaryButton: string;
  successHeading: string;
  successCopy: string;
  source: string;
  pageType: "home" | "service" | "tool" | "research" | "audience";
  portfolioOptions?: string[];
  qualification?: QualificationField;
};

export type LeadSubmission = {
  request_id: string;
  name: string;
  phone: string;
  email?: string | null;
  intent: LeadIntent;
  keyword_cluster: string;
  lead_offer: string;
  page_type: LeadIntentConfig["pageType"];
  cta_variant: string;
  source: string;
  service?: string | null;
  portfolio_size: string;
  resident_status: "resident" | "nri";
  call_time?: string | null;
  message?: string | null;
  qualification_key?: QualificationField["key"] | null;
  qualification_value?: string | null;
  privacy_consent: true;
  consented_at: string;
  form_started_at: string;
  website?: string;
  compared_strategies?: string[];
  attribution: LeadAttribution;
};

export type LeadSubmitResult = {
  saved: boolean;
  duplicate?: boolean;
  notificationDelivered?: boolean;
  requestId?: string;
  error?: string;
};
