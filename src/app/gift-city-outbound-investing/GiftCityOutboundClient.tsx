"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, Globe2, Landmark, Search, ShieldCheck, WalletCards } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { JsonLd } from "@/components/seo/JsonLd";

type FundType = "Retail Fund" | "AIF" | "PMS";
type Fund = { name: string; type: FundType; approach: string; exposure: string; minimum: string; inception: string; watch: string };

const funds: Fund[] = [
  { name: "DSP Global Equity Fund", type: "Retail Fund", approach: "Value-oriented global equity portfolio across countries and market capitalisations.", exposure: "United States, Europe, Japan and China", minimum: "From US$5,000", inception: "Sep 2025", watch: "Fund-level taxation and portfolio turnover" },
  { name: "PPFAS Nasdaq 100 Fund", type: "Retail Fund", approach: "Passive exposure through Nasdaq 100-linked UCITS funds and ETFs.", exposure: "Predominantly Nasdaq 100", minimum: "From US$5,000", inception: "Mar 2026", watch: "Technology and valuation concentration" },
  { name: "PPFAS S&P 500 Fund", type: "Retail Fund", approach: "Passive exposure through S&P 500-linked UCITS funds and ETFs.", exposure: "Predominantly S&P 500", minimum: "From US$5,000", inception: "Mar 2026", watch: "US large-cap and technology concentration" },
  { name: "Edelweiss Greater China Fund", type: "Retail Fund", approach: "Feeder structure offering focused Greater China equity exposure.", exposure: "China, Taiwan and Hong Kong", minimum: "From US$5,000", inception: "Mar 2026", watch: "Single-region and geopolitical risk" },
  { name: "Marcellus Global Equity Fund", type: "Retail Fund", approach: "Bottom-up global equity portfolio across market capitalisations.", exposure: "United States, Europe and Canada", minimum: "From US$5,000", inception: "Jun 2026", watch: "Concentrated portfolio and fund-level taxation" },
  { name: "Ionic Global Innovation Fund", type: "AIF", approach: "Innovation strategy focused on mid-tier technology businesses.", exposure: "Global, led by the United States and Europe", minimum: "Confirm with manager", inception: "Not disclosed", watch: "Technology concentration and periodic liquidity" },
  { name: "Mirae Asset Global Allocation Fund", type: "AIF", approach: "Multi-market allocation implemented primarily through global ETFs.", exposure: "Developed and emerging markets", minimum: "Confirm with manager", inception: "Sep 2025", watch: "Close-ended structure and lock-in" },
  { name: "Baroda BNP Paribas US Smallcap Fund", type: "AIF", approach: "Feeder strategy focused on US small-cap equities.", exposure: "United States small caps", minimum: "Confirm with manager", inception: "Nov 2025", watch: "Small-cap concentration and lock-in" },
  { name: "Marcellus GCP Fund", type: "AIF", approach: "Quality-and-growth global equity portfolio of approximately 25–30 companies.", exposure: "United States, Europe and Canada", minimum: "Confirm with manager", inception: "Oct 2022", watch: "Concentration and lock-in" },
  { name: "ABSL Global Bluechip Equity Fund", type: "AIF", approach: "Feeder strategy investing through a concentrated global master fund.", exposure: "United States, Europe and other markets", minimum: "Confirm with manager", inception: "Apr 2025", watch: "Feeder dependency and long lock-in" },
  { name: "Rational Gold & Silver Miner's Fund", type: "AIF", approach: "Thematic equity exposure to listed precious-metal miners.", exposure: "Gold and silver mining companies", minimum: "Confirm with manager", inception: "May 2025", watch: "Commodity-cycle and thematic concentration" },
  { name: "Ashoka WhiteOak Emerging Markets Fund (Ex India)", type: "AIF", approach: "Bottom-up, long-only emerging-markets equity strategy excluding India.", exposure: "Asia, Latin America, Middle East and select developed markets", minimum: "Confirm with manager", inception: "Dec 2022", watch: "Emerging-market currency and country risk" },
  { name: "Unifi G20 Fund", type: "AIF", approach: "Focused portfolio of approximately 20 global listed equities and ADRs.", exposure: "United States, Taiwan and other markets", minimum: "Confirm with manager", inception: "Jun 2025", watch: "Stock and technology concentration; lock-in" },
  { name: "Phillip International Pioneer Portfolio", type: "PMS", approach: "Fundamental, sector-agnostic allocation implemented through US-listed ETFs.", exposure: "United States, Japan, Taiwan and other markets", minimum: "From US$75,000", inception: "Dec 2021", watch: "Portfolio turnover, tax and fee structure" },
  { name: "Marcellus GCP PMS", type: "PMS", approach: "Bottom-up quality-and-growth global equity portfolio.", exposure: "United States, Europe and Canada", minimum: "From US$75,000", inception: "Oct 2022", watch: "Concentration, fees and portfolio turnover" },
  { name: "PPFAS Global Investing Strategy PMS", type: "PMS", approach: "Value-oriented global equities with stated company and sector exposure limits.", exposure: "Globally diversified businesses", minimum: "From US$75,000", inception: "Aug 2025", watch: "Portfolio turnover and equity-market risk" },
];

