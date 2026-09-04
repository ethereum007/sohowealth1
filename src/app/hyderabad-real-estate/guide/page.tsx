import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Hyderabad Real Estate Guides | SoHo Wealth",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.sohowealth.in/hyderabad-real-estate/guides" },
};

export default function Page() {
  permanentRedirect("/hyderabad-real-estate/guides");
}
