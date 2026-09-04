import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sohowealth.in"),
  title: {
    default: "Wealth Planning for HNIs, Founders & NRIs | SoHo Wealth",
    template: "%s",
  },
  description: "National wealth planning and disclosed investment distribution for HNIs, founders, families and NRIs across mutual funds, SIF and PMS.",
  authors: [{ name: "SoHo Wealth" }],
  twitter: {
    card: "summary_large_image",
    title: "SoHo Wealth — Wealth Planning in Hyderabad",
    description: "Portfolio review and investment distribution for HNIs, NRIs and families across mutual funds, SIF, PMS and more.",
  },
  alternates: {
    canonical: "https://www.sohowealth.in/",
  },
  icons: {
    icon: [
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/icon-192.png"],
  },
  openGraph: {
    title: "SoHo Wealth — Wealth Planning & Investment Distribution",
    description:
      "Hyderabad-based portfolio review and investment distribution across mutual funds, SIF, PMS, AIF and NRI investing.",
    url: "https://www.sohowealth.in/",
    siteName: "SoHo Wealth",
    type: "website",
    locale: "en_IN",
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": ["Organization", "FinancialService"],
    "@id": "https://www.sohowealth.in/#organization",
    "name": "SoHo Wealth",
    "alternateName": ["SoHo Wealth India", "SoHo Wealth Hyderabad"],
    "url": "https://www.sohowealth.in/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.sohowealth.in/soho-logo.png",
      "width": 1024,
      "height": 1024
    },
    "image": "https://www.sohowealth.in/soho-logo.png",
    "description": "Hyderabad-based wealth planning, portfolio review and investment distribution for HNIs, founders, families and NRIs.",
    "founder": { "@id": "https://www.sohowealth.in/#kiran-dutta" },
    "foundingLocation": { "@type": "Place", "name": "Hyderabad, India" },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-90329-99466",
        "contactType": "customer service",
        "email": "invest@sohowealth.in",
        "areaServed": ["IN", "US", "GB", "AE", "SG", "AU", "CA"],
        "availableLanguage": ["English", "Hindi", "Telugu"]
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/sohowealth"
    ],
    "knowsAbout": [
      "Wealth Management",
      "Portfolio Management Services",
      "Specialized Investment Funds",
      "Alternative Investment Funds",
      "Mutual Funds",
      "NRI Investing",
      "Global Investing",
      "Pre-IPO Investments",
      "RSU & ESOP Portfolio Planning",
      "GIFT City Funds",
      "HNI Wealth Planning",
      "Family Wealth Planning"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.sohowealth.in/#kiran-dutta",
    "name": "Kiran Dutta",
    "url": "https://www.sohowealth.in/team",
    "image": "https://www.sohowealth.in/kiran-dutta.jpeg",
    "jobTitle": "Founder, SoHo Wealth",
    "description": "Founder of SoHo Wealth, Columbia MBA and NISM-certified professional with Wall Street and family-office experience.",
    "worksFor": { "@id": "https://www.sohowealth.in/#organization" },
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Columbia University",
      "sameAs": "https://www.columbia.edu/"
    },
    "sameAs": ["https://www.linkedin.com/in/kirandutta"],
    "knowsAbout": [
      "Wealth planning",
      "Portfolio review",
      "Portfolio Management Services",
      "Specialized Investment Funds",
      "NRI investing",
      "Retirement planning",
      "Retirement income planning"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FinancialService"],
    "@id": "https://www.sohowealth.in/#localbusiness",
    "name": "SoHo Wealth — Wealth Planning in Hyderabad",
    "url": "https://www.sohowealth.in/",
    "image": "https://www.sohowealth.in/soho-logo.png",
    "logo": "https://www.sohowealth.in/soho-logo.png",
    "telephone": "+91-90329-99466",
    "email": "invest@sohowealth.in",
    "description": "Hyderabad-based portfolio review and investment distribution business in Khajaguda serving HNIs, founders, families and NRIs.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "110, Green Grace, Khajaguda",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500032",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "17.4126",
      "longitude": "78.3690"
    },
    "hasMap": "https://www.google.com/maps/search/?api=1&query=110+Green+Grace+Khajaguda+Hyderabad+500032",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "priceRange": "$$$",
    "serviceType": [
      "Portfolio Management Services",
      "Specialized Investment Funds",
      "Alternative Investment Funds",
      "Mutual Fund Distribution",
      "Global Investing",
      "NRI Portfolio Coordination",
      "Pre-IPO Investments",
      "RSU & ESOP Portfolio Review"
    ],
    "areaServed": [
      { "@type": "City", "name": "Hyderabad" },
      { "@type": "City", "name": "Secunderabad" },
      { "@type": "Place", "name": "Gachibowli" },
      { "@type": "Place", "name": "HITEC City" },
      { "@type": "Place", "name": "Jubilee Hills" },
      { "@type": "Place", "name": "Banjara Hills" },
      { "@type": "Place", "name": "Khajaguda" },
      { "@type": "Place", "name": "Kondapur" },
      { "@type": "Place", "name": "Madhapur" },
      { "@type": "AdministrativeArea", "name": "Telangana" },
      { "@type": "Country", "name": "India" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.sohowealth.in/#website",
    "name": "SoHo Wealth",
    "url": "https://www.sohowealth.in/",
    "publisher": { "@id": "https://www.sohowealth.in/#organization" },
    "description": "Hyderabad-based wealth planning, portfolio review and investment distribution across mutual funds, SIF, PMS, AIF and NRI investing."
  }
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${inter.variable}`}>
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
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="jouo5TQXCq/+w017uA2lnw"
          strategy="afterInteractive"
        />
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
