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
    default: "Wealth Advisor Hyderabad | PMS, SIF, Mutual Funds & NRI Advisory | SoHo Wealth",
    template: "%s",
  },
  description: "Hyderabad's boutique wealth advisor for HNIs, founders, families and NRIs. PMS, SIF, mutual funds, global investing and NRI advisory. Book a free portfolio review.",
  keywords: ["wealth advisor Hyderabad", "wealth management Hyderabad", "investment advisor Hyderabad", "financial advisor Hyderabad", "PMS advisor Hyderabad", "best PMS in Hyderabad", "NRI investment advisor Hyderabad", "SIF investment India", "mutual fund advisor Hyderabad", "HNI wealth management"],
  authors: [{ name: "SoHo Wealth" }],
  twitter: {
    card: "summary_large_image",
    title: "SoHo Wealth — Hyderabad's Premier Wealth Management Firm",
    description: "Trusted wealth advisory for HNIs, NRIs & families. PMS, SIF, MF, Global Investing. SEBI-aligned.",
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
    title: "SoHo Wealth — Hyderabad's Boutique Wealth Advisor",
    description:
      "Boutique wealth advisor in Hyderabad. PMS, SIF, AIF, Mutual Funds, Pre-IPO and NRI advisory.",
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
    "alternateName": "SoHo Wealth Advisory",
    "url": "https://www.sohowealth.in/",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.sohowealth.in/soho-logo.png",
      "width": 1024,
      "height": 1024
    },
    "image": "https://www.sohowealth.in/soho-logo.png",
    "description": "Hyderabad's boutique wealth advisor offering PMS, SIF, AIF, Mutual Funds, Global Investing, Pre-IPO and NRI investment advisory for HNIs, founders and family offices.",
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
      "https://www.linkedin.com/company/sohowealth",
      "https://sifprime.com"
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
      "RSU & ESOP Tax Planning",
      "GIFT City Funds",
      "HNI Advisory",
      "Family Office Advisory"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "FinancialService"],
    "@id": "https://www.sohowealth.in/#localbusiness",
    "name": "SoHo Wealth — Wealth Advisor in Hyderabad",
    "url": "https://www.sohowealth.in/",
    "image": "https://www.sohowealth.in/soho-logo.png",
    "logo": "https://www.sohowealth.in/soho-logo.png",
    "telephone": "+91-90329-99466",
    "email": "invest@sohowealth.in",
    "description": "Boutique wealth advisor in Hyderabad (Khajaguda) serving HNIs, founders, family offices and NRIs with PMS, SIF, AIF, Mutual Funds and Global Investing.",
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
      "Mutual Fund Advisory",
      "Global Investing",
      "NRI Wealth Management",
      "Pre-IPO Investments",
      "RSU & ESOP Advisory"
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
    "description": "Boutique wealth advisor in Hyderabad — PMS, SIF, AIF, Mutual Funds, Global Investing & NRI advisory."
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