const faqs = [
  { q: "What is GIFT City outbound investing?", a: "It refers to global-market investment products offered from the International Financial Services Centre in GIFT City. Depending on the product, investors may access overseas securities through a retail fund, AIF or discretionary portfolio structure." },
  { q: "How do retail funds, AIFs and PMS differ?", a: "Retail funds generally have lower entry amounts and pooled portfolios. AIFs may offer specialised or concentrated strategies with product-specific eligibility and lock-ins. PMS provides a managed portfolio structure and typically requires a higher commitment. Current documents determine the precise terms." },
  { q: "Does an Indian resident use LRS to invest?", a: "Outbound remittances by resident individuals may fall under RBI's Liberalised Remittance Scheme and applicable FEMA rules. The permitted route, limit, TCS and reporting treatment should be confirmed with the authorised dealer bank and a qualified tax professional before remitting." },
  { q: "Are GIFT City funds tax-free?", a: "Do not assume so. Tax treatment depends on investor residency, product structure, underlying holdings, holding period and prevailing law. Obtain product-specific tax advice before investing." },
  { q: "What should I compare before choosing a strategy?", a: "Compare mandate, geography, currency exposure, concentration, underlying vehicle, liquidity, lock-in, total costs, tax treatment, manager record and how the allocation fits your existing India portfolio." },
];

const schema = {
  "@context": "https://schema.org", "@type": "FinancialProduct", name: "GIFT City Outbound Investing Comparison",
  description: "Educational comparison of GIFT City IFSC outbound retail funds, AIFs and PMS strategies.",
  url: "https://www.sohowealth.in/gift-city-outbound-investing", provider: { "@id": "https://www.sohowealth.in/#organization" },
};

