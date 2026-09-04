import type { Metadata } from "next";
import { ArrowRight, Building2, CheckCircle2, CircleDollarSign, Gauge, KeyRound, LineChart, ShieldAlert, WalletCards } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";

export const metadata: Metadata = {
  title: "REIT Investing in India — Build Real Estate into Your Portfolio | SoHo Wealth",
  description: "Understand Indian REITs, distributions, liquidity, risks, taxation and portfolio allocation. Book a REIT portfolio consultation with SoHo Wealth, Hyderabad.",
  alternates: { canonical: "https://www.sohowealth.in/reits" },
  openGraph: {
    title: "REITs as an Asset Class | SoHo Wealth",
    description: "Commercial real estate exposure without buying and managing an entire property. Learn where REITs may fit—and where they may not.",
    url: "https://www.sohowealth.in/reits",
    type: "website",
  },
};

const benefits = [
  { icon: Building2, title: "Institutional property access", text: "Participate in income-producing office, retail and other commercial assets that are difficult to own directly." },
  { icon: CircleDollarSign, title: "Distribution potential", text: "REIT cash flows can include interest, dividends and repayment components. The mix and tax treatment can vary." },
  { icon: WalletCards, title: "Lower entry ticket", text: "Build real-estate exposure gradually instead of committing a large down payment and taking a property loan." },
  { icon: KeyRound, title: "No tenant management", text: "Professional managers handle leasing, operations and asset management; investors still need to assess manager quality." },
  { icon: Gauge, title: "Exchange liquidity", text: "Listed units can generally be bought or sold through a demat account, though market liquidity and price can fluctuate." },
  { icon: LineChart, title: "Portfolio diversification", text: "Rental cash flows and property cycles may behave differently from broad equities and fixed income—but correlation is not zero." },
];

const diligence = [
  ["Occupancy & leasing", "Current occupancy, lease expiries, renewal spreads and the quality of tenant demand."],
  ["Tenant concentration", "Exposure to the largest tenants, industries and cities—and what happens if one vacates."],
  ["Distribution quality", "How much cash is recurring operating income versus asset sales, debt-funded payouts or capital repayment."],
  ["Debt & refinancing", "Loan-to-value, interest cost, maturity schedule, hedging and sensitivity to changing rates."],
  ["Asset quality", "Location, age, maintenance capex, sustainability credentials and future supply in each micro-market."],
  ["Valuation", "Price relative to NAV, implied capitalisation rate, distribution yield and comparable property transactions."],
  ["Sponsor & manager", "Governance, related-party transactions, acquisition discipline and alignment with unitholders."],
  ["Growth pipeline", "Contracted rent escalations, vacancy leasing, development pipeline and acquisition funding."],
];

const faqs = [
  ["Are REITs the same as real-estate company shares?", "No. A REIT primarily owns and operates income-producing property. A developer may earn from construction and sales, take land and execution risk, and behave more like a cyclical equity. A product combining REITs and realty shares is a blended real-estate strategy, not pure REIT exposure."],
  ["Do REITs guarantee regular income?", "No. Distributions depend on rental collections, occupancy, financing costs, asset sales and the REIT's cash-flow position. Market price and distributions can both fall."],
  ["Can REITs replace a home or all fixed income?", "Usually not. Your home serves a consumption need, while REIT units are financial investments. REITs also carry equity-market, interest-rate and property risks, so they should not automatically replace emergency funds or high-quality fixed income."],
  ["How much should I allocate to REITs?", "There is no universal percentage. The answer depends on your existing property exposure, income needs, time horizon, tax position, liquidity needs and ability to tolerate price declines."],
  ["Should I buy individual REITs or a fund?", "Individual units offer control but require security-level research and can create concentration. A fund can simplify access and diversification, but may add costs and—depending on its mandate—may also hold realty-company shares. Examine the actual portfolio and index rules."],
  ["How are REIT distributions taxed?", "Tax depends on the distribution component and the REIT's structure, while capital-gains rules apply when units are sold. Because rules and individual circumstances change, review the latest distribution statement with a qualified tax professional."],
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "REIT Portfolio Consultation",
  serviceType: "REIT Investment Education and Portfolio Review",
  url: "https://www.sohowealth.in/reits",
  provider: { "@id": "https://www.sohowealth.in/#organization" },
  areaServed: [{ "@type": "Country", name: "India" }, { "@type": "City", name: "Hyderabad" }],
};

