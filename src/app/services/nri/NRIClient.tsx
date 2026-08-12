"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedServices } from "@/components/seo/RelatedServices";
import Link from "next/link";

const nriServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "NRI Portfolio Review and Investment Distribution",
  description: "NRI portfolio review, investment distribution and documentation coordination for NRIs in the US, UK, UAE, Singapore, Australia and Canada.",
  serviceType: "NRI Investment Distribution and Portfolio Coordination",
  url: "https://www.sohowealth.in/services/nri",
  provider: { "@id": "https://www.sohowealth.in/#organization" },
  areaServed: [
    { "@type": "Country", name: "United States" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "United Arab Emirates" },
    { "@type": "Country", name: "Singapore" },
    { "@type": "Country", name: "Australia" },
    { "@type": "Country", name: "Canada" },
    { "@type": "Country", name: "India" },
  ],
  audience: { "@type": "Audience", audienceType: "NRIs investing in India" },
};

const nriBreadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sohowealth.in/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.sohowealth.in/services/nri" },
    { "@type": "ListItem", position: 3, name: "NRI Wealth Planning", item: "https://www.sohowealth.in/services/nri" },
  ],
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className={className}>{children}</motion.div>
  );
}

const flags = [
  { emoji: "\uD83C\uDDFA\uD83C\uDDF8", label: "US" }, { emoji: "\uD83C\uDDEC\uD83C\uDDE7", label: "UK" },
  { emoji: "\uD83C\uDDE6\uD83C\uDDEA", label: "UAE" }, { emoji: "\uD83C\uDDF8\uD83C\uDDEC", label: "Singapore" },
  { emoji: "\uD83C\uDDE6\uD83C\uDDFA", label: "Australia" }, { emoji: "\uD83C\uDDE8\uD83C\uDDE6", label: "Canada" },
];

const serviceCards = [
  { title: "Investment Distribution", items: ["Mutual funds through NRE/NRO", "SIF (₹10L+)", "PMS (₹50L+)", "Eligible AIF routes (₹1Cr+)", "Product-document support"] },
  { title: "Account & Documentation Coordination", items: ["NRE vs NRO explanation", "Provider onboarding documents", "FATCA/CRS declarations", "Bank, provider and specialist question list"] },
  { title: "Tax & Repatriation Preparation", items: ["Organise TDS and transaction records", "Map source and destination of funds", "Prepare questions for a CA or bank", "Track required certificates and forms"] },
  { title: "Family Wealth Coordination", items: ["NRI and resident family portfolio view", "Return-to-India checklist", "Education and retirement goal mapping", "Estate-planning specialist coordination"] },
];

const steps = [
  { num: "01", title: "30-min video consultation", detail: "Free, no obligation" },
  { num: "02", title: "Portfolio review & goal mapping", detail: "Understand your full picture" },
  { num: "03", title: "Product structure comparison", detail: "Risk, liquidity, costs and eligibility" },
  { num: "04", title: "Account setup & KYC support", detail: "Digital coordination with providers" },
  { num: "05", title: "Quarterly reviews & rebalancing", detail: "Ongoing monitoring" },
];

const faqs = [
  { q: "Can NRIs invest in SIFs?", a: "NRIs may be eligible for SIFs through permitted account routes, subject to the AMC's acceptance, documentation and country restrictions. The regulatory minimum is ₹10 lakh across SIF strategies at an AMC." },
  { q: "Can NRIs invest in PMS?", a: "NRIs may invest in PMS subject to provider acceptance, FEMA rules, banking route and documentation. The regulatory minimum is ₹50 lakh. Confirm the exact account and tax workflow before funding." },
  { q: "I'm in the US — can I invest in Indian mutual funds?", a: "Some AMCs accept US and Canada residents with additional FATCA procedures, while others do not. US tax treatment can also be complex, so confirm provider eligibility and obtain qualified US tax advice before investing." },
  { q: "Can I invest without coming to India?", a: "Many providers support video and digital onboarding, but document, notarisation or in-person requirements can vary by product, bank and country. SoHo Wealth coordinates the applicable provider workflow." },
  { q: "Does SoHo Wealth file NRI tax returns or give legal opinions?", a: "No. SoHo Wealth provides portfolio review, investment distribution and coordination within its disclosed scope. Tax returns, legal opinions, FEMA positions and country-specific advice belong with appropriately qualified professionals." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b" style={{ borderColor: "#E2E8F0" }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left">
        <span className="font-display text-base md:text-lg font-semibold pr-4" style={{ color: "#0B1F3A" }}>{q}</span>
        <ChevronDown className="flex-shrink-0 transition-transform duration-200" style={{ color: "#C9A84C", transform: open ? "rotate(180deg)" : "rotate(0deg)" }} size={20} />
      </button>
      {open && (<motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="pb-5"><p className="font-body text-base leading-relaxed" style={{ color: "#4A5568" }}>{a}</p></motion.div>)}
    </div>
  );
}

