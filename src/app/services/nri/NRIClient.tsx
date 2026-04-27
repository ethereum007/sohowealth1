"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";
import { ChevronDown } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedServices } from "@/components/seo/RelatedServices";

const nriServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "NRI Investment Advisory India",
  description: "FEMA-compliant NRI investment advisory for US, UK, UAE, Singapore, Australia and Canada NRIs. PMS, SIF, AIF, Mutual Funds and Pre-IPO with NRE/NRO/PIS account guidance.",
  serviceType: "NRI Wealth Management",
  url: "https://sohowealth.in/services/nri",
  provider: { "@id": "https://sohowealth.in/#organization" },
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
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sohowealth.in/" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://sohowealth.in/services/nri" },
    { "@type": "ListItem", position: 3, name: "NRI Advisory", item: "https://sohowealth.in/services/nri" },
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
  { title: "Investment Advisory", items: ["MF (NRE/NRO)", "SIF (\u20B910L+)", "PMS (\u20B950L+)", "AIF (\u20B91Cr+)", "Pre-IPO deals"] },
  { title: "Account & Compliance Guidance", items: ["NRE vs NRO explanation", "PIS account setup for equity/PMS", "FEMA compliance", "FATCA/CRS for US/Canada NRIs"] },
  { title: "Tax & Repatriation", items: ["TDS on MF/PMS income", "NRE full repatriation", "NRO up to $1M/year", "DTAA benefits"] },
  { title: "Family Wealth Coordination", items: ["NRI + resident family portfolio sync", "India return planning", "Children's education corpus", "Estate planning"] },
];

const steps = [
  { num: "01", title: "30-min video consultation", detail: "Free, no obligation" },
  { num: "02", title: "Portfolio review & goal mapping", detail: "Understand your full picture" },
  { num: "03", title: "Investment allocation recommendation", detail: "Tailored to your NRI status" },
  { num: "04", title: "Account setup & KYC support", detail: "End-to-end digital process" },
  { num: "05", title: "Quarterly reviews & rebalancing", detail: "Ongoing monitoring" },
];

const faqs = [
  { q: "Can NRIs invest in SIFs?", a: "Yes, through NRE/NRO accounts subject to AMC-level FATCA compliance. Min \u20B910L." },
  { q: "Can NRIs invest in PMS?", a: "Yes. Min \u20B950L. Requires PIS account + NRE or NRO." },
  { q: "I'm in the US \u2014 can I invest in Indian mutual funds?", a: "US/Canada NRIs face restrictions with some AMCs due to FATCA. We guide you to compliant options." },
  { q: "Can I invest without coming to India?", a: "Yes. Full video-based onboarding available. We handle all documentation digitally." },
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
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">You Built Your Wealth Abroad.{" "}<span style={{ color: "#C9A84C" }}>Let's Make It Work in India.</span></h1>
            <p className="font-body text-lg lg:text-xl leading-relaxed mb-8 max-w-3xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>SoHo Wealth specializes in India investment advisory for NRIs \u2014 FEMA compliant, tax-efficient, repatriation-friendly. Video consultations available.</p>
            <button onClick={scrollToForm} className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base tracking-wide transition-all duration-200 hover:opacity-90" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}>Book Your NRI Consultation (Video Call) \u2192</button>
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
                  <ul className="space-y-3">{card.items.map((item) => (<li key={item} className="flex items-start gap-3"><span style={{ color: "#C9A84C" }}>\u2192</span><span className="font-body text-base" style={{ color: "#4A5568" }}>{item}</span></li>))}</ul>
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

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <AnimatedSection className="text-center mb-14"><h2 className="font-display text-3xl md:text-4xl font-semibold" style={{ color: "#0B1F3A" }}>Frequently Asked <span style={{ color: "#C9A84C" }}>Questions</span></h2></AnimatedSection>
          <div>{faqs.map((faq) => (<FAQItem key={faq.q} q={faq.q} a={faq.a} />))}</div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#0B1F3A" }}>
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-3xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-8">Ready to invest in India <span style={{ color: "#C9A84C" }}>from abroad</span>?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/919032999466" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base tracking-wide transition-all duration-200 hover:opacity-90" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}>WhatsApp Kiran Now \u2192</a>
              <a href="https://calendly.com/sohowealth" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base tracking-wide transition-all duration-200 hover:opacity-90 border-2" style={{ borderColor: "#C9A84C", color: "#C9A84C" }}>Book a Video Call \u2192</a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* LEAD CAPTURE */}
      <LeadCaptureForm source="NRI page" heading="Book Your NRI Consultation" sectionId="nri-consultation" leftContent={
        <>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-tight mb-5 text-white">Invest in India \u2014 The Right Way</h2>
          <p className="font-body text-base lg:text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.7)" }}>Get FEMA-compliant, tax-efficient investment guidance tailored to your NRI status and country of residence.</p>
          <p className="font-body text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: "#C9A84C" }}>What you'll get</p>
          <ul className="space-y-4 mb-10">
            {["NRE/NRO account guidance", "FEMA & FATCA compliance check", "Personalized allocation plan", "Video-based onboarding", "Direct access to Kiran Dutta"].map((item) => (
              <li key={item} className="flex items-start gap-3"><span className="text-lg mt-0.5" style={{ color: "#C9A84C" }}>\u2705</span><span className="font-body text-base text-white/90">{item}</span></li>
            ))}
          </ul>
          <p className="font-body text-sm leading-relaxed italic" style={{ color: "rgba(255,255,255,0.5)" }}>No obligation. Video consultations available worldwide.</p>
        </>
      } />

      <RelatedServices
        items={[
          { title: "Global Investing", href: "/global-investing", description: "Invest globally from India via LRS, GIFT City and US stocks — relevant if you're returning to India." },
          { title: "PMS Advisory", href: "/pms-advisory", description: "Concentrated equity portfolios from ₹50 lakh — fully NRI compliant via PIS account." },
          { title: "RSU & ESOPs", href: "/rsu-esops", description: "RSU/ESOP advisory for NRIs and tech professionals — taxation, FEMA and diversification." },
        ]}
        heading="Other Services for NRIs"
      />
    </main>
  );
};

export default NRIClient;
