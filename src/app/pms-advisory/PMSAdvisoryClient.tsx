"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FAQSection } from "@/components/seo/FAQSection";
import { RelatedServices } from "@/components/seo/RelatedServices";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";
import { PmsPerformanceLeadersSection } from "@/components/sections/PmsPerformanceLeadersSection";
import { CheckCircle2, Database, FileSearch, Scale, ShieldCheck } from "lucide-react";

const pmsFaqs = [
  { q: "What is a Portfolio Management Service (PMS)?", a: "PMS is a SEBI-regulated, professionally-managed investment service where a fund manager runs a concentrated portfolio of 15-25 stocks on your behalf, with direct ownership of the underlying securities held in your demat account." },
  { q: "What is the minimum investment for PMS in India?", a: "The SEBI-mandated minimum investment for any PMS in India is ₹50 lakh per investor. This applies across all PMS providers and strategies." },
  { q: "How is PMS different from a mutual fund?", a: "Mutual funds pool money from many investors and hold 40-80 stocks; you own units of the scheme. PMS runs a concentrated 15-25 stock portfolio with direct stock ownership in your name, allowing personalisation, transparency at the security level, and individual capital-gains tax treatment." },
  { q: "How do I choose the best PMS in India?", a: "Look beyond past returns: evaluate portfolio concentration, drawdown history, fund manager tenure, fee structure (fixed vs profit-share), exit loads, and how the strategy fits your risk profile and horizon. SoHo Wealth is empanelled with 50+ PMS providers and helps investors across India compare these factors objectively." },
  { q: "What returns can I expect from a PMS?", a: "Returns vary widely by strategy and market cycle. Past performance does not guarantee future results. We help set realistic expectations based on the manager's strategy, market conditions and your time horizon." },
  { q: "How is PMS taxed in India?", a: "Because you own the underlying stocks directly, every trade by the manager triggers a capital gain or loss in your name — short-term (held under 12 months) at 20% and long-term at 12.5%. We help you plan around this tax treatment." },
  { q: "Can NRIs invest in PMS?", a: "Yes. NRIs can invest in PMS subject to FEMA regulations, with a PIS account linked to NRE or NRO. We handle the documentation end-to-end." },
];

const pmsServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Portfolio Management Services (PMS) Distribution",
  description: "APMI-registered PMS distribution across India. Compare PMS structures, fees, drawdowns, documentation and portfolio fit. Minimum ₹50 lakh.",
  serviceType: "Portfolio Management Services",
  url: "https://www.sohowealth.in/pms-advisory",
  provider: { "@id": "https://www.sohowealth.in/#organization" },
  areaServed: { "@type": "Country", name: "India" },
  audience: { "@type": "Audience", audienceType: "HNIs and family offices" },
  offers: { "@type": "Offer", priceCurrency: "INR", price: "5000000", description: "Minimum PMS investment ₹50 lakh" },
};

const pmsBreadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sohowealth.in/" },
    { "@type": "ListItem", position: 2, name: "PMS Advisory", item: "https://www.sohowealth.in/pms-advisory" },
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

const whyUs = [
  { title: "Multi-Manager Access", description: "We are empanelled with 50+ PMS providers across India — from large-cap stalwarts to niche small-cap specialists." },
  { title: "Multi-Provider Comparison", description: "We do not operate a proprietary PMS. We compare empanelled providers within our disclosed distribution role." },
  { title: "Document-Led Evaluation", description: "We review published performance, concentration, drawdown history, manager tenure, fee structures and redemption terms with you." },
  { title: "Performance Monitoring", description: "Monthly NAV updates, quarterly performance reviews, and annual strategy reassessment." },
  { title: "Tax Coordination", description: "PMS trades can create investor-level capital gains. We organise the transaction view and questions for your qualified tax professional." },
];

