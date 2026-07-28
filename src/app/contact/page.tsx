import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact SoHo Wealth — Book a Free Wealth Consultation | Hyderabad",
  description:
    "Book a complimentary portfolio-review consultation with SoHo Wealth, Hyderabad. Call +91 90329 99466 or use the form. Mutual funds, PMS, SIF and NRI planning.",
  keywords:
    "contact SoHo Wealth, wealth consultation Hyderabad, financial advisor appointment, book wealth advisor, free portfolio review Hyderabad",
  alternates: { canonical: "https://www.sohowealth.in/contact" },
  openGraph: {
    title: "Contact SoHo Wealth — Book Your Free Consultation",
    description: "Free wealth consultation. Call +91 90329 99466 or fill our form.",
    url: "https://www.sohowealth.in/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact SoHo Wealth — Book Your Free Consultation",
    description: "Free wealth consultation. Call +91 90329 99466 or fill our form.",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
