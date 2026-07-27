import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  Globe2,
  Landmark,
  LockKeyhole,
  Scale,
  ShieldCheck,
} from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { FAQSection, type FAQ } from "@/components/seo/FAQSection";

const canonicalUrl = "https://www.sohowealth.in/investment-products";

export const metadata: Metadata = {
  title: "Investment Products: Mutual Funds, PMS, SIF & More | SoHo",
  description:
    "Compare mutual funds, PMS, SIF, AIF, pre-IPO and global investing by portfolio role, minimum investment, liquidity and investor fit.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Investment Products at SoHo Wealth",
    description:
      "Understand the role, access level and trade-offs of mutual funds, PMS, SIF, AIF, pre-IPO and global investing.",
    url: canonicalUrl,
    siteName: "SoHo Wealth",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Investment Products at SoHo Wealth",
    description: "Compare investment routes by role, liquidity, minimum and fit—not by headline returns.",
  },
};

const products = [
  {
    icon: CircleDollarSign,
    name: "Mutual Funds",
    href: "/mutual-funds",
    access: "Scheme-dependent",
    role: "Core, diversified building blocks for long-term goals, liquidity and disciplined investing.",
    suitedTo: "Investors building or simplifying the core of a portfolio.",
    watch: "Category overlap, portfolio duplication, cost and allocation drift.",
  },
  {
    icon: BarChart3,
    name: "Portfolio Management Services",
    href: "/pms-advisory",
    access: "₹50 lakh minimum",
    role: "Concentrated, professionally managed securities held directly in the investor’s name.",
    suitedTo: "Eligible investors who can tolerate manager and concentration risk.",
    watch: "Strategy fit, drawdowns, fees, churn, benchmark choice and manager consistency.",
  },
  {
    icon: Scale,
    name: "Specialized Investment Funds",
    href: "/sif",
    access: "₹10 lakh minimum",
    role: "Flexible regulated strategies positioned between conventional mutual funds and PMS.",
    suitedTo: "Experienced investors seeking a measured satellite allocation.",
    watch: "Strategy complexity, derivatives exposure, risk limits and portfolio overlap.",
  },
  {
    icon: Building2,
    name: "Alternative Investment Funds",
    href: "/aif-advisory",
    access: "₹1 crore minimum",
    role: "Private-market, credit, venture, real-asset or sophisticated public-market strategies.",
    suitedTo: "Eligible investors with long horizons and sufficient liquid wealth elsewhere.",
    watch: "Illiquidity, capital calls, valuation, fees, manager access and vintage risk.",
  },
  {
    icon: LockKeyhole,
    name: "Pre-IPO Opportunities",
    href: "/pre-ipo",
    access: "Deal-specific",
    role: "Selective exposure to private companies before a potential public listing or liquidity event.",
    suitedTo: "Qualified investors who can accept uncertain timelines and limited liquidity.",
    watch: "Issuer quality, valuation, transfer restrictions, exit uncertainty and position size.",
  },
  {
    icon: Globe2,
    name: "Global Investing",
    href: "/global-investing",
    access: "Route-dependent",
    role: "Geographic and currency diversification through permitted international investment routes.",
    suitedTo: "Indian residents and families with a clear reason for overseas exposure.",
    watch: "LRS, product domicile, currency risk, foreign-asset reporting and tax coordination.",
  },
];

const faqs: FAQ[] = [
  {
    q: "Does SoHo Wealth recommend one product for every investor?",
    a: "No. Product selection should follow goals, liquidity, risk capacity, existing exposure and eligibility. A product can be well managed and still be unsuitable for a particular portfolio.",
  },
  {
    q: "Can mutual funds, SIF, PMS and AIF be used together?",
    a: "They can, but only when each allocation has a distinct portfolio role. Combining products without checking underlying exposure can create duplication, hidden concentration and unnecessary complexity.",
  },
  {
    q: "Are the minimum investment amounts the amount SoHo recommends investing?",
    a: "No. Regulatory or product minimums only determine access. A suitable position size depends on your total liquid wealth, goals, risk capacity and the product’s liquidity and concentration.",
  },
  {
    q: "Does SoHo Wealth provide tax or legal advice on these products?",
    a: "No. SoHo Wealth provides investment distribution and portfolio coordination within its disclosed scope. Tax, legal and accounting decisions remain with the appropriate licensed professionals.",
  },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${canonicalUrl}#webpage`,
  url: canonicalUrl,
  name: "Investment Products at SoHo Wealth",
  description:
    "A comparison hub for mutual funds, PMS, SIF, AIF, pre-IPO and global investing.",
  isPartOf: { "@id": "https://www.sohowealth.in/#website" },
  about: products.map((product) => ({ "@type": "Thing", name: product.name })),
  mainEntity: {
    "@type": "ItemList",
    itemListElement: products.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: `https://www.sohowealth.in${product.href}`,
    })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sohowealth.in/" },
    { "@type": "ListItem", position: 2, name: "Investment Products", item: canonicalUrl },
  ],
};

