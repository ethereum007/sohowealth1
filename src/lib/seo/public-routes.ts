import type { PublicRoute, RouteCluster, PageType } from "./route-types";

function route(path: PublicRoute["path"], cluster: RouteCluster, pageType: PageType, lastModified = "2026-09-04"): PublicRoute { return { path, cluster, pageType, lastModified, indexable: true }; }

export const publicRoutes: PublicRoute[] = [
  route("/", "core", "home"), route("/investment-products", "core", "hub"), route("/who-we-serve", "audience", "hub"),
  route("/portfolio-review", "core", "service"), route("/wealth-management-hyderabad", "core", "service"),
  route("/about", "core", "article"), route("/why-us", "core", "article"), route("/team", "core", "article"), route("/contact", "core", "service"),
  route("/mutual-funds", "core", "service"), route("/aif-advisory", "core", "service"), route("/global-investing", "core", "service"), route("/gift-city-outbound-investing", "core", "service"), route("/pre-ipo", "core", "service"), route("/reits", "core", "service"),
  route("/child-education-planning", "core", "service"), route("/goal-based-sip-planning", "core", "service"), route("/tools/ai-wealth-planner", "core", "tool"),
  route("/wealth-management-for-hnis", "audience", "service"), route("/wealth-planning-for-entrepreneurs", "audience", "service"), route("/family-office-investment-solutions", "audience", "service"), route("/financial-planning-for-doctors", "audience", "service"),
  route("/pms-advisory", "pms", "service"), route("/best-pms-in-india", "pms", "research"), route("/pms-methodology", "pms", "article"), route("/pms-compare", "pms", "research"), route("/resources/sample-pms-comparison", "pms", "research"),
  route("/sif", "sif", "service"), route("/sif-vs-pms", "sif", "article"),
  route("/retirement-planning", "retirement", "hub"), route("/tools/retirement-planning-calculators", "retirement", "hub"), route("/tools/retirement-calculator", "retirement", "tool"), route("/tools/retirement-inflation-calculator", "retirement", "tool"), route("/tools/retirement-readiness-check", "retirement", "tool"), route("/tools/retirement-income-calculator", "retirement", "tool"), route("/tools/nps-annuity-calculator", "retirement", "tool"), route("/tools/epf-calculator", "retirement", "tool"), route("/tools/ppf-calculator", "retirement", "tool"),
  route("/services/nri", "nri", "service"), route("/nri-telugu", "nri", "service"), route("/resources/sample-nri-portfolio-map", "nri", "research"),
  route("/wealth-planning-for-it-professionals", "rsu", "service"), route("/wealth-planning-for-it-professionals/rsu-guide", "rsu", "article"), route("/rsu-esops", "rsu", "service"), route("/tools/rsu-concentration-calculator", "rsu", "tool"), route("/tools/rsu-decision-check", "rsu", "tool"),
  route("/ipo", "ipo", "research"), route("/ipo/methodology", "ipo", "article"), route("/ipo/learn", "ipo", "hub"), route("/ipo/tools/subscription-explainer", "ipo", "tool"), route("/budget-2026", "ipo", "article", "2026-02-01"),
  route("/hyderabad-real-estate", "real-estate", "hub"), route("/hyderabad-real-estate/news", "real-estate", "hub"), route("/hyderabad-real-estate/guides", "real-estate", "hub"), route("/tools/property-calculators", "real-estate", "tool"), route("/buy-property-hyderabad", "real-estate", "service"), route("/sell-property-hyderabad", "real-estate", "service"), route("/commercial-real-estate-hyderabad", "real-estate", "service"), route("/new-projects-hyderabad", "real-estate", "service"), route("/property-due-diligence-hyderabad", "real-estate", "service"), route("/nri-property-checklist-hyderabad", "real-estate", "service"), route("/nri-property-services-hyderabad", "real-estate", "service"), route("/nri-real-estate-in-hyderabad", "real-estate", "service"), route("/us-nri-hyderabad-real-estate", "real-estate", "service"),
  route("/resources/sample-portfolio-diagnostic", "core", "research"), route("/insights", "core", "hub"),
  route("/privacy-policy", "legal", "legal", "2026-06-12"), route("/disclosures", "legal", "legal", "2026-06-12"),
];

export const staticRouteExceptions = new Map<string, string>([
  ["/app", "authenticated application"], ["/app/onboarding", "authenticated application"], ["/app/report", "authenticated application"], ["/app/leads", "authenticated application"], ["/sign-in", "authentication"],
  ["/best-pms-in-hyderabad", "redirect-only compatibility route"], ["/hyderabad-real-estate/guide", "redirect-only compatibility route"],
]);

export const dynamicRoutePatterns = ["/insights/[slug]", "/ipo/[slug]", "/ipo/learn/[slug]", "/telugu-nri/[slug]", "/hyderabad-real-estate/[slug]", "/hyderabad-real-estate/guides/[slug]", "/hyderabad-real-estate/news/[slug]", "/pms-strategies/[slug]"] as const;
