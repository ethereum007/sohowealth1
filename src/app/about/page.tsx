import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About SoHo Wealth — Hyderabad's Independent Boutique Wealth Advisory",
  description:
    "SoHo Wealth is a Hyderabad-based independent boutique wealth advisory. No product quotas. Just your goals. Founded by Columbia alum Kiran Dutta.",
  alternates: { canonical: "https://sohowealth.in/about" },
  openGraph: {
    title: "About SoHo Wealth — Hyderabad's Independent Boutique Wealth Advisory",
    description:
      "SoHo Wealth is a Hyderabad-based independent boutique wealth advisory. No product quotas. Just your goals. Founded by Columbia alum Kiran Dutta.",
    url: "https://sohowealth.in/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About SoHo Wealth — Hyderabad's Independent Boutique Wealth Advisory",
    description: "Independent boutique wealth advisory. No product quotas. Just your goals.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
