import type { Metadata } from "next";
import NRITeluguClient from "./NRITeluguClient";

export const metadata: Metadata = {
  title: "NRI Wealth Management for Telugu Families | SoHo Wealth",
  description: "Telugu NRI wealth management for GIFT City, SIF and property needs across Telangana and Andhra Pradesh.",
  keywords: [
    "Telugu NRI wealth management",
    "NRI investment advisor Hyderabad",
    "GIFT City investment NRI",
    "SIF for NRI",
    "Telangana NRI investment",
    "Andhra Pradesh NRI wealth management",
  ],
  alternates: { canonical: "https://www.sohowealth.in/nri-telugu" },
  openGraph: {
    title: "NRI Wealth Management for Telugu Families | SoHo Wealth",
    description: "India-linked wealth management for Telugu NRIs across the US, Gulf, Canada, UK and Australia.",
    url: "https://www.sohowealth.in/nri-telugu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NRI Wealth Management for Telugu Families | SoHo Wealth",
    description: "India-linked wealth management for Telugu NRIs worldwide.",
  },
};

export default function NRITeluguPage() {
  return <NRITeluguClient />;
}
