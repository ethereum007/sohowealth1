"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, CheckCircle2, ChevronDown, AlertTriangle, DollarSign, FileText, Shield, TrendingUp, Globe, BarChart3 } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { RelatedServices } from "@/components/seo/RelatedServices";

const rsuServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "RSU & ESOP Advisory for Tech Professionals",
  description: "End-to-end RSU and ESOP advisory — Indian taxation, FEMA compliance, Schedule FA reporting, and tax-efficient diversification via GIFT City funds and global ETFs.",
  serviceType: "RSU & ESOP Advisory",
  url: "https://sohowealth.in/rsu-esops",
  provider: { "@id": "https://sohowealth.in/#organization" },
  areaServed: [
    { "@type": "City", name: "Hyderabad" },
    { "@type": "City", name: "Bengaluru" },
    { "@type": "City", name: "Pune" },
    { "@type": "Country", name: "India" },
  ],
  audience: { "@type": "Audience", audienceType: "Tech professionals, executives and NRIs holding employer equity" },
};

const rsuBreadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sohowealth.in/" },
    { "@type": "ListItem", position: 2, name: "RSU & ESOPs", item: "https://sohowealth.in/rsu-esops" },
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
  { icon: AlertTriangle, title: "Concentration Risk", description: "Too much employer stock means both salary and wealth depend on the same company." },
  { icon: Shield, title: "US Estate Tax", description: "US imposes up to 40% estate tax on assets above USD 60,000 held by non-US persons." },
  { icon: FileText, title: "Schedule FA Compliance", description: "Foreign shares, RSUs, and overseas brokerage accounts must be reported annually. Non-reporting is a major compliance risk." },
];

const diversificationWays = [
  { title: "Manage in Existing Broker", pros: "No selling required; no immediate tax; keeps funds in USD; access to wider platforms like IBKR", cons: "Limited investment choices; Schedule FA reporting continues; no estate tax mitigation." },
  { title: "Sell & Reinvest via New Broker", pros: "Wider options to diversify; enables immediate global diversification through foreign ETFs/UCITs", cons: "Triggers immediate tax on capital gains; works only if both brokers support ACATS/DTC." },
  { title: "Sell & Invest in GIFT City Funds", pros: "Tax-efficient structure; fund-level taxation; no Schedule FA hassle on GIFT City units", cons: "Tax applies on sale of RSUs; requires GIFT City onboarding process." },
];

const taxationSteps = [
  { stage: "At Vesting", icon: DollarSign, details: ["RSU value is treated as a taxable salary perquisite", "Some companies auto-sell ~30% of vested shares to cover TDS", "FMV on vesting date becomes your cost of acquisition"] },
  { stage: "At Sale", icon: TrendingUp, details: ["LTCG at 12.5% (if held > 12 months from vesting)", "STCG at slab rate (if sold within 12 months)", "Capital gains must be reported in ITR"] },
  { stage: "Annual Reporting", icon: FileText, details: ["Foreign shares must be declared in Schedule FA every year until sold", "Dividends reported under 'Income from Other Sources'", "Foreign tax withheld can be claimed as credit (DTAA)"] },
];

const giftCityFunds = [
  { fund: "Ionic", strategy: "Focus on mid-tier IT companies", allocation: "Invests across all markets", ticketSize: "HNI" },
  { fund: "Mirae", strategy: "Invests in ETFs across global markets", allocation: "50-70% developed, 30-50% emerging", ticketSize: "HNI" },
  { fund: "Baroda BNP", strategy: "US Small Cap Fund, bottom-up approach", allocation: "100% US Small-Cap", ticketSize: "HNI" },
  { fund: "DSP", strategy: "Value stocks, market-cap & country agnostic", allocation: "40% US, 32% EU, rest Asia", ticketSize: "$5,000" },
  { fund: "PPFAS Nasdaq", strategy: "Nasdaq 100 linked UCITS & ETFs", allocation: "90% index, 10% cash/debt", ticketSize: "$5,000" },
  { fund: "PPFAS S&P", strategy: "S&P 500 linked UCITS & ETFs", allocation: "90% index, 10% cash/debt", ticketSize: "$5,000" },
];

