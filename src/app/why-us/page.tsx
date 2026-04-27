import type { Metadata } from "next";
import WhyUsClient from "./WhyUsClient";

export const metadata: Metadata = {
  title: "Why SoHo Wealth — Independent, Unbiased Wealth Management | Hyderabad",
  description:
    "Why SoHo Wealth is different: independent unbiased advisory, Columbia pedigree, full-stack wealth management, and a Hyderabad-first approach.",
  keywords:
    "why SoHo Wealth, independent wealth advisor Hyderabad, unbiased financial advisor India, fee-transparent wealth management",
  alternates: { canonical: "https://sohowealth.in/why-us" },
  openGraph: {
    title: "Why SoHo Wealth — The SoHo Difference",
    description:
      "Independent, unbiased, full-stack wealth management. Columbia pedigree, Hyderabad roots.",
    url: "https://sohowealth.in/why-us",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Why SoHo Wealth — The SoHo Difference",
    description: "Independent, unbiased, full-stack wealth management. Columbia pedigree, Hyderabad roots.",
  },
};

export default function WhyUsPage() {
  return <WhyUsClient />;
}
