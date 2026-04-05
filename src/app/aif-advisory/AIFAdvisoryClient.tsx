"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { AlertTriangle, ChevronDown } from "lucide-react";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className={className}>
      {children}
    </motion.div>
  );
}

const serviceCards = [
  { title: "Category I AIFs", items: ["Venture Capital Funds", "SME Funds", "Social Venture Funds", "Infrastructure Funds"] },
  { title: "Category II AIFs", items: ["Private Equity Funds", "Debt Funds", "Fund of Funds", "Distressed Asset Funds"] },
  { title: "Category III AIFs", items: ["Long-Short Equity", "Hedge Funds", "Complex Trading Strategies", "Derivatives-based Funds"] },
  { title: "Our Advisory Edge", items: ["Unbiased fund selection", "Manager due diligence", "Portfolio fit assessment", "Ongoing monitoring & reporting"] },
];

const steps = [
  { num: "01", title: "Understanding your objectives", detail: "Risk profile, time horizon & liquidity needs" },
  { num: "02", title: "AIF education & structure briefing", detail: "Categories, lock-ins, risks explained clearly" },
  { num: "03", title: "Fund evaluation & shortlisting", detail: "Manager capability, track record, strategy fit" },
  { num: "04", title: "Portfolio allocation & sizing", detail: "Prudent AIF weighting within your overall portfolio" },
  { num: "05", title: "Ongoing monitoring & reporting", detail: "Quarterly reviews, NAV updates, exit planning" },
];

const considerations = [
  "Capital lock-in periods (3\u20137 years typical)",
  "Limited liquidity compared to MF/PMS",
  "Complex valuation methodologies",
  "Market, execution, and manager risk",
];

const faqs = [
  { q: "What is the minimum investment for AIFs?", a: "The SEBI-mandated minimum is \u20B91 crore per investor for Category I and II AIFs, and \u20B91 crore for Category III as well." },
  { q: "How are AIFs different from PMS?", a: "AIFs are pooled vehicles investing in alternative asset classes (PE, VC, credit). PMS invests in listed equities with individual portfolio management. AIFs have longer lock-ins and different risk-return profiles." },
  { q: "Can NRIs invest in AIFs?", a: "Yes, NRIs can invest in Category I and II AIFs subject to FEMA regulations. Category III has restrictions for certain jurisdictions. We guide you through compliance." },
  { q: "What returns can I expect from AIFs?", a: "Returns vary widely by category and strategy. Past performance is not indicative of future results. We help set realistic expectations based on the fund's strategy and market conditions." },
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

const AIFAdvisoryClient = () => {
  const scrollToForm = () => {
    document.getElementById("aif-consultation")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="pt-20">
      {/* HERO */}
      <section className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: "#0B1F3A" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)" }} />
        <div className="container mx-auto px-6 lg:px-8 relative z-10 max-w-4xl text-center">
          <AnimatedSection>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              Alternative Investment Fund{" "}
              <span style={{ color: "#C9A84C" }}>Advisory</span>
            </h1>
            <p className="font-body text-lg lg:text-xl leading-relaxed mb-4 max-w-3xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
              Access institutional-grade opportunities in private equity, venture capital, and structured credit. SoHo Wealth helps you evaluate, allocate, and monitor AIF investments with unbiased advisory.
            </p>
            <p className="font-body text-sm italic mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
              Min \u20B91 Crore. AIFs require careful assessment of risk, liquidity, and time horizon.
            </p>
            <button onClick={scrollToForm} className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base tracking-wide transition-all duration-200 hover:opacity-90" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}>
              Explore AIF Opportunities →
            </button>
          </AnimatedSection>
        </div>
      </section>

      {/* AIF CATEGORIES */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold" style={{ color: "#0B1F3A" }}>What We <span style={{ color: "#C9A84C" }}>Cover</span></h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {serviceCards.map((card) => (
              <AnimatedSection key={card.title}>
                <div className="rounded-xl bg-white p-8 shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)] border-t-4 h-full" style={{ borderTopColor: "#0B1F3A" }}>
                  <h3 className="font-display text-xl font-semibold mb-5" style={{ color: "#0B1F3A" }}>{card.title}</h3>
                  <ul className="space-y-3">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span style={{ color: "#C9A84C" }}>\u2192</span>
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
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-semibold" style={{ color: "#0B1F3A" }}>Our Advisory <span style={{ color: "#C9A84C" }}>Process</span></h2>
          </AnimatedSection>
          <div className="space-y-0">
            {steps.map((step) => (
              <AnimatedSection key={step.num}>
                <div className="flex gap-6 items-start py-6 border-b" style={{ borderColor: "#E2E8F0" }}>
                  <span className="font-display text-2xl font-bold flex-shrink-0" style={{ color: "#C9A84C" }}>{step.num}</span>
                  <div>
                    <h3 className="font-display text-lg font-semibold" style={{ color: "#0B1F3A" }}>{step.title}</h3>
                    <p className="font-body text-sm mt-1" style={{ color: "#4A5568" }}>{step.detail}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* IMPORTANT CONSIDERATIONS */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-semibold" style={{ color: "#0B1F3A" }}>Important <span style={{ color: "#C9A84C" }}>Considerations</span></h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
            {considerations.map((item) => (
              <AnimatedSection key={item}>
                <div className="flex items-start gap-3 p-5 rounded-xl" style={{ backgroundColor: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}>
                  <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "#C9A84C" }} />
                  <span className="font-body text-sm" style={{ color: "#4A5568" }}>{item}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center">
            <p className="font-body text-sm italic" style={{ color: "#4A5568" }}>
              AIF allocations should always be made with a long-term perspective and prudent sizing within your overall portfolio.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#F7F8FA" }}>
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-semibold" style={{ color: "#0B1F3A" }}>Frequently Asked <span style={{ color: "#C9A84C" }}>Questions</span></h2>
          </AnimatedSection>
          <div>{faqs.map((faq) => (<FAQItem key={faq.q} q={faq.q} a={faq.a} />))}</div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#0B1F3A" }}>
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-3xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-8">Ready to explore <span style={{ color: "#C9A84C" }}>AIFs</span>?</h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://wa.me/919032999466" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base tracking-wide transition-all duration-200 hover:opacity-90" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}>WhatsApp Kiran Now →</a>
              <button onClick={scrollToForm} className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base tracking-wide transition-all duration-200 hover:opacity-90 border-2" style={{ borderColor: "#C9A84C", color: "#C9A84C" }}>Book a Consultation →</button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* LEAD CAPTURE */}
      <LeadCaptureForm
        source="AIF Advisory page"
        heading="Book Your AIF Consultation"
        sectionId="aif-consultation"
        leftContent={
          <>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-tight mb-5 text-white">Access Institutional-Grade Opportunities</h2>
            <p className="font-body text-base lg:text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.7)" }}>Get unbiased AIF advisory — from fund evaluation and manager due diligence to portfolio allocation and ongoing monitoring.</p>
            <p className="font-body text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: "#C9A84C" }}>What you'll get</p>
            <ul className="space-y-4 mb-10">
              {["AIF category & strategy briefing", "Fund manager due diligence report", "Portfolio fit & allocation sizing", "Risk-return expectation setting", "Direct access to Kiran Dutta"].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-lg mt-0.5" style={{ color: "#C9A84C" }}>\u2705</span>
                  <span className="font-body text-base text-white/90">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-body text-sm leading-relaxed italic" style={{ color: "rgba(255,255,255,0.5)" }}>No obligation. Suitable for investors with \u20B91Cr+ allocation capacity.</p>
          </>
        }
      />
    </main>
  );
};

export default AIFAdvisoryClient;
