import { JsonLd } from "./JsonLd";

export interface FAQ { q: string; a: string }
interface FAQSectionProps { faqs: FAQ[]; heading?: string; background?: string; schemaId?: string }

export function FAQSection({ faqs, heading = "Frequently Asked Questions", background = "#F7F8FA", schemaId }: FAQSectionProps) {
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) };
  return (
    <><JsonLd data={schema} id={schemaId} /><section className="py-24 print:py-8 lg:py-32" style={{ backgroundColor: background }}><div className="container mx-auto max-w-3xl px-6 lg:px-8"><h2 className="mb-14 text-center font-display text-3xl font-semibold text-[#0B1F3A] md:text-4xl">{heading}</h2><div>{faqs.map((faq) => <details key={faq.q} className="group border-b border-[#E2E8F0] print:open"><summary className="flex cursor-pointer list-none items-center justify-between py-5 text-left font-display text-base font-semibold text-[#0B1F3A] marker:hidden md:text-lg"><span className="pr-4">{faq.q}</span><span className="text-xl text-[#C9A84C] transition-transform motion-reduce:transition-none group-open:rotate-45" aria-hidden="true">+</span></summary><p className="pb-5 text-base leading-relaxed text-[#4A5568]">{faq.a}</p></details>)}</div></div></section></>
  );
}
