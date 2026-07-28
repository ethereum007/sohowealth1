import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Wealth Planning in Hyderabad for HNIs, Founders & NRIs | SoHo Wealth",
  description:
    "Hyderabad-based wealth planning, portfolio review and investment distribution for HNIs, founders, families and NRIs. Book a complimentary review.",
  keywords:
    "wealth advisor Hyderabad, wealth management Hyderabad, investment advisor Hyderabad, PMS advisor Hyderabad, NRI investment advisor Hyderabad, financial advisor Hyderabad, SIF investment India",
  alternates: { canonical: "https://www.sohowealth.in/" },
  openGraph: {
    title: "Wealth Planning in Hyderabad | SoHo Wealth",
    description:
      "Portfolio review and investment distribution for Hyderabad HNIs, founders, families and NRIs.",
    url: "https://www.sohowealth.in/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wealth Planning in Hyderabad | SoHo Wealth",
    description: "Portfolio review and investment distribution for HNIs, founders, families and NRIs.",
  },
};

export default function Home() {
  return <HomeClient />;
}
