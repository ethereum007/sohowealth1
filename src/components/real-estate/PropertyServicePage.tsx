import Link from "next/link";
import { ArrowRight, CheckCircle2, CircleAlert, ClipboardCheck, ShieldCheck } from "lucide-react";
import { FAQSection } from "@/components/seo/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { LeadCaptureForm } from "@/components/sections/LeadCaptureForm";
import { ReraBadge } from "@/components/real-estate/ReraBadge";
import type { PropertyService } from "@/lib/real-estate/vertical";
import { RERA_NUMBER } from "@/lib/real-estate/vertical";

const baseUrl = "https://www.sohowealth.in";

export function PropertyServicePage({ service }: { service: PropertyService }) {
  const Icon = service.icon;
  const url = `${baseUrl}${service.path}`;
  const faqs = [
    { q: `Who is this ${service.kicker.toLowerCase()} service for?`, a: service.audience },
    { q: "Is SoHo Wealth registered for real-estate facilitation?", a: `Yes. The Telangana RERA real-estate-agent registration number is ${RERA_NUMBER}. Verify the current record on the official TG-RERA portal before engaging.` },
    { q: "Do you provide legal, tax, engineering or registered valuation opinions?", a: "No. We organize the commercial decision and coordinate with qualified independent specialists. Their written opinions remain separate and should be reviewed before commitment." },
    { q: "How are commissions and conflicts handled?", a: "Where compensation may be received from a seller or developer, that relationship should be disclosed. A paid relationship does not remove project-level diligence or buyer suitability checks." },
  ];
  const schema = {
    "@context": "https://schema.org", "@type": "RealEstateAgent", name: "SoHo Wealth Real Estate",
    url, description: service.description, areaServed: { "@type": "City", name: "Hyderabad" },
    identifier: { "@type": "PropertyValue", name: "Telangana RERA Registration", value: RERA_NUMBER },
  };

  return (
    <main className="pt-20">
      <JsonLd data={schema} />
      <section className="relative overflow-hidden bg-[#0B1F3A] py-20 lg:py-28">
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "repeating-linear-gradient(135deg,transparent,transparent 40px,rgba(255,255,255,.5) 40px,rgba(255,255,255,.5) 41px)" }} />
        <div className="container relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.08fr_.92fr] lg:items-center lg:px-8">
          <div>
            <Link href="/hyderabad-real-estate" className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white">← Hyderabad Real Estate</Link>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C9A84C]">{service.kicker}</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white md:text-6xl">{service.title} <span className="text-[#C9A84C]">{service.highlight}</span></h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/72">{service.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#property-consultation" className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#C9A84C] px-7 py-4 text-sm font-bold text-[#0B1F3A]">Start a conversation <ArrowRight className="h-4 w-4" /></a>
              <a href="https://wa.me/919032999466" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-lg border border-white/20 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10">WhatsApp us</a>
            </div>
          </div>
          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-7">
              <Icon className="h-8 w-8 text-[#C9A84C]" />
              <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-[#C9A84C]">Designed for</p>
              <p className="mt-2 text-lg leading-relaxed text-white">{service.audience}</p>
            </div>
            <ReraBadge dark />
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#9A7A2C]">Mandate outcomes</p><h2 className="mt-3 font-display text-3xl font-semibold text-[#0B1F3A] md:text-5xl">What the engagement is built to produce</h2></div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{service.outcomes.map((item) => <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 p-6"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#A9822E]"/><p className="text-sm leading-relaxed text-slate-700">{item}</p></div>)}</div>
        </div>
      </section>

      <section className="bg-[#F7F8FA] py-20 lg:py-24">
        <div className="container mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><p className="text-xs font-bold uppercase tracking-[.16em] text-[#9A7A2C]">How it works</p><h2 className="mt-3 font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl">A documented process from question to decision.</h2><p className="mt-5 leading-relaxed text-slate-600">Each stage creates an evidence trail. Open questions remain visible instead of disappearing inside sales conversations.</p></div><ol className="space-y-4">{service.process.map((step,index)=><li key={step.title} className="grid grid-cols-[2.5rem_1fr] gap-4 rounded-2xl border border-slate-200 bg-white p-5"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B1F3A] text-sm font-bold text-[#C9A84C]">{index+1}</span><div><h3 className="font-display text-xl font-semibold text-[#0B1F3A]">{step.title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p></div></li>)}</ol></div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24"><div className="container mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-2 lg:px-8"><div className="rounded-3xl bg-[#0B1F3A] p-8 text-white md:p-10"><ClipboardCheck className="h-8 w-8 text-[#C9A84C]"/><h2 className="mt-5 font-display text-3xl font-semibold">Typical deliverables</h2><ul className="mt-7 space-y-4">{service.deliverables.map(item=><li key={item} className="flex gap-3 text-sm text-white/75"><CheckCircle2 className="h-5 w-5 shrink-0 text-[#C9A84C]"/>{item}</li>)}</ul></div><div className="rounded-3xl border border-amber-200 bg-amber-50 p-8 md:p-10"><CircleAlert className="h-8 w-8 text-amber-700"/><h2 className="mt-5 font-display text-3xl font-semibold text-[#0B1F3A]">Important boundaries</h2><ul className="mt-7 space-y-4">{service.cautions.map(item=><li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-700"><ShieldCheck className="h-5 w-5 shrink-0 text-amber-700"/>{item}</li>)}</ul></div></div></section>

      <LeadCaptureForm source={`${service.slug} page`} service={service.kicker} heading={service.formTitle} sectionId="property-consultation" selectLabel="Property budget / value" selectOptions={["Below ₹50L","₹50L – ₹1Cr","₹1Cr – ₹3Cr","₹3Cr – ₹5Cr","₹5Cr+"]} buttonLabel="Request My Property Call →" thankYouMessage="The SoHo Wealth real-estate desk will reach out within 24 hours." leftContent={<><p className="text-xs font-bold uppercase tracking-[.16em] text-[#C9A84C]">Confidential initial conversation</p><h2 className="mt-4 font-display text-3xl font-semibold text-white md:text-5xl">{service.formTitle}</h2><p className="mt-5 text-lg leading-relaxed text-white/70">{service.formCopy}</p><div className="mt-8"><ReraBadge dark /></div></>} />
      <section className="bg-[#F7F8FA] py-14"><div className="container mx-auto max-w-4xl px-6"><ReraBadge/><p className="mt-5 text-xs leading-relaxed text-slate-500">SoHo Wealth facilitates eligible real-estate transactions and coordinates decision support. Verify project and agent records on official portals. Legal, tax, valuation and technical conclusions must come from appropriately qualified professionals. Compensation relationships are disclosed where applicable.</p></div></section>
      <FAQSection faqs={faqs} heading={`${service.kicker} FAQs`} background="#FFFFFF" />
    </main>
  );
}
