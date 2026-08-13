import type { Metadata } from "next";
import NRITeluguClient from "./NRITeluguClient";

export const metadata: Metadata = {
  title: "Telugu NRI Wealth Management & Tax Guides | SoHo Wealth",
  description: "Telugu NRI wealth management, India investment and tax guides for families in the US, UAE, UK, Canada and Australia. Book a Telugu portfolio review.",
  keywords: [
    "Telugu NRI wealth management",
    "NRI investment advisor Hyderabad",
    "GIFT City investment NRI",
    "SIF for NRI",
    "Telangana NRI investment",
    "Andhra Pradesh NRI wealth management",
    "NRI tax filing Telugu",
    "NRI taxation India Telugu",
    "Telugu financial advisor Hyderabad",
  ],
  alternates: { canonical: "https://www.sohowealth.in/nri-telugu" },
  openGraph: {
    title: "Telugu NRI Wealth Management & Tax Guides | SoHo Wealth",
    description: "India-linked wealth management and practical tax guides for Telugu NRIs across the US, Gulf, Canada, UK and Australia.",
    url: "https://www.sohowealth.in/nri-telugu",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Telugu NRI Wealth Management & Tax Guides | SoHo Wealth",
    description: "India-linked wealth management and tax education for Telugu NRIs worldwide.",
  },
};

export default function NRITeluguPage() {
  return <NRITeluguClient />;
}
