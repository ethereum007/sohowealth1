import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Languages,
  Laptop2,
  MapPin,
  Stethoscope,
} from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { FAQSection, type FAQ } from "@/components/seo/FAQSection";

const canonicalUrl = "https://www.sohowealth.in/who-we-serve";

export const metadata: Metadata = {
  title: "Who We Serve: Doctors, IT Professionals & Telugu NRIs | SoHo",
  description:
    "Distinct wealth-planning experiences for doctors, IT professionals and Telugu NRIs—each built around different income, career and family decisions.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Who SoHo Wealth Serves",
    description:
      "Purpose-built wealth journeys for doctors, IT professionals and Telugu NRIs.",
    url: canonicalUrl,
    siteName: "SoHo Wealth",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Who SoHo Wealth Serves",
    description: "Doctors, IT professionals and Telugu NRIs need different starting points—not a generic template.",
  },
};

const audiences = [
  {
    icon: Stethoscope,
    eyebrow: "Doctors in AP & Telangana",
    title: "Connect your earning life, practice and family wealth.",
    description:
      "For salaried consultants, doctors across multiple hospitals, clinic owners and medical families whose personal and practice decisions cannot be planned separately.",
    href: "/financial-planning-for-doctors",
    cta: "Explore Doctor Wealth Planning",
    tool: "Doctor Wealth Check-up",
    topics: ["Variable professional income", "Clinic capital and equipment", "Late-career investing", "Retirement by choice"],
  },
  {
    icon: Laptop2,
    eyebrow: "IT Professionals",
    title: "Turn salary, bonuses and company equity into independent wealth.",
    description:
      "For technology professionals managing rapid income growth, RSUs, ESOPs, employer-stock concentration, job changes and an ambition for greater financial freedom.",
    href: "/wealth-planning-for-it-professionals",
    cta: "Explore Tech Wealth Planning",
    tool: "Equity Compensation Check",
    topics: ["RSUs and ESOPs", "Bonus allocation", "Job-switch runway", "Financial independence"],
  },
  {
    icon: Globe2,
    eyebrow: "Telugu NRIs",
    title: "Bring India-linked accounts, investments and family goals into one plan.",
    description:
      "For Telugu families abroad coordinating NRE/NRO accounts, India investments, property, repatriation questions and responsibilities across two countries.",
    href: "/nri-telugu",
    cta: "Explore Telugu NRI Wealth",
    tool: "Telugu or English consultation",
    topics: ["NRE and NRO coordination", "India-linked investments", "Repatriation readiness", "Cross-border family goals"],
  },
];

const faqs: FAQ[] = [
  {
    q: "Why does SoHo Wealth have separate pages for each audience?",
    a: "The portfolio may use some of the same regulated products, but the planning sequence is different. A clinic owner, an employee with RSUs and a Telugu NRI each face different liquidity, documentation, career and family decisions.",
  },
  {
    q: "Can someone fit more than one audience?",
    a: "Yes. A doctor may also be an NRI, or an IT professional may be preparing to move abroad. Start with the page closest to your current financial complexity and share the broader picture during the first review.",
  },
  {
    q: "Are these pages personalised investment recommendations?",
    a: "No. They are educational starting points. Any implementation depends on eligibility, suitability, risk capacity and SoHo Wealth’s disclosed distribution scope.",
  },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${canonicalUrl}#webpage`,
  url: canonicalUrl,
  name: "Who SoHo Wealth Serves",
  description: "Wealth-planning paths for doctors, IT professionals and Telugu NRIs.",
  isPartOf: { "@id": "https://www.sohowealth.in/#website" },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: audiences.map((audience, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: audience.eyebrow,
      url: `https://www.sohowealth.in${audience.href}`,
    })),
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sohowealth.in/" },
    { "@type": "ListItem", position: 2, name: "Who We Serve", item: canonicalUrl },
  ],
};

export default function WhoWeServePage() {
  return (
    <main className="pt-20">
      <JsonLd data={[collectionSchema, breadcrumbSchema]} />

      <section className="relative overflow-hidden bg-[#07192f] py-20 lg:py-28">
        <div className="absolute -right-32 top-0 h-[32rem] w-[32rem] rounded-full bg-[#C9A84C]/10 blur-3xl" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-12 font-body text-xs text-white/50">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-white/25">/</span>
            <span aria-current="page" className="text-white/75">
              Who We Serve
            </span>
          </nav>
          <div className="max-w-4xl">
            <p className="font-body text-xs font-bold uppercase tracking-[0.18em] text-[#C9A84C]">
              Who is this built for?
            </p>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.06] text-white md:text-5xl lg:text-6xl">
              The same investment product can solve three very different wealth problems.
            </h1>
            <p className="mt-7 max-w-3xl font-body text-lg leading-relaxed text-white/70 md:text-xl">
              Doctors, IT professionals and Telugu NRIs need different questions, different planning sequences and
              different conversations. Choose the path that feels most like your financial life.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F8FA] py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-6xl space-y-8">
            {audiences.map((audience, index) => (
              <article
                key={audience.href}
                className="grid overflow-hidden rounded-3xl border border-slate-200 bg-white lg:grid-cols-[.8fr_1.2fr]"
              >
                <div className="flex flex-col justify-between bg-[#0B1F3A] p-8 md:p-10">
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A84C]/15 text-[#C9A84C]">
                      <audience.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <p className="mt-7 font-body text-xs font-bold uppercase tracking-[0.16em] text-[#C9A84C]">
                      {audience.eyebrow}
                    </p>
                    <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white">
                      {audience.title}
                    </h2>
                    <p className="mt-5 font-body text-sm leading-relaxed text-white/65">{audience.description}</p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 font-body text-xs font-bold uppercase tracking-[0.12em] text-white/50">
                    {index === 0 ? (
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                    ) : index === 1 ? (
                      <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Languages className="h-4 w-4" aria-hidden="true" />
                    )}
                    {audience.tool}
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <p className="font-body text-xs font-bold uppercase tracking-[0.14em] text-[#8B6815]">
                    The page begins with
                  </p>
                  <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                    {audience.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-3 rounded-xl bg-[#F7F8FA] p-4">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#B18C2D]" aria-hidden="true" />
                        <span className="font-body text-sm font-semibold text-[#0B1F3A]">{topic}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={audience.href}
                    className="mt-8 inline-flex items-center rounded-lg bg-[#C9A84C] px-6 py-3.5 font-body text-sm font-bold text-[#0B1F3A]"
                  >
                    {audience.cta}
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="font-body text-xs font-bold uppercase tracking-[0.16em] text-[#B18C2D]">
              One discipline, different starting points
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl">
              Every path still ends with one connected portfolio.
            </h2>
            <p className="mx-auto mt-5 max-w-3xl font-body text-base leading-relaxed text-slate-600">
              We map cash flow, liquidity, investments, liabilities and goals. What changes is which complexity gets
              diagnosed first and which specialists may need to be involved.
            </p>
            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/portfolio-review"
                className="inline-flex items-center justify-center rounded-lg bg-[#0B1F3A] px-7 py-4 font-body text-sm font-bold text-white"
              >
                Start With a Portfolio Review
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/investment-products"
                className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-7 py-4 font-body text-sm font-bold text-[#0B1F3A]"
              >
                Explore Investment Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} heading="Who We Serve: FAQs" background="#F7F8FA" />
    </main>
  );
}
