import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About SoHo Wealth | Hyderabad Wealth Planning & Distribution",
  description:
    "Learn about SoHo Wealth, a Hyderabad-based portfolio-review and investment-distribution firm founded by Columbia alum Kiran Dutta.",
  alternates: { canonical: "https://www.sohowealth.in/about" },
  openGraph: {
    title: "About SoHo Wealth | Hyderabad Wealth Planning & Distribution",
    description:
      "Hyderabad-based portfolio review and registered investment distribution, founded by Columbia alum Kiran Dutta.",
    url: "https://www.sohowealth.in/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About SoHo Wealth | Hyderabad",
    description: "Portfolio review and registered investment distribution from Hyderabad.",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