export default function InvestmentProductsPage() {
  return (
    <main className="pt-20">
      <JsonLd data={[collectionSchema, breadcrumbSchema]} />

      <section className="relative overflow-hidden bg-[#07192f] py-20 lg:py-28">
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="container relative mx-auto px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-12 font-body text-xs text-white/50">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-white/25">/</span>
            <span aria-current="page" className="text-white/75">
              Investment Products
            </span>
          </nav>
          <div className="max-w-4xl">
            <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-[#C9A84C]">
              What can I invest in?
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.06] text-white md:text-5xl lg:text-6xl">
              Investment products should have a job—not merely a place in your portfolio.
            </h1>
            <p className="mt-7 max-w-3xl font-body text-lg leading-relaxed text-white/70 md:text-xl">
              Compare mutual funds, PMS, SIF, AIF, pre-IPO and global investing by the role they can play, the
              capital they require and the risks they introduce.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/portfolio-review"
                className="inline-flex items-center justify-center rounded-lg bg-[#C9A84C] px-7 py-4 font-body text-sm font-bold text-[#0B1F3A] transition hover:bg-[#d8ba62]"
              >
                Review My Current Portfolio
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
              <a
                href="#compare-investment-products"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-7 py-4 font-body text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Compare the Product Roles
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="compare-investment-products" className="scroll-mt-24 bg-[#F7F8FA] py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-[#B18C2D]">
              Six different portfolio jobs
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl lg:text-5xl">
              Start with the purpose. Then evaluate the product.
            </h2>
            <p className="mt-5 font-body text-base leading-relaxed text-slate-600 md:text-lg">
              Access thresholds do not establish suitability. The right comparison begins with portfolio role,
              liquidity, time horizon, concentration and what you already own.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2">
            {products.map((product) => (
              <article key={product.href} className="rounded-3xl border border-slate-200 bg-white p-7 md:p-8">
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#0B1F3A] text-[#C9A84C]">
                    <product.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="rounded-full bg-[#F4E8BF] px-3 py-1 font-body text-[11px] font-bold uppercase tracking-[0.1em] text-[#76570D]">
                    {product.access}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold text-[#0B1F3A]">{product.name}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-slate-600">{product.role}</p>
                <dl className="mt-6 space-y-4 border-t border-slate-200 pt-5">
                  <div>
                    <dt className="font-body text-xs font-bold uppercase tracking-[0.12em] text-[#8B6815]">
                      Often considered by
                    </dt>
                    <dd className="mt-1 font-body text-sm leading-relaxed text-slate-600">{product.suitedTo}</dd>
                  </div>
                  <div>
                    <dt className="font-body text-xs font-bold uppercase tracking-[0.12em] text-[#8B6815]">
                      Review carefully
                    </dt>
                    <dd className="mt-1 font-body text-sm leading-relaxed text-slate-600">{product.watch}</dd>
                  </div>
                </dl>
                <Link
                  href={product.href}
                  className="mt-7 inline-flex items-center font-body text-sm font-bold text-[#0B1F3A] transition hover:text-[#8B6815]"
                >
                  Explore {product.name}
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-[#B18C2D]">
                The decision order
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl">
                Product comparison comes after portfolio diagnosis.
              </h2>
              <p className="mt-5 font-body text-base leading-relaxed text-slate-600">
                We first map the balance sheet, goals, liquidity and current exposure. Only then does it become useful
                to compare managers, strategies or product structures.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: Landmark, title: "Portfolio role", copy: "Growth, stability, liquidity or diversification." },
                { icon: ShieldCheck, title: "Risk capacity", copy: "The loss and illiquidity the plan can actually absorb." },
                { icon: Scale, title: "Position size", copy: "A minimum ticket is not a recommended allocation." },
                { icon: CheckCircle2, title: "Implementation fit", copy: "Access, cost, documentation and ongoing review." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6">
                  <item.icon className="h-5 w-5 text-[#B18C2D]" aria-hidden="true" />
                  <h3 className="mt-4 font-display text-lg font-semibold text-[#0B1F3A]">{item.title}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-slate-600">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0B1F3A] py-16">
        <div className="container mx-auto px-6 text-center lg:px-8">
          <h2 className="font-display text-3xl font-semibold text-white md:text-4xl">
            Bring the portfolio you already have.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-base leading-relaxed text-white/65">
            We will help you identify duplication, concentration and the decisions that deserve priority before adding
            another product.
          </p>
          <Link
            href="/portfolio-review"
            className="mt-8 inline-flex items-center rounded-lg bg-[#C9A84C] px-7 py-4 font-body text-sm font-bold text-[#0B1F3A]"
          >
            Book a Portfolio Review
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <FAQSection faqs={faqs} heading="Investment Product FAQs" background="#FFFFFF" />
    </main>
  );
}
