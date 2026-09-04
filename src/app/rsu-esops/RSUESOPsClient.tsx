"use client";

import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2, ChevronDown, AlertTriangle, DollarSign, FileText, Shield, TrendingUp } from "lucide-react";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedServices } from "@/components/seo/RelatedServices";
import { trackEvent } from "@/lib/gtag";

const rsuServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "RSU & ESOP Portfolio Review for Indian Residents and NRIs",
  description: "Portfolio review and wealth coordination for Indian residents and NRIs managing RSUs, ESOPs, employer-stock concentration and related specialist questions.",
  serviceType: "RSU & ESOP Portfolio Review",
  url: "https://www.sohowealth.in/rsu-esops",
  provider: { "@id": "https://www.sohowealth.in/#organization" },
  areaServed: [
    { "@type": "City", name: "Hyderabad" },
    { "@type": "City", name: "Bengaluru" },
    { "@type": "City", name: "Pune" },
    { "@type": "Country", name: "India" },
  ],
  audience: { "@type": "Audience", audienceType: "Indian residents, NRIs, returning Indians and technology professionals holding employer equity" },
};

const rsuBreadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.sohowealth.in/" },
    { "@type": "ListItem", position: 2, name: "RSU & ESOPs", item: "https://www.sohowealth.in/rsu-esops" },
  ],
};

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (<motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className={className}>{children}</motion.div>);
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border/50">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between py-5 text-left">
        <span className="font-display font-semibold pr-4" style={{ color: "#0B1F3A" }}>{q}</span>
        <ChevronDown className={`w-5 h-5 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} style={{ color: "#C9A84C" }} />
      </button>
      <motion.div initial={false} animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
        <p className="pb-5 text-sm leading-relaxed" style={{ color: "#4A5568" }}>{a}</p>
      </motion.div>
    </div>
  );
}

const whyDiversify = [
  { icon: AlertTriangle, title: "One-company dependency", description: "Salary, bonus, future grants and vested shares can all depend on the same employer." },
  { icon: Shield, title: "Cross-border questions", description: "Foreign shares can create tax, reporting, estate-planning and foreign-exchange questions that need specialist review." },
  { icon: FileText, title: "Fragmented records", description: "Payroll, vesting, broker, dividend and sale records need to be reconciled before decisions or filings are made." },
];

const diversificationWays = [
  { title: "Sell at or near vest", pros: "Can prevent new grants from continually increasing an already concentrated position.", cons: "May give up future upside; confirm tax, trading-window and settlement details first." },
  { title: "Sell a fixed percentage", pros: "Creates a repeatable rule and can fund goals without making an all-or-nothing forecast.", cons: "Concentration may fall slowly when new grants or stock appreciation remain large." },
  { title: "Reduce toward a written range", pros: "Connects employer stock to the rest of the portfolio, future awards and family goals.", cons: "The range is personal, not universal; implementation may span several vesting or sale dates." },
];

const taxationSteps = [
  { stage: "At Vesting", icon: DollarSign, details: ["Vesting or allotment can create salary or perquisite taxation under the plan and applicable law", "Payroll withholding may reduce the shares delivered", "Keep the vest statement, payslip, share count and value used by the employer"] },
  { stage: "At Sale", icon: TrendingUp, details: ["A later sale is a separate capital-gains event", "The holding period, rate and foreign-tax treatment depend on the security, residential status and current law", "Reconcile trade records and report the transaction in the applicable ITR schedules"] },
  { stage: "Annual Reporting", icon: FileText, details: ["Foreign shares, accounts, income and tax credits can require different ITR schedules", "Residential status and the relevant reporting period matter", "A CA should determine the applicable schedules, values and foreign-tax-credit claim"] },
];

const faqs = [
  { q: "What is the difference between RSUs and ESOPs?", a: "An RSU is generally a conditional promise that may settle into shares or cash under the plan after vesting. An employee stock option generally gives you a right to buy shares at a stated exercise price after its conditions are met. The cash requirement, downside, expiry terms and tax events differ, so read the actual grant documents." },
  { q: "When are RSUs taxed in India?", a: "RSUs or similar employer shares can involve salary or perquisite taxation when shares vest or are allotted, followed by a separate capital-gains calculation when shares are sold. The valuation, holding period, rate and foreign-tax treatment depend on the plan, security, residential status and current law. Reconcile the vest statement and payslip with a CA." },
  { q: "What is the FEMA 180-day rule for RSU proceeds?", a: "Do not assume every foreign cash balance can remain abroad indefinitely. RBI guidance distinguishes retained or reinvested income, realised or unused foreign exchange and the underlying investment route. Its LRS FAQ includes a 180-day rule in specified circumstances and notes that additional overseas-investment requirements can apply. Confirm the facts with an authorised dealer bank or FEMA specialist." },
  { q: "Do I need to report unsold RSUs in my tax return?", a: "Foreign shares or accounts may create Schedule FA and foreign-income reporting requirements depending on residential status, ownership, account structure and the relevant reporting period. Unvested units should not automatically be treated as owned shares. A CA familiar with foreign equity compensation should determine the correct schedules and values." },
  { q: "How can GIFT City funds help with RSU diversification?", a: "An appropriately authorised GIFT-IFSC offering may be one route to compare, but there is no blanket tax or reporting conclusion. Products differ by legal structure, domicile, eligibility, assets, liquidity, costs and current tax treatment. Review the offer documents and obtain advice for your circumstances." },
  { q: "Can SoHo Wealth help me with RSU tax planning?", a: "SoHo Wealth can organise your employer-stock exposure, vesting records, family goals and diversification choices into a coordinated portfolio review. Tax returns, legal opinions, FEMA conclusions and security-level recommendations should be handled by appropriately qualified professionals; we help frame and coordinate those specialist questions." },
];

const RSUESOPsClient = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const scrollToForm = () => { document.getElementById("rsu-consultation")?.scrollIntoView({ behavior: "smooth" }); };

  const rsuFaqSchema = {
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
      <JsonLd data={rsuServiceSchema} />
      <JsonLd data={rsuBreadcrumbs} />
      <JsonLd data={rsuFaqSchema} />
      {/* Hero */}
      <section className="py-24 lg:py-32 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #0B1F3A 0%, #132D50 100%)" }}>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <AnimatedSection className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6" style={{ backgroundColor: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>RSU wealth planning</div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Your RSUs are compensation today—and a <span style={{ color: "#C9A84C" }}>portfolio decision tomorrow.</span></h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl">When salary, future grants and investments depend on the same employer, a successful career can quietly create a concentrated financial life. Bring the records, risks and goals into one coordinated plan.</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-14 px-8 font-semibold" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }} onClick={() => { trackEvent("cta_click", { cta_variant: "rsu-review", source_component: "hero" }); scrollToForm(); }}>Book an RSU Portfolio Review<ArrowRight className="ml-2 w-5 h-5" /></Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 font-semibold border-white/30 text-white hover:bg-white/10"><a href="/guides/soho-wealth-annual-rsu-planning-pack.pdf" download onClick={() => trackEvent("sample_deliverable_view", { cta_variant: "rsu-planning-pack", source_component: "service-hero" })}>Download Planning Pack</a></Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 font-semibold border-white/30 text-white hover:bg-white/10">
                <a href="https://wa.me/919032999466?text=Hi%2C%20I%20need%20help%20with%20my%20RSUs" target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6" style={{ color: "#0B1F3A" }}>Your true employer exposure is larger than one brokerage balance</h2>
            <div className="p-8 rounded-2xl border" style={{ backgroundColor: "rgba(201,168,76,0.04)", borderColor: "rgba(201,168,76,0.2)" }}>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "#4A5568" }}><strong style={{ color: "#0B1F3A" }}>Measure more than vested shares.</strong> Add salary, bonus, unvested awards, career prospects and investments in the same sector to understand how much of your financial life depends on one company.</p>
              <p className="text-lg leading-relaxed" style={{ color: "#4A5568" }}>Fidelity says a single position of 5% or more may be considered concentrated; Schwab identifies more than 10% as a point of concern. These are review triggers—not automatic sell rules.</p>
              <div className="mt-5 flex flex-wrap gap-4 text-sm font-semibold"><a className="text-[#8B6815] underline underline-offset-4" href="https://www.fidelity.com/learning-center/wealth-management-insights/concentrated-stock-positions" target="_blank" rel="noopener noreferrer">Fidelity research</a><a className="text-[#8B6815] underline underline-offset-4" href="https://www.schwab.com/learn/story/risk-holding-too-much-company-stock" target="_blank" rel="noopener noreferrer">Schwab research</a></div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Diversify */}
      <section className="py-24 lg:py-32 bg-muted/30" ref={ref}>
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16"><h2 className="font-display text-3xl md:text-4xl font-semibold mb-4" style={{ color: "#0B1F3A" }}>Why your RSUs need a <span style={{ color: "#C9A84C" }}>written review</span></h2></AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {whyDiversify.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }} className="p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "rgba(201,168,76,0.12)" }}><item.icon className="w-7 h-7" style={{ color: "#C9A84C" }} /></div>
                <h3 className="font-display text-lg font-semibold mb-2" style={{ color: "#0B1F3A" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#4A5568" }}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How RSUs Are Taxed */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16"><h2 className="font-display text-3xl md:text-4xl font-semibold mb-4" style={{ color: "#0B1F3A" }}>RSU tax and reporting <span style={{ color: "#C9A84C" }}>touchpoints in India</span></h2><p className="text-lg max-w-2xl mx-auto" style={{ color: "#4A5568" }}>Separate the vesting, sale and annual-reporting records, then confirm the treatment for your plan and residential status.</p></AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {taxationSteps.map((step, i) => (
              <AnimatedSection key={step.stage}>
                <div className="p-8 rounded-2xl border border-border h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: "#0B1F3A" }}>{i + 1}</div>
                    <h3 className="font-display text-lg font-semibold" style={{ color: "#0B1F3A" }}>{step.stage}</h3>
                  </div>
                  <ul className="space-y-3">{step.details.map((d) => (<li key={d} className="flex items-start gap-2.5"><CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#C9A84C" }} /><span className="text-sm leading-relaxed" style={{ color: "#4A5568" }}>{d}</span></li>))}</ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Ways to Diversify */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16"><h2 className="font-display text-3xl md:text-4xl font-semibold mb-4" style={{ color: "#0B1F3A" }}>Ways to <span style={{ color: "#C9A84C" }}>Diversify Your RSUs</span></h2></AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {diversificationWays.map((way) => (
              <AnimatedSection key={way.title}>
                <div className="p-8 rounded-2xl bg-card border border-border h-full flex flex-col">
                  <h3 className="font-display text-lg font-semibold mb-4" style={{ color: "#0B1F3A" }}>{way.title}</h3>
                  <div className="mb-4"><span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#16A34A" }}>Pros</span><p className="text-sm mt-1 leading-relaxed" style={{ color: "#4A5568" }}>{way.pros}</p></div>
                  <div><span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#DC2626" }}>Cons</span><p className="text-sm mt-1 leading-relaxed" style={{ color: "#4A5568" }}>{way.cons}</p></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FEMA and overseas proceeds */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="p-10 rounded-2xl border" style={{ backgroundColor: "rgba(11,31,58,0.03)", borderColor: "rgba(11,31,58,0.1)" }}>
              <div className="flex items-center gap-3 mb-5"><Shield className="w-8 h-8" style={{ color: "#C9A84C" }} /><h2 className="font-display text-2xl md:text-3xl font-semibold" style={{ color: "#0B1F3A" }}>FEMA: verify the route before moving proceeds</h2></div>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#4A5568" }}>Do not assume every foreign cash balance can remain abroad indefinitely—or that every balance must automatically be remitted. RBI guidance distinguishes retained or reinvested income, realised or unused foreign exchange and the investment route.</p>
              <p className="text-sm leading-relaxed" style={{ color: "#4A5568" }}>The RBI LRS FAQ includes a 180-day requirement in specified circumstances and says additional overseas-investment rules may apply. Confirm your plan and broker flow with an authorised dealer bank or FEMA specialist before acting. <a className="font-semibold text-[#8B6815] underline underline-offset-4" href="https://www.rbi.org.in/scripts/FAQDisplay.aspx?Id=115" target="_blank" rel="noopener noreferrer">Read the RBI guidance</a>.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-5xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4 text-center" style={{ color: "#0B1F3A" }}>Dividends, Estate Tax & <span style={{ color: "#C9A84C" }}>Reinvestment</span></h2>
            <p className="text-center text-lg mb-10 max-w-3xl mx-auto" style={{ color: "#4A5568" }}>The details matter as much as the stock-sale decision. Keep a record of every dividend, withholding entry, sale and transfer.</p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                ["Dividend records", "Keep broker dividend statements and Form 1042-S where issued. U.S. withholding and Indian foreign-tax-credit claims require records; discuss Form 67 and ITR reporting with your CA."],
                ["U.S. estate-tax review", "U.S.-corporation stock can be U.S.-situated property for a non-U.S. citizen/non-U.S. domiciliary. Above USD 60,000, an executor may face a U.S. estate-tax filing question. Estate planning needs specialist advice."],
                ["Diversifying abroad", "After a sale, compare repatriation and permitted reinvestment routes, including foreign-bank or broker arrangements where available. UCITS ETFs can be considered for diversified exposure, but assess domicile, costs, tax and suitability first."],
              ].map(([title, copy]) => (
                <div key={title} className="rounded-2xl border border-border bg-card p-7">
                  <h3 className="font-display text-xl font-semibold mb-3" style={{ color: "#0B1F3A" }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#4A5568" }}>{copy}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-xs leading-relaxed text-center" style={{ color: "#64748B" }}>Educational information, current as reviewed in August 2026. Laws, treaty status, broker capabilities and RBI/Income-tax interpretations can change. Get advice for your own facts before acting.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Specialist-ready records */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6 text-center" style={{ color: "#0B1F3A" }}>Build one <span style={{ color: "#C9A84C" }}>specialist-ready RSU file</span></h2>
            <p className="text-center text-lg mb-10" style={{ color: "#4A5568" }}>An RSU grant, vest, withholding sale, broker credit, dividend and later sale are different events. Keep the source records instead of relying only on a broker gain figure.</p>
            <div className="grid gap-4 md:grid-cols-2">
              {["Grant and vesting statements", "Payslips and employer tax records for vest months", "Broker transaction history and year-end statements", "Share counts, vest dates, sale dates and reported values", "Dividend and foreign-tax documents", "Bank, remittance and currency-conversion records", "Current value of vested employer shares", "Schedule and approximate value of unvested awards"].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-border bg-card p-5"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A84C]" /><span className="text-sm leading-relaxed text-[#4A5568]">{item}</span></div>
              ))}
            </div>
            <div className="mt-8 rounded-xl border border-[#C9A84C]/20 bg-[#FDF9EF] p-6 text-sm leading-relaxed text-[#4A5568]">Schedule FA, foreign-income and foreign-tax-credit requirements depend on residential status, ownership, account structure and the reporting period. Use the <a className="font-semibold text-[#8B6815] underline underline-offset-4" href="https://www.incometax.gov.in/iec/foportal/nudge/nudge-schedule-fa" target="_blank" rel="noopener noreferrer">Income Tax Department guidance</a> and have a qualified CA determine the schedules and values applicable to you.</div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-10 text-center" style={{ color: "#0B1F3A" }}>Frequently Asked <span style={{ color: "#C9A84C" }}>Questions</span></h2>
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8">{faqs.map((faq) => (<FAQItem key={faq.q} q={faq.q} a={faq.a} />))}</div>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white py-16"><div className="container mx-auto max-w-4xl px-6"><div className="rounded-2xl border border-slate-200 bg-[#F7F8FA] p-8"><p className="text-xs font-bold uppercase tracking-[.14em] text-[#8B6815]">Authorship and methodology</p><h2 className="mt-3 font-display text-2xl font-semibold text-[#0B1F3A]">Prepared by Kiran Dutta, Founder of SoHo Wealth</h2><p className="mt-3 text-sm leading-relaxed text-slate-600">Kiran is a Columbia MBA, former Wall Street professional and NISM-certified SEBI Research Analyst. The framework measures vested employer shares separately from conditional unvested awards, career income and related sector exposure. It uses published concentration reference points as review prompts—not universal limits.</p><p className="mt-3 text-xs leading-relaxed text-slate-500">Reviewed 13 August 2026. SoHo Wealth is an investment distributor, not a SEBI Registered Investment Adviser. Tax, legal, FEMA and security-level conclusions require appropriately qualified professionals.</p></div></div></section>

      {/* Lead Capture */}
      <LeadCaptureForm source="RSU/ESOP page" heading="Book Your RSU & ESOP Consultation" sectionId="rsu-consultation" leftContent={
        <div>
          <h3 className="font-display text-2xl font-semibold text-white mb-4">Book an RSU & ESOP Consultation</h3>
          <ul className="space-y-3">
            {["Employer-stock concentration and portfolio review", "RSU, dividend and foreign-asset record checklist", "Questions to take to your CA, bank and broker", "Diversification-route comparison based on your goals"].map((item) => (
              <li key={item} className="flex items-start gap-2.5"><CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#C9A84C" }} /><span className="text-white/80 text-sm">{item}</span></li>
            ))}
          </ul>
        </div>
      } />

      <RelatedServices
        items={[
          { title: "Global Investing", href: "/global-investing", description: "Compare eligible India, IFSC and overseas diversification routes, including their costs, liquidity and specialist questions." },
          { title: "NRI Advisory", href: "/services/nri", description: "Coordinate foreign employer shares with residency, India goals and cross-border specialist advice." },
          { title: "Mutual Funds Advisory", href: "/mutual-funds", description: "Build the Indian leg of a diversified portfolio alongside your employer equity." },
        ]}
        heading="Where to Diversify Your RSUs"
      />
    </main>
  );
};

export default RSUESOPsClient;
