import type { Metadata } from "next";
import TeamClient from "./TeamClient";

export const metadata: Metadata = {
  title: "Kiran Dutta Profile | SoHo Wealth Founder & SIFPrime Founder",
  description:
    "Meet Kiran Dutta, founder of SoHo Wealth and SIFPrime. Columbia alum with Wall Street, family office, VC/PE and SIF platform experience.",
  alternates: { canonical: "https://www.sohowealth.in/team" },
  openGraph: {
    title: "Kiran Dutta Profile | SoHo Wealth",
    description:
      "Founder of SoHo Wealth and SIFPrime. Columbia alum with Wall Street, family office, VC/PE and SIF platform experience.",
    url: "https://www.sohowealth.in/team",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kiran Dutta Profile | SoHo Wealth",
    description: "Founder of SoHo Wealth and SIFPrime. Columbia alum, Wall Street and family office experience.",
  },
};

export default function TeamPage() {
  return <TeamClient />;
}