export default function ReitsPage() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) };
  return (
    <main className="min-h-screen bg-background">
      <JsonLd data={schema} /><JsonLd data={faqSchema} />
      <section className="relative overflow-hidden bg-[#0B1F3A] pt-32 pb-20 text-white lg:pt-40 lg:pb-28">
        <div className="absolute -right-24 top-20 h-72 w-72 rounded-full border border-[#C9A84C]/20" />
        <div className="absolute -right-8 top-36 h-44 w-44 rounded-full border border-[#C9A84C]/20" />
        <div className="container relative mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-[#C9A84C]">Real estate, reimagined as a financial asset</p>
            <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight md:text-6xl">Own a share of the building—not the burden of owning the whole building.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/72">REITs can bring institutional commercial real estate, potential distributions and exchange liquidity into a diversified portfolio. They also carry market, tenant, leverage and interest-rate risk. The real question is not “Are REITs good?”—it is “What role should they play for you?”</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#reit-consultation" className="inline-flex h-13 items-center justify-center rounded-lg bg-[#C9A84C] px-7 py-4 font-semibold text-[#0B1F3A] transition hover:opacity-90">Schedule a REIT Consultation <ArrowRight className="ml-2 h-5 w-5" /></a>
              <a href="#understand" className="inline-flex items-center justify-center rounded-lg border border-white/25 px-7 py-4 font-semibold text-white hover:bg-white/5">Understand REITs first</a>
            </div>
            <p className="mt-4 text-xs text-white/45">Education and portfolio review—not a promise of returns or a security-specific recommendation.</p>
          </div>
        </div>
      </section>

      <section id="understand" className="py-20 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9A7A2C]">REITs in plain English</p><h2 className="mt-4 font-display text-3xl font-semibold md:text-5xl">A listed vehicle that owns income-producing real estate.</h2><p className="mt-5 leading-relaxed text-muted-foreground">Investors buy units. The REIT owns property through a regulated structure, collects rent, pays operating and finance costs, and may distribute eligible cash flows. Unit prices trade on the exchange and can move above or below the underlying property value.</p></div>
            <div className="rounded-3xl border border-border bg-card p-7 shadow-sm md:p-9">
              <div className="grid gap-3 sm:grid-cols-5 sm:items-center">
                {[["You", "Buy listed units"], ["REIT", "Pools investor capital"], ["Properties", "Earn rent from tenants"]].map(([a,b], i) => <div key={a} className="contents"><div className="rounded-2xl bg-[#0B1F3A] p-5 text-center text-white"><strong className="block font-display text-xl">{a}</strong><span className="mt-1 block text-xs text-white/60">{b}</span></div>{i < 2 && <ArrowRight className="mx-auto hidden h-5 w-5 text-[#C9A84C] sm:block" />}</div>)}
              </div>
              <div className="mt-6 rounded-xl bg-[#C9A84C]/10 p-4 text-sm leading-relaxed text-foreground"><strong>Potential return sources:</strong> periodic distributions plus changes in unit price. Neither is guaranteed.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/35 py-20 lg:py-24"><div className="container mx-auto px-6 lg:px-8"><div className="mx-auto max-w-3xl text-center"><h2 className="font-display text-3xl font-semibold md:text-4xl">Why investors consider REITs</h2><p className="mt-4 text-muted-foreground">A useful building block when chosen for the right job—not a shortcut to risk-free rent.</p></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{benefits.map(({icon: Icon,title,text}) => <div key={title} className="rounded-2xl border border-border bg-background p-7"><Icon className="h-7 w-7 text-[#A9822E]"/><h3 className="mt-5 font-display text-xl font-semibold">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></div>)}</div></div></section>

      <section className="py-20 lg:py-24"><div className="container mx-auto px-6 lg:px-8"><div className="grid gap-12 lg:grid-cols-2"><div><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9A7A2C]">Do not confuse the wrappers</p><h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">Pure REIT exposure and a REIT + realty index are different portfolios.</h2><p className="mt-5 leading-relaxed text-muted-foreground">A REIT owns completed, income-producing assets. A listed developer may own land, build projects and depend on property sales. When a fund combines both, its returns can reflect rent, interest rates, property valuations, home sales and developer execution.</p><div className="mt-7 rounded-2xl border-l-4 border-[#C9A84C] bg-muted/40 p-6"><strong>Portfolio takeaway</strong><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Read the mandate, holdings and index rules. The word “REIT” in a product name does not by itself tell you how much pure REIT exposure you are getting.</p></div></div><div className="overflow-hidden rounded-2xl border border-border"><div className="grid grid-cols-3 bg-[#0B1F3A] p-4 text-xs font-semibold uppercase tracking-wide text-white"><span>Feature</span><span>REIT</span><span>Developer share</span></div>{[["Core economics","Rent & asset value","Sales & development"],["Cash-flow profile","Lease-led","Project-cycle led"],["Primary risks","Vacancy, rates, leverage","Land, approvals, execution"],["Typical role","Income + real assets","Cyclical growth equity"]].map(r => <div key={r[0]} className="grid grid-cols-3 border-t border-border p-4 text-sm"><strong>{r[0]}</strong><span className="text-muted-foreground">{r[1]}</span><span className="text-muted-foreground">{r[2]}</span></div>)}</div></div></div></section>

      <section className="bg-[#F7F4EC] py-20 lg:py-24"><div className="container mx-auto px-6 lg:px-8"><div className="max-w-3xl"><p className="text-xs font-bold uppercase tracking-[0.18em] text-[#9A7A2C]">The SoHo REIT checklist</p><h2 className="mt-4 font-display text-3xl font-semibold md:text-4xl">Eight questions before you invest</h2></div><div className="mt-10 grid gap-x-12 gap-y-7 md:grid-cols-2">{diligence.map(([t,d], i) => <div key={t} className="flex gap-4 border-b border-[#0B1F3A]/10 pb-6"><span className="font-display text-2xl text-[#A9822E]">{String(i+1).padStart(2,"0")}</span><div><h3 className="font-semibold">{t}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p></div></div>)}</div></div></section>

      <section className="py-20"><div className="container mx-auto px-6 lg:px-8"><div className="grid gap-8 lg:grid-cols-2"><div className="rounded-3xl bg-[#0B1F3A] p-8 text-white md:p-10"><ShieldAlert className="h-8 w-8 text-[#C9A84C]"/><h2 className="mt-5 font-display text-3xl font-semibold">What can go wrong?</h2><ul className="mt-7 space-y-4 text-sm text-white/72">{["Vacancies rise or a major tenant leaves","Interest rates or refinancing costs increase","New supply weakens rents in a micro-market","Debt amplifies a fall in property values","Units trade at a persistent discount to NAV","A sponsor acquisition dilutes returns or adds risk","Tax treatment reduces your post-tax cash flow"].map(x => <li key={x} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]"/>{x}</li>)}</ul></div><div className="rounded-3xl border border-border p-8 md:p-10"><h2 className="font-display text-3xl font-semibold">Where might REITs fit?</h2><p className="mt-4 text-muted-foreground">Often as a satellite real-asset allocation—not the foundation of every portfolio.</p><div className="mt-7 space-y-4">{["You want commercial property exposure without direct ownership","You can hold through property and interest-rate cycles","You understand that distributions and prices fluctuate","Your existing real estate does not already dominate your net worth","You have emergency liquidity and core goals funded separately"].map(x => <div key={x} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#A9822E]"/><span className="text-sm leading-relaxed">{x}</span></div>)}</div></div></div></div></section>

      <section className="bg-muted/35 py-20"><div className="container mx-auto max-w-4xl px-6 lg:px-8"><h2 className="text-center font-display text-3xl font-semibold md:text-4xl">REIT investing questions</h2><div className="mt-10 space-y-3">{faqs.map(([q,a]) => <details key={q} className="group rounded-xl border border-border bg-background p-5"><summary className="cursor-pointer list-none pr-6 font-semibold">{q}</summary><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{a}</p></details>)}</div></div></section>

      <LeadCaptureForm source="reits asset class page" service="REIT Portfolio Consultation" heading="Schedule Your REIT Consultation" sectionId="reit-consultation" leftContent={<><p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#C9A84C]">Bring your whole portfolio</p><h2 className="font-display text-3xl font-semibold text-white md:text-5xl">Decide whether REITs deserve a place—not just a purchase.</h2><p className="mt-5 text-lg leading-relaxed text-white/70">We will review your current property exposure, income needs, time horizon, liquidity and risk capacity before discussing the role listed real estate could play.</p><ul className="mt-8 space-y-3 text-white/80">{["Existing real-estate concentration review","REIT versus fund-route comparison","Risk, cash-flow and portfolio-fit discussion","Founder-led 30-minute initial conversation"].map(item => <li key={item} className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-[#C9A84C]"/>{item}</li>)}</ul></>} />
    </main>
  );
}
