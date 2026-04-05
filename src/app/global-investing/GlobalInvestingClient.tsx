"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  Globe, TrendingUp, Shield, BarChart3, ArrowRight, Coins, FileText,
  DollarSign, Building2, Landmark, CheckCircle2, AlertTriangle, Scale,
  PieChart, Banknote, ArrowUpRight
} from "lucide-react";
import Link from "next/link";
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table";

function AnimatedSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.5 }} className={className}>
      {children}
    </motion.div>
  );
}

const whyDiversify = [
  { icon: TrendingUp, title: "Currency Depreciation", text: "The rupee has depreciated from \u20B93.32/$ in 1947 to ~\u20B990/$ today \u2014 a 4.2% annual erosion. Dollar-denominated assets protect your purchasing power." },
  { icon: Globe, title: "Access 96% of Global Markets", text: "India represents only 3\u20134% of global market capitalization. Limiting yourself to India means missing out on 96% of the world's wealth creation." },
  { icon: PieChart, title: "Portfolio Diversification", text: "Different markets win in different years. Global diversification reduces single-country risk and smooths out returns over time." },
  { icon: BarChart3, title: "Nasdaq Outperformance", text: "The Motilal Oswal Nasdaq ETF has delivered ~23% CAGR in rupee terms since its 2011 launch, far exceeding Nifty's ~12% over the same period." },
];

const returnsData = [
  { index: "Nifty 50", y1: "14%", y5: "22%", y10: "26%" },
  { index: "Nasdaq", y1: "19%", y5: "45%", y10: "9%" },
  { index: "Europe", y1: "15%", y5: "43%", y10: "8%" },
  { index: "China", y1: "5.8%", y5: "22%", y10: "8%" },
  { index: "Japan", y1: "9%", y5: "54%", y10: "8%" },
  { index: "Brazil", y1: "3%", y5: "8%", y10: "8%" },
];

const routes = [
  { method: "Indian MFs investing abroad", advantage: "Easy to transact, less tax compliance", disadvantage: "RBI limit hit, very few accept inflows", estateTax: false, scheduleFA: false },
  { method: "Indian ETFs investing abroad", advantage: "Easy to transact, less tax compliance", disadvantage: "RBI limit hit, often at premium to NAV", estateTax: false, scheduleFA: true },
  { method: "GIFT City Funds", advantage: "Less tax compliance, Indian regulator", disadvantage: "Very few funds available", estateTax: false, scheduleFA: false },
  { method: "Direct US Stocks & ETFs", advantage: "Entire universe of stocks & ETFs", disadvantage: "Heavy tax compliance", estateTax: true, scheduleFA: true },
];

const overseasMFs = [
  { name: "Franklin U.S. Opportunities Equity Active Fund", lumpsum: "12%", sip: "26%" },
  { name: "Edelweiss US Technology Equity Fund", lumpsum: "24%", sip: "40%" },
  { name: "Edelweiss Greater China Equity Off-shore Fund", lumpsum: "44%", sip: "14%" },
  { name: "Axis Global Equity Alpha Fund", lumpsum: "26%", sip: "23%" },
  { name: "Axis Greater China Equity Fund", lumpsum: "44%", sip: "13%" },
  { name: "Axis Global Innovation Fund", lumpsum: "21%", sip: "25%" },
  { name: "Kotak Global Innovation Overseas Equity Omni Fund", lumpsum: "20%", sip: "23%" },
  { name: "Franklin Asian Equity Fund", lumpsum: "27%", sip: "14%" },
  { name: "Edelweiss US Value Equity Offshore Fund", lumpsum: "16%", sip: "14%" },
  { name: "Edelweiss Emerging Markets Opportunities Equity Offshore Fund", lumpsum: "45%", sip: "18%" },
  { name: "Edelweiss Europe Dynamic Equity Offshore Fund", lumpsum: "51%", sip: "24%" },
  { name: "Edelweiss ASEAN Equity Off Shore Fund", lumpsum: "18%", sip: "10%" },
  { name: "Kotak Global Emerging Market Overseas Equity Omni Fund", lumpsum: "41%", sip: "18%" },
  { name: "Kotak International REIT Fund", lumpsum: "23%", sip: "8%" },
];

