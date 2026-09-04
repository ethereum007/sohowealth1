import type { Metadata } from "next";
import WhyUsClient from "./WhyUsClient";

export const metadata: Metadata = {
  title: "Why SoHo Wealth — Independent, Unbiased Wealth Management | Hyderabad",
  description:
    "Why investors choose SoHo Wealth for portfolio review, registered investment distribution, founder access and a Hyderabad-first service model.",
  alternates: { canonical: "https://www.sohowealth.in/why-us" },
  openGraph: {
    title: "Why SoHo Wealth — The SoHo Difference",
    description:
      "Independent, unbiased, full-stack wealth management. Columbia pedigree, Hyderabad roots.",
    url: "https://www.sohowealth.in/why-us",
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
