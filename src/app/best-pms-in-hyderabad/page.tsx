import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Best PMS in Hyderabad | SoHo Wealth",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.sohowealth.in/best-pms-in-india" },
};

export default function BestPmsHyderabadRedirect() {
  permanentRedirect("/best-pms-in-india");
}