const hybridFunds = [
  { name: "ICICI Prudential Passive Multi-Asset Fund", overseas: "28%", y1: "19%", y3: "16%" },
  { name: "DSP Multi Asset Allocation Fund", overseas: "18%", y1: "25%", y3: "N/A" },
  { name: "Invesco India Multi Asset Allocation Fund", overseas: "15%", y1: "24%", y3: "N/A" },
  { name: "Bandhan Multi Asset Allocation Fund", overseas: "10%", y1: "20%", y3: "N/A" },
  { name: "PGIM India Aggressive Hybrid Equity Fund", overseas: "10%", y1: "5%", y3: "13%" },
];

const giftRetailFunds = [
  { name: "DSP Global Equity Fund", strategy: "Focus on value, stocks, market cap and country agnostic", allocation: "40% US, 32% EU, rest Japan & China", ticket: "$5,000" },
  { name: "PPFAS Nasdaq 100", strategy: "Invests in Nasdaq 100 linked UCITS & ETFs, passive style", allocation: "90% in index, 10% cash/debt", ticket: "$5,000" },
  { name: "PPFAS S&P 500", strategy: "Invests in S&P 500 linked UCITS & ETFs, passive style", allocation: "S&P 500 exposure", ticket: "$5,000" },
  { name: "Edelweiss Greater China Fund", strategy: "Feeds into JP Morgan China Fund", allocation: "China theme at low valuations", ticket: "$5,000" },
];

const giftPMS = [
  { name: "Phillip Capital", strategy: "Invests in ETFs listed in US, sector agnostic", allocation: "67% US, rest Japan, Taiwan & others", ticket: "$75,000" },
  { name: "Marcellus", strategy: "Bottom up, 25\u201330 stocks, across market cap", allocation: "62% US, rest EU & Canada", ticket: "$75,000" },
  { name: "PPFAS", strategy: "Value investing, 25% sector cap, 10% single stock cap", allocation: "Global", ticket: "$75,000" },
];

const brokerComparison = [
  { platform: "Interactive Brokers", charges: "$0.0035/share or $0.35 min", example100: "$0.35", example10k: "$3.50", pros: "US-based global broker; Low costs, long track record", cons: "Tax reports not tailored for India" },
  { platform: "Vested Finance", charges: "0.25% per transaction", example100: "$0.25", example10k: "$25", pros: "Indian fintech partnered with DriveWealth; Tax reports for India", cons: "Higher costs" },
  { platform: "INDmoney", charges: "0.25% (max $25)", example100: "$0.25", example10k: "$25", pros: "Indian + US investing from one platform", cons: "Not a specialist" },
  { platform: "Appreciate", charges: "0.05% or \u20B95 (whichever higher)", example100: "$0.05", example10k: "$5", pros: "Low cost Indian fintech", cons: "New entrant, limited track record" },
];

const femaRules = [
  "No leverage trading",
  "No currency trading",
  "No leveraged ETFs",
  "No cryptocurrency",
  "Idle funds must be brought back or reinvested within 180 days",
];

