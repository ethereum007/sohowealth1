import Link from "next/link";

const evidence = [
  { title: "Registered distribution", text: "AMFI mutual fund and SIF distributor, ARN 306593; APMI PMS distributor, APRN01233. SoHo Wealth is not a SEBI Registered Investment Adviser." },
  { title: "Whole-portfolio review", text: "The process starts with assets, liabilities, goals, liquidity, risk and overlap before discussing a product route." },
  { title: "Document-led research", text: "Recommendations within the disclosed distribution role are supported by current product documents, comparable data and visible source dates." },
  { title: "Clear professional boundaries", text: "Tax returns, legal opinions and regulated advice outside our role stay with appropriately qualified professionals." },
];

export function WhySohoSection() {
  return <section className="bg-white py-20"><div className="container mx-auto max-w-6xl px-6"><p className="text-center text-xs font-bold uppercase tracking-[.2em] text-[#A78328]">Trust through evidence</p><h2 className="mx-auto mt-4 max-w-3xl text-center font-display text-3xl font-semibold text-[#0B1F3A] md:text-5xl">Know the role, process and evidence before you act</h2><div className="mt-12 grid gap-6 md:grid-cols-2">{evidence.map(item=><article key={item.title} className="rounded-xl border border-slate-200 p-7"><h3 className="text-xl font-semibold text-[#0B1F3A]">{item.title}</h3><p className="mt-3 leading-7 text-slate-600">{item.text}</p></article>)}</div><div className="mt-8 flex flex-wrap justify-center gap-6 text-sm font-semibold"><Link className="underline" href="/disclosures">Read disclosures</Link><Link className="underline" href="/team">Meet the team</Link><Link className="underline" href="/resources/sample-portfolio-diagnostic">See a sample deliverable</Link></div></div></section>;
}
