import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ExternalLink,
  FileSearch,
  Globe2,
  Home,
  Landmark,
  MapPinned,
  ShieldCheck,
} from "lucide-react";
import { FAQSection } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";
import { RelatedServices } from "@/components/seo/RelatedServices";
import { ScrollToSectionButton } from "@/components/ScrollToSectionButton";

const pageUrl = "https://www.sohowealth.in/hyderabad-real-estate";

export const metadata: Metadata = {
  title: "Hyderabad Real Estate Advisory | Residential, Commercial & NRI Property | SoHo Wealth",
  description:
    "Hyderabad real estate advisory for HNIs, NRIs and families. Residential, commercial, pre-leased assets, RERA/HMDA checks, NRI property planning and portfolio fitment.",
  keywords: [
    "Hyderabad real estate advisory",
    "Hyderabad real estate investment",
    "NRI property investment Hyderabad",
    "commercial real estate Hyderabad",
    "residential property Hyderabad",
    "RERA property Hyderabad",
    "HMDA approved plots Hyderabad",
    "TS RERA registered consultant",
  ],
  authors: [{ name: "SoHo Wealth" }],
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Hyderabad Real Estate Advisory | SoHo Wealth",
    description:
      "Residential, commercial and NRI real estate guidance in Hyderabad with RERA/HMDA checks and portfolio-first evaluation.",
    url: pageUrl,
    type: "website",
    images: [{ url: "https://www.sohowealth.in/soho-logo.png", width: 1024, height: 1024, alt: "SoHo Wealth" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyderabad Real Estate Advisory | SoHo Wealth",
    description: "Residential, commercial and NRI real estate guidance in Hyderabad.",
    images: ["https://www.sohowealth.in/soho-logo.png"],
  },
};

const marketSignals = [
  {
    label: "Residential demand",
    value: "10,665",
    detail: "JLL reported Hyderabad Q1 2026 new residential launches at 10,665 units, up q-o-q and y-o-y.",
  },
  {
    label: "Office leasing",
    value: "3.16M sq ft",
    detail: "JLL reported Hyderabad gross office leasing of 3.16 million sq ft in Q1 2026, up 25.1% y-o-y.",
  },
  {
    label: "RERA transparency",
    value: "10,000+",
    detail: "TG-RERA lists more than 10,000 registered projects on its public portal.",
  },
];

const offerings = [
  {
    icon: Home,
    title: "Residential Property",
    description:
      "Apartments, villas and gated communities across West, North and growth corridors, reviewed for end-use, rental potential and exit quality.",
    bullets: ["Developer and project comparison", "RERA status and possession timeline", "Rental yield and resale liquidity", "NRI funding and POA coordination"],
  },
  {
    icon: Building2,
    title: "Commercial Real Estate",
    description:
      "Pre-leased offices, retail spaces, office floors and commercial allocations assessed for tenant quality, lease structure and concentration risk.",
    bullets: ["Lease and lock-in review", "Tenant and location quality", "Net yield versus risk", "Fit with REITs, debt and AIF allocations"],
  },
  {
    icon: MapPinned,
    title: "Plots and Land",
    description:
      "HMDA/DTCP-style layout checks, title sensitivity and infrastructure-readiness review for families evaluating plotted exposure.",
    bullets: ["Layout approval review", "Access road and land-use checks", "Title and encumbrance checklist", "Avoidance of unregistered pre-launch schemes"],
  },
  {
    icon: Globe2,
    title: "NRI Real Estate Desk",
    description:
      "Remote-first support for NRIs buying, holding, renting or selling Hyderabad property while coordinating bank, tax and documentation workflows.",
    bullets: ["NRE/NRO funding route", "POA and documentation checklist", "Tax and repatriation planning", "Property management handoff"],
  },
];

const microMarkets = [
  {
    name: "Financial District, Gachibowli, HITEC City",
    fit: "Mature office-led demand, premium apartments, strong rental catchment",
    watch: "Entry prices are high; evaluate rental yield, maintenance cost and exit depth.",
  },
  {
    name: "Kokapet, Neopolis, Narsingi, Nanakramguda",
    fit: "Premium growth corridor with ORR access and luxury project supply",
    watch: "Check delivery timelines, density, future supply and infrastructure completion.",
  },
  {
    name: "Tellapur, Osman Nagar, Kollur",
    fit: "Family-led residential growth, villas and larger gated communities",
    watch: "Commute, school access, water, approach roads and social infrastructure matter.",
  },
  {
    name: "Kondapur, Miyapur, Bachupally, Kompally",
    fit: "Mid-market and value-led options with rental and end-use demand",
    watch: "Project quality varies widely; shortlist based on RERA, developer history and livability.",
  },
  {
    name: "Shamshabad, Patancheru, Genome Valley corridors",
    fit: "Selective logistics, industrial, airport and life-sciences adjacency themes",
    watch: "Land title, zoning, absorption and exit liquidity need specialist diligence.",
  },
];

const platformGroups = [
  {
    title: "Official Verification",
    items: [
      {
        name: "TG-RERA",
        href: "https://rera.telangana.gov.in/",
        use: "Verify project registration, promoter details, status and uploaded disclosures.",
      },
      {
        name: "TG-RERA Project Search",
        href: "https://rerait.telangana.gov.in/SearchList/Search",
        use: "Search registered projects and agents before paying advances.",
      },
      {
        name: "HMDA",
        href: "https://www.hmda.gov.in/",
        use: "Check planning context, layout references and metropolitan development updates.",
      },
    ],
  },
  {
    title: "Residential Discovery",
    items: [
      {
        name: "99acres",
        href: "https://www.99acres.com/property-in-hyderabad-ffid",
        use: "Broad resale, rental and project discovery across Hyderabad.",
      },
      {
        name: "Magicbricks",
        href: "https://www.magicbricks.com/property-for-sale-rent-in-Hyderabad/residential-real-estate-Hyderabad",
        use: "Large listing base with locality and price-trend views.",
      },
      {
        name: "Housing.com",
        href: "https://housing.com/in/buy/hyderabad/hyderabad",
        use: "Project discovery, map-led search and residential comparisons.",
      },
      {
        name: "NoBroker",
        href: "https://www.nobroker.in/property/sale/hyderabad/Hyderabad",
        use: "Owner-led resale, rentals and useful NRI/property-management services.",
      },
    ],
  },
  {
    title: "Commercial and Institutional",
    items: [
      {
        name: "JLL Hyderabad Research",
        href: "https://www.jll.com/en-in/insights/market-dynamics/hyderabad-office",
        use: "Office leasing, rent and capital-value market direction.",
      },
      {
        name: "Cushman & Wakefield Hyderabad",
        href: "https://www.cushmanwakefield.com/en/india/insights/hyderabad-marketbeat",
        use: "Office absorption, leasing and commercial market beat data.",
      },
      {
        name: "Colliers Hyderabad",
        href: "https://www.colliers.com/en-in/india/cities/hyderabad",
        use: "Commercial property, valuation and office-market advisory references.",
      },
      {
        name: "ANAROCK",
        href: "https://www.anarock.com/",
        use: "Residential research, project marketing and institutional property advisory.",
      },
    ],
  },
  {
    title: "NRI and Managed Ownership",
    items: [
      {
        name: "NoBroker NRI Services",
        href: "https://www.nobroker.in/nri/",
        use: "Rental, legal, documentation and remote property-management workflows.",
      },
      {
        name: "Square Yards",
        href: "https://www.squareyards.com/",
        use: "Proptech-led discovery, mortgages, NRI support and property-management ecosystem.",
      },
      {
        name: "RELAI",
        href: "https://www.relai.world/nri-services",
        use: "Hyderabad-focused NRI assistance, documentation and property management.",
      },
    ],
  },
];

const nriChecklist = [
  "NRIs and OCIs can generally buy residential and commercial property in India, but not agricultural land, plantation property or farmhouses without specific permission.",
  "Purchase payments should be routed through normal banking channels or eligible NRE, FCNR(B) or NRO accounts.",
  "Use NRE funding when overseas-earned money and future repatriability are important; use NRO for India-sourced income or legacy resident assets.",
  "Before purchase, verify RERA registration, title flow, encumbrance, approvals, sanctioned plan, completion timeline and builder litigation history.",
  "If buying remotely, use a tightly drafted and registered Power of Attorney rather than broad authority.",
  "Plan exit before entry: TDS on sale by NRI, capital gains, Form 15CA/CB, bank documentation and RBI repatriation limits can affect cash flow.",
  "For rental assets, decide who handles tenant verification, rent collection, repairs, tax withholding and periodic inspection.",
];

const diligenceDocuments = [
  "TG-RERA project registration certificate and current project status",
  "HMDA, GHMC, DTCP or relevant authority approval references",
  "Title deed chain, mother deed and ownership flow",
  "Encumbrance certificate and litigation search",
  "Sanctioned building plan, occupancy certificate or completion status",
  "Sale agreement, payment schedule, cancellation terms and delay clauses",
  "UDS, carpet area, built-up area and maintenance obligation clarity",
  "Loan approval, valuation, rental estimate and resale comparables",
  "NRI POA, PAN, OCI/passport, NRE/NRO funding and tax documents where relevant",
];

const redFlags = [
  "Unregistered project marketed as a pre-launch opportunity",
  "Large cash component or payment outside normal banking channels",
  "Mismatch between brochure area, agreement area and sanctioned plan",
  "Builder pushing urgency before sharing title and approval documents",
  "Plots without clear layout approval, road access or land-use confirmation",
  "Commercial yield quoted without lease copy, lock-in, escalation and tenant review",
  "NRI buyer asked to sign broad POA without transaction-specific limits",
  "No clear plan for rental management, tax withholding, insurance or resale exit",
];

const faqs = [
  {
    q: "Is Hyderabad real estate still attractive in 2026?",
    a: "Hyderabad remains attractive because of office leasing, GCC demand, infrastructure depth and comparatively broad residential supply. But micro-market selection, project quality, price discipline and exit liquidity matter more than the city-level story.",
  },
  {
    q: "Which areas are best for Hyderabad real estate investment?",
    a: "Financial District, Gachibowli, HITEC City, Kokapet, Narsingi, Tellapur, Kondapur, Miyapur, Bachupally and Kompally are commonly evaluated. The right area depends on budget, commute, rental demand, possession timeline and risk tolerance.",
  },
  {
    q: "Can NRIs buy property in Hyderabad?",
    a: "Yes. NRIs and OCIs can generally buy residential and commercial property in India. They should avoid agricultural land, plantation property and farmhouses unless specific rules permit it.",
  },
  {
    q: "Should an NRI use NRE or NRO to buy property?",
    a: "It depends on source of funds and future use. NRE is usually cleaner for overseas-earned money and repatriability. NRO is used for India-sourced funds such as rent, dividends or sale proceeds. The route should be decided before payment.",
  },
  {
    q: "How do I check if a Hyderabad project is safe?",
    a: "Start with TG-RERA registration, HMDA or relevant layout/building approvals, title documents, encumbrance certificate, sanctioned plan, completion status, promoter record, bank approval and site inspection.",
  },
  {
    q: "Is commercial property better than residential property?",
    a: "Not automatically. Commercial can offer higher rental yields but brings lease, vacancy, tenant and ticket-size risk. Residential may be easier to understand and resell, but yields can be lower after maintenance and taxes.",
  },
  {
    q: "Do you recommend specific builders or projects?",
    a: "SoHo Wealth helps evaluate fit, risk, documents, platforms and allocation role. Specific project selection should follow diligence, legal review and suitability rather than brand name alone.",
  },
  {
    q: "Can property sale proceeds be repatriated abroad?",
    a: "Yes, subject to FEMA/RBI rules, source of acquisition, tax compliance, bank documentation and applicable annual limits. NRIs should plan repatriation before selling.",
  },
  {
    q: "Why should I use a TG-RERA registered consultant or agent?",
    a: "A RERA-registered consultant or agent gives buyers a verifiable regulatory trail. Before paying fees or signing a facilitation mandate, verify the consultant or agent registration on the TG-RERA portal.",
  },
  {
    q: "Does SoHo Wealth replace a lawyer, valuer or tax advisor?",
    a: "No. SoHo Wealth helps with portfolio fitment, diligence framing and coordination. Legal title, valuation and tax opinions should be confirmed by qualified professionals.",
  },
];

const sourceLinks = [
  { title: "TG-RERA official portal", href: "https://rera.telangana.gov.in/" },
  { title: "TG-RERA project search", href: "https://rerait.telangana.gov.in/SearchList/Search" },
  { title: "HMDA official portal", href: "https://www.hmda.gov.in/" },
  { title: "RBI master circular on NRI immovable property", href: "https://www.rbi.org.in/commonman/English/Scripts/Notification.aspx?Id=1175" },
  { title: "RBI remittance of assets FAQ", href: "https://www.rbi.org.in/commonperson/english/scripts/FAQs.aspx?Id=17" },
  { title: "JLL Hyderabad office market dynamics Q1 2026", href: "https://www.jll.com/en-in/insights/market-dynamics/hyderabad-office" },
  { title: "JLL Hyderabad residential market dynamics Q1 2026", href: "https://www.jll.com/en-in/insights/market-dynamics/hyderabad-residential" },
  { title: "Cushman & Wakefield Hyderabad MarketBeat", href: "https://www.cushmanwakefield.com/en/india/insights/hyderabad-marketbeat" },
];

const seoClusterLinks = [
  {
    title: "US NRI Hyderabad Real Estate",
    href: "/us-nri-hyderabad-real-estate",
    description: "Buying from the USA, NRE/NRO routing, POA, US tax coordination and remote ownership planning.",
  },
  {
    title: "NRI Real Estate in Hyderabad",
    href: "/nri-real-estate-in-hyderabad",
    description: "A global NRI guide for residential, commercial, rental, repatriation and property-management decisions in Hyderabad.",
  },
  {
    title: "NRI Property Checklist",
    href: "/nri-property-checklist-hyderabad",
    description: "Documents, TG-RERA checks, POA, banking, tax and exit checklist before token payment.",
  },
  {
    title: "Kokapet Real Estate",
    href: "/hyderabad-real-estate/kokapet",
    description: "Premium West Hyderabad and Neopolis corridor review for NRI and HNI buyers.",
  },
  {
    title: "Gachibowli Real Estate",
    href: "/hyderabad-real-estate/gachibowli",
    description: "Mature IT and office-led residential market with rental-demand and resale-depth review.",
  },
  {
    title: "Financial District Real Estate",
    href: "/hyderabad-real-estate/financial-district",
    description: "Premium office-led corridor for rental demand, senior professionals and high-ticket residential projects.",
  },
  {
    title: "Tellapur Real Estate",
    href: "/hyderabad-real-estate/tellapur",
    description: "Family-led growth corridor for larger homes, villas and return-to-India planning.",
  },
  {
    title: "Narsingi Real Estate",
    href: "/hyderabad-real-estate/narsingi",
    description: "ORR-access corridor near Kokapet, Nanakramguda and Financial District demand.",
  },
  {
    title: "Shamshabad Real Estate",
    href: "/hyderabad-real-estate/shamshabad",
    description: "Airport and logistics corridor where title, land-use and exit liquidity need extra diligence.",
  },
];

export default function HyderabadRealEstatePage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Hyderabad Real Estate Advisory",
    description:
      "Residential, commercial and NRI real estate advisory for Hyderabad property buyers and investors.",
    serviceType: "Real Estate Advisory",
    url: pageUrl,
    provider: { "@id": "https://www.sohowealth.in/#organization" },
    areaServed: [
      { "@type": "City", name: "Hyderabad" },
      { "@type": "AdministrativeArea", name: "Telangana" },
      { "@type": "Country", name: "India" },
    ],
    audience: { "@type": "Audience", audienceType: "HNIs, NRIs, family offices and property investors" },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sohowealth.in/" },
      { "@type": "ListItem", position: 2, name: "Hyderabad Real Estate", item: pageUrl },
    ],
  };

  return (
    <main className="pt-20">
      <JsonLd data={[serviceSchema, breadcrumbSchema]} />

      <section className="relative overflow-hidden py-20 lg:py-28" style={{ backgroundColor: "#0B1F3A" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)" }} />
        <div className="container relative z-10 mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-8">
          <div>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-body text-xs font-bold uppercase tracking-[0.15em]" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}>
              <MapPinned className="h-3.5 w-3.5" />
              Hyderabad Real Estate
            </span>
            <h1 className="font-display mb-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              Real estate in Hyderabad, <span style={{ color: "#C9A84C" }}>evaluated like wealth.</span>
            </h1>
            <p className="font-body mb-8 max-w-2xl text-lg leading-relaxed lg:text-xl" style={{ color: "rgba(255,255,255,0.75)" }}>
              SoHo Wealth helps HNIs, NRIs and families evaluate Hyderabad residential and commercial real estate with a portfolio-first lens: location, title, RERA, yield, liquidity, tax and repatriation.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ScrollToSectionButton targetId="real-estate-consultation" className="inline-flex items-center justify-center gap-2 rounded-lg px-7 py-4 font-body text-sm font-semibold transition hover:opacity-90" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}>
                Book Real Estate Review
                <ArrowRight className="h-4 w-4" />
              </ScrollToSectionButton>
              <a href="https://wa.me/919032999466" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg border border-white/20 px-7 py-4 font-body text-sm font-semibold text-white transition hover:bg-white/10">
                WhatsApp SoHo Wealth
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.06] p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}>
                <Landmark className="h-5 w-5" />
              </div>
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-[0.14em]" style={{ color: "#C9A84C" }}>Opportunity Snapshot</p>
                <h2 className="font-display text-2xl font-semibold text-white">Demand-led, but not risk-free</h2>
              </div>
            </div>
            <div className="grid gap-4">
              {marketSignals.map((signal) => (
                <div key={signal.label} className="rounded-lg bg-white/[0.06] p-4">
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="font-body text-sm font-semibold text-white/80">{signal.label}</p>
                    <p className="font-display text-2xl font-semibold" style={{ color: "#C9A84C" }}>{signal.value}</p>
                  </div>
                  <p className="mt-2 font-body text-xs leading-relaxed text-white/55">{signal.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="font-body text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#C9A84C" }}>What We Help With</p>
            <h2 className="font-display mt-3 text-3xl font-semibold md:text-4xl" style={{ color: "#0B1F3A" }}>
              Residential, commercial and NRI ownership under one review
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {offerings.map((item) => (
              <div key={item.title} className="rounded-lg border border-slate-200 bg-white p-7 shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)]">
                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: "#FDF8EC", color: "#0B1F3A" }}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold" style={{ color: "#0B1F3A" }}>{item.title}</h3>
                    <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">{item.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2 font-body text-sm text-slate-700">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#C9A84C" }} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24" style={{ backgroundColor: "#F7F8FA" }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="font-body text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#C9A84C" }}>Micro-Market Map</p>
            <h2 className="font-display mt-3 text-3xl font-semibold md:text-4xl" style={{ color: "#0B1F3A" }}>
              Where Hyderabad demand is concentrating
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-slate-600">
              These are not blanket recommendations. Each corridor needs project-level, title-level and price-level review.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-4">
            {microMarkets.map((market) => (
              <div key={market.name} className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 md:grid-cols-[0.9fr_1fr_1fr] md:items-start">
                <h3 className="font-display text-lg font-semibold" style={{ color: "#0B1F3A" }}>{market.name}</h3>
                <p className="font-body text-sm leading-relaxed text-slate-700">{market.fit}</p>
                <p className="font-body text-sm leading-relaxed text-slate-500">{market.watch}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="font-body text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#C9A84C" }}>NRI Property Guides</p>
            <h2 className="font-display mt-3 text-3xl font-semibold md:text-4xl" style={{ color: "#0B1F3A" }}>
              Deeper Hyderabad property guides for NRIs and overseas clients
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-slate-600">
              Use these guides to compare country-specific execution, document readiness and the main Hyderabad corridors before shortlisting a property.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {seoClusterLinks.map((item) => (
              <Link key={item.href} href={item.href} className="group rounded-lg border border-slate-200 bg-white p-6 shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)] transition hover:-translate-y-1 hover:border-[#C9A84C]">
                <h3 className="font-display text-lg font-semibold transition group-hover:text-[#C9A84C]" style={{ color: "#0B1F3A" }}>{item.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-slate-600">{item.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 font-body text-sm font-semibold" style={{ color: "#0B1F3A" }}>
                  Read guide
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="font-body text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#C9A84C" }}>Platform Stack</p>
            <h2 className="font-display mt-3 text-3xl font-semibold md:text-4xl" style={{ color: "#0B1F3A" }}>
              Best platforms to use for Hyderabad real estate research
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-slate-600">
              Use platforms for discovery and verification. Do not treat any listing portal as a substitute for legal, tax and title diligence.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {platformGroups.map((group) => (
              <div key={group.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)]">
                <h3 className="font-display mb-5 text-xl font-semibold" style={{ color: "#0B1F3A" }}>{group.title}</h3>
                <div className="grid gap-4">
                  {group.items.map((platform) => (
                    <a key={platform.name} href={platform.href} target="_blank" rel="noopener noreferrer" className="group rounded-lg border border-slate-100 p-4 transition hover:border-[#C9A84C]">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-body text-sm font-bold" style={{ color: "#0B1F3A" }}>{platform.name}</span>
                        <ExternalLink className="h-4 w-4 text-slate-400 transition group-hover:text-[#C9A84C]" />
                      </div>
                      <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">{platform.use}</p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24" style={{ backgroundColor: "#0B1F3A" }}>
        <div className="container mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:px-8">
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-body text-xs font-bold uppercase tracking-[0.15em]" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}>
              <Globe2 className="h-3.5 w-3.5" />
              NRI Real Estate
            </span>
            <h2 className="font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
              Buying from overseas needs more than a site visit on video.
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-white/65">
              NRIs need the right ownership route, payment account, POA, tax plan, tenant plan and exit route before committing to Hyderabad property.
            </p>
          </div>
          <div className="grid gap-3">
            {nriChecklist.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg bg-white/[0.06] p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "#C9A84C" }} />
                <p className="font-body text-sm leading-relaxed text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="font-body text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#C9A84C" }}>Diligence First</p>
            <h2 className="font-display mt-3 text-3xl font-semibold md:text-4xl" style={{ color: "#0B1F3A" }}>
              Our real estate review framework
            </h2>
          </div>
          <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3">
            {[
              { title: "1. Portfolio Fit", copy: "We assess whether property should be end-use, income, diversification or legacy allocation, and how much concentration is sensible." },
              { title: "2. Project and Title Screen", copy: "We build the RERA, HMDA, title, encumbrance, approval, possession and developer-track-record checklist." },
              { title: "3. Return and Exit Math", copy: "We compare gross price, all-in cost, rental yield, vacancy, maintenance, taxes, exit depth and alternatives like REITs or debt." },
              { title: "4. NRI Execution", copy: "We map NRE/NRO funding, POA, remittance, tax withholding, repatriation and property-management workflows." },
              { title: "5. Platform and Partner Shortlist", copy: "We help decide which portals, brokers, legal reviewers, valuers and managers should be used for each property type." },
              { title: "6. Review Rhythm", copy: "We set inspection, rent, insurance, tenant, tax and market-review cadence so the asset does not become forgotten wealth." },
            ].map((step) => (
              <div key={step.title} className="rounded-lg border border-slate-200 bg-white p-6">
                <FileSearch className="mb-4 h-6 w-6" style={{ color: "#C9A84C" }} />
                <h3 className="font-display text-lg font-semibold" style={{ color: "#0B1F3A" }}>{step.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-slate-600">{step.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24" style={{ backgroundColor: "#F7F8FA" }}>
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="font-body text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#C9A84C" }}>Buyer Protection</p>
            <h2 className="font-display mt-3 text-3xl font-semibold md:text-4xl" style={{ color: "#0B1F3A" }}>
              Documents we want to see before a property becomes an investment
            </h2>
            <p className="mt-4 font-body text-base leading-relaxed text-slate-600">
              A good Hyderabad property decision is not built on a brochure. It is built on approvals, title, cash-flow math, exit visibility and NRI execution clarity.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-lg border border-slate-200 bg-white p-7 shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)]">
              <div className="mb-5 flex items-center gap-3">
                <FileSearch className="h-6 w-6" style={{ color: "#C9A84C" }} />
                <h3 className="font-display text-2xl font-semibold" style={{ color: "#0B1F3A" }}>Document checklist</h3>
              </div>
              <ul className="space-y-3">
                {diligenceDocuments.map((item) => (
                  <li key={item} className="flex gap-3 font-body text-sm leading-relaxed text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#C9A84C" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-slate-200 bg-white p-7 shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)]">
              <div className="mb-5 flex items-center gap-3">
                <ShieldCheck className="h-6 w-6" style={{ color: "#C9A84C" }} />
                <h3 className="font-display text-2xl font-semibold" style={{ color: "#0B1F3A" }}>Red flags</h3>
              </div>
              <ul className="space-y-3">
                {redFlags.map((item) => (
                  <li key={item} className="flex gap-3 font-body text-sm leading-relaxed text-slate-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: "#C9A84C" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <LeadCaptureForm
        source="hyderabad-real-estate page"
        heading="Book Your Hyderabad Real Estate Review"
        sectionId="real-estate-consultation"
        leftContent={
          <>
            <h2 className="font-display mb-5 text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-[2.75rem]">
              Review a Property Before You Commit
            </h2>
            <p className="font-body mb-10 text-base leading-relaxed lg:text-lg" style={{ color: "rgba(255,255,255,0.7)" }}>
              Bring the project name, budget, location, ownership goal and NRI status. We will help you frame the right diligence questions before money moves.
            </p>
            <p className="font-body mb-5 text-sm font-semibold uppercase tracking-widest" style={{ color: "#C9A84C" }}>
              What you will get
            </p>
            <ul className="mb-10 space-y-4">
              {["Residential vs commercial fitment", "RERA/HMDA and title checklist", "NRI funding route discussion", "Rental yield and exit review", "Direct consultation with SoHo Wealth"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "#C9A84C" }} />
                  <span className="font-body text-base text-white/90">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-body text-sm italic leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Educational and diligence support only. Legal, tax and valuation work should be confirmed with qualified professionals.
            </p>
          </>
        }
      />

      <section className="bg-white py-14">
        <div className="container mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-lg border border-slate-200 p-6 shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)]">
            <div className="mb-4 flex items-center gap-3">
              <ShieldCheck className="h-6 w-6" style={{ color: "#C9A84C" }} />
              <h2 className="font-display text-2xl font-semibold" style={{ color: "#0B1F3A" }}>
                TG-RERA Registered Consultant Disclosure
              </h2>
            </div>
            <p className="font-body text-sm leading-relaxed text-slate-700">
              Real estate transaction facilitation should be undertaken only through appropriately registered TG-RERA consultants or agents where registration is required. Before any paid property facilitation, clients should verify the consultant or agent name and registration number on the TG-RERA portal.
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-slate-600">
              SoHo Wealth provides portfolio-fitment, diligence framing and coordination support. Legal title, valuation, tax treatment, stamp duty, registration and RERA status must be independently verified by qualified professionals and official portals before a purchase decision.
            </p>
            <a href="https://rerait.telangana.gov.in/SearchList/Search" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 font-body text-sm font-semibold" style={{ color: "#0B1F3A" }}>
              Verify on TG-RERA
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#F7F8FA" }}>
        <div className="container mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="font-display mb-5 text-2xl font-semibold" style={{ color: "#0B1F3A" }}>Sources and Verification Links</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {sourceLinks.map((source) => (
              <a key={source.href} href={source.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 font-body text-sm font-semibold text-slate-700 transition hover:border-[#C9A84C]">
                {source.title}
                <ExternalLink className="h-4 w-4 shrink-0 text-slate-400" />
              </a>
            ))}
          </div>
          <p className="mt-6 font-body text-xs leading-relaxed text-slate-500">
            Market references are used for broad context only. Property-level diligence, legal title, taxation, valuation and suitability must be reviewed case by case.
          </p>
        </div>
      </section>

      <FAQSection faqs={faqs} heading="Hyderabad Real Estate FAQs" background="#FFFFFF" />

      <RelatedServices
        heading="Continue Comparing Options"
        items={[
          { title: "US NRI Hyderabad Real Estate", href: "/us-nri-hyderabad-real-estate", description: "Buying from the USA with NRE/NRO, POA and US tax coordination points." },
          { title: "NRI Property Checklist", href: "/nri-property-checklist-hyderabad", description: "Documents, RERA, banking and exit checks before token payment." },
          { title: "NRI Real Estate in Hyderabad", href: "/nri-real-estate-in-hyderabad", description: "Buying, holding, renting or exiting Hyderabad property from overseas." },
          { title: "NRI Advisory", href: "/services/nri", description: "Coordinate India investments, NRE/NRO, repatriation and family wealth from overseas." },
        ]}
      />
    </main>
  );
}