const faqs = [
  { q: "What is the LRS limit for investing abroad?", a: "Under the Liberalised Remittance Scheme (LRS), resident Indians can remit up to $250,000 per financial year per person for permitted capital and current account transactions, including overseas investments." },
  { q: "What is TCS on foreign remittances?", a: "Tax Collected at Source (TCS) of 20% applies on foreign remittances exceeding \u20B910 lakhs in a financial year. This is not an additional tax \u2014 it's a pre-collection that can be adjusted against your overall tax liability when filing returns." },
  { q: "What is US Estate Tax and how to avoid it?", a: "If your US-domiciled assets exceed $60,000, US estate tax (up to 40%) may apply on your heirs. You can avoid this by investing through UCITS ETFs (Europe-domiciled) or GIFT City funds instead of directly holding US stocks." },
  { q: "How are overseas investments taxed in India?", a: "Long-term capital gains (held > 2 years) are taxed at 12.5%. Short-term gains are taxed at your income tax slab rate. You must also report holdings in Schedule FA of your ITR and can claim credit for any withholding tax via Form 67." },
  { q: "What are GIFT City funds?", a: "GIFT City (Gujarat International Finance Tec-City) funds are domiciled in India's IFSC. They're taxed at fund level \u2014 42.7% for churn/redemptions within 2 years, and 14.95% after. Since the fund pays tax, your redemption proceeds are tax-free. No Schedule FA reporting needed." },
  { q: "What types of Indian MFs invest overseas?", a: "Three types: (1) Pure feeder funds buying stocks/funds abroad, (2) Combo funds investing partly in India, partly abroad (e.g. Parag Parikh Flexicap), and (3) ETFs listed in India feeding into foreign stocks/funds (e.g. Motilal Oswal Nasdaq ETF). Many are currently closed due to RBI limits." },
  { q: "Is my money safe in a US brokerage account?", a: "Yes. US brokerage accounts are insured up to $500,000 under SIPC (Securities Investor Protection Corporation) rules. Stocks are held in the broker's 'street name' \u2014 there is no separate demat concept in the US." },
  { q: "What are the FEMA restrictions?", a: "Under FEMA, Indian residents cannot engage in leverage/margin trading, currency trading, leveraged ETFs, or cryptocurrency investments abroad. Idle funds must be brought back to India or reinvested within 180 days." },
];

const services = [
  { icon: TrendingUp, title: "US Stock & ETF Investing", description: "Direct investment in US-listed stocks and ETFs through partner platforms. Stock selection, portfolio construction, and rebalancing guidance." },
  { icon: Globe, title: "International Mutual Funds", description: "India-domiciled MFs that invest abroad \u2014 US, Europe, China, emerging markets, and global thematic funds. No LRS required for combo funds." },
  { icon: BarChart3, title: "Global Asset Allocation", description: "Strategic allocation across Indian and international assets based on relative valuations, currency outlook, and global macro trends." },
  { icon: Coins, title: "Currency Risk Management", description: "Guidance on INR-USD dynamics, hedging strategies, and optimal timing for LRS remittances." },
  { icon: Building2, title: "GIFT City Fund Advisory", description: "Access global markets through GIFT City funds with favourable tax treatment, Indian regulatory oversight, and no Schedule FA requirements." },
  { icon: Scale, title: "Tax & Compliance Support", description: "End-to-end assistance with LRS documentation, FEMA compliance, Schedule FA filing, Form 67 for DTAA credit, and TCS refund claims." },
];

