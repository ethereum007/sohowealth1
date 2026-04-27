import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "SoHo Wealth | Boutique Wealth Management Hyderabad | PMS, SIF, NRI Advisory",
  description:
    "Hyderabad's boutique wealth advisor for HNIs, family offices & NRIs. SIF, PMS, AIF, Mutual Funds & Pre-IPO. Book a free portfolio review.",
  keywords:
    "wealth management Hyderabad, PMS distributor Hyderabad, SIF investment India, NRI investment advisory, HNI wealth advisor",
  alternates: { canonical: "https://sohowealth.in/" },
  openGraph: {
    title: "SoHo Wealth | Boutique Wealth Management Hyderabad",
    description:
      "Hyderabad's premier boutique wealth advisor for HNIs, family offices & NRIs. Expert guidance on SIF, PMS, AIF, mutual funds & pre-IPO investments.",
    url: "https://sohowealth.in/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoHo Wealth | Boutique Wealth Management Hyderabad",
    description: "Premier boutique wealth advisor for HNIs, family offices & NRIs. PMS, SIF, AIF & more.",
  },
};

export default function Home() {
  return <HomeClient />;
}
