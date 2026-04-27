import Link from "next/link";
import { JsonLd } from "./JsonLd";

export interface Crumb {
  name: string;
  href: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

const BASE = "https://sohowealth.in";

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const trail: Crumb[] = [{ name: "Home", href: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${BASE}${c.href}`,
    })),
  };

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className="container mx-auto px-6 lg:px-8 pt-24 pb-2">
        <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground font-body">
          {trail.map((c, i) => {
            const isLast = i === trail.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-1">
                {isLast ? (
                  <span className="text-foreground/80 font-medium" aria-current="page">
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.href} className="hover:text-foreground transition-colors">
                    {c.name}
                  </Link>
                )}
                {!isLast && <span className="text-muted-foreground/50">/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
