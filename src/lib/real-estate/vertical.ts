import type { LucideIcon } from "lucide-react";
import { Building2, FileCheck2, Globe2, HandCoins, Home, KeyRound } from "lucide-react";

export const RERA_NUMBER = "A02400004529";
export const RERA_VALID_UNTIL = "14 October 2030";

export type PropertyService = {
  slug: string;
  path: string;
  kicker: string;
  title: string;
  highlight: string;
  description: string;
  icon: LucideIcon;
  audience: string;
  outcomes: string[];
  process: { title: string; description: string }[];
  deliverables: string[];
  cautions: string[];
  formTitle: string;
  formCopy: string;
};

export const propertyServices: PropertyService[] = [
  {
    slug: "buy-property-hyderabad", path: "/buy-property-hyderabad", kicker: "Buyer representation",
    title: "Buy Hyderabad property", highlight: "with evidence, not pressure.", icon: Home,
    description: "Independent requirement mapping, project discovery, comparison, site visits, commercial negotiation and transaction coordination for homes, villas and plots across Hyderabad.",
    audience: "End-users, investors, families upgrading a home and buyers relocating to Hyderabad.",
    outcomes: ["A written buyer brief and budget guardrails", "A shortlist based on fit rather than inventory pressure", "Comparable pricing and total acquisition cost", "Document and project risk questions before token payment", "Negotiation, booking and handover coordination"],
    process: [
      { title: "Define the mandate", description: "Purpose, budget, funding, locations, commute, configuration, possession and non-negotiables." },
      { title: "Map the market", description: "Compare suitable micro-markets and screen projects against the written brief." },
      { title: "Inspect and score", description: "Coordinate site visits and score product, developer, density, livability, price and exit depth." },
      { title: "Verify", description: "Frame TG-RERA, approval, title, agreement and technical checks for qualified specialists." },
      { title: "Negotiate and close", description: "Compare the final commercial offer and coordinate booking, registration and handover milestones." },
    ],
    deliverables: ["Buyer requirement brief", "Micro-market comparison", "Project shortlist and scorecard", "All-in cost comparison", "Site-visit plan", "Diligence checklist", "Offer comparison", "Handover checklist"],
    cautions: ["No project is recommended only because it pays a commission.", "Legal title and technical quality require independent professional opinions.", "Price, inventory and incentives must be reconfirmed with the seller or developer."],
    formTitle: "Tell us what you want to buy.", formCopy: "Share your budget, preferred corridors, property type and timeline. We will turn it into a disciplined search mandate.",
  },
  {
    slug: "sell-property-hyderabad", path: "/sell-property-hyderabad", kicker: "Seller representation",
    title: "Sell Hyderabad property", highlight: "with a controlled process.", icon: HandCoins,
    description: "Pricing, presentation, qualified-buyer outreach, visit management, negotiation and closing coordination for Hyderabad property owners and NRIs.",
    audience: "Apartment, villa, plot and eligible commercial-property owners seeking an organized sale.",
    outcomes: ["Evidence-led pricing range", "A market-ready property information pack", "Qualified enquiry and visit management", "Comparable offers on consistent terms", "Documentation and closing coordination"],
    process: [
      { title: "Property intake", description: "Understand ownership, occupancy, loan, documents, condition, urgency and target outcome." },
      { title: "Price and position", description: "Review competing supply, recent asking levels, product strengths and likely buyer objections." },
      { title: "Prepare the listing", description: "Build accurate copy, photography plan, fact sheet and disclosure-ready document checklist." },
      { title: "Qualify and negotiate", description: "Screen enquiries, coordinate visits and compare price, funding, timeline and conditions." },
      { title: "Coordinate closing", description: "Support agreement, lender, tax-professional and registration workflows without replacing specialists." },
    ],
    deliverables: ["Seller readiness review", "Indicative pricing range", "Listing fact sheet", "Marketing and channel plan", "Enquiry tracker", "Offer comparison", "Closing checklist"],
    cautions: ["An indicative pricing range is not a registered valuation.", "Sellers should obtain legal and tax advice for title, TDS and capital gains.", "Material defects, disputes and encumbrances must be disclosed accurately."],
    formTitle: "Request a property sale review.", formCopy: "Share the location, property type, size, occupancy and expected timeline. We will assess sale readiness and positioning.",
  },
  {
    slug: "nri-property-services-hyderabad", path: "/nri-property-services-hyderabad", kicker: "Remote NRI desk",
    title: "Manage Hyderabad property", highlight: "from anywhere.", icon: Globe2,
    description: "Remote buying, selling, inspection and ownership coordination for NRIs and OCIs, with structured handoffs to legal, tax, banking and property-management professionals.",
    audience: "NRIs and OCIs in the US, UK, UAE, Singapore, Australia, Canada and elsewhere.",
    outcomes: ["Remote-first transaction plan", "Funding and POA question map", "Video walkthrough and inspection coordination", "Rental or vacant-property operating plan", "Sale, tax and repatriation coordination checklist"],
    process: [
      { title: "Country and ownership review", description: "Map residency, OCI/NRI status, ownership, purpose and local tax-advisor coordination needs." },
      { title: "Remote verification", description: "Coordinate project, property, document and physical inspection workflows." },
      { title: "Execution map", description: "Sequence POA, banking, payment, agreement and registration actions." },
      { title: "Ownership operations", description: "Assign rent collection, maintenance, inspections, insurance and property-tax responsibilities." },
      { title: "Exit readiness", description: "Prepare for buyer diligence, TDS, capital gains documentation and repatriation procedures." },
    ],
    deliverables: ["NRI transaction roadmap", "Document room checklist", "POA question list", "Remote inspection brief", "Property-management handoff", "Exit and repatriation checklist"],
    cautions: ["FEMA, Indian tax and overseas tax outcomes must be confirmed by qualified advisors.", "Agricultural land, plantation property and farmhouses have special restrictions.", "Use transaction-specific authority and normal banking channels."],
    formTitle: "Start your remote property mandate.", formCopy: "Tell us where you live, what you own or want to buy, and the decision you need to make in Hyderabad.",
  },
  {
    slug: "property-due-diligence-hyderabad", path: "/property-due-diligence-hyderabad", kicker: "Decision diligence",
    title: "Investigate the property", highlight: "before money moves.", icon: FileCheck2,
    description: "A coordinated commercial, project and document-review framework that helps buyers ask the right questions before booking or acquisition.",
    audience: "Buyers who have identified a project or property and want an organized pre-commitment review.",
    outcomes: ["Project and promoter fact map", "Document request checklist", "Commercial and contract question list", "Independent legal and technical review coordination", "Red-flag and open-item register"],
    process: [
      { title: "Collect", description: "Gather RERA disclosures, approvals, title documents, plans, commercials and draft agreements." },
      { title: "Cross-check", description: "Compare names, areas, dates, approvals, payment terms and public disclosures for inconsistencies." },
      { title: "Specialist review", description: "Route title and agreement to a lawyer and physical or construction questions to a technical expert." },
      { title: "Commercial review", description: "Calculate total cost, payment exposure, delay terms, maintenance and competing-project economics." },
      { title: "Decision memo", description: "Summarize verified facts, unresolved items, specialist dependencies and next actions." },
    ],
    deliverables: ["TG-RERA verification record", "Approval and title checklist", "Agreement question list", "All-in acquisition-cost sheet", "Risk and open-item register", "Decision memo"],
    cautions: ["This coordination service is not a legal title certificate, engineering report or registered valuation.", "Never rely only on brochures, portal listings or verbal assurances.", "Unresolved material issues should remain visible in the final decision."],
    formTitle: "Request a property diligence review.", formCopy: "Send the project or property name, location and current stage. Do not upload sensitive identity documents through this form.",
  },
  {
    slug: "new-projects-hyderabad", path: "/new-projects-hyderabad", kicker: "New project desk",
    title: "Compare new Hyderabad projects", highlight: "on one scorecard.", icon: KeyRound,
    description: "Curated discovery and side-by-side evaluation of eligible new launches, under-construction and ready projects based on buyer fit, disclosures and commercial terms.",
    audience: "Buyers comparing developer inventory across West, North and airport-led Hyderabad corridors.",
    outcomes: ["A current shortlist matched to your mandate", "Project comparisons on consistent fields", "Availability and price-date confirmation", "Developer compensation disclosure", "Site-visit and negotiation support"],
    process: [
      { title: "Match", description: "Filter by purpose, ticket size, location, configuration, possession and risk preference." },
      { title: "Verify", description: "Check public TG-RERA details and request current documents and commercial sheets." },
      { title: "Compare", description: "Normalize area, total cost, density, payment plan, timeline, amenities and competition." },
      { title: "Visit", description: "Plan efficient site visits with a consistent question and observation checklist." },
      { title: "Select", description: "Record fit, risks, open questions and commercial terms before booking." },
    ],
    deliverables: ["Curated shortlist", "Comparable project matrix", "Price and availability timestamp", "Site-visit scorecard", "Commercial offer comparison", "Compensation disclosure"],
    cautions: ["The website will not present stale inventory as available.", "Sponsored or developer-mandated projects will be labelled clearly.", "TG-RERA registration does not replace title, quality or suitability checks."],
    formTitle: "Ask for a current project shortlist.", formCopy: "Tell us your budget, preferred locations, configuration and possession requirement. We will respond with a current, disclosed shortlist.",
  },
  {
    slug: "commercial-real-estate-hyderabad", path: "/commercial-real-estate-hyderabad", kicker: "Commercial property",
    title: "Evaluate Hyderabad commercial property", highlight: "after the headline yield.", icon: Building2,
    description: "Tenant, lease, building, micro-market, cash-flow and exit analysis for eligible office, retail and pre-leased commercial opportunities.",
    audience: "HNIs, business owners, family offices and NRIs evaluating direct commercial-property exposure.",
    outcomes: ["Lease and tenant risk map", "Gross-to-net yield bridge", "Vacancy and exit scenario analysis", "Building and micro-market comparison", "Portfolio concentration review"],
    process: [
      { title: "Define the income objective", description: "Clarify ticket size, cash yield, leverage, liquidity and holding period." },
      { title: "Review the asset", description: "Assess building, unit, access, services, parking, usage and competing supply." },
      { title: "Review the lease", description: "Map tenant, rent, escalation, lock-in, deposit, CAM, taxes and termination clauses." },
      { title: "Stress-test", description: "Model vacancy, re-leasing cost, delayed rent, capex, financing and exit assumptions." },
      { title: "Coordinate diligence", description: "Route legal, technical, valuation and tax questions to qualified specialists." },
    ],
    deliverables: ["Lease abstract", "Net-yield calculation", "Tenant and building risk summary", "Vacancy stress test", "Comparable opportunity sheet", "Portfolio-fit memo"],
    cautions: ["Quoted yield is not the same as net cash yield.", "Tenant quality does not remove lease, vacancy or concentration risk.", "Fractional and structured products require separate regulatory and counterparty review."],
    formTitle: "Review a commercial opportunity.", formCopy: "Share the asset type, location, ticket size, tenant and quoted yield. We will identify the questions behind the headline.",
  },
];

