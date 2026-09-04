import type { MetadataRoute } from "next";
import { publicRoutes } from "@/lib/seo/public-routes";
import { insightPosts } from "@/lib/insights/posts";
import { allRealEstateGuides } from "@/lib/real-estate/seo-pages";
import { propertyServices, realEstateArticles } from "@/lib/real-estate/vertical";
import { companyIpoAnalyses } from "@/lib/ipo/company-analyses";
import { ipoLearnGuides } from "@/lib/ipo/learn";
import { teluguNriCountryPages } from "@/lib/nri/telugu-country-pages";
import { getIndexablePmsProfiles } from "@/lib/pms/research-server";

const baseUrl = "https://www.sohowealth.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    ...publicRoutes.filter((route) => route.indexable).map((route) => ({ url: `${baseUrl}${route.path === "/" ? "" : route.path}`, lastModified: new Date(route.lastModified) })),
    ...insightPosts.map((post) => ({ url: `${baseUrl}/insights/${post.slug}`, lastModified: new Date(post.updatedAt) })),
    ...allRealEstateGuides.map((page) => ({ url: `${baseUrl}${page.path}`, lastModified: new Date(page.updatedAt) })),
    ...propertyServices.map((service) => ({ url: `${baseUrl}${service.path}`, lastModified: new Date("2026-08-23") })),
    ...realEstateArticles.map((article) => ({ url: `${baseUrl}/hyderabad-real-estate/${article.type === "guide" ? "guides" : "news"}/${article.slug}`, lastModified: new Date(article.updatedAt) })),
    ...companyIpoAnalyses.map((item) => ({ url: `${baseUrl}/ipo/${item.slug}`, lastModified: new Date(item.analysisAsOf) })),
    ...ipoLearnGuides.map((guide) => ({ url: `${baseUrl}/ipo/learn/${guide.slug}`, lastModified: new Date("2026-08-13") })),
    ...teluguNriCountryPages.map((page) => ({ url: `${baseUrl}/telugu-nri/${page.slug}`, lastModified: new Date("2026-08-23") })),
    ...getIndexablePmsProfiles().map((profile) => ({ url: `${baseUrl}/pms-strategies/${profile.slug}`, lastModified: new Date("2026-08-13") })),
  ];
  return [...new Map(entries.map((entry) => [entry.url, entry])).values()];
}
