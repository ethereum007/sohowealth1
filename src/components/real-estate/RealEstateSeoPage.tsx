import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  FileSearch,
  Globe2,
  Home,
  MapPinned,
  ShieldCheck,
} from "lucide-react";
import { FAQSection } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedServices } from "@/components/seo/RelatedServices";
import { ScrollToSectionButton } from "@/components/ScrollToSectionButton";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";
import type { RealEstateGuide } from "@/lib/real-estate/seo-pages";

type RealEstateSeoPageProps = {
  page: RealEstateGuide;
};

const baseUrl = "https://www.sohowealth.in";

export function RealEstateSeoPage({ page }: RealEstateSeoPageProps) {
  const url = `${baseUrl}${page.path}`;
  const consultationId = `${page.slug}-consultation`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      { "@type": "ListItem", position: 2, name: "Hyderabad Real Estate", item: `${baseUrl}/hyderabad-real-estate` },
      { "@type": "ListItem", position: 3, name: page.title, item: url },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: page.serviceName,
    description: page.serviceDescription,
    serviceType: page.serviceType,
    url,
    provider: { "@id": `${baseUrl}/#organization` },
    areaServed: [
      { "@type": "City", name: "Hyderabad" },
      { "@type": "AdministrativeArea", name: "Telangana" },
      { "@type": "Country", name: "India" },
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Singapore" },
      { "@type": "Country", name: "United Kingdom" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Country", name: "Australia" },
    ],
    audience: { "@type": "Audience", audienceType: "NRIs, OCIs, HNIs, founders and family offices" },
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    name: page.metaTitle,
    description: page.metaDescription,
    url,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${baseUrl}/#website` },
    about: page.keywords.map((keyword) => ({ "@type": "Thing", name: keyword })),
    citation: page.sources.map((source) => source.href),
    dateModified: page.updatedAt,
  };

  return (
    <main className="pt-20">
      <JsonLd data={[breadcrumbSchema, serviceSchema, webPageSchema]} />

      <section className="relative overflow-hidden py-20 lg:py-28" style={{ backgroundColor: "#0B1F3A" }}>
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)",
          }}
        />
        <div className="container relative z-10 mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.06fr_0.94fr] lg:items-center lg:px-8">
          <div>
            <Link href="/hyderabad-real-estate" className="mb-8 inline-flex items-center gap-2 font-body text-sm font-semibold text-white/65 transition hover:text-white">
              <ArrowRight className="h-4 w-4 rotate-180" />
              Hyderabad Real Estate Hub
            </Link>
            <span
              className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-body text-xs font-bold uppercase tracking-[0.15em]"
              style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}
            >
              <Globe2 className="h-3.5 w-3.5" />
              {page.heroKicker}
            </span>
            <h1 className="font-display mb-6 text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
              {page.h1} <span style={{ color: "#C9A84C" }}>{page.highlightedH1}</span>
            </h1>
            <p className="font-body mb-8 max-w-2xl text-lg leading-relaxed lg:text-xl" style={{ color: "rgba(255,255,255,0.75)" }}>
              {page.intro}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ScrollToSectionButton
                targetId={consultationId}
                className="inline-flex items-center justify-center gap-2 rounded-lg px-7 py-4 font-body text-sm font-semibold transition hover:opacity-90"
                style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}
              >
                Book Property Review
                <ArrowRight className="h-4 w-4" />
              </ScrollToSectionButton>
              <a
                href="https://wa.me/919032999466"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 px-7 py-4 font-body text-sm font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp SoHo Wealth
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.06] p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}>
                <MapPinned className="h-5 w-5" />
              </div>
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-[0.14em]" style={{ color: "#C9A84C" }}>
                  {page.marketLabel}
                </p>
                <h2 className="font-display text-2xl font-semibold text-white">Buyer-ready property guidance</h2>
              </div>
            </div>
            <div className="grid gap-4">
              {page.highlights.map((item) => (
                <div key={item.title} className="rounded-lg bg-white/[0.06] p-4">
                  <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 font-body text-sm leading-relaxed text-white/62">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {page.sections.map((section, index) => (
        <section key={section.heading} className="py-20 lg:py-24" style={{ backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F7F8FA" }}>
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              {section.eyebrow && (
                <p className="font-body text-xs font-bold uppercase tracking-[0.15em]" style={{ color: "#C9A84C" }}>
                  {section.eyebrow}
                </p>
              )}
              <h2 className="font-display mt-3 text-3xl font-semibold md:text-4xl" style={{ color: "#0B1F3A" }}>
                {section.heading}
              </h2>
              {section.copy && (
                <div className="mt-4 space-y-4">
                  {section.copy.map((paragraph) => (
                    <p key={paragraph} className="font-body text-base leading-relaxed text-slate-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {section.cards && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {section.cards.map((card) => (
                  <div key={card.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)]">
                    <Home className="mb-4 h-6 w-6" style={{ color: "#C9A84C" }} />
                    <h3 className="font-display text-lg font-semibold" style={{ color: "#0B1F3A" }}>
                      {card.title}
                    </h3>
                    <p className="mt-3 font-body text-sm leading-relaxed text-slate-600">{card.description}</p>
                  </div>
                ))}
              </div>
            )}

            {section.bullets && (
              <ul className="mx-auto grid max-w-4xl gap-3">
                {section.bullets.map((item) => (
                  <li key={item} className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4 font-body text-sm leading-relaxed text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "#C9A84C" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      {page.table && (
        <section className="py-20 lg:py-24" style={{ backgroundColor: "#FDF8EC" }}>
          <div className="container mx-auto max-w-5xl px-6 lg:px-8">
            <h2 className="font-display mb-10 text-center text-3xl font-semibold md:text-4xl" style={{ color: "#0B1F3A" }}>
              {page.table.heading}
            </h2>
            <div className="overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)]">
              <table className="w-full min-w-[720px] border-collapse font-body text-sm">
                <thead style={{ backgroundColor: "#0B1F3A" }}>
                  <tr>
                    {page.table.columns.map((column) => (
                      <th key={column} className="px-4 py-4 text-left font-semibold text-white">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {page.table.rows.map((row) => (
                    <tr key={row.join("|")} className="border-b border-slate-200 last:border-b-0">
                      {row.map((cell, index) => (
                        <td key={`${cell}-${index}`} className="px-4 py-4 align-top leading-relaxed text-slate-700">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      <section className="py-20 lg:py-24" style={{ backgroundColor: "#0B1F3A" }}>
        <div className="container mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:px-8">
          <div>
            <span
              className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-body text-xs font-bold uppercase tracking-[0.15em]"
              style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}
            >
              <FileSearch className="h-3.5 w-3.5" />
              Diligence Checklist
            </span>
            <h2 className="font-display text-3xl font-semibold leading-tight text-white md:text-4xl">{page.checklistTitle}</h2>
            <p className="mt-5 font-body text-base leading-relaxed text-white/65">{page.checklistIntro}</p>
          </div>
          <div className="grid gap-3">
            {page.checklist.map((item) => (
              <div key={item} className="flex gap-3 rounded-lg bg-white/[0.06] p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "#C9A84C" }} />
                <p className="font-body text-sm leading-relaxed text-white/80">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LeadCaptureForm
        source={page.leadSource}
        heading={page.formHeading}
        sectionId={consultationId}
        leftContent={
          <>
            <h2 className="font-display mb-5 text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-[2.75rem]">
              {page.formTitle}
            </h2>
            <p className="font-body mb-10 text-base leading-relaxed lg:text-lg" style={{ color: "rgba(255,255,255,0.7)" }}>
              {page.formCopy}
            </p>
            <p className="font-body mb-5 text-sm font-semibold uppercase tracking-widest" style={{ color: "#C9A84C" }}>
              What we will review
            </p>
            <ul className="mb-10 space-y-4">
              {page.formBullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "#C9A84C" }} />
                  <span className="font-body text-base text-white/90">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-body text-sm italic leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Educational and diligence support only. Legal, tax, valuation and transaction execution should be confirmed with qualified professionals.
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
                TG-RERA and Professional Disclosure
              </h2>
            </div>
            <p className="font-body text-sm leading-relaxed text-slate-700">
              Real estate transaction facilitation should be undertaken only through appropriately registered TG-RERA consultants or agents where registration is required. Before paying fees or signing a facilitation mandate, verify the consultant or agent registration on the TG-RERA portal.
            </p>
            <p className="mt-3 font-body text-sm leading-relaxed text-slate-600">
              SoHo Wealth provides portfolio-fitment, diligence framing and coordination support. Legal title, valuation, tax treatment, stamp duty, registration and RERA status must be independently verified by qualified professionals and official portals before a purchase decision.
            </p>
            <a
              href="https://rerait.telangana.gov.in/SearchList/Search"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-body text-sm font-semibold"
              style={{ color: "#0B1F3A" }}
            >
              Verify on TG-RERA
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16" style={{ backgroundColor: "#F7F8FA" }}>
        <div className="container mx-auto max-w-4xl px-6 lg:px-8">
          <h2 className="font-display mb-5 text-2xl font-semibold" style={{ color: "#0B1F3A" }}>
            Sources and Verification Links
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {page.sources.map((source) => (
              <a
                key={source.href}
                href={source.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3 font-body text-sm font-semibold text-slate-700 transition hover:border-[#C9A84C]"
              >
                {source.title}
                <ExternalLink className="h-4 w-4 shrink-0 text-slate-400" />
              </a>
            ))}
          </div>
          <p className="mt-6 font-body text-xs leading-relaxed text-slate-500">
            Source links are used for factual verification of public rules, portals and market context. Property-level suitability, title, taxation and valuation must be reviewed case by case.
          </p>
        </div>
      </section>

      <FAQSection faqs={page.faqs} heading={`${page.title} FAQs`} background="#FFFFFF" />
      <RelatedServices items={page.related} heading="Explore More Hyderabad Real Estate Guides" />
    </main>
  );
}
