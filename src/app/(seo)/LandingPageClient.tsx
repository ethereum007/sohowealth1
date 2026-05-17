"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { CheckCircle2, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";
import { FAQSection, type FAQ } from "@/components/seo/FAQSection";
import { RelatedServices, type RelatedService } from "@/components/seo/RelatedServices";
import { JsonLd } from "@/components/seo/JsonLd";

type ComparisonColumn = {
  key: string;
  label: string;
};

type ComparisonRow = {
  feature: string;
  [key: string]: string;
};

export type LandingPageConfig = {
  slug: string;
  title: string;
  eyebrow: string;
  h1: string;
  highlightedH1: string;
  intro: string;
  primaryCta: string;
  secondaryCta?: string;
  serviceName: string;
  serviceDescription: string;
  serviceType: string;
  leadSource: string;
  formHeading: string;
  formTitle: string;
  formCopy: string;
  formBullets: string[];
  sections: Array<{
    eyebrow?: string;
    heading: string;
    copy?: string;
    cards?: Array<{ title: string; description: string }>;
    bullets?: string[];
  }>;
  comparison?: {
    heading: string;
    columns: ComparisonColumn[];
    rows: ComparisonRow[];
    highlightKey?: string;
  };
  faqs: FAQ[];
  related: RelatedService[];
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function LandingPageClient({ config }: { config: LandingPageConfig }) {
  const url = `https://sohowealth.in/${config.slug}`;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://sohowealth.in/" },
      { "@type": "ListItem", position: 2, name: config.title, item: url },
    ],
  };
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: config.serviceName,
    description: config.serviceDescription,
    serviceType: config.serviceType,
    url,
    provider: { "@id": "https://sohowealth.in/#organization" },
    areaServed: [
      { "@type": "City", name: "Hyderabad" },
      { "@type": "AdministrativeArea", name: "Telangana" },
      { "@type": "Country", name: "India" },
    ],
    audience: { "@type": "Audience", audienceType: "HNIs, NRIs, family offices, founders and professionals" },
  };

  return (
    <main className="pt-20">
      <JsonLd data={[breadcrumbSchema, serviceSchema]} />

      <section className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: "#0B1F3A" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)" }} />
        <div className="container mx-auto px-6 lg:px-8 relative z-10 max-w-5xl text-center">
          <AnimatedSection>
            <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase px-4 py-1.5 rounded-full mb-6" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}>
              {config.eyebrow}
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              {config.h1} <span style={{ color: "#C9A84C" }}>{config.highlightedH1}</span>
            </h1>
            <p className="font-body text-lg lg:text-xl leading-relaxed mb-10 max-w-3xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
              {config.intro}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={`#${config.slug}-consultation`} className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base tracking-wide transition-all duration-200 hover:opacity-90" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}>
                {config.primaryCta} <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <a href="https://wa.me/919032999466" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-semibold text-base border border-white/20 text-white hover:bg-white/10 transition-colors">
                <MessageCircle className="w-4 h-4" />
                {config.secondaryCta || "WhatsApp SoHo Wealth"}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {config.sections.map((section, index) => (
        <section key={section.heading} className="py-24 lg:py-32" style={{ backgroundColor: index % 2 === 0 ? "#FFFFFF" : "#F7F8FA" }}>
          <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
              {section.eyebrow && (
                <p className="font-body text-xs font-bold tracking-[0.15em] uppercase mb-4" style={{ color: "#C9A84C" }}>
                  {section.eyebrow}
                </p>
              )}
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-5" style={{ color: "#0B1F3A" }}>
                {section.heading}
              </h2>
              {section.copy && (
                <p className="font-body text-base lg:text-lg leading-relaxed" style={{ color: "#4A5568" }}>
                  {section.copy}
                </p>
              )}
            </AnimatedSection>

            {section.cards && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.cards.map((card) => (
                  <AnimatedSection key={card.title}>
                    <div className="rounded-xl bg-white p-7 shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)] border-t-4 h-full" style={{ borderTopColor: "#0B1F3A" }}>
                      <h3 className="font-display text-lg font-semibold mb-3" style={{ color: "#0B1F3A" }}>{card.title}</h3>
                      <p className="font-body text-sm leading-relaxed" style={{ color: "#4A5568" }}>{card.description}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            )}

            {section.bullets && (
              <ul className="max-w-3xl mx-auto space-y-4">
                {section.bullets.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-base lg:text-lg" style={{ color: "#1a2d4a" }}>
                    <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#C9A84C" }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      {config.comparison && (
        <section className="py-24 lg:py-32" style={{ backgroundColor: "#FDF8EC" }}>
          <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
            <AnimatedSection>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-center mb-12" style={{ color: "#0B1F3A" }}>
                {config.comparison.heading}
              </h2>
              <div className="overflow-x-auto rounded-xl shadow-lg bg-white">
                <table className="w-full min-w-[680px] text-sm md:text-base">
                  <thead>
                    <tr style={{ backgroundColor: "#0B1F3A" }}>
                      <th className="py-4 px-4 text-left font-semibold text-white/75 font-body">Factor</th>
                      {config.comparison.columns.map((column) => (
                        <th key={column.key} className="py-4 px-4 text-center font-semibold font-body" style={{ color: column.key === config.comparison?.highlightKey ? "#C9A84C" : "rgba(255,255,255,0.8)" }}>
                          {column.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {config.comparison.rows.map((row) => (
                      <tr key={row.feature} className="border-b last:border-b-0" style={{ borderColor: "#E2E8F0" }}>
                        <td className="py-4 px-4 font-semibold font-body" style={{ color: "#0B1F3A" }}>{row.feature}</td>
                        {config.comparison?.columns.map((column) => (
                          <td key={column.key} className="py-4 px-4 text-center font-body" style={{ color: "#4A5568", backgroundColor: column.key === config.comparison?.highlightKey ? "#FDF8EC" : undefined }}>
                            {row[column.key]}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}

      <section className="py-20 lg:py-28" style={{ backgroundColor: "#0B1F3A" }}>
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-3xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-6">
              Speak With SoHo Wealth
            </h2>
            <p className="font-body text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
              Talk to Kiran Dutta and get a clear view of which route fits your portfolio, risk profile, and goals.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={`#${config.slug}-consultation`} className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base tracking-wide transition-all duration-200 hover:opacity-90" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}>
                Book Free Consultation
              </Link>
              <a href="tel:+919032999466" className="inline-flex items-center gap-2 font-semibold text-white">
                <Phone className="w-4 h-4" />
                +91 90329 99466
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <LeadCaptureForm
        source={config.leadSource}
        heading={config.formHeading}
        sectionId={`${config.slug}-consultation`}
        leftContent={
          <>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-tight mb-5 text-white">{config.formTitle}</h2>
            <p className="font-body text-base lg:text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.7)" }}>{config.formCopy}</p>
            <p className="font-body text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: "#C9A84C" }}>What you will get</p>
            <ul className="space-y-4 mb-10">
              {config.formBullets.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#C9A84C" }} />
                  <span className="font-body text-base text-white/90">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-body text-sm leading-relaxed italic" style={{ color: "rgba(255,255,255,0.5)" }}>No obligation. Your information is never shared with third parties.</p>
          </>
        }
      />

      <FAQSection faqs={config.faqs} heading={`${config.title} FAQs`} background="#FFFFFF" />
      <RelatedServices items={config.related} heading="Continue Comparing Options" />
    </main>
  );
}
