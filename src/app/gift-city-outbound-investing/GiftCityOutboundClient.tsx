"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, ExternalLink, FileText, Globe2, Landmark, Search, ShieldCheck, WalletCards } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { JsonLd } from "@/components/seo/JsonLd";

type FundType = "Retail Fund" | "AIF" | "PMS";
type Fund = { name: string; type: FundType; approach: string; exposure: string; minimum: string; inception: string; watch: string; return3m?: string; return6m?: string; documentUrl?: string; officialUrl?: string };

const baseFunds: Fund[] = [
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

const managerDocuments: Record<string, Pick<Fund, "return3m" | "return6m" | "documentUrl" | "officialUrl">> = {
  "DSP Global Equity Fund": { return3m: "1.80%", return6m: "-3.20%", documentUrl: "https://drive.google.com/file/d/14w4jYVS_2zisR9cdOaLjIWKPJsvk-ZSM/view", officialUrl: "https://giftcity.dspim.com/global-investing" },
  "PPFAS Nasdaq 100 Fund": { documentUrl: "https://drive.google.com/file/d/1z0SZw5LrbmOBPMg29eKy8PiaasqgxQ2H/view" },
  "PPFAS S&P 500 Fund": { documentUrl: "https://drive.google.com/file/d/1WDXWvTjyulfFuAEdEOIZ8yssMfOB-JON/view" },
  "Edelweiss Greater China Fund": { documentUrl: "https://drive.google.com/file/d/1b1EUDHhdvUYQgoqWZUdx4ac22zpYULrk/view" },
  "Marcellus Global Equity Fund": { documentUrl: "https://drive.google.com/file/d/1Rr78JICTSxV4T_HWgpGCxNnew5V8_bWI/view" },
  "Mirae Asset Global Allocation Fund": { return3m: "5.82%", return6m: "10.22%", documentUrl: "https://drive.google.com/file/d/1HKF2s57iY3oz2COKxVQx1PmP4p4pR3At/view" },
  "Baroda BNP Paribas US Smallcap Fund": { return3m: "3.95%", return6m: "10.50%", documentUrl: "https://drive.google.com/file/d/1M_EZ5SE3aGZW7zt5Qzz8xJ3oaUv-nF8T/view" },
  "Marcellus GCP Fund": { return3m: "-2.19%", return6m: "-1.25%", documentUrl: "https://drive.google.com/file/d/1K7Zro0LoB-Ezu5rmZv3S7qiMp5R8CV8-/view" },
  "ABSL Global Bluechip Equity Fund": { return3m: "1.40%", return6m: "-0.90%", documentUrl: "https://drive.google.com/file/d/18v5zdRg8FKKlJjvzCyIhjsWv1ZBkNlxg/view" },
  "Rational Gold & Silver Miner's Fund": { return3m: "-9.70%", return6m: "22.00%", documentUrl: "https://drive.google.com/file/d/1MZ9THOg69-sdry3czL83bwnkDDGIw0Y7/view" },
  "Ashoka WhiteOak Emerging Markets Fund (Ex India)": { return3m: "12.70%", documentUrl: "https://drive.google.com/file/d/1YRaNnRH5T4s4hM7ugBGN_QPssLiCIG31/view" },
  "Unifi G20 Fund": { return3m: "21.10%", return6m: "13.80%", documentUrl: "https://drive.google.com/file/d/1cmRx6VDuUIKSvjZIydrhfFbD7UdsX1Xk/view" },
  "Phillip International Pioneer Portfolio": { return3m: "12.69%", return6m: "16.48%", documentUrl: "https://drive.google.com/file/d/1U51ydRk7G2tJiUrnjhKKx29qhMzYxLlG/view" },
  "Marcellus GCP PMS": { return3m: "-2.19%", return6m: "-1.25%", documentUrl: "https://drive.google.com/file/d/1K7Zro0LoB-Ezu5rmZv3S7qiMp5R8CV8-/view" },
  "PPFAS Global Investing Strategy PMS": { return3m: "-6.88%", return6m: "-5.60%", documentUrl: "https://drive.google.com/file/d/1c_tKGzFTUIOoQefKCf-0OlH5qJGxeOrG/view" },
};

const funds = baseFunds.map((fund) => ({ ...fund, ...managerDocuments[fund.name] }));

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
        <div className="mt-5 rounded-lg bg-[#FDF8EC] px-4 py-3 text-xs leading-relaxed text-[#6D5720]">Performance snapshots below are reproduced from the linked manager-issued product documents and may have different reporting dates. A dash means the document did not disclose that period. Open the document and verify its date, share class and calculation method before comparing returns.</div>
        <div className="mt-6 grid gap-4 lg:grid-cols-2">{visible.map((fund) => <article key={fund.name} className="rounded-xl border border-[#E2E8F0] p-5"><div className="flex items-start justify-between gap-4"><div><span className="rounded-full bg-[#FDF8EC] px-2.5 py-1 text-xs font-semibold text-[#8A6A18]">{fund.type}</span><h3 className="mt-3 font-display text-xl font-semibold text-[#0B1F3A]">{fund.name}</h3></div><Globe2 className="h-5 w-5 shrink-0 text-[#C9A84C]" /></div><p className="mt-3 text-sm leading-relaxed text-[#4A5568]">{fund.approach}</p>{(fund.return3m || fund.return6m) && <div className="mt-4 grid grid-cols-2 gap-3">{[["3-month snapshot", fund.return3m || "—"], ["6-month snapshot", fund.return6m || "—"]].map(([label, value]) => <div key={label} className="rounded-lg bg-[#F7F8FA] p-3"><p className="text-xs text-muted-foreground">{label}</p><p className={`mt-1 font-display text-lg font-semibold ${value.startsWith("-") ? "text-[#A04432]" : "text-[#0B7A53]"}`}>{value}</p></div>)}</div>}<dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2"><div><dt className="text-xs uppercase tracking-wide text-muted-foreground">Exposure</dt><dd className="mt-1 font-medium text-[#0B1F3A]">{fund.exposure}</dd></div><div><dt className="text-xs uppercase tracking-wide text-muted-foreground">Entry level</dt><dd className="mt-1 font-medium text-[#0B1F3A]">{fund.minimum}</dd></div><div><dt className="text-xs uppercase tracking-wide text-muted-foreground">Inception</dt><dd className="mt-1 font-medium text-[#0B1F3A]">{fund.inception}</dd></div><div><dt className="text-xs uppercase tracking-wide text-muted-foreground">Review carefully</dt><dd className="mt-1 font-medium text-[#9A4D37]">{fund.watch}</dd></div></dl><div className="mt-5 flex flex-wrap gap-3 border-t border-[#E2E8F0] pt-4">{fund.documentUrl ? <a href={fund.documentUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1F3A] hover:text-[#8A6A18]"><FileText className="h-4 w-4" /> Product document <ExternalLink className="h-3 w-3" /></a> : <span className="text-xs text-muted-foreground">Public product document not located</span>}{fund.officialUrl && <a href={fund.officialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1F3A] hover:text-[#8A6A18]">Official manager page <ExternalLink className="h-3 w-3" /></a>}</div></article>)}</div>
        {visible.length === 0 && <p className="py-12 text-center text-muted-foreground">No strategies match your search.</p>}
      </div>
    </div></section>

    <section className="py-20"><div className="container mx-auto px-6 lg:px-8"><div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-[#B08D32]">Before investing</p><h2 className="mt-3 font-display text-3xl font-semibold text-[#0B1F3A]">A structure is not a strategy</h2><p className="mt-4 leading-relaxed text-muted-foreground">GIFT City can be an efficient access route, but the underlying allocation must still earn its place in your portfolio.</p><div className="mt-7 space-y-4">{["Confirm investor eligibility, remittance route and current minimum.", "Read the mandate, underlying vehicle, liquidity and lock-in terms.", "Compare total expenses, performance fees and exit costs.", "Obtain product-specific Indian and overseas tax advice.", "Measure overlap with existing US funds, RSUs and Indian equities."].map((x) => <div key={x} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0B7A53]" /><p className="text-sm text-[#4A5568]">{x}</p></div>)}</div></div><div className="rounded-2xl bg-[#0B1F3A] p-7 text-white md:p-9"><ShieldCheck className="h-8 w-8 text-[#E5C76B]" /><h2 className="mt-5 font-display text-2xl font-semibold">How SoHo Wealth helps</h2><p className="mt-4 leading-relaxed text-white/70">We help eligible investors compare disclosed product structures, understand how global exposure fits their overall allocation, and complete distribution-led implementation where products are available. SoHo Wealth is not a SEBI-Registered Investment Adviser.</p><Button asChild className="mt-7 bg-[#C9A84C] text-[#0B1F3A] hover:bg-[#E5C76B]"><Link href="/portfolio-review">Request a portfolio review <ArrowRight className="ml-2 h-4 w-4" /></Link></Button></div></div></div></section>

    <section className="bg-[#F7F8FA] py-20"><div className="container mx-auto max-w-4xl px-6 lg:px-8"><h2 className="text-center font-display text-3xl font-semibold text-[#0B1F3A]">GIFT City outbound investing FAQs</h2><Accordion type="single" collapsible className="mt-8 rounded-2xl bg-white px-6">{faqs.map((item, i) => <AccordionItem key={item.q} value={`faq-${i}`}><AccordionTrigger className="text-left font-semibold text-[#0B1F3A]">{item.q}</AccordionTrigger><AccordionContent className="leading-relaxed text-muted-foreground">{item.a}</AccordionContent></AccordionItem>)}</Accordion><p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground">Information is educational and may become outdated. Product availability, eligibility, returns, taxation and regulatory treatment must be verified from current official documents. Past performance does not indicate future results.</p></div></section>
  </main>;
}
