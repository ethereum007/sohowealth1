import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sohowealth.in";

  // Last meaningful content update per route — bump these when the page is edited.
  // Honest dates beat `new Date()` because crawlers use them as freshness signals.
  const routes: Array<{
    path: string;
    lastModified: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "/",                  lastModified: "2026-04-27", changeFrequency: "weekly",  priority: 1.0 },
    { path: "/sif",               lastModified: "2026-04-27", changeFrequency: "weekly",  priority: 0.9 },
    { path: "/pms-advisory",      lastModified: "2026-04-27", changeFrequency: "weekly",  priority: 0.9 },
    { path: "/services/nri",      lastModified: "2026-04-27", changeFrequency: "weekly",  priority: 0.9 },
    { path: "/portfolio-review",  lastModified: "2026-04-27", changeFrequency: "weekly",  priority: 0.9 },
    { path: "/aif-advisory",      lastModified: "2026-04-27", changeFrequency: "monthly", priority: 0.8 },
    { path: "/mutual-funds",      lastModified: "2026-04-27", changeFrequency: "monthly", priority: 0.8 },
    { path: "/global-investing",  lastModified: "2026-04-27", changeFrequency: "monthly", priority: 0.8 },
    { path: "/pre-ipo",           lastModified: "2026-04-27", changeFrequency: "monthly", priority: 0.8 },
    { path: "/rsu-esops",         lastModified: "2026-04-27", changeFrequency: "monthly", priority: 0.8 },
    { path: "/about",             lastModified: "2026-04-27", changeFrequency: "monthly", priority: 0.7 },
    { path: "/why-us",            lastModified: "2026-04-27", changeFrequency: "monthly", priority: 0.7 },
    { path: "/team",              lastModified: "2026-04-27", changeFrequency: "monthly", priority: 0.6 },
    { path: "/contact",           lastModified: "2026-04-27", changeFrequency: "monthly", priority: 0.8 },
    { path: "/budget-2026",       lastModified: "2026-02-01", changeFrequency: "yearly",  priority: 0.5 },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.path}`,
    lastModified: new Date(r.lastModified),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