const GlobalInvestingClient = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-6" style={{ backgroundColor: "#C9A84C", color: "#fff" }}>Global Diversification Guide</span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6">
              Your Portfolio Shouldn't End at <span className="text-gradient-gold">India's Borders.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6">
              India represents only <strong>3\u20134% of global market capitalization</strong>. If your entire portfolio is Indian,
              you're missing out on <strong>96% of the world's wealth creation</strong>. The rupee has depreciated 4.2% annually since 1947.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              SoHo Wealth helps you build a truly global portfolio \u2014 US stocks, international ETFs, GIFT City funds \u2014 while
              navigating LRS, RBI regulations, FEMA compliance, and cross-border tax implications.
            </p>
            <Button className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold text-base px-8 h-14 group" asChild>
              <Link href="/contact">Start Your Global Portfolio <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Diversify */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">Why Global Diversification <span className="text-gradient-gold">Matters</span></h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">The S&P 500 and Nasdaq have beaten the Nifty over multiple time periods. Different markets win in different years \u2014 that's the power of diversification.</p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {whyDiversify.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="flex gap-5 p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Returns Comparison Table */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4 text-center">Global Returns <span className="text-gradient-gold">in INR</span></h2>
            <p className="text-muted-foreground text-center mb-10">CAGR returns in Indian rupees. Source: Value Research, as on 2nd January 2026.</p>
            <div className="rounded-2xl border border-border overflow-hidden bg-card">
              <Table>
                <TableHeader><TableRow><TableHead className="font-semibold">Index</TableHead><TableHead className="text-right font-semibold">1 Year</TableHead><TableHead className="text-right font-semibold">5 Years</TableHead><TableHead className="text-right font-semibold">10 Years</TableHead></TableRow></TableHeader>
                <TableBody>{returnsData.map((row) => (<TableRow key={row.index}><TableCell className="font-medium">{row.index}</TableCell><TableCell className="text-right">{row.y1}</TableCell><TableCell className="text-right">{row.y5}</TableCell><TableCell className="text-right">{row.y10}</TableCell></TableRow>))}</TableBody>
              </Table>
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center">Nifty: NiftyBees, Nasdaq: Motilal Oswal Nasdaq ETF, Europe: Invesco Pan European FoF, China: HangSeng BeES, Japan: Nippon India Japan Equity, Brazil: HSBC Brazil Fund.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">Global Investing <span className="text-gradient-gold">Services</span></h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, i) => (
              <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}
                className="p-7 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5"><service.icon className="w-6 h-6 text-primary" /></div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Routes to Invest Abroad */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-5xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4 text-center">Routes to <span className="text-gradient-gold">Invest Abroad</span></h2>
            <p className="text-muted-foreground text-center mb-10">Multiple pathways with different trade-offs in cost, compliance, and access.</p>
            <div className="rounded-2xl border border-border overflow-x-auto bg-card">
              <Table>
                <TableHeader><TableRow><TableHead className="font-semibold min-w-[180px]">Route</TableHead><TableHead className="font-semibold">Advantage</TableHead><TableHead className="font-semibold">Disadvantage</TableHead><TableHead className="text-center font-semibold">US Estate Tax?</TableHead><TableHead className="text-center font-semibold">Schedule FA?</TableHead></TableRow></TableHeader>
                <TableBody>{routes.map((r) => (<TableRow key={r.method}><TableCell className="font-medium">{r.method}</TableCell><TableCell className="text-sm">{r.advantage}</TableCell><TableCell className="text-sm">{r.disadvantage}</TableCell><TableCell className="text-center">{r.estateTax ? "\u2705" : "\u274C"}</TableCell><TableCell className="text-center">{r.scheduleFA ? "\u2705" : "\u274C"}</TableCell></TableRow>))}</TableBody>
              </Table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Overseas MFs */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-5xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4 text-center">Overseas MFs <span className="text-gradient-gold">Open for Subscription</span></h2>
            <p className="text-muted-foreground text-center mb-4">Indian mutual funds that invest abroad \u2014 currently accepting inflows. Returns as on 2nd Jan 2026.</p>
            <p className="text-xs text-muted-foreground text-center mb-10">Three types: (1) Pure feeder funds, (2) Combo funds (e.g., Parag Parikh Flexicap), (3) India-listed ETFs feeding into foreign stocks. Many closed due to RBI limits.</p>
            <div className="rounded-2xl border border-border overflow-x-auto bg-card">
              <Table>
                <TableHeader><TableRow><TableHead className="font-semibold min-w-[280px]">Fund Name</TableHead><TableHead className="text-right font-semibold">3Y Lumpsum</TableHead><TableHead className="text-right font-semibold">3Y SIP</TableHead></TableRow></TableHeader>
                <TableBody>{overseasMFs.map((f) => (<TableRow key={f.name}><TableCell className="font-medium text-sm">{f.name}</TableCell><TableCell className="text-right">{f.lumpsum}</TableCell><TableCell className="text-right">{f.sip}</TableCell></TableRow>))}</TableBody>
              </Table>
            </div>
            <p className="text-xs text-muted-foreground mt-3">All SIPs/STPs in Edelweiss MF's international schemes are capped at \u20B95,000 per PAN.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Hybrid/Combo Funds */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-5xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4 text-center">Combo Funds with <span className="text-gradient-gold">Overseas Exposure</span></h2>
            <p className="text-muted-foreground text-center mb-10">Hybrid/multi-asset funds that invest partly in India and partly abroad. Not affected by RBI overseas limits.</p>
            <div className="rounded-2xl border border-border overflow-x-auto bg-card">
              <Table>
                <TableHeader><TableRow><TableHead className="font-semibold min-w-[260px]">Fund Name</TableHead><TableHead className="text-right font-semibold">Overseas %</TableHead><TableHead className="text-right font-semibold">1Y Return</TableHead><TableHead className="text-right font-semibold">3Y Return</TableHead></TableRow></TableHeader>
                <TableBody>{hybridFunds.map((f) => (<TableRow key={f.name}><TableCell className="font-medium text-sm">{f.name}</TableCell><TableCell className="text-right">{f.overseas}</TableCell><TableCell className="text-right">{f.y1}%</TableCell><TableCell className="text-right">{f.y3}%</TableCell></TableRow>))}</TableBody>
              </Table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* GIFT City Funds */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4 text-center">GIFT City <span className="text-gradient-gold">Outbound Funds</span></h2>
            <p className="text-muted-foreground text-center mb-4 max-w-3xl mx-auto">Gujarat International Finance Tec-City (GIFT City) hosts funds that invest globally with favourable tax treatment. Taxed at fund level \u2014 your redemption proceeds are tax-free.</p>
            <div className="grid md:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto">
              <div className="p-4 rounded-xl bg-card border border-border text-center"><p className="text-xs text-muted-foreground mb-1">STCG ({"<"}2 yrs)</p><p className="font-display text-2xl font-bold text-foreground">42.7%</p><p className="text-xs text-muted-foreground">Paid by the fund</p></div>
              <div className="p-4 rounded-xl bg-card border border-border text-center"><p className="text-xs text-muted-foreground mb-1">LTCG ({">"}2 yrs)</p><p className="font-display text-2xl font-bold text-primary">14.95%</p><p className="text-xs text-muted-foreground">Paid by the fund</p></div>
              <div className="p-4 rounded-xl bg-card border border-border text-center"><p className="text-xs text-muted-foreground mb-1">Investor Tax</p><p className="font-display text-2xl font-bold text-primary">0%</p><p className="text-xs text-muted-foreground">Tax-free on redemption</p></div>
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-4 mt-12">Retail Funds <span className="text-muted-foreground font-normal text-base">(min $5,000)</span></h3>
            <div className="rounded-2xl border border-border overflow-x-auto bg-card mb-10">
              <Table>
                <TableHeader><TableRow><TableHead className="font-semibold">Fund</TableHead><TableHead className="font-semibold">Strategy</TableHead><TableHead className="font-semibold">Allocation</TableHead></TableRow></TableHeader>
                <TableBody>{giftRetailFunds.map((f) => (<TableRow key={f.name}><TableCell className="font-medium text-sm">{f.name}</TableCell><TableCell className="text-sm">{f.strategy}</TableCell><TableCell className="text-sm">{f.allocation}</TableCell></TableRow>))}</TableBody>
              </Table>
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-4">PMS Strategies <span className="text-muted-foreground font-normal text-base">(min $75,000)</span></h3>
            <div className="rounded-2xl border border-border overflow-x-auto bg-card">
              <Table>
                <TableHeader><TableRow><TableHead className="font-semibold">Fund House</TableHead><TableHead className="font-semibold">Strategy</TableHead><TableHead className="font-semibold">Allocation</TableHead></TableRow></TableHeader>
                <TableBody>{giftPMS.map((f) => (<TableRow key={f.name}><TableCell className="font-medium text-sm">{f.name}</TableCell><TableCell className="text-sm">{f.strategy}</TableCell><TableCell className="text-sm">{f.allocation}</TableCell></TableRow>))}</TableBody>
              </Table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Tax & Compliance */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-5xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-10 text-center">Tax & <span className="text-gradient-gold">Compliance</span></h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="p-8 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-5"><Banknote className="w-6 h-6 text-primary" /><h3 className="font-display text-xl font-semibold text-foreground">Taxation on Direct US Investments</h3></div>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex justify-between p-3 rounded-lg bg-muted/50"><span>Short-term CG ({"<"}2 yrs)</span><span className="font-semibold text-foreground">Slab rate</span></div>
                  <div className="flex justify-between p-3 rounded-lg bg-muted/50"><span>Long-term CG ({">"}2 yrs)</span><span className="font-semibold text-primary">12.5%</span></div>
                  <div className="flex justify-between p-3 rounded-lg bg-muted/50"><span>TCS (remittance {">"} \u20B910L)</span><span className="font-semibold text-foreground">20%</span></div>
                  <p className="text-xs mt-2">TCS is not a new tax \u2014 it's adjustable against your total tax liability. Claim refund when filing ITR.</p>
                </div>
              </div>
              <div className="p-8 rounded-2xl bg-card border border-border">
                <div className="flex items-center gap-3 mb-5"><AlertTriangle className="w-6 h-6 text-primary" /><h3 className="font-display text-xl font-semibold text-foreground">FEMA Restrictions</h3></div>
                <ul className="space-y-3">{femaRules.map((rule) => (<li key={rule} className="flex items-start gap-3 text-sm text-muted-foreground"><span className="text-destructive mt-0.5">\u2715</span><span>{rule}</span></li>))}</ul>
              </div>
            </div>
            <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5 flex gap-4">
              <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div><h4 className="font-display font-semibold text-foreground mb-1">US Estate Tax Alert</h4><p className="text-sm text-muted-foreground">If your US-domiciled assets exceed $60,000, estate tax (up to 40%) applies on your heirs. Avoid this by investing through <strong>UCITS ETFs</strong> (Europe-domiciled) or <strong>GIFT City funds</strong> instead of directly holding US stocks.</p></div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Broker Comparison */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-5xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-4 text-center">Broker <span className="text-gradient-gold">Comparison</span></h2>
            <p className="text-muted-foreground text-center mb-10">Cost comparison of platforms for investing in US stocks & ETFs. Your US holdings are insured up to $500,000 under SIPC.</p>
            <div className="rounded-2xl border border-border overflow-x-auto bg-card">
              <Table>
                <TableHeader><TableRow><TableHead className="font-semibold min-w-[160px]">Platform</TableHead><TableHead className="font-semibold">Charges</TableHead><TableHead className="text-right font-semibold">$100 Trade</TableHead><TableHead className="text-right font-semibold">$10K Trade</TableHead><TableHead className="font-semibold min-w-[200px]">Pros</TableHead><TableHead className="font-semibold min-w-[180px]">Cons</TableHead></TableRow></TableHeader>
                <TableBody>{brokerComparison.map((b) => (<TableRow key={b.platform}><TableCell className="font-medium text-sm">{b.platform}</TableCell><TableCell className="text-sm">{b.charges}</TableCell><TableCell className="text-right text-sm">{b.example100}</TableCell><TableCell className="text-right text-sm">{b.example10k}</TableCell><TableCell className="text-sm text-muted-foreground">{b.pros}</TableCell><TableCell className="text-sm text-muted-foreground">{b.cons}</TableCell></TableRow>))}</TableBody>
              </Table>
            </div>
            <p className="text-xs text-muted-foreground mt-3">Banks charge an additional 1\u20132% currency conversion fee on deposits/withdrawals. Negotiate with your RM for better forex rates on larger remittances.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* LRS Compliance */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6 text-center">LRS & RBI <span className="text-gradient-gold">Compliance</span></h2>
            <p className="text-muted-foreground text-center mb-10">We handle the regulatory complexity so you can focus on building wealth.</p>
            <div className="space-y-4">
              {["LRS limit: $250,000 per financial year per person", "RBI Form A2 requirements and documentation", "TCS on foreign remittances \u2014 20% above \u20B910L, adjustable against tax liability", "FEMA guidelines for overseas investments", "Schedule FA disclosure in ITR for overseas assets", "Form 67 for claiming DTAA credit on US withholding tax", "Reporting obligations and compliance tracking"].map((item) => (
                <div key={item} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" /><span className="text-foreground text-sm">{item}</span></div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-10 text-center">Frequently Asked <span className="text-gradient-gold">Questions</span></h2>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border border-border rounded-xl px-6 data-[state=open]:bg-card">
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground mb-6">Go Global with <span className="text-gradient-gold">Confidence</span></h2>
            <p className="text-lg text-muted-foreground mb-8">Build a diversified international portfolio with full compliance support \u2014 LRS, FEMA, tax filing, and beyond.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-gold text-primary-foreground hover:opacity-90 shadow-gold text-base px-8 h-14" asChild><Link href="/contact">Schedule Consultation</Link></Button>
              <Button variant="outline" className="text-base px-8 h-14" asChild><a href="https://wa.me/919160057790?text=Hi%2C%20I%27m%20interested%20in%20global%20investing" target="_blank" rel="noopener noreferrer">WhatsApp Us</a></Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default GlobalInvestingClient;