const giftCityPMS = [
  { fund: "Phillip Capital", strategy: "Invests in US-listed ETFs, sector agnostic", allocation: "67% US, rest Japan/Taiwan", ticketSize: "$75,000" },
  { fund: "Marcellus", strategy: "Bottom-up, 25-30 stocks across market caps", allocation: "62% US, rest EU & Canada", ticketSize: "$75,000" },
  { fund: "PPFAS", strategy: "Value investing, sector 25% cap, single stock 10% cap", allocation: "Global diversified revenues", ticketSize: "$75,000" },
];

const faqs = [
  { q: "What is the difference between RSUs and ESOPs?", a: "RSUs (Restricted Stock Units) are company shares granted to employees that vest over time \u2014 you don't pay anything to acquire them. ESOPs (Employee Stock Option Plans) give you the option to buy shares at a pre-determined price. RSUs have value from day one; ESOPs have value only if the stock price exceeds the exercise price." },
  { q: "When are RSUs taxed in India?", a: "RSUs are taxed at two points: first as a salary perquisite when they vest (based on FMV on vesting date), and again as capital gains when you sell. LTCG applies if held over 12 months from vesting; otherwise STCG at your slab rate." },
  { q: "What is the FEMA 180-day rule for RSU proceeds?", a: "As per FEMA guidelines, if a resident Indian sells RSUs and keeps the USD proceeds with a foreign broker, the funds must be repatriated to India within 180 days \u2014 unless they are reinvested abroad (e.g., moved to another foreign broker or routed through a GIFT City account)." },
  { q: "Do I need to report unsold RSUs in my tax return?", a: "Yes. Foreign shares, including unsold RSUs, must be declared in Schedule FA of your ITR every year until they are sold. Non-reporting is a significant compliance risk." },
  { q: "How can GIFT City funds help with RSU diversification?", a: "GIFT City funds are taxed at the fund level, not the investor level. When you redeem, there is no additional capital gains tax. This makes them a tax-efficient way to diversify RSU proceeds into global markets while staying compliant with Indian regulations." },
  { q: "Can SoHo Wealth help me with RSU tax planning?", a: "Yes. We provide end-to-end RSU advisory \u2014 from understanding your vesting schedule and tax implications to building a diversified portfolio through GIFT City funds, global ETFs, and domestic alternatives. We work alongside your CA for complete compliance." },
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
            <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6" style={{ backgroundColor: "rgba(201,168,76,0.15)", color: "#C9A84C" }}>Corporate Stock Advisory</div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Fix Your <span style={{ color: "#C9A84C" }}>RSUs & ESOPs</span></h1>
            <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl">Your employer stock is a wealth-building asset \u2014 but without a plan, it's a concentration risk. We help tech professionals navigate taxation, FEMA compliance, and smart diversification strategies.</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-14 px-8 font-semibold" style={{ backgroundColor: "#C9A84C", color: "#0B1F3A" }} onClick={scrollToForm}>Book Free Consultation<ArrowRight className="ml-2 w-5 h-5" /></Button>
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
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6" style={{ color: "#0B1F3A" }}>The RSU Dilemma Most Professionals Face</h2>
            <div className="p-8 rounded-2xl border" style={{ backgroundColor: "rgba(201,168,76,0.04)", borderColor: "rgba(201,168,76,0.2)" }}>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "#4A5568" }}><strong style={{ color: "#0B1F3A" }}>Consider Arjun</strong>, a software engineer with a CTC of \u20B950 lakh. \u20B95 lakh comes as RSUs. Over five years, due to stock price growth, his RSU holdings have grown to <strong>\u20B92.5 crore</strong>.</p>
              <p className="text-lg leading-relaxed" style={{ color: "#4A5568" }}>About <strong>50% of Arjun's entire net worth</strong> sits in one stock. While he's bullish on the company, the concentration risk is real. This is the exact situation many senior tech professionals in India face today.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Diversify */}
      <section className="py-24 lg:py-32 bg-muted/30" ref={ref}>
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16"><h2 className="font-display text-3xl md:text-4xl font-semibold mb-4" style={{ color: "#0B1F3A" }}>Why You <span style={{ color: "#C9A84C" }}>Must Diversify</span></h2></AnimatedSection>
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
          <AnimatedSection className="text-center mb-16"><h2 className="font-display text-3xl md:text-4xl font-semibold mb-4" style={{ color: "#0B1F3A" }}>How RSUs Are <span style={{ color: "#C9A84C" }}>Taxed in India</span></h2><p className="text-lg max-w-2xl mx-auto" style={{ color: "#4A5568" }}>Understanding the two-stage taxation is critical for optimal planning.</p></AnimatedSection>
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

      {/* FEMA 180-Day Rule */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-3xl mx-auto">
            <div className="p-10 rounded-2xl border" style={{ backgroundColor: "rgba(11,31,58,0.03)", borderColor: "rgba(11,31,58,0.1)" }}>
              <div className="flex items-center gap-3 mb-5"><Shield className="w-8 h-8" style={{ color: "#C9A84C" }} /><h2 className="font-display text-2xl md:text-3xl font-semibold" style={{ color: "#0B1F3A" }}>FEMA: The 180-Day Rule</h2></div>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#4A5568" }}>As per FEMA guidelines, if a resident Indian sells RSUs and keeps the USD proceeds with a foreign broker, the funds must be <strong>repatriated back to India within 180 days</strong>, unless they are reinvested abroad.</p>
              <p className="text-sm leading-relaxed" style={{ color: "#4A5568" }}>The same 180-day rule applies when USD proceeds are moved to another foreign broker or routed through a GIFT City account. Investors must ensure timely reinvestment or repatriation to stay compliant.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* GIFT City Funds */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-6">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4" style={{ color: "#0B1F3A" }}>GIFT City <span style={{ color: "#C9A84C" }}>Outbound Funds</span></h2>
            <p className="text-lg max-w-2xl mx-auto mb-2" style={{ color: "#4A5568" }}>GIFT City funds are taxed at the fund level, not the investor level. When you redeem, there is no additional capital gains tax \u2014 making them highly tax-efficient for RSU diversification.</p>
          </AnimatedSection>
          <AnimatedSection className="mb-12">
            <h3 className="font-display text-xl font-semibold mb-4" style={{ color: "#0B1F3A" }}><Globe className="w-5 h-5 inline mr-2" style={{ color: "#C9A84C" }} />Outbound Funds & Retail Funds</h3>
            <div className="rounded-xl border border-border overflow-hidden bg-card">
              <Table>
                <TableHeader><TableRow style={{ backgroundColor: "#0B1F3A" }}><TableHead className="text-white font-semibold">Fund</TableHead><TableHead className="text-white font-semibold">Strategy</TableHead><TableHead className="text-white font-semibold hidden md:table-cell">Allocation</TableHead><TableHead className="text-white font-semibold">Min. Ticket</TableHead></TableRow></TableHeader>
                <TableBody>{giftCityFunds.map((f) => (<TableRow key={f.fund + f.strategy}><TableCell className="font-semibold" style={{ color: "#0B1F3A" }}>{f.fund}</TableCell><TableCell style={{ color: "#4A5568" }}>{f.strategy}</TableCell><TableCell className="hidden md:table-cell" style={{ color: "#4A5568" }}>{f.allocation}</TableCell><TableCell><span className="inline-block px-2 py-1 rounded text-xs font-semibold" style={{ backgroundColor: "rgba(201,168,76,0.12)", color: "#C9A84C" }}>{f.ticketSize}</span></TableCell></TableRow>))}</TableBody>
              </Table>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <h3 className="font-display text-xl font-semibold mb-4" style={{ color: "#0B1F3A" }}><BarChart3 className="w-5 h-5 inline mr-2" style={{ color: "#C9A84C" }} />GIFT City PMS Strategies (Min. $75,000)</h3>
            <div className="rounded-xl border border-border overflow-hidden bg-card">
              <Table>
                <TableHeader><TableRow style={{ backgroundColor: "#0B1F3A" }}><TableHead className="text-white font-semibold">Fund</TableHead><TableHead className="text-white font-semibold">Strategy</TableHead><TableHead className="text-white font-semibold hidden md:table-cell">Allocation</TableHead></TableRow></TableHeader>
                <TableBody>{giftCityPMS.map((f) => (<TableRow key={f.fund}><TableCell className="font-semibold" style={{ color: "#0B1F3A" }}>{f.fund}</TableCell><TableCell style={{ color: "#4A5568" }}>{f.strategy}</TableCell><TableCell className="hidden md:table-cell" style={{ color: "#4A5568" }}>{f.allocation}</TableCell></TableRow>))}</TableBody>
              </Table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Schedule FA Reporting */}
      <section className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6 text-center" style={{ color: "#0B1F3A" }}>Schedule FA <span style={{ color: "#C9A84C" }}>Reporting Guide</span></h2>
            <p className="text-center text-lg mb-10" style={{ color: "#4A5568" }}>Using Arjun's example: 500 shares allotted on 15 Jan 2025, FMV $85/share, 100 sold during CY 2025.</p>
            <div className="rounded-xl border border-border overflow-hidden bg-card mb-8">
              <Table>
                <TableHeader><TableRow style={{ backgroundColor: "#0B1F3A" }}><TableHead className="text-white font-semibold">Item</TableHead><TableHead className="text-white font-semibold">Held Shares (400)</TableHead><TableHead className="text-white font-semibold">Sold Shares (100)</TableHead></TableRow></TableHeader>
                <TableBody>
                  <TableRow><TableCell className="font-semibold" style={{ color: "#0B1F3A" }}>Initial Value</TableCell><TableCell style={{ color: "#4A5568" }}>400 \u00d7 $85 \u00d7 \u20B990 = \u20B930,60,000</TableCell><TableCell style={{ color: "#4A5568" }}>100 \u00d7 $85 \u00d7 \u20B990 = \u20B97,65,000</TableCell></TableRow>
                  <TableRow><TableCell className="font-semibold" style={{ color: "#0B1F3A" }}>Peak Value (CY 2025)</TableCell><TableCell style={{ color: "#4A5568" }}>\u20B930,60,000</TableCell><TableCell style={{ color: "#4A5568" }}>Nil (sold)</TableCell></TableRow>
                  <TableRow><TableCell className="font-semibold" style={{ color: "#0B1F3A" }}>Closing Value</TableCell><TableCell style={{ color: "#4A5568" }}>400 shares</TableCell><TableCell style={{ color: "#4A5568" }}>Nil</TableCell></TableRow>
                  <TableRow><TableCell className="font-semibold" style={{ color: "#0B1F3A" }}>Sale Proceeds</TableCell><TableCell style={{ color: "#4A5568" }}>\u2014</TableCell><TableCell style={{ color: "#4A5568" }}>\u20B97,65,000</TableCell></TableRow>
                </TableBody>
              </Table>
            </div>
            <div className="p-6 rounded-xl" style={{ backgroundColor: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.15)" }}>
              <p className="text-sm font-semibold mb-2" style={{ color: "#0B1F3A" }}>Key Notes:</p>
              <ul className="space-y-1.5 text-sm" style={{ color: "#4A5568" }}>
                <li>\u2022 Date of acquiring interest = Date of allotment (vesting date)</li>
                <li>\u2022 Initial value = FMV on allotment date \u00d7 number of shares</li>
                <li>\u2022 Peak value differs for held vs. sold shares (entire CY vs. allotment-to-sale period)</li>
                <li>\u2022 Dividends must also be reported in Schedule FA and under "Income from Other Sources"</li>
              </ul>
            </div>
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

      {/* Lead Capture */}
      <LeadCaptureForm source="RSU/ESOP page" heading="Book Your RSU & ESOP Consultation" sectionId="rsu-consultation" leftContent={
        <div>
          <h3 className="font-display text-2xl font-semibold text-white mb-4">Get Expert RSU Guidance</h3>
          <ul className="space-y-3">
            {["Personalized RSU tax optimization strategy", "FEMA & Schedule FA compliance review", "GIFT City fund recommendations", "Portfolio diversification roadmap"].map((item) => (
              <li key={item} className="flex items-start gap-2.5"><CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "#C9A84C" }} /><span className="text-white/80 text-sm">{item}</span></li>
            ))}
          </ul>
        </div>
      } />

      <RelatedServices
        items={[
          { title: "Global Investing", href: "/global-investing", description: "Diversify RSU proceeds via LRS, GIFT City funds and US-stock platforms with full FEMA support." },
          { title: "NRI Advisory", href: "/services/nri", description: "Holding RSUs while working abroad? FEMA-compliant India + global guidance." },
          { title: "Mutual Funds Advisory", href: "/mutual-funds", description: "Build the Indian leg of a diversified portfolio alongside your employer equity." },
        ]}
        heading="Where to Diversify Your RSUs"
      />
    </main>
  );
};

export default RSUESOPsClient;