export default function GiftCityOutboundClient() {
  const [type, setType] = useState<"All" | FundType>("All");
  const [query, setQuery] = useState("");
  const visible = useMemo(() => funds.filter((fund) => (type === "All" || fund.type === type) && `${fund.name} ${fund.approach} ${fund.exposure}`.toLowerCase().includes(query.toLowerCase())), [type, query]);

  return <main className="min-h-screen bg-background">
    <JsonLd data={schema} />
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) }} />
    <section className="relative overflow-hidden bg-[#0B1F3A] pb-20 pt-32 text-white">
      <div className="absolute -right-24 top-10 h-80 w-80 rounded-full bg-[#C9A84C]/10 blur-3xl" />
      <div className="container relative mx-auto px-6 lg:px-8"><div className="max-w-4xl">
        <p className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-[#E5C76B]">GIFT City IFSC · Global diversification</p>
        <h1 className="font-display text-4xl font-semibold leading-tight md:text-6xl">Invest globally through <span className="text-[#E5C76B]">GIFT City</span></h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">Explore outbound retail funds, AIFs and PMS strategies from India’s international financial centre. Compare structure, market exposure, entry level and the risks that matter before you invest.</p>
        <div className="mt-8 flex flex-wrap gap-3"><Button asChild className="h-12 bg-[#C9A84C] px-6 font-semibold text-[#0B1F3A] hover:bg-[#E5C76B]"><Link href="#tracker">Compare strategies <ArrowRight className="ml-2 h-4 w-4" /></Link></Button><Button asChild variant="outline" className="h-12 border-white/25 bg-transparent px-6 text-white hover:bg-white/10 hover:text-white"><Link href="/portfolio-review">Discuss global allocation</Link></Button></div>
      </div></div>
    </section>

    <section className="py-16"><div className="container mx-auto px-6 lg:px-8"><div className="grid gap-5 md:grid-cols-3">
      {[{ icon: WalletCards, title: "Retail funds", copy: "Lower-entry pooled strategies for broad or targeted international exposure." }, { icon: Landmark, title: "Alternative funds", copy: "Specialised mandates that may include concentration, lock-ins and eligibility conditions." }, { icon: Building2, title: "Portfolio management", copy: "Higher-ticket managed portfolios with strategy-specific fees and implementation." }].map((x) => <div key={x.title} className="rounded-2xl border border-border bg-card p-7"><x.icon className="h-7 w-7 text-[#C9A84C]" /><h2 className="mt-5 font-display text-xl font-semibold text-[#0B1F3A]">{x.title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{x.copy}</p></div>)}
    </div></div></section>

    <section id="tracker" className="scroll-mt-24 bg-[#F7F8FA] py-20"><div className="container mx-auto px-6 lg:px-8">
      <div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#B08D32]">Strategy universe</p><h2 className="mt-3 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl">Compare 16 outbound strategies</h2><p className="mt-4 text-muted-foreground">Availability, minimums and terms can change. Treat this as a discovery list and verify the latest offering documents before acting.</p></div>
      <div className="mt-8 rounded-2xl bg-white p-5 shadow-sm"><div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between"><div className="flex flex-wrap gap-2">{(["All", "Retail Fund", "AIF", "PMS"] as const).map((item) => <button key={item} onClick={() => setType(item)} className={`rounded-full px-4 py-2 text-sm font-semibold transition ${type === item ? "bg-[#0B1F3A] text-white" : "bg-[#EDF1F5] text-[#4A5568] hover:bg-[#E2E8F0]"}`}>{item}</button>)}</div><div className="relative lg:w-80"><Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search fund or exposure" className="pl-9" /></div></div>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">{visible.map((fund) => <article key={fund.name} className="rounded-xl border border-[#E2E8F0] p-5"><div className="flex items-start justify-between gap-4"><div><span className="rounded-full bg-[#FDF8EC] px-2.5 py-1 text-xs font-semibold text-[#8A6A18]">{fund.type}</span><h3 className="mt-3 font-display text-xl font-semibold text-[#0B1F3A]">{fund.name}</h3></div><Globe2 className="h-5 w-5 shrink-0 text-[#C9A84C]" /></div><p className="mt-3 text-sm leading-relaxed text-[#4A5568]">{fund.approach}</p><dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2"><div><dt className="text-xs uppercase tracking-wide text-muted-foreground">Exposure</dt><dd className="mt-1 font-medium text-[#0B1F3A]">{fund.exposure}</dd></div><div><dt className="text-xs uppercase tracking-wide text-muted-foreground">Entry level</dt><dd className="mt-1 font-medium text-[#0B1F3A]">{fund.minimum}</dd></div><div><dt className="text-xs uppercase tracking-wide text-muted-foreground">Inception</dt><dd className="mt-1 font-medium text-[#0B1F3A]">{fund.inception}</dd></div><div><dt className="text-xs uppercase tracking-wide text-muted-foreground">Review carefully</dt><dd className="mt-1 font-medium text-[#9A4D37]">{fund.watch}</dd></div></dl></article>)}</div>
        {visible.length === 0 && <p className="py-12 text-center text-muted-foreground">No strategies match your search.</p>}
      </div>
    </div></section>

    <section className="py-20"><div className="container mx-auto px-6 lg:px-8"><div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#B08D32]">Before investing</p><h2 className="mt-3 font-display text-3xl font-semibold text-[#0B1F3A]">A structure is not a strategy</h2><p className="mt-4 leading-relaxed text-muted-foreground">GIFT City can be an efficient access route, but the underlying allocation must still earn its place in your portfolio.</p><div className="mt-7 space-y-4">{["Confirm investor eligibility, remittance route and current minimum.", "Read the mandate, underlying vehicle, liquidity and lock-in terms.", "Compare total expenses, performance fees and exit costs.", "Obtain product-specific Indian and overseas tax advice.", "Measure overlap with existing US funds, RSUs and Indian equities."].map((x) => <div key={x} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0B7A53]" /><p className="text-sm text-[#4A5568]">{x}</p></div>)}</div></div><div className="rounded-2xl bg-[#0B1F3A] p-7 text-white md:p-9"><ShieldCheck className="h-8 w-8 text-[#E5C76B]" /><h2 className="mt-5 font-display text-2xl font-semibold">How SoHo Wealth helps</h2><p className="mt-4 leading-relaxed text-white/70">We help eligible investors compare disclosed product structures, understand how global exposure fits their overall allocation, and complete distribution-led implementation where products are available. SoHo Wealth is not a SEBI-Registered Investment Adviser.</p><Button asChild className="mt-7 bg-[#C9A84C] text-[#0B1F3A] hover:bg-[#E5C76B]"><Link href="/portfolio-review">Request a portfolio review <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></div></div></div></section>

    <section className="bg-[#F7F8FA] py-20"><div className="container mx-auto max-w-4xl px-6 lg:px-8"><h2 className="text-center font-display text-3xl font-semibold text-[#0B1F3A]">GIFT City outbound investing FAQs</h2><Accordion type="single" collapsible className="mt-8 rounded-2xl bg-white px-6">{faqs.map((item, i) => <AccordionItem key={item.q} value={`faq-${i}`}><AccordionTrigger className="text-left font-semibold text-[#0B1F3A]">{item.q}</AccordionTrigger><AccordionContent className="leading-relaxed text-muted-foreground">{item.a}</AccordionContent></AccordionItem>)}</Accordion><p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground">Information is educational and may become outdated. Product availability, eligibility, returns, taxation and regulatory treatment must be verified from current official documents. Past performance does not indicate future results.</p></div></section>
  </main>;
}