const NRIClient = () => {
  const scrollToForm = () => { document.getElementById("nri-consultation")?.scrollIntoView({ behavior: "smooth" }); };

  const nriFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="pt-20">
      <JsonLd data={nriServiceSchema} />
      <JsonLd data={nriBreadcrumbs} />
      <JsonLd data={nriFaqSchema} />
      {/* HERO */}
      <section className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: "#0B1F3A" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)" }} />
        <div className="container mx-auto px-6 lg:px-8 relative z-10 max-w-4xl text-center">
          <AnimatedSection>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">NRI Wealth Planning for{" "}<span style={{ color: "#C9A84C" }}>India-Linked Wealth.</span></h1>
            <p className="font-body text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>SoHo Wealth helps NRIs organise India-linked portfolios, compare eligible mutual fund, SIF and PMS routes, and coordinate provider documentation. Video consultations are available worldwide.</p>
            <p className="mx-auto mb-8 max-w-3xl font-body text-xs leading-relaxed text-white/45">AMFI mutual fund and SIF distributor ARN 306593; APMI PMS distributor APRN01233. Not a SEBI Registered Investment Adviser or tax/legal practice.</p>
            <button onClick={scrollToForm} className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base tracking-wide transition-all duration-200 hover:opacity-90" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}>Book Your NRI Investment Consultation</button>
            <div className="flex items-center justify-center gap-6 mt-12">
              {flags.map((f) => (<div key={f.label} className="flex flex-col items-center gap-1"><span className="text-3xl">{f.emoji}</span><span className="font-body text-xs text-white/60">{f.label}</span></div>))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14"><h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold" style={{ color: "#0B1F3A" }}>What We Offer <span style={{ color: "#C9A84C" }}>NRIs</span></h2></AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {serviceCards.map((card) => (
              <AnimatedSection key={card.title}>
                <div className="rounded-xl bg-white p-8 shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)] border-t-4 h-full" style={{ borderTopColor: "#0B1F3A" }}>
                  <h3 className="font-display text-xl font-semibold mb-5" style={{ color: "#0B1F3A" }}>{card.title}</h3>
                  <ul className="space-y-3">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: "#C9A84C" }} aria-hidden="true" />
                        <span className="font-body text-base" style={{ color: "#4A5568" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#F7F8FA" }}>
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <AnimatedSection className="text-center mb-14"><h2 className="font-display text-3xl md:text-4xl font-semibold" style={{ color: "#0B1F3A" }}>How It Works</h2></AnimatedSection>
          <div className="space-y-0">
            {steps.map((step) => (
              <AnimatedSection key={step.num}>
                <div className="flex gap-6 items-start py-6 border-b" style={{ borderColor: "#E2E8F0" }}>
                  <span className="font-display text-2xl font-bold flex-shrink-0" style={{ color: "#C9A84C" }}>{step.num}</span>
                  <div><h3 className="font-display text-lg font-semibold" style={{ color: "#0B1F3A" }}>{step.title}</h3><p className="font-body text-sm mt-1" style={{ color: "#4A5568" }}>{step.detail}</p></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* DECISION GUIDES */}
      <section className="py-24 lg:py-28" style={{ backgroundColor: "#FDF8EC" }}>
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <AnimatedSection className="mx-auto mb-12 max-w-3xl text-center">
            <p className="font-body text-xs font-bold uppercase tracking-[0.16em]" style={{ color: "#9A6B00" }}>NRI decision library</p>
            <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl" style={{ color: "#0B1F3A" }}>Start With the Account, Tax and Return-to-India Questions</h2>
            <p className="mt-4 font-body text-base leading-relaxed text-slate-600">These original guides separate banking, tax-residency, product and repatriation questions so you can involve the right specialist at the right time.</p>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { href: "/insights/nre-vs-nro-repatriation", title: "NRE vs NRO and Repatriation", text: "Choose the account route from source of money, income type and future remittance needs." },
              { href: "/insights/us-canada-nris-mutual-funds-fatca", title: "US & Canada NRI Fund Checklist", text: "Understand AMC acceptance, FATCA documentation and why overseas tax review matters." },
              { href: "/insights/returning-to-india-wealth-checklist", title: "Returning to India Checklist", text: "Sequence residency, accounts, foreign assets, RSUs and portfolio decisions before the move." },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="group rounded-xl border border-[#E8D8A8] bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">
                <h3 className="font-display text-xl font-semibold" style={{ color: "#0B1F3A" }}>{guide.title}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-slate-600">{guide.text}</p>
                <span className="mt-5 inline-flex font-body text-sm font-semibold text-[#7C5700]">Read the guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <AnimatedSection className="text-center mb-14"><h2 className="font-display text-3xl md:text-4xl font-semibold" style={{ color: "#0B1F3A" }}>Frequently Asked <span style={{ color: "#C9A84C" }}>Questions</span></h2></AnimatedSection>
          <div>{faqs.map((faq) => (<FAQItem key={faq.q} q={faq.q} a={faq.a} />))}</div>
        </div>
      </section>

      {/* NRI TAX GUIDE */}
      <section className="py-20 lg:py-24" style={{ backgroundColor: "#F7F8FA" }}>
        <div className="container mx-auto max-w-5xl px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid items-center gap-8 rounded-2xl border border-slate-200 bg-white p-8 shadow-[0_12px_40px_-24px_rgba(11,31,58,0.35)] md:p-12 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-[0.16em]" style={{ color: "#C9A84C" }}>Essential NRI resource</p>
                <h2 className="mt-3 font-display text-3xl font-semibold leading-tight md:text-4xl" style={{ color: "#0B1F3A" }}>NRI Tax Filing and Investing Guide</h2>
                <p className="mt-4 max-w-3xl font-body text-base leading-relaxed text-slate-600 md:text-lg">Understand NR, RNOR and ROR status, DTAA documents, NRE/NRO accounts, property, repatriation, PFIC, FBAR and the financial decisions to make before returning to India.</p>
              </div>
              <Link href="/insights/nri-tax-filing-investing-guide" className="inline-flex items-center justify-center rounded-lg px-7 py-4 font-body text-sm font-semibold transition hover:opacity-90" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}>
                Read the Complete Guide →
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#0B1F3A" }}>
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-3xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-8">Ready to invest in India <span style={{ color: "#C9A84C" }}>from abroad</span>?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/919032999466" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base tracking-wide transition-all duration-200 hover:opacity-90" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}>WhatsApp Kiran Now →</a>
              <a href="https://calendly.com/sohowealth" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base tracking-wide transition-all duration-200 hover:opacity-90 border-2" style={{ borderColor: "#C9A84C", color: "#C9A84C" }}>Book a Video Call →</a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* LEAD CAPTURE */}
      <LeadCaptureForm source="NRI page" heading="Book Your NRI Consultation" sectionId="nri-consultation" leftContent={
        <>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-tight mb-5 text-white">Invest in India \u2014 The Right Way</h2>
          <p className="font-body text-base lg:text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.7)" }}>Organise your India portfolio, compare eligible product structures and prepare the right questions for your bank, CA and overseas tax professional.</p>
          <p className="font-body text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: "#C9A84C" }}>What you'll get</p>
          <ul className="space-y-4 mb-10">
            {["NRE/NRO account-route discussion", "FATCA and provider-document checklist", "Portfolio observations and product comparison", "Video-based coordination", "Direct access to Kiran Dutta"].map((item) => (
              <li key={item} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0" style={{ color: "#C9A84C" }} /><span className="font-body text-base text-white/90">{item}</span></li>
            ))}
          </ul>
          <p className="font-body text-sm leading-relaxed italic" style={{ color: "rgba(255,255,255,0.5)" }}>No obligation. Video consultations available worldwide.</p>
        </>
      } />

      <RelatedServices
        items={[
          { title: "Global Investing", href: "/global-investing", description: "Invest globally from India via LRS, GIFT City and US stocks — relevant if you're returning to India." },
          { title: "PMS Advisory", href: "/pms-advisory", description: "Concentrated equity portfolios from ₹50 lakh — fully NRI compliant via PIS account." },
          { title: "RSU & ESOP Guide", href: "/wealth-planning-for-it-professionals/rsu-guide", description: "A records, concentration and specialist-question guide for NRIs and tech professionals." },
        ]}
        heading="Other Services for NRIs"
      />
    </main>
  );
};

export default NRIClient;
