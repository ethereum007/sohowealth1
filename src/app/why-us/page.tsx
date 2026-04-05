import type { Metadata } from "next";
import WhyUsClient from "./WhyUsClient";

export const metadata: Metadata = {
  title: "Why SoHo Wealth — Independent, Unbiased Wealth Management | Hyderabad",
  description:
    "Discover why SoHo Wealth is different. Independent & unbiased advisory, Columbia University pedigree, full-stack wealth management, and Hyderabad-first approach.",
  keywords:
    "why SoHo Wealth, independent wealth advisor Hyderabad, unbiased financial advisor India, fee-transparent wealth management",
  alternates: { canonical: "https://sohowealth.in/why-us" },
  openGraph: {
    title: "Why SoHo Wealth — The SoHo Difference",
    description:
      "Independent, unbiased, full-stack wealth management. Columbia pedigree, Hyderabad roots.",
    url: "https://sohowealth.in/why-us",
  },
};

export default function WhyUsPage() {
  return <WhyUsClient />;
}
