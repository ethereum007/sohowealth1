import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/app", "/app/", "/auth/"],
      },
    ],
    sitemap: "https://sohowealth.in/sitemap.xml",
  };
}
