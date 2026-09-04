import type { LeadIntent, LeadIntentConfig } from "./types";

const defaultPortfolioOptions = ["₹25L – ₹50L", "₹50L – ₹1Cr", "₹1Cr – ₹5Cr", "₹5Cr+"];

export const leadIntents: Record<LeadIntent, LeadIntentConfig> = {
  "portfolio-review": {
    intent: "portfolio-review", keywordCluster: "core", leadOffer: "Private portfolio review",
    heading: "Book a Private Portfolio Review", supportingCopy: "Review allocation, concentration, costs and goal fit in one confidential conversation.",
    primaryButton: "Request My Portfolio Review", successHeading: "Request received", successCopy: "Kiran or the SoHo Wealth team will contact you within one business day.",
    source: "portfolio-review", pageType: "service", portfolioOptions: defaultPortfolioOptions,
  },
  "pms-comparison": {
    intent: "pms-comparison", keywordCluster: "pms", leadOffer: "Three-strategy PMS comparison",
    heading: "Compare PMS Strategies in Your Portfolio", supportingCopy: "Review manager process, drawdowns, fees, tax friction and overlap before allocating.",
    primaryButton: "Compare Three PMS Strategies for My Portfolio", successHeading: "Request received", successCopy: "We will contact you within one business day to understand the PMS shortlist and portfolio context.",
    source: "pms", pageType: "research", portfolioOptions: ["₹50L – ₹1Cr", "₹1Cr – ₹5Cr", "₹5Cr+"],
    qualification: { key: "pms_status", label: "What are you reviewing?", options: ["A new PMS allocation", "An existing PMS", "PMS versus SIF or mutual funds"] },
  },
  "retirement-review": {
    intent: "retirement-review", keywordCluster: "retirement", leadOffer: "Retirement gap review",
    heading: "Review Your Retirement Gap With Kiran", supportingCopy: "Turn calculator assumptions into a practical contribution and retirement-income discussion.",
    primaryButton: "Review My Retirement Gap With Kiran", successHeading: "Request received", successCopy: "We will contact you within one business day to review your retirement assumptions.",
    source: "retirement", pageType: "service", portfolioOptions: defaultPortfolioOptions,
    qualification: { key: "retirement_horizon", label: "Target retirement horizon", options: ["Under 5 years", "5–10 years", "10–20 years", "20+ years"] },
  },
  "nri-review": {
    intent: "nri-review", keywordCluster: "nri", leadOffer: "NRI portfolio check",
    heading: "Book an NRI Portfolio Check", supportingCopy: "Coordinate India investments, accounts, property and return-to-India questions in English or Telugu.",
    primaryButton: "Book a Telugu or English NRI Portfolio Check", successHeading: "Request received", successCopy: "We will contact you within one business day and can continue in English or Telugu.",
    source: "nri", pageType: "audience", portfolioOptions: defaultPortfolioOptions,
    qualification: { key: "nri_region", label: "Current country or region", options: ["USA / Canada", "UAE / Middle East", "UK / Europe", "Singapore / Asia-Pacific", "Returning to India", "Other"] },
  },
  "rsu-review": {
    intent: "rsu-review", keywordCluster: "rsu", leadOffer: "Employer-stock concentration review",
    heading: "Review Your Employer-Stock Concentration", supportingCopy: "Put the next vest, taxes, liquidity and diversification into a whole-portfolio decision.",
    primaryButton: "Review My Employer-Stock Concentration", successHeading: "Request received", successCopy: "We will contact you within one business day to understand the concentration and next vest decision.",
    source: "rsu", pageType: "tool", portfolioOptions: defaultPortfolioOptions,
    qualification: { key: "rsu_concentration", label: "Employer stock as a share of investments", options: ["Under 10%", "10–25%", "25–50%", "More than 50%", "Not sure"] },
  },
  "sif-vs-pms": {
    intent: "sif-vs-pms", keywordCluster: "sif", leadOffer: "SIF versus PMS fit check",
    heading: "Check Whether SIF or PMS Fits Better", supportingCopy: "Compare structure, minimums, liquidity, risk and portfolio role before choosing a route.",
    primaryButton: "Check Whether SIF or PMS Fits Better", successHeading: "Request received", successCopy: "We will contact you within one business day to understand the allocation decision.",
    source: "sif", pageType: "service", portfolioOptions: ["₹10L – ₹25L", ...defaultPortfolioOptions],
  },
  "founder-wealth-map": {
    intent: "founder-wealth-map", keywordCluster: "audience", leadOffer: "Business-to-personal wealth map",
    heading: "Build Your Business-to-Personal Wealth Map", supportingCopy: "Map business concentration, personal liquidity, goals and investment structures together.",
    primaryButton: "Build My Business-to-Personal Wealth Map", successHeading: "Request received", successCopy: "Kiran will contact you within one business day to understand the founder-wealth context.",
    source: "founder", pageType: "audience", portfolioOptions: defaultPortfolioOptions,
  },
  "family-office-research": {
    intent: "family-office-research", keywordCluster: "audience", leadOffer: "Sample manager-comparison memo",
    heading: "Request a Sample Manager-Comparison Memo", supportingCopy: "See how mandate, manager continuity, risk, fees and portfolio overlap can be compared.",
    primaryButton: "Request a Sample Manager-Comparison Memo", successHeading: "Request received", successCopy: "We will contact you within one business day with the appropriate sample and context.",
    source: "family-office", pageType: "audience", portfolioOptions: ["₹1Cr – ₹5Cr", "₹5Cr – ₹25Cr", "₹25Cr+"],
  },
  "hyderabad-consultation": {
    intent: "hyderabad-consultation", keywordCluster: "hyderabad", leadOffer: "Hyderabad or video wealth review",
    heading: "Meet in Hyderabad or Book a Video Review", supportingCopy: "Choose an appointment at the Khajaguda office or a private video conversation.",
    primaryButton: "Meet in Hyderabad or Book a Video Review", successHeading: "Request received", successCopy: "We will contact you within one business day to confirm the preferred meeting format.",
    source: "hyderabad", pageType: "service", portfolioOptions: defaultPortfolioOptions,
    qualification: { key: "meeting_preference", label: "Meeting preference", options: ["Khajaguda office", "Video call", "Either works"] },
  },
};

export function getLeadIntent(intent: LeadIntent) {
  return leadIntents[intent];
}

export function inferLeadIntent(source = "", service = ""): LeadIntent {
  const value = `${source} ${service}`.toLowerCase();
  if (value.includes("pms")) return "pms-comparison";
  if (value.includes("sif")) return "sif-vs-pms";
  if (value.includes("retirement") || value.includes("nps") || value.includes("epf") || value.includes("ppf")) return "retirement-review";
  if (value.includes("nri")) return "nri-review";
  if (value.includes("rsu") || value.includes("esop") || value.includes("tech")) return "rsu-review";
  if (value.includes("founder") || value.includes("entrepreneur")) return "founder-wealth-map";
  if (value.includes("family office")) return "family-office-research";
  if (value.includes("hyderabad") || value.includes("property") || value.includes("real estate")) return "hyderabad-consultation";
  return "portfolio-review";
}
