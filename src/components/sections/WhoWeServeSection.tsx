import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Building2, Globe2, Laptop2, Stethoscope, Users } from "lucide-react";

const audiences = [
  { icon: Users, title: "HNIs", description: "Coordinate multiple managers, products, property and liquidity around family goals.", href: "/wealth-management-for-hnis" },
  { icon: BriefcaseBusiness, title: "Founders", description: "Connect concentrated business value, personal liquidity and long-term capital allocation.", href: "/wealth-planning-for-entrepreneurs" },
  { icon: Globe2, title: "NRIs", description: "Map India accounts, investments, property and return-to-India decisions across borders.", href: "/nri-telugu" },
  { icon: Laptop2, title: "IT professionals", description: "Plan around salary, bonuses, RSUs, ESOPs and employer-linked concentration.", href: "/wealth-planning-for-it-professionals" },
  { icon: Stethoscope, title: "Doctors", description: "Balance practice capital, uneven income, protection and financial independence.", href: "/financial-planning-for-doctors" },
  { icon: Building2, title: "Family offices", description: "Use structured manager research, governance questions and consolidated portfolio context.", href: "/family-office-investment-solutions" },
];

export function WhoWeServeSection() {
  return (
    <section id="who-we-serve" className="bg-muted/30 py-24 lg:py-32"><div className="container mx-auto px-6 lg:px-8"><div className="mx-auto mb-16 max-w-3xl text-center"><div className="line-accent mx-auto mb-6" /><h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">Six wealth journeys, <span className="text-gradient-gold">one complete view</span></h2><p className="mt-6 text-lg text-muted-foreground">Start with the financial decisions created by your career, ownership structure and geography.</p></div><div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">{audiences.map((audience) => <article key={audience.title} className="rounded-2xl border border-border bg-card p-8 text-center"><div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10"><audience.icon className="h-8 w-8 text-primary" aria-hidden="true" /></div><h3 className="font-display text-xl font-semibold text-foreground">For {audience.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{audience.description}</p><Link href={audience.href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">Explore {audience.title.toLowerCase()} planning<ArrowRight className="h-4 w-4" /></Link></article>)}</div><div className="mt-12 text-center"><Link href="/who-we-serve" className="inline-flex items-center gap-2 font-medium text-primary">Explore all six client journeys<ArrowRight className="h-5 w-5" /></Link></div></div></section>
  );
}
