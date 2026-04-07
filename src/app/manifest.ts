import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SoHo Wealth — Premier Wealth Management",
    short_name: "SoHo Wealth",
    description: "Hyderabad's trusted wealth management firm offering PMS, SIF, Mutual Funds, Global Investing & NRI advisory.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B1F3A",
    theme_color: "#C9A84C",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
