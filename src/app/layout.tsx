import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://sohowealth.in"),
  title: {
    default: "SoHo Wealth — Premier Wealth Management Firm in Hyderabad | PMS, SIF, Mutual Funds & NRI Investing",
    template: "%s | SoHo Wealth",
  },
  description: "SoHo Wealth is Hyderabad's trusted wealth management firm offering Portfolio Management Services (PMS), Specialized Investment Funds (SIF), Mutual Funds, Global Investing & NRI investment advisory. SEBI-aligned. Book a free consultation.",
  keywords: ["wealth management Hyderabad", "PMS Hyderabad", "SIF investment India", "mutual fund advisor Hyderabad", "NRI investing India", "portfolio management services", "financial advisor Hyderabad", "HNI wealth management", "UHNI advisory India"],
  authors: [{ name: "SoHo Wealth" }],
  openGraph: {
    title: "SoHo Wealth — Hyderabad's Premier Wealth Management Firm",
    description: "Trusted wealth advisory for HNIs, NRIs & families. PMS, SIF, MF, Global Investing. SEBI-aligned.",
    url: "https://sohowealth.in/",
    siteName: "SoHo Wealth",
    images: [{ url: "/og-image.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SoHo Wealth — Hyderabad's Premier Wealth Management Firm",
    description: "Trusted wealth advisory for HNIs, NRIs & families. PMS, SIF, MF, Global Investing. SEBI-aligned.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://sohowealth.in/",
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SoHo Wealth",
    "url": "https://sohowealth.in/",
    "logo": "https://sohowealth.in/og-image.png",
    "description": "Hyderabad's trusted wealth management firm offering PMS, SIF, Mutual Funds, Global Investing & NRI investment advisory.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-90329-99466",
      "contactType": "customer service",
      "email": "invest@sohowealth.in",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Telugu"]
    },
    "sameAs": [],
    "knowsAbout": ["Wealth Management", "PMS", "SIF", "Mutual Funds", "NRI Investing", "Global Investing", "HNI Advisory", "Tax Planning", "Estate Planning"]
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "SoHo Wealth",
    "url": "https://sohowealth.in/",
    "telephone": "+91-90329-99466",
    "email": "invest@sohowealth.in",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "17.385",
      "longitude": "78.4867"
    },
    "priceRange": "$$$",
    "serviceType": ["Portfolio Management Services", "Specialized Investment Funds", "Mutual Fund Advisory", "Global Investing", "NRI Wealth Management", "Tax & Estate Planning"],
    "areaServed": ["Hyderabad", "Mumbai", "Bengaluru", "India"]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "SoHo Wealth",
    "url": "https://sohowealth.in/",
    "description": "Premier wealth management firm in Hyderabad"
  }
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CCQXH8SXBR"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CCQXH8SXBR');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
          <WhatsAppButton />
        </Providers>
      </body>
    </html>
  );
}
