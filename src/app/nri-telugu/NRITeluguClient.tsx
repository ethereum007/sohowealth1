"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Globe2, Landmark, ShieldCheck } from "lucide-react";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { FAQSection } from "@/components/seo/FAQSection";
import Link from "next/link";

type Service = { slug: string; name: string; description: string };
type Category = { id: string; title: string; eyebrow: string; services: Service[] };

const categories: Category[] = [
  {
    id: "investments", title: "Investment Products", eyebrow: "Build", services: [
      { slug: "sif", name: "Specialized Investment Funds (SIF)", description: "Access India’s newest SEBI-regulated investment category, evaluated through our Alpha Shield methodology for sophisticated NRI portfolios." },
      { slug: "pms", name: "Portfolio Management Services (PMS)", description: "A professional portfolio manager builds and manages direct equity holdings in your name. Minimum ₹50 lakh." },
      { slug: "aif", name: "Alternative Investment Funds (AIF)", description: "Private equity, venture capital, real estate and structured-credit strategies across SEBI Categories I, II and III. Minimum ₹1 crore." },
      { slug: "direct-equities-pis", name: "Direct Equities & PIS Account Setup", description: "Set up the appropriate account route to buy and sell listed Indian shares directly and compliantly." },
      { slug: "mutual-funds", name: "Mutual Funds & SIPs", description: "Goal-based portfolios through NRE or NRO accounts—the disciplined starting point for an India allocation." },
      { slug: "gift-city", name: "GIFT City / USD-Denominated Investing", description: "Explore USD-denominated investments under Indian regulatory oversight, with structures designed for global Indian families." },
      { slug: "pre-ipo", name: "Pre-IPO & Private Market Access", description: "Curated India and global private-market opportunities for eligible investors who understand the risks and holding periods." },
    ],
  },
  {
    id: "real-estate", title: "Real Estate", eyebrow: "Own", services: [
      { slug: "real-estate-advisory", name: "Real Estate Advisory—Telangana & Andhra Pradesh", description: "Property shortlisting, builder due diligence and RERA checks across Hyderabad, Visakhapatnam and Vijayawada." },
      { slug: "commercial-real-estate", name: "Commercial Real Estate & Rental Income", description: "Evaluate direct and fractional income-producing property without taking on unnecessary operating complexity." },
      { slug: "nri-home-loans", name: "NRI Home Loans & Repatriation Support", description: "Coordinate home-loan structures and property-sale repatriation with banking, tax and RBI requirements in view." },
    ],
  },
  {
    id: "banking", title: "Banking & Account Structuring", eyebrow: "Structure", services: [
      { slug: "nre-nro-fcnr", name: "NRE / NRO / FCNR Account Structuring", description: "Choose account structures suited to income sources, currency needs, taxation and repatriation goals." },
      { slug: "rfc-account", name: "RFC Account Setup for Returning NRIs", description: "Plan the transition of eligible foreign currency and overseas proceeds before returning, not after the move." },
      { slug: "loans-against-assets", name: "Loans Against Securities / Property", description: "Explore liquidity against eligible India portfolios or property without immediately selling long-term assets." },
    ],
  },
  {
    id: "protection", title: "Insurance & Protection", eyebrow: "Protect", services: [
      { slug: "term-health-insurance", name: "Term Life & Health Insurance", description: "Review protection for family members in India and identify where overseas policies may not meet local needs." },
      { slug: "savings-insurance", name: "Long-Term Savings & Insurance Solutions", description: "Assess protection-linked savings products on suitability, costs, liquidity and tax treatment—not headline benefits alone." },
    ],
  },
  {
    id: "transition", title: "Tax, Compliance & Transition Planning", eyebrow: "Transition", services: [
      { slug: "rnor-planning", name: "RNOR & Tax Residency Planning", description: "Understand the potential RNOR window and coordinate the timing of major financial decisions with a qualified tax professional." },
      { slug: "dtaa", name: "DTAA & Cross-Border Tax Coordination", description: "Coordinate India-side planning with an external CPA or tax adviser in your country of residence." },
      { slug: "fema-repatriation", name: "FEMA & Repatriation Coordination", description: "Map transfers, documentation and disclosures around applicable RBI and FEMA requirements." },
      { slug: "schedule-fa", name: "Schedule FA / Foreign Asset Disclosure Guidance", description: "Prepare for foreign-asset reporting in India and work with a tax professional to avoid common first-year mistakes." },
    ],
  },
  {
    id: "family-office", title: "Family Office & Concierge", eyebrow: "Coordinate", services: [
      { slug: "family-office", name: "Family Office & Concierge", description: "A Telugu-speaking relationship point for investments, aging-parent coordination and the financial tasks that cross generations." },
      { slug: "estate-planning", name: "Estate Planning & Succession", description: "Coordinate wills, nominations and succession planning in India with arrangements already established overseas." },
      { slug: "retirement-income", name: "Retirement Income Planning", description: "Plan sustainable India withdrawals while considering overseas pensions, retirement accounts and currency exposure." },
    ],
  },
];

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "NRI Wealth Management for Telugu Families",
  serviceType: "NRI Portfolio Review and Investment Distribution",
  url: "https://www.sohowealth.in/nri-telugu",
  provider: { "@id": "https://www.sohowealth.in/#organization" },
  areaServed: ["United States", "United Arab Emirates", "Canada", "United Kingdom", "Australia", "India"],
  audience: { "@type": "Audience", audienceType: "Telugu-speaking NRIs and returning NRIs" },
};

