import { ChevronDown } from "lucide-react";
import { JsonLd } from "./JsonLd";

export interface FAQ {
  q: string;
  a: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  heading?: string;
  background?: string;
}

function FAQItem({ q, a }: FAQ) {
  return (
    <details className="group border-b border-[#E2E8F0]">
      <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between py-5 text-left [&::-webkit-details-marker]:hidden">
        <span className="pr-4 font-display text-base font-semibold text-[#0B1F3A] md:text-lg">{q}</span>
        <ChevronDown className="shrink-0 text-[#C9A84C] transition-transform duration-200 group-open:rotate-180" size={20} aria-hidden="true" />
      </summary>
      <p className="pb-5 font-body text-base leading-relaxed text-[#4A5568]">{a}</p>
    </details>
  );
}

export function FAQSection({ faqs, heading = "Frequently Asked Questions", background = "#F7F8FA" }: FAQSectionProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <JsonLd data={schema} />
      <section className="py-24 lg:py-32" style={{ backgroundColor: background }}>
        <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
          <h2
            className="font-display text-3xl md:text-4xl font-semibold text-center mb-14"
            style={{ color: "#0B1F3A" }}
          >
            {heading}
          </h2>
          <div>
            {faqs.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
