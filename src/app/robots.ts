import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/app", "/app/", "/auth/", "/sign-in"],
      },
    ],
    sitemap: "https://www.sohowealth.in/sitemap.xml",
    host: "https://www.sohowealth.in",
  };
}
