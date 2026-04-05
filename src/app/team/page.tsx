import type { Metadata } from "next";
import TeamClient from "./TeamClient";

export const metadata: Metadata = {
  title: "Our Team — SoHo Wealth | Columbia MBA-Led Wealth Advisory Team",
  description:
    "Meet the SoHo Wealth team — Columbia MBA-led wealth advisory with 10+ years of US & Indian market expertise. Advisory board from banking, PE, and family office management.",
  keywords:
    "SoHo Wealth team, wealth advisor Hyderabad, Columbia MBA financial advisor, investment advisory team India",
  alternates: { canonical: "https://sohowealth.in/team" },
  openGraph: {
    title: "Our Team — SoHo Wealth Advisory",
    description:
      "Columbia MBA-led team. 10+ years of market expertise serving HNIs, families & NRIs.",
    url: "https://sohowealth.in/team",
  },
};

export default function TeamPage() {
  return <TeamClient />;
}
