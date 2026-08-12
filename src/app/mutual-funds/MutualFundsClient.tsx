"use client";

import { motion, useInView } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";
import Script from "next/script";
import { RelatedServices } from "@/components/seo/RelatedServices";

const mfServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Mutual Fund Distribution India",
  description: "AMFI-registered mutual fund distribution across India with goal mapping, portfolio review, SIP implementation and ongoing service.",
  serviceType: "Mutual Fund Distribution",
  url: "https://www.sohowealth.in/mutual-funds",
  provider: { "@id": "https://www.sohowealth.in/#organization" },
  areaServed: { "@type": "Country", name: "India" },
  audience: { "@type": "Audience", audienceType: "Retail and HNI investors" },
};

const mfBreadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sohowealth.in/" },
    { "@type": "ListItem", position: 2, name: "Mutual Funds", item: "https://www.sohowealth.in/mutual-funds" },
  ],
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className={className}>
      {children}
    </motion.div>
  );
}

const services = [
  { title: "Goal Mapping", description: "Connect retirement, education, home and other goals to time horizon, liquidity and risk before implementation." },
  { title: "SIP Implementation", description: "Set up sustainable SIPs and documented step-up rules that fit the household's cash flow." },
  { title: "Lumpsum Deployment Discussion", description: "Compare immediate and phased deployment routes such as STPs without presenting market timing as predictable." },
  { title: "Annual Portfolio Review", description: "Review allocation drift, overlapping holdings, costs, goal fit and material fund changes." },
  { title: "Tax Coordination", description: "Organise transaction and capital-gain records for discussion with a qualified tax professional before switching or redeeming." },
  { title: "Consolidation & Clean-Up", description: "Create one view of funds held across platforms and distributors before deciding what needs attention." },
];

const fundCategories = [
  { title: "Equity Funds", description: "Large cap, mid cap, small cap, flexi cap, multi cap, focused funds, sectoral and thematic funds, value funds, and contra funds." },
  { title: "Debt Funds", description: "Liquid funds, ultra-short duration, short duration, medium duration, corporate bond, banking & PSU, gilt, and dynamic bond funds." },
  { title: "Hybrid Funds", description: "Balanced advantage, aggressive hybrid, conservative hybrid, multi-asset allocation, and equity savings funds." },
  { title: "Tax Saving (ELSS)", description: "ELSS has a statutory lock-in and may be eligible under Section 80C where the old tax regime applies. Confirm tax fit before investing." },
];

const faqs = [
  { q: "What is the minimum investment to start?", a: "Scheme minimums vary and some SIPs may start from low monthly amounts. Choose an amount from goal, horizon and cash-flow context rather than a generic minimum." },
  { q: "How is SoHo Wealth compensated for mutual funds?", a: "SoHo Wealth distributes regular-plan mutual funds and may receive trail commission from AMCs. There is no separate fee-based investment-advisory service. Read the disclosures and scheme documents before investing." },
  { q: "Can you help me switch from direct to regular plans?", a: "SoHo Wealth can facilitate eligible transactions and ongoing service. A switch can create tax and exit-load consequences, so review costs and confirm tax treatment before acting." },
  { q: "How often do you review my portfolio?", a: "We conduct formal reviews annually, with interim alerts for any significant market events or fund-specific changes." },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": { "@type": "Answer", "text": faq.a },
  })),
};

const testimonials = [
  { quote: "Kiran and his team understood our risk appetite, goals and then created a basket of portfolio which meets our requirements.", name: "Mr. Santosh Agarwal", title: "Co-founder & CIO \u2013 Technology Services Company" },
  { quote: "SoHo's approach to building a financial strategy is refreshingly simple yet thorough. They took the time to understand my risk profile and financial goals.", name: "Mr. Vijay", title: "MD & Co-Founder of Energy Company" },
  { quote: "SoHo Wealth has been a trusted partner in my financial journey. Kiran and his team's personalized advice have helped me make confident, well-informed investment decisions.", name: "Mr. Nitin", title: "Founder & MD, IT firm" },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b" style={{ borderColor: "#E2E8F0" }}>
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left">
        <span className="font-display text-base md:text-lg font-semibold pr-4" style={{ color: "#0B1F3A" }}>{q}</span>
        <ChevronDown className="flex-shrink-0 transition-transform duration-200" style={{ color: "#C9A84C", transform: open ? "rotate(180deg)" : "rotate(0deg)" }} size={20} />
      </button>
      {open && (
        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} className="pb-5">
          <p className="font-body text-base leading-relaxed" style={{ color: "#4A5568" }}>{a}</p>
        </motion.div>
      )}
    </div>
  );
}

