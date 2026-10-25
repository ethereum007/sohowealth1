import type { Metadata } from "next";
import WhyUsClient from "./WhyUsClient";

export const metadata: Metadata = {
  title: "Why SoHo Wealth | Registered Investment Distribution Hyderabad",
  description:
    "Why investors choose SoHo Wealth for portfolio review, registered investment distribution, founder access and a Hyderabad-first service model.",
  keywords:
    "why SoHo Wealth, investment distributor Hyderabad, portfolio review Hyderabad, wealth management Hyderabad",
  alternates: { canonical: "https://www.sohowealth.in/why-us" },
  openGraph: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SoHo Wealth - Wealth Planning and Investment Distribution" }],
    title: "Why SoHo Wealth — The SoHo Difference",
    description:
      "Portfolio-first investment distribution, founder access and clear role disclosure. Columbia pedigree, Hyderabad roots.",
    url: "https://www.sohowealth.in/why-us",
    type: "website",
  },
  twitter: { images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "SoHo Wealth - Wealth Planning and Investment Distribution" }],
    card: "summary_large_image",
    title: "Why SoHo Wealth — The SoHo Difference",
    description: "Portfolio-first investment distribution, founder access and clear role disclosure. Columbia pedigree, Hyderabad roots.",
  },
};

export default function WhyUsPage() {
  return <WhyUsClient />;
}
