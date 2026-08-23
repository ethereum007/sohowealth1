import type { MetadataRoute } from "next";
import { insightPosts } from "@/lib/insights/posts";
import { allRealEstateGuides } from "@/lib/real-estate/seo-pages";
import { propertyServices, realEstateArticles } from "@/lib/real-estate/vertical";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.sohowealth.in";

  // Last meaningful content update per route — bump these when the page is edited.
  // Honest dates beat `new Date()` because crawlers use them as freshness signals.
  const routes: Array<{
    path: string;
    lastModified: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "/",                  lastModified: "2026-07-28", changeFrequency: "weekly",  priority: 1.0 },
    { path: "/investment-products", lastModified: "2026-07-27", changeFrequency: "weekly", priority: 0.95 },
    { path: "/who-we-serve",      lastModified: "2026-07-27", changeFrequency: "weekly", priority: 0.95 },
    { path: "/retirement-planning", lastModified: "2026-08-16", changeFrequency: "weekly", priority: 0.95 },
    { path: "/tools/retirement-calculator", lastModified: "2026-08-13", changeFrequency: "monthly", priority: 0.95 },
    { path: "/tools/retirement-inflation-calculator", lastModified: "2026-08-13", changeFrequency: "monthly", priority: 0.9 },
    { path: "/tools/retirement-readiness-check", lastModified: "2026-08-14", changeFrequency: "monthly", priority: 0.9 },
    { path: "/tools/retirement-income-calculator", lastModified: "2026-08-14", changeFrequency: "monthly", priority: 0.9 },
    { path: "/tools/nps-annuity-calculator", lastModified: "2026-08-16", changeFrequency: "monthly", priority: 0.9 },
    { path: "/tools/epf-calculator", lastModified: "2026-08-16", changeFrequency: "monthly", priority: 0.9 },
    { path: "/tools/ppf-calculator", lastModified: "2026-08-16", changeFrequency: "monthly", priority: 0.9 },
    { path: "/tools/retirement-planning-calculators", lastModified: "2026-08-16", changeFrequency: "monthly", priority: 0.95 },
    { path: "/wealth-planning-for-it-professionals", lastModified: "2026-07-28", changeFrequency: "weekly", priority: 0.95 },
    { path: "/wealth-planning-for-it-professionals/rsu-guide", lastModified: "2026-07-28", changeFrequency: "monthly", priority: 0.9 },
    { path: "/tools/rsu-concentration-calculator", lastModified: "2026-08-13", changeFrequency: "monthly", priority: 0.9 },
    { path: "/tools/rsu-decision-check", lastModified: "2026-08-13", changeFrequency: "monthly", priority: 0.9 },
    { path: "/tools/ai-wealth-planner", lastModified: "2026-08-13", changeFrequency: "monthly", priority: 0.95 },
    { path: "/child-education-planning", lastModified: "2026-08-13", changeFrequency: "monthly", priority: 0.9 },
    { path: "/goal-based-sip-planning", lastModified: "2026-08-13", changeFrequency: "monthly", priority: 0.9 },
    { path: "/rsu-esops", lastModified: "2026-08-13", changeFrequency: "monthly", priority: 0.9 },
    { path: "/sif",               lastModified: "2026-06-02", changeFrequency: "weekly",  priority: 0.9 },
    { path: "/pms-advisory",      lastModified: "2026-07-28", changeFrequency: "weekly",  priority: 0.9 },
    { path: "/wealth-management-hyderabad", lastModified: "2026-07-28", changeFrequency: "weekly", priority: 0.95 },
    { path: "/financial-planning-for-doctors", lastModified: "2026-07-28", changeFrequency: "weekly", priority: 0.95 },
    { path: "/best-pms-in-india", lastModified: "2026-08-12", changeFrequency: "weekly", priority: 0.95 },
    { path: "/sif-vs-pms",        lastModified: "2026-06-02", changeFrequency: "weekly", priority: 0.9 },
    { path: "/services/nri",      lastModified: "2026-07-28", changeFrequency: "weekly",  priority: 0.9 },
    { path: "/nri-telugu",       lastModified: "2026-08-13", changeFrequency: "weekly",  priority: 0.95 },
    { path: "/hyderabad-real-estate", lastModified: "2026-06-16", changeFrequency: "weekly", priority: 0.9 },
    { path: "/hyderabad-real-estate/news", lastModified: "2026-08-23", changeFrequency: "weekly", priority: 0.9 },
    { path: "/hyderabad-real-estate/guides", lastModified: "2026-08-23", changeFrequency: "weekly", priority: 0.9 },
    { path: "/tools/property-calculators", lastModified: "2026-08-23", changeFrequency: "monthly", priority: 0.85 },
    { path: "/portfolio-review",  lastModified: "2026-04-27", changeFrequency: "weekly",  priority: 0.9 },
    { path: "/aif-advisory",      lastModified: "2026-04-27", changeFrequency: "monthly", priority: 0.8 },
    { path: "/mutual-funds",      lastModified: "2026-04-27", changeFrequency: "monthly", priority: 0.8 },
    { path: "/global-investing",  lastModified: "2026-04-27", changeFrequency: "monthly", priority: 0.8 },
    { path: "/reits",             lastModified: "2026-08-16", changeFrequency: "monthly", priority: 0.85 },
    { path: "/gift-city-outbound-investing", lastModified: "2026-08-13", changeFrequency: "weekly", priority: 0.9 },
    { path: "/pre-ipo",           lastModified: "2026-04-27", changeFrequency: "monthly", priority: 0.8 },
    { path: "/ipo",               lastModified: "2026-08-13", changeFrequency: "daily", priority: 0.95 },
    { path: "/ipo/methodology",   lastModified: "2026-08-13", changeFrequency: "monthly", priority: 0.75 },
    { path: "/ipo/learn",         lastModified: "2026-08-13", changeFrequency: "monthly", priority: 0.85 },
    { path: "/ipo/learn/subscription", lastModified: "2026-08-13", changeFrequency: "monthly", priority: 0.8 },
    { path: "/ipo/learn/allotment", lastModified: "2026-08-13", changeFrequency: "monthly", priority: 0.8 },
    { path: "/ipo/learn/application", lastModified: "2026-08-13", changeFrequency: "monthly", priority: 0.8 },
    { path: "/ipo/learn/mainboard-vs-sme", lastModified: "2026-08-13", changeFrequency: "monthly", priority: 0.8 },
    { path: "/ipo/learn/issue-structure", lastModified: "2026-08-13", changeFrequency: "monthly", priority: 0.8 },
    { path: "/ipo/tools/subscription-explainer", lastModified: "2026-08-13", changeFrequency: "monthly", priority: 0.85 },
    { path: "/about",             lastModified: "2026-04-27", changeFrequency: "monthly", priority: 0.7 },
    { path: "/why-us",            lastModified: "2026-04-27", changeFrequency: "monthly", priority: 0.7 },
    { path: "/team",              lastModified: "2026-06-08", changeFrequency: "monthly", priority: 0.75 },
    { path: "/contact",           lastModified: "2026-04-27", changeFrequency: "monthly", priority: 0.8 },
    { path: "/privacy-policy",    lastModified: "2026-06-12", changeFrequency: "yearly",  priority: 0.3 },
    { path: "/disclosures",       lastModified: "2026-06-12", changeFrequency: "yearly",  priority: 0.3 },
    { path: "/budget-2026",       lastModified: "2026-02-01", changeFrequency: "yearly",  priority: 0.5 },
    { path: "/insights",          lastModified: "2026-08-16", changeFrequency: "weekly",  priority: 0.85 },
  ];

  const staticRoutes = routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: new Date(r.lastModified),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const insightRoutes = insightPosts.map((post) => ({
    url: `${baseUrl}/insights/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: post.category === "Retirement Planning" ? "weekly" as const : "monthly" as const,
    priority: post.category === "Retirement Planning" ? 0.85 : 0.75,
  }));

  const realEstateRoutes = allRealEstateGuides.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(page.updatedAt),
    changeFrequency: "weekly" as const,
    priority: page.sitemapPriority,
  }));

  const propertyServiceRoutes = propertyServices.map((service) => ({
    url: `${baseUrl}${service.path}`,
    lastModified: new Date("2026-08-23"),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const realEstateArticleRoutes = realEstateArticles.map((article) => ({
    url: `${baseUrl}/hyderabad-real-estate/${article.type === "guide" ? "guides" : "news"}/${article.slug}`,
    lastModified: new Date(article.updatedAt),
    changeFrequency: article.type === "news" ? "weekly" as const : "monthly" as const,
    priority: article.type === "news" ? 0.8 : 0.82,
  }));

  return [...staticRoutes, ...propertyServiceRoutes, ...realEstateRoutes, ...realEstateArticleRoutes, ...insightRoutes];
}
