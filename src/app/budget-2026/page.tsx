import type { Metadata } from "next";
import Budget2026Client from "./Budget2026Client";

export const metadata: Metadata = {
  title: "Union Budget 2026-27 Analysis | SOHO Wealth",
  description:
    "Comprehensive analysis of India's Union Budget 2026-27 presented by Finance Minister Nirmala Sitharaman. Key highlights, tax changes, and sectoral allocations.",
  alternates: { canonical: "https://sohowealth.in/budget-2026" },
  openGraph: {
    title: "Union Budget 2026-27 Analysis | SOHO Wealth",
    description:
      "Comprehensive analysis of India's Union Budget 2026-27. Key highlights, tax changes, and sectoral allocations.",
    url: "https://sohowealth.in/budget-2026",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Union Budget 2026-27 Analysis | SOHO Wealth",
    description: "Key highlights, tax changes, and sectoral allocations from Union Budget 2026-27.",
  },
};

export default function Budget2026Page() {
  return <Budget2026Client />;
}