const categories = [
  { title: "Large Cap PMS", description: "Strategies focused on Nifty 50 and top 100 companies. Lower volatility, steady compounding." },
  { title: "Multi Cap PMS", description: "Flexible strategies that shift across market capitalizations based on valuations and opportunity." },
  { title: "Small & Mid Cap PMS", description: "Higher growth potential with higher volatility. Best suited for 5+ year horizons." },
  { title: "Thematic PMS", description: "Manufacturing, digital India, consumption, ESG-focused, and other thematic strategies." },
  { title: "Quant PMS", description: "Algorithm-driven, factor-based strategies using momentum, value, quality, and low-volatility factors." },
  { title: "Long-Short PMS", description: "Strategies that go long on winners and short on losers for absolute return generation." },
];

const comparisonRows = [
  { factor: "Typical entry", mutualFund: "From small SIPs or lump sums", sif: "Rs. 10 lakh", pms: "Rs. 50 lakh" },
  { factor: "How you own it", mutualFund: "Units in a pooled scheme", sif: "Units in a pooled scheme", pms: "Stocks held in your demat" },
  { factor: "Portfolio style", mutualFund: "Usually diversified", sif: "Flexible, including permitted long-short exposure", pms: "Often concentrated and manager-led" },
  { factor: "Tax experience", mutualFund: "Tax generally arises on redemption", sif: "Tax depends on scheme structure", pms: "Manager trades can create gains in your name" },
  { factor: "Best used for", mutualFund: "Core goals and accumulation", sif: "Sophisticated satellite allocation", pms: "Large portfolios seeking direct ownership" },
];

const diligenceSteps = [
  { icon: FileSearch, title: "Mandate and manager", copy: "Understand what the strategy is allowed to own, who makes decisions, manager tenure and whether the process survived different market cycles." },
  { icon: Scale, title: "Risk-adjusted evidence", copy: "Read returns with drawdowns, benchmark context, concentration and consistency. A strong recent period is a prompt for research, not a selection rule." },
  { icon: Database, title: "Fees, churn and tax", copy: "Model fixed fees, performance fees, exit loads, portfolio turnover and investor-level capital gains before comparing outcomes." },
  { icon: ShieldCheck, title: "Whole-portfolio fit", copy: "Check overlap with mutual funds, SIFs and direct equity, then size the allocation so one manager or style cannot dominate the family portfolio." },
];

