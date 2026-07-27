import type { MetadataRoute } from "next";
import { insightPosts } from "@/lib/insights/posts";
import { allRealEstateGuides } from "@/lib/real-estate/seo-pages";

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
    { path: "/",                  lastModified: "2026-07-27", changeFrequency: "weekly",  priority: 1.0 },
    { path: "/investment-products", lastModified: "2026-07-27", changeFrequency: "weekly", priority: 0.95 },
    { path: "/who-we-serve",      lastModified: "2026-07-27", changeFrequency: "weekly", priority: 0.95 },
    { path: "/wealth-planning-for-it-professionals", lastModified: "2026-07-27", changeFrequency: "weekly", priority: 0.95 },
    { path: "/sif",               lastModified: "2026-06-02", changeFrequency: "weekly",  priority: 0.9 },
    { path: "/pms-advisory",      lastModified: "2026-06-02", changeFrequency: "weekly",  priority: 0.9 },
    { path: "/wealth-management-hyderabad", lastModified: "2026-06-02", changeFrequency: "weekly", priority: 0.95 },
    { path: "/financial-planning-for-doctors", lastModified: "2026-07-26", changeFrequency: "weekly", priority: 0.95 },
    { path: "/best-pms-in-hyderabad", lastModified: "2026-06-02", changeFrequency: "weekly", priority: 0.9 },
    { path: "/sif-vs-pms",        lastModified: "2026-06-02", changeFrequency: "weekly", priority: 0.9 },
    { path: "/services/nri",      lastModified: "2026-06-02", changeFrequency: "weekly",  priority: 0.9 },
    { path: "/nri-telugu",       lastModified: "2026-07-20", changeFrequency: "weekly",  priority: 0.95 },
    { path: "/hyderabad-real-estate", lastModified: "2026-06-16", changeFrequency: "weekly", priority: 0.9 },
    { path: "/portfolio-review",  lastModified: "2026-04-27", changeFrequency: "weekly",  priority: 0.9 },
    { path: "/aif-advisory",      lastModified: "2026-04-27", changeFrequency: "monthly", priority: 0.8 },
    { path: "/mutual-funds",      lastModified: "2026-04-27", changeFrequency: "monthly", priority: 0.8 },
    { path: "/global-investing",  lastModified: "2026-04-27", changeFrequency: "monthly", priority: 0.8 },
    { path: "/pre-ipo",           lastModified: "2026-04-27", changeFrequency: "monthly", priority: 0.8 },
    { path: "/rsu-esops",         lastModified: "2026-04-27", changeFrequency: "monthly", priority: 0.8 },
    { path: "/about",             lastModified: "2026-04-27", changeFrequency: "monthly", priority: 0.7 },
    { path: "/why-us",            lastModified: "2026-04-27", changeFrequency: "monthly", priority: 0.7 },
    { path: "/team",              lastModified: "2026-06-08", changeFrequency: "monthly", priority: 0.75 },
    { path: "/contact",           lastModified: "2026-04-27", changeFrequency: "monthly", priority: 0.8 },
    { path: "/privacy-policy",    lastModified: "2026-06-12", changeFrequency: "yearly",  priority: 0.3 },
    { path: "/disclosures",       lastModified: "2026-06-12", changeFrequency: "yearly",  priority: 0.3 },
    { path: "/budget-2026",       lastModified: "2026-02-01", changeFrequency: "yearly",  priority: 0.5 },
    { path: "/insights",          lastModified: "2026-06-12", changeFrequency: "weekly",  priority: 0.85 },
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
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const realEstateRoutes = allRealEstateGuides.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(page.updatedAt),
    changeFrequency: "weekly" as const,
    priority: page.sitemapPriority,
  }));

  return [...staticRoutes, ...realEstateRoutes, ...insightRoutes];
}
