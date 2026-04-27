import Link from "next/link";

export interface RelatedService {
  title: string;
  href: string;
  description: string;
}

interface RelatedServicesProps {
  items: RelatedService[];
  heading?: string;
}

export function RelatedServices({ items, heading = "Related Services" }: RelatedServicesProps) {
  if (!items.length) return null;
  return (
    <section className="py-20 lg:py-24 bg-white border-t" style={{ borderColor: "#E2E8F0" }}>
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <h2
          className="font-display text-2xl md:text-3xl font-semibold text-center mb-10"
          style={{ color: "#0B1F3A" }}
        >
          {heading}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group block rounded-xl bg-white p-6 shadow-[0_4px_24px_-4px_rgba(11,31,58,0.08)] border border-transparent hover:border-[#C9A84C] hover:-translate-y-1 transition-all duration-300"
            >
              <h3
                className="font-display text-lg font-semibold mb-2 group-hover:text-[#C9A84C] transition-colors"
                style={{ color: "#0B1F3A" }}
              >
                {item.title}
              </h3>
              <p className="font-body text-sm leading-relaxed mb-3" style={{ color: "#4A5568" }}>
                {item.description}
              </p>
              <span className="inline-flex items-center font-semibold text-sm" style={{ color: "#C9A84C" }}>
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