const MutualFundsClient = () => {
  const scrollToReviewForm = () => {
    document.getElementById("mutual-funds-review-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script id="mf-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mfServiceSchema) }} />
      <Script id="mf-breadcrumbs" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(mfBreadcrumbs) }} />
      <main className="pt-20">
        {/* HERO */}
        <section className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: "#0B1F3A" }}>
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)" }} />
          <div className="container mx-auto px-6 lg:px-8 relative z-10 max-w-4xl text-center">
            <AnimatedSection>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
                Mutual Funds, <span style={{ color: "#C9A84C" }}>Done Right.</span>
              </h1>
              <p className="font-body text-lg lg:text-xl leading-relaxed mb-6 max-w-3xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
                India has a large mutual-fund universe. The starting point is not a fixed number of schemes, but a clear view of goals, horizon, liquidity, risk and existing overlap.
              </p>
              <p className="font-body text-base leading-relaxed mb-8 max-w-3xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
                SoHo Wealth is an AMFI-registered mutual fund distributor (ARN 306593). We support portfolio review, scheme comparison, regular-plan implementation and ongoing service; we are not a SEBI Registered Investment Adviser.
              </p>
              <button type="button" onClick={scrollToReviewForm} className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base tracking-wide transition-all duration-200 hover:opacity-90" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}>
                Get Free Portfolio Review →
              </button>
            </AnimatedSection>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold" style={{ color: "#0B1F3A" }}>
                Our Mutual Fund <span style={{ color: "#C9A84C" }}>Services</span>
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service) => (
                <AnimatedSection key={service.title}>
                  <div className="rounded-xl bg-white p-8 shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)] border-t-4 h-full" style={{ borderTopColor: "#0B1F3A" }}>
                    <h3 className="font-display text-lg font-semibold mb-3" style={{ color: "#0B1F3A" }}>{service.title}</h3>
                    <p className="font-body text-sm leading-relaxed" style={{ color: "#4A5568" }}>{service.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* FUND CATEGORIES */}
        <section className="py-24 lg:py-32" style={{ backgroundColor: "#F7F8FA" }}>
          <div className="container mx-auto px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-semibold" style={{ color: "#0B1F3A" }}>
                Fund Categories <span style={{ color: "#C9A84C" }}>We Cover</span>
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {fundCategories.map((cat) => (
                <AnimatedSection key={cat.title}>
                  <div className="rounded-xl bg-white p-8 shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)] border-t-4 h-full" style={{ borderTopColor: "#0B1F3A" }}>
                    <h3 className="font-display text-xl font-semibold mb-3" style={{ color: "#0B1F3A" }}>{cat.title}</h3>
                    <p className="font-body text-base leading-relaxed" style={{ color: "#4A5568" }}>{cat.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <AnimatedSection className="text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-semibold" style={{ color: "#0B1F3A" }}>
                What Our <span style={{ color: "#C9A84C" }}>Clients Say</span>
              </h2>
            </AnimatedSection>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((t, i) => (
                <AnimatedSection key={i}>
                  <div className="rounded-xl bg-white p-8 shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)] border-l-4 h-full" style={{ borderLeftColor: "#C9A84C" }}>
                    <p className="font-body text-base leading-relaxed mb-6 italic" style={{ color: "#4A5568" }}>"{t.quote}"</p>
                    <p className="font-display text-base font-semibold" style={{ color: "#0B1F3A" }}>{t.name}</p>
                    <p className="font-body text-sm" style={{ color: "#4A5568" }}>{t.title}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 lg:py-32" style={{ backgroundColor: "#F7F8FA" }}>
          <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
            <AnimatedSection className="text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-semibold" style={{ color: "#0B1F3A" }}>
                Frequently Asked <span style={{ color: "#C9A84C" }}>Questions</span>
              </h2>
            </AnimatedSection>
            <div>
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28" style={{ backgroundColor: "#0B1F3A" }}>
          <div className="container mx-auto px-6 lg:px-8 text-center max-w-3xl">
            <AnimatedSection>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-8">
                Start Your Mutual Fund <span style={{ color: "#C9A84C" }}>Journey</span>
              </h2>
              <p className="font-body text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
                Let our experts build a portfolio tailored to your goals. Free portfolio review for new investors.
              </p>
              <button type="button" onClick={scrollToReviewForm} className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base tracking-wide transition-all duration-200 hover:opacity-90" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}>
                Schedule Consultation →
              </button>
            </AnimatedSection>
          </div>
        </section>

        <LeadCaptureForm
          source="mutual-funds page"
          heading="Review My Mutual Fund Portfolio"
          sectionId="mutual-funds-review-form"
          leftContent={
            <>
              <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-tight mb-5 text-white">
                Clean Up Your Mutual Funds Before Adding More.
              </h2>
              <p className="font-body text-base lg:text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.7)" }}>
                We will review overlap, underperformers, asset allocation, tax impact and whether your current funds still fit your goals.
              </p>
              <p className="font-body text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: "#C9A84C" }}>
                What you will get
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Fund overlap and duplication check",
                  "Equity, debt and hybrid allocation review",
                  "SIP and lumpsum deployment plan",
                  "Tax-loss harvesting and exit-cost discussion",
                  "Clear next-step portfolio roadmap",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#C9A84C" }} />
                    <span className="font-body text-base text-white/90">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-body text-sm leading-relaxed italic" style={{ color: "rgba(255,255,255,0.5)" }}>
                Best suited for investors who want a structured review before switching, redeeming or adding new funds.
              </p>
            </>
          }
        />

        <RelatedServices
          items={[
            { title: "SIF Advisory", href: "/sif", description: "Graduate from MFs to Specialized Investment Funds (₹10L+) with PMS-style strategies." },
            { title: "PMS Advisory", href: "/pms-advisory", description: "Concentrated equity portfolios from ₹50 lakh — direct stock ownership." },
            { title: "Global Investing", href: "/global-investing", description: "Diversify your MF portfolio internationally via LRS, GIFT City and US ETFs." },
          ]}
          heading="Where to Go Beyond Mutual Funds"
        />

        <p className="text-center text-xs py-6 px-6 bg-white" style={{ color: "#4A5568" }}>
          *Mutual Funds are subject to market risks. Read all scheme-related documents carefully before investing. Past performance is not indicative of future results.
        </p>
      </main>
    </>
  );
};

export default MutualFundsClient;