export function getPropertyService(slug: string) {
  return propertyServices.find((service) => service.slug === slug);
}

export type RealEstateArticle = {
  slug: string;
  type: "guide" | "news";
  title: string;
  description: string;
  category: string;
  updatedAt: string;
  readTime: string;
  sections: { heading: string; paragraphs: string[]; bullets?: string[] }[];
};

export const realEstateArticles: RealEstateArticle[] = [
  {
    slug: "how-to-buy-property-in-hyderabad", type: "guide", category: "Buying", updatedAt: "2026-08-23", readTime: "9 min",
    title: "How to Buy Property in Hyderabad: A Decision-First Guide",
    description: "A practical sequence from budget and locality selection through RERA checks, legal review, negotiation, registration and handover.",
    sections: [
      { heading: "Begin with the job the property must do", paragraphs: ["Decide whether the property is primarily a home, rental asset, future retirement base or long-term land exposure. The same project can be suitable for one purpose and poor for another."], bullets: ["Set an all-in budget, not just a base price", "Define commute and possession constraints", "Set limits for leverage and real-estate concentration"] },
      { heading: "Compare micro-markets before projects", paragraphs: ["A project shortlist is only useful after the corridor decision. Compare employment access, roads, schools, water, competing supply, rental depth and future construction."], bullets: ["Visit at weekday peak hours", "Check the approach road and surrounding parcels", "Compare ready resale options with new inventory"] },
      { heading: "Verify before token payment", paragraphs: ["Confirm public disclosures and engage qualified legal and technical professionals before a non-refundable commitment."], bullets: ["TG-RERA project status", "Approval and sanctioned-plan references", "Title chain and encumbrance", "Agreement, cancellation and delay terms", "All-in cost and payment schedule"] },
      { heading: "Close with an evidence file", paragraphs: ["Keep the commercial sheet, approvals, legal opinion, payment receipts, agreement, registration record and handover documents together. A clean file improves ownership and future resale." ] },
    ],
  },
  {
    slug: "sell-property-in-hyderabad-checklist", type: "guide", category: "Selling", updatedAt: "2026-08-23", readTime: "8 min",
    title: "Selling Property in Hyderabad: The Owner's Checklist",
    description: "Prepare pricing, documents, marketing, buyer qualification, negotiation and closing before listing a Hyderabad property.",
    sections: [
      { heading: "Make the property sale-ready", paragraphs: ["Resolve document gaps, occupancy questions, loan closure steps and obvious condition issues before enquiries begin."], bullets: ["Sale deed and ownership chain", "Encumbrance and loan status", "Property tax and maintenance receipts", "Approved plan and occupancy documents where applicable", "Tenant or society information"] },
      { heading: "Price for a transaction, not an advertisement", paragraphs: ["Portal asking prices are not completed transactions. Compare competing units, floor, view, age, condition, payment quality and the owner's timeline." ] },
      { heading: "Qualify offers consistently", paragraphs: ["The highest headline offer may not be the strongest offer. Compare funding readiness, conditions, token size, due-diligence period and closing date." ] },
      { heading: "Plan tax and registration early", paragraphs: ["Resident and NRI sellers face different TDS and documentation workflows. Obtain advice before agreeing to a closing schedule." ] },
    ],
  },
  {
    slug: "hyderabad-property-due-diligence-checklist", type: "guide", category: "Due diligence", updatedAt: "2026-08-23", readTime: "10 min",
    title: "Hyderabad Property Due-Diligence Checklist",
    description: "The project, title, approval, agreement, technical and commercial questions to organize before a property purchase.",
    sections: [
      { heading: "Project and promoter", paragraphs: ["Verify the exact project phase, promoter entity, registration status, declared completion and uploaded disclosures."], bullets: ["TG-RERA registration and updates", "Promoter entity and track record", "Phase boundaries and shared amenities", "Litigation and lender disclosures"] },
      { heading: "Title and approvals", paragraphs: ["A qualified property lawyer should examine title, encumbrance, development rights, sanctioned plans and the transaction documents."], bullets: ["Mother deed and title chain", "Encumbrance certificate", "Land-use and planning approval", "Sanctioned plan", "Completion or occupancy status where relevant"] },
      { heading: "Product and construction", paragraphs: ["Match the promised product to plans, specifications and physical progress."], bullets: ["Carpet, built-up and undivided share", "Specifications and substitution clauses", "Water, power, access and parking", "Independent snag or technical inspection"] },
      { heading: "Commercial and contract", paragraphs: ["Calculate the entire acquisition cost and review remedies, cancellation, assignment and delay language before signing." ] },
    ],
  },
  {
    slug: "hyderabad-micro-market-scorecard", type: "guide", category: "Locations", updatedAt: "2026-08-23", readTime: "7 min",
    title: "How to Compare Hyderabad Real-Estate Micro-Markets",
    description: "A repeatable scorecard for comparing Kokapet, Gachibowli, Financial District, Narsingi, Tellapur and emerging corridors.",
    sections: [
      { heading: "Score what affects daily life", paragraphs: ["End-users should weight commute reliability, schools, healthcare, retail, water, roads, noise and construction intensity more heavily than promotional appreciation forecasts." ] },
      { heading: "Score what affects the investment", paragraphs: ["Investors should compare employment catchment, rent-to-price ratio, competing supply, tenant depth, maintenance, property age and resale liquidity." ] },
      { heading: "Separate current reality from future narrative", paragraphs: ["Record whether each infrastructure claim is operational, under construction, approved or merely proposed. Apply a higher discount to outcomes that depend on multiple future events." ] },
    ],
  },
  {
    slug: "how-we-cover-hyderabad-real-estate-news", type: "news", category: "Newsroom", updatedAt: "2026-08-23", readTime: "5 min",
    title: "How SoHo Wealth Covers Hyderabad Real-Estate News",
    description: "Our editorial standard for infrastructure, regulation, launches, office demand, prices and locality-level developments.",
    sections: [
      { heading: "Signal before sensation", paragraphs: ["We prioritize official notifications, regulator disclosures, planning documents, company filings and established market research. A proposal is not treated as completed infrastructure." ] },
      { heading: "Every update needs a decision angle", paragraphs: ["Useful property news explains who may be affected, which locations are relevant, what remains uncertain and what buyers or sellers should verify next." ] },
      { heading: "Commercial conflicts remain visible", paragraphs: ["Sponsored content and developer relationships must be labelled. Editorial coverage does not convert a project into a recommendation." ] },
    ],
  },
  {
    slug: "tgrera-registration-buyer-check", type: "news", category: "Regulation", updatedAt: "2026-08-23", readTime: "6 min",
    title: "TG-RERA Verification: What Buyers Should Actually Check",
    description: "Registration is the starting point. Buyers should also review the phase, promoter, timeline, updates, approvals and transaction documents.",
    sections: [
      { heading: "Match the exact phase", paragraphs: ["Large developments can contain multiple phases or registrations. Match the tower, plot or unit being sold to the relevant registration and disclosed plans." ] },
      { heading: "Read current disclosures", paragraphs: ["Review declared timelines, approvals, encumbrances, promoter details and available progress information. Save dated copies for the decision file." ] },
      { heading: "Registration is not a guarantee", paragraphs: ["RERA registration improves transparency but does not replace legal title review, technical inspection, commercial judgment or suitability analysis." ] },
    ],
  },
];

export function getRealEstateArticle(type: "guide" | "news", slug: string) {
  return realEstateArticles.find((article) => article.type === type && article.slug === slug);
}