const PMSAdvisoryClient = () => {
  const scrollToForm = () => {
    document.getElementById("pms-comparison-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="pt-20">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pmsServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pmsBreadcrumbs) }} />
      {/* HERO */}
      <section className="py-24 lg:py-32 relative overflow-hidden" style={{ backgroundColor: "#0B1F3A" }}>
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(135deg, transparent, transparent 40px, rgba(255,255,255,0.5) 40px, rgba(255,255,255,0.5) 41px)" }} />
        <div className="container mx-auto px-6 lg:px-8 relative z-10 max-w-4xl text-center">
          <AnimatedSection>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-6 leading-tight">
              PMS Distribution Across India for{" "}
              <span style={{ color: "#C9A84C" }}>Serious HNI Portfolios.</span>
            </h1>
            <p className="font-body text-lg lg:text-xl leading-relaxed mb-6 max-w-3xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
              Compare Portfolio Management Services before investing Rs. 50 lakh or more. SoHo Wealth helps investors across India evaluate
              PMS strategies by manager quality, drawdowns, fees, taxation and fit with the existing portfolio.
            </p>
            <p className="font-body text-base leading-relaxed mb-8 max-w-3xl mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
              With a minimum investment of Rs. 50 lakh, PMS can suit eligible investors who understand direct stock ownership,
              concentrated mandates, manager discretion, fees and investor-level tax consequences.
            </p>
            <button type="button" onClick={scrollToForm} className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base tracking-wide transition-all duration-200 hover:opacity-90" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}>
              Book PMS Comparison Call
            </button>
          </AnimatedSection>
        </div>
      </section>

      <nav aria-label="PMS page sections" className="sticky top-20 z-30 border-y border-slate-200 bg-white/95 backdrop-blur">
        <div className="container mx-auto flex gap-6 overflow-x-auto px-6 py-4 text-sm font-semibold text-[#0B1F3A] lg:justify-center">
          <a href="#pms-research" className="whitespace-nowrap hover:text-[#A78328]">Research dashboard</a>
          <a href="#pms-fit" className="whitespace-nowrap hover:text-[#A78328]">Is PMS right for you?</a>
          <a href="#pms-diligence" className="whitespace-nowrap hover:text-[#A78328]">How we evaluate</a>
          <a href="#pms-comparison-form" className="whitespace-nowrap hover:text-[#A78328]">Book a comparison</a>
        </div>
      </nav>

      <section id="pms-research" className="scroll-mt-36">
        <PmsPerformanceLeadersSection />
      </section>

      <section id="pms-fit" className="scroll-mt-36 bg-white py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="mx-auto mb-12 max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#A78328]">Choose the vehicle before the manager</p>
            <h2 className="font-display text-3xl font-semibold text-[#0B1F3A] md:text-5xl">PMS, SIF or Mutual Fund?</h2>
            <p className="mt-5 font-body leading-relaxed text-[#4A5568]">The minimum investment is not the deciding factor. Ownership, concentration, liquidity, fees, tax treatment and the role inside your wider portfolio matter more.</p>
          </AnimatedSection>
          <AnimatedSection className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-slate-200 shadow-[0_18px_60px_-32px_rgba(11,31,58,0.28)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead className="bg-[#0B1F3A] text-white">
                  <tr><th className="p-5">Decision factor</th><th className="p-5">Mutual fund</th><th className="p-5">SIF</th><th className="p-5 text-[#E7C96E]">PMS</th></tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr key={row.factor} className={index % 2 ? "bg-slate-50" : "bg-white"}>
                      <th className="p-5 font-semibold text-[#0B1F3A]">{row.factor}</th><td className="p-5 text-[#4A5568]">{row.mutualFund}</td><td className="p-5 text-[#4A5568]">{row.sif}</td><td className="p-5 font-medium text-[#0B1F3A]">{row.pms}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
          <p className="mx-auto mt-5 max-w-5xl text-xs leading-relaxed text-slate-500">This is a high-level educational comparison, not tax or investment advice. Product documents and individual circumstances can change the outcome.</p>
        </div>
      </section>

      <section id="pms-diligence" className="scroll-mt-36 bg-[#F7F8FA] py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#A78328]">The SoHo diligence lens</p>
            <h2 className="font-display text-3xl font-semibold text-[#0B1F3A] md:text-5xl">Four checks before a PMS shortlist</h2>
          </AnimatedSection>
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
            {diligenceSteps.map(({ icon: Icon, title, copy }, index) => (
              <AnimatedSection key={title}>
                <article className="h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_12px_35px_-28px_rgba(11,31,58,0.35)]">
                  <div className="mb-5 flex items-center justify-between"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0B1F3A] text-[#E7C96E]"><Icon className="h-5 w-5" /></span><span className="font-display text-3xl text-slate-200">0{index + 1}</span></div>
                  <h3 className="font-display text-xl font-semibold text-[#0B1F3A]">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#4A5568]">{copy}</p>
                </article>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="mx-auto mt-10 max-w-6xl rounded-2xl bg-[#0B1F3A] p-8 text-white lg:flex lg:items-center lg:justify-between lg:p-10">
            <div className="max-w-3xl"><h3 className="font-display text-2xl font-semibold">A leaderboard is where diligence starts.</h3><p className="mt-3 text-sm leading-relaxed text-white/70">SoHo Wealth combines published APMI data with a fit review covering mandate, drawdowns, fees, tax friction and overlap with your existing holdings.</p></div>
            <button type="button" onClick={scrollToForm} className="mt-6 inline-flex shrink-0 items-center justify-center rounded-lg bg-[#C9A84C] px-7 py-3.5 font-semibold text-[#0B1F3A] transition hover:opacity-90 lg:ml-8 lg:mt-0">Discuss a PMS shortlist</button>
          </AnimatedSection>
        </div>
      </section>

      {/* WHY SOHO */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold" style={{ color: "#0B1F3A" }}>
              PMS Selection and Onboarding Through <span style={{ color: "#C9A84C" }}>SoHo Wealth</span>
            </h2>
          </AnimatedSection>
          <div className="max-w-4xl mx-auto space-y-0">
            {whyUs.map((item, i) => (
              <AnimatedSection key={item.title}>
                <div className="flex gap-6 items-start py-6 border-b" style={{ borderColor: "#E2E8F0" }}>
                  <span className="font-display text-2xl font-bold flex-shrink-0" style={{ color: "#C9A84C" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold" style={{ color: "#0B1F3A" }}>{item.title}</h3>
                    <p className="font-body text-sm mt-1 leading-relaxed" style={{ color: "#4A5568" }}>{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* PMS CATEGORIES */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: "#F7F8FA" }}>
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <h2 className="font-display text-3xl md:text-4xl font-semibold" style={{ color: "#0B1F3A" }}>
              PMS <span style={{ color: "#C9A84C" }}>Categories</span>
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {categories.map((cat) => (
              <AnimatedSection key={cat.title}>
                <div className="rounded-xl bg-white p-8 shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)] border-t-4 h-full" style={{ borderTopColor: "#0B1F3A" }}>
                  <h3 className="font-display text-lg font-semibold mb-3" style={{ color: "#0B1F3A" }}>{cat.title}</h3>
                  <p className="font-body text-sm leading-relaxed" style={{ color: "#4A5568" }}>{cat.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#0B1F3A" }}>
        <div className="container mx-auto px-6 lg:px-8 text-center max-w-3xl">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-white mb-8">
              Start Your PMS <span style={{ color: "#C9A84C" }}>Journey</span>
            </h2>
            <p className="font-body text-lg leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
              Compare structure, published performance, fees, drawdowns and fit before you commit capital. Past performance is not a selection rule.
            </p>
            <button type="button" onClick={scrollToForm} className="inline-flex items-center justify-center px-8 py-4 rounded-lg font-semibold text-base tracking-wide transition-all duration-200 hover:opacity-90" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }}>
              Schedule PMS Review
            </button>
          </AnimatedSection>
        </div>
      </section>

      <LeadCaptureForm
        source="pms-advisory page"
        heading="Book Your PMS Comparison Call"
        sectionId="pms-comparison-form"
        leftContent={
          <>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-tight mb-5 text-white">
              Compare PMS Strategies Before You Commit Rs. 50 Lakh.
            </h2>
            <p className="font-body text-base lg:text-lg leading-relaxed mb-10" style={{ color: "rgba(255,255,255,0.7)" }}>
              Get a practical review of strategy fit, manager quality, fees, drawdowns, taxation and how PMS should sit inside your wider portfolio.
            </p>
            <p className="font-body text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: "#C9A84C" }}>
              What you will get
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "PMS suitability check for your portfolio size and goals",
                "Shortlist of strategy styles that match your risk profile",
                "Fee, exit load and tax impact discussion",
                "Comparison of PMS, SIF and mutual fund alternatives",
                "30-minute consultation with SoHo Wealth",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#C9A84C" }} />
                  <span className="font-body text-base text-white/90">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-body text-sm leading-relaxed italic" style={{ color: "rgba(255,255,255,0.5)" }}>
              SoHo Wealth is an APMI-registered PMS distributor (APRN01233), not a SEBI Registered Investment Adviser.
            </p>
          </>
        }
      />

      <FAQSection faqs={pmsFaqs} heading="PMS — Frequently Asked Questions" background="#FFFFFF" />

      <RelatedServices
        items={[
          { title: "SIF Advisory", href: "/sif", description: "Step down to ₹10 lakh entry with PMS-style strategies in a SEBI-regulated framework." },
          { title: "AIF Advisory", href: "/aif-advisory", description: "Diversify beyond listed equity into PE, VC and structured credit from ₹1 Cr." },
          { title: "Mutual Funds Advisory", href: "/mutual-funds", description: "Goal-based MF portfolios that complement your PMS allocation." },
        ]}
        heading="Explore Adjacent Services"
      />
    </main>
  );
};

export default PMSAdvisoryClient;