const faqs = [
  {
    q: "Can I speak with SoHo Wealth in Telugu?",
    a: "Yes. Telugu and English video or in-person conversations are available for NRI families with roots in Telangana and Andhra Pradesh.",
  },
  {
    q: "Does SoHo Wealth provide NRI tax or FEMA advice?",
    a: "No. SoHo Wealth provides portfolio review, investment distribution and coordination within its disclosed scope. Tax returns, legal opinions, FEMA positions and country-specific advice should be confirmed with qualified professionals.",
  },
  {
    q: "Can Telugu NRIs invest in mutual funds, SIFs or PMS without visiting India?",
    a: "Many providers support digital onboarding, subject to country, bank, KYC, FATCA and product requirements. SoHo Wealth can coordinate the provider workflow and document checklist.",
  },
  {
    q: "What should a returning NRI review first?",
    a: "Start with the travel and residency timeline, bank-account status, foreign assets, RSUs, India income, property and expected remittances before changing products or moving money.",
  },
];

export default function NRITeluguClient() {
  const [service, setService] = useState("NRI private wealth review");
  const [days, setDays] = useState("");
  const [leftYear, setLeftYear] = useState("");
  const [returnPlan, setReturnPlan] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [result, setResult] = useState<{ status: string; text: string } | null>(null);

  const openForm = (interest: string) => {
    setService(interest);
    window.setTimeout(() => document.getElementById("nri-telugu-consultation")?.scrollIntoView({ behavior: "smooth" }), 0);
  };

  const estimate = (event: React.FormEvent) => {
    event.preventDefault();
    const indiaDays = Number(days);
    if (!days || !leftYear || !returnPlan || !portfolio) return;
    if (returnPlan === "abroad" && indiaDays < 182) {
      setResult({ status: "Likely NRI", text: "Your current India-day count suggests non-resident status may continue, subject to income and prior-year tests." });
    } else if ((returnPlan === "returned" || returnPlan === "returning") && indiaDays < 182) {
      setResult({ status: "RNOR may be relevant", text: "Your return timing and prior years abroad could create an RNOR window worth reviewing before major transactions." });
    } else {
      setResult({ status: "Resident status may apply", text: "Your India presence suggests resident rules may be relevant; prior-year history is still needed for a proper assessment." });
    }
  };

  return (
    <main className="pt-20 bg-white">
      <JsonLd data={pageSchema} />
      <section className="relative overflow-hidden bg-[#0B1F3A] py-24 lg:py-32">
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(circle at 15% 20%, #C9A84C 0, transparent 24%), radial-gradient(circle at 85% 80%, #C9A84C 0, transparent 20%)" }} />
        <div className="container relative mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-5 font-body text-sm font-semibold uppercase tracking-[0.22em] text-[#C9A84C]">SoHo Wealth for the Telugu diaspora</p>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] text-white md:text-6xl lg:text-7xl">Wealth Management for Telugu NRIs—Built by Someone From Hyderabad Who Knows Both Sides</h1>
            <p className="mt-7 max-w-3xl font-body text-lg leading-relaxed text-white/75 lg:text-xl">Portfolio review, registered investment distribution and specialist coordination for the Telugu diaspora—from a Telugu-speaking team that understands home.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <button onClick={() => openForm("NRI private wealth review")} className="rounded-lg bg-[#C9A84C] px-7 py-4 font-body font-semibold text-[#0B1F3A] transition hover:bg-[#d8bb68]">Book a Free Portfolio Review</button>
              <a href="https://wa.me/919032999466?text=Hi%20SoHo%20Wealth%2C%20I%27m%20a%20Telugu%20NRI%20and%20would%20like%20to%20discuss%20my%20India-linked%20wealth." target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/30 px-7 py-4 text-center font-body font-semibold text-white transition hover:bg-white/10">WhatsApp the team</a>
            </div>
          </div>
          <div className="mt-14 grid gap-3 border-t border-white/15 pt-7 text-sm text-white/70 sm:grid-cols-2 lg:grid-cols-4">
            {["AMFI Registered", "APMI Registered PMS Distributor", "Telugu-Speaking Team", "Serving US, Gulf, Canada, UK & Australia"].map((item) => <div key={item} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-[#C9A84C]" />{item}</div>)}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-[#9A7A25]">Two countries. One plan.</p>
          <div><h2 className="font-display text-3xl font-semibold leading-tight text-[#0B1F3A] md:text-5xl">Managing wealth across two countries shouldn’t mean managing it with two sets of guesswork.</h2><div className="mt-7 space-y-4 font-body text-lg leading-relaxed text-slate-600"><p>India savings can sit idle in NRE deposits while newer opportunities such as SIFs and GIFT City remain unfamiliar. Return plans bring questions about RNOR timing, account conversion and foreign-asset reporting.</p><p>Property decisions back home add builder, title and operating risk, while overseas and Indian professionals rarely see the entire picture together.</p><p className="font-semibold text-[#0B1F3A]">SoHo Wealth is the boutique wealth practice built for NRIs and returning NRIs from Telugu-speaking families—especially those with roots in Telangana and Andhra Pradesh.</p></div></div>
        </div>
      </section>

      <section className="bg-[#F5F3ED] py-20 lg:py-28" id="services">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-4xl"><p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-[#9A7A25]">One coordinated team</p><h2 className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A] md:text-5xl">Every part of the transition</h2><p className="mt-5 font-body text-lg text-slate-600">From your first India investment to the day your parents need help managing theirs.</p></div>
          <nav aria-label="Service categories" className="sticky top-20 z-20 -mx-6 mt-10 flex gap-2 overflow-x-auto border-y border-[#0B1F3A]/10 bg-[#F5F3ED]/95 px-6 py-4 backdrop-blur lg:mx-0 lg:px-0">
            {categories.map((category) => <a key={category.id} href={`#${category.id}`} className="whitespace-nowrap rounded-full border border-[#0B1F3A]/15 px-4 py-2 text-sm font-semibold text-[#0B1F3A] hover:border-[#C9A84C]">{category.title}</a>)}
          </nav>
          <div className="mt-6 divide-y divide-[#0B1F3A]/15">
            {categories.map((category) => (
              <section id={category.id} key={category.id} className="scroll-mt-40 py-14">
                <div className="grid gap-8 lg:grid-cols-[0.35fr_1fr]"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9A7A25]">{category.eyebrow}</p><h2 className="mt-2 font-display text-2xl font-semibold text-[#0B1F3A] md:text-3xl">{category.title}</h2></div>
                  <div className="grid gap-4 md:grid-cols-2">
                    {category.services.map((item) => <article key={item.slug} className="group rounded-xl border border-[#0B1F3A]/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"><h3 className="font-display text-xl font-semibold text-[#0B1F3A]">{item.name}</h3><p className="mt-3 font-body text-sm leading-relaxed text-slate-600">{item.description}</p><button onClick={() => openForm(item.slug)} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#8C6C17]">Discuss this service <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></button></article>)}
                  </div></div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div><p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-[#9A7A25]">Return-readiness quick check</p><h2 className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A] md:text-5xl">Could RNOR status shape your return?</h2><p className="mt-5 text-slate-600">A directional first look at the questions that matter before you move money or return permanently.</p></div>
          <form onSubmit={estimate} className="rounded-2xl bg-[#0B1F3A] p-7 text-white shadow-xl md:p-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-semibold">When did you last leave India?<input required type="number" min="1960" max="2026" value={leftYear} onChange={(e) => setLeftYear(e.target.value)} placeholder="Year, e.g. 2018" className="mt-2 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 font-normal text-white placeholder:text-white/40" /></label>
              <label className="text-sm font-semibold">Days in India this financial year<input required type="number" min="0" max="366" value={days} onChange={(e) => setDays(e.target.value)} placeholder="Approximate days" className="mt-2 w-full rounded-lg border border-white/20 bg-white/10 px-4 py-3 font-normal text-white placeholder:text-white/40" /></label>
              <label className="text-sm font-semibold">Your return plan<select required value={returnPlan} onChange={(e) => setReturnPlan(e.target.value)} className="mt-2 w-full rounded-lg border border-white/20 bg-[#17304f] px-4 py-3 font-normal text-white"><option value="">Select</option><option value="abroad">Remaining abroad</option><option value="returning">Planning to return</option><option value="returned">Already returned</option></select></label>
              <label className="text-sm font-semibold">Rough NRI portfolio size<select required value={portfolio} onChange={(e) => setPortfolio(e.target.value)} className="mt-2 w-full rounded-lg border border-white/20 bg-[#17304f] px-4 py-3 font-normal text-white"><option value="">Select</option><option>Below ₹25L</option><option>₹25L–₹50L</option><option>₹50L–₹1Cr</option><option>₹1Cr–₹5Cr</option><option>₹5Cr+</option></select></label>
            </div>
            <button type="submit" className="mt-6 w-full rounded-lg bg-[#C9A84C] px-6 py-3.5 font-semibold text-[#0B1F3A]">See my estimated status</button>
            {result && <div className="mt-6 rounded-xl border border-[#C9A84C]/40 bg-white/5 p-5" aria-live="polite"><p className="font-display text-2xl font-semibold text-[#C9A84C]">{result.status}</p><p className="mt-2 text-sm leading-relaxed text-white/75">{result.text}</p><button type="button" onClick={() => openForm("rnor-planning")} className="mt-4 inline-flex items-center gap-2 font-semibold text-white">Get a personalized transition plan <ArrowRight className="h-4 w-4" /></button></div>}
            <p className="mt-5 text-xs leading-relaxed text-white/45">This is a general guide based on limited inputs, not tax advice or a residency determination. Speak to a qualified tax professional for a personalized assessment.</p>
          </form>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8"><div className="grid gap-12 rounded-2xl border border-[#0B1F3A]/10 p-8 md:p-12 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9A7A25]">Why SoHo Wealth</p><h2 className="mt-4 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl">Local understanding. Global context.</h2></div><ul className="grid gap-5">{[
          [Landmark, "Built by a Hyderabad-based founder with a Columbia Business School background and PwC New York experience"],
          [Globe2, "Deep India capital-markets expertise from the team behind SIFPrime.com, India’s first SIF intelligence platform"],
          [ShieldCheck, "Telugu-speaking professionals who understand diaspora realities and India’s regulatory environment"],
          [CheckCircle2, "A relationship model built around real families—not cold-call sales"],
        ].map(([Icon, text], index) => { const ItemIcon = Icon as typeof Landmark; return <li key={index} className="flex gap-4 text-slate-700"><ItemIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#C9A84C]" /><span>{String(text)}</span></li>; })}</ul></div></div>
      </section>

      <section className="bg-[#0B1F3A] py-20 text-center"><div className="container mx-auto max-w-4xl px-6"><h2 className="font-display text-3xl font-semibold text-white md:text-5xl">Your wealth doesn’t have to live in two disconnected worlds.</h2><button onClick={() => openForm("NRI private wealth review")} className="mt-8 rounded-lg bg-[#C9A84C] px-8 py-4 font-semibold text-[#0B1F3A]">Book a Free Portfolio Review</button></div></section>

      <section className="bg-[#F5F3ED] py-16 lg:py-20">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid items-center gap-8 rounded-2xl border border-[#0B1F3A]/10 bg-white p-8 shadow-sm md:p-12 lg:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#9A7A25]">Essential NRI guide</p>
              <h2 className="mt-3 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl">NRI tax filing and investing—one cross-border checklist</h2>
              <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">Understand residential status, RNOR, DTAA, NRE/NRO accounts, repatriation, US reporting and the decisions to make before returning to India.</p>
            </div>
            <Link href="/insights/nri-tax-filing-investing-guide" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#C9A84C] px-6 py-3.5 font-semibold text-[#0B1F3A]">
              Read the guide <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} heading="Telugu NRI Wealth Planning: FAQs" background="#FFFFFF" />

      <LeadCaptureForm source="nri-telugu" service={service} heading="Book Your Telugu NRI Wealth Review" sectionId="nri-telugu-consultation" leftContent={<><h2 className="font-display text-3xl font-semibold text-white md:text-5xl">Bring your India-linked wealth into one clear plan.</h2><p className="mt-5 text-lg leading-relaxed text-white/70">Share the broad picture. Kiran and the team will help identify the accounts, investments and transition questions that deserve attention first.</p><ul className="mt-8 space-y-3 text-white/80">{["Founder-led initial review", "Telugu or English conversation", "Video consultations across time zones", "No-obligation first discussion"].map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="h-5 w-5 text-[#C9A84C]" />{item}</li>)}</ul></>} />
    </main>
  );
}
