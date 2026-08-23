import Link from "next/link";
import { ArrowRight, BookOpen, Newspaper } from "lucide-react";
import { ReraBadge } from "@/components/real-estate/ReraBadge";
import { realEstateArticles } from "@/lib/real-estate/vertical";

export function EditorialIndex({ type }: { type: "guide" | "news" }) {
  const articles = realEstateArticles.filter((article) => article.type === type);
  const isNews = type === "news";
  return <main className="pt-20">
    <section className="bg-[#0B1F3A] py-20 lg:py-28"><div className="container mx-auto max-w-6xl px-6 lg:px-8"><div className="max-w-3xl">{isNews?<Newspaper className="h-9 w-9 text-[#C9A84C]"/>:<BookOpen className="h-9 w-9 text-[#C9A84C]"/>}<p className="mt-6 text-xs font-bold uppercase tracking-[.18em] text-[#C9A84C]">Hyderabad Real Estate {isNews?"Newsroom":"Guides"}</p><h1 className="mt-4 font-display text-4xl font-semibold text-white md:text-6xl">{isNews?"Property news with a decision angle.":"Practical property decisions, explained clearly."}</h1><p className="mt-6 text-lg leading-relaxed text-white/70">{isNews?"Regulation, infrastructure, launches and market developments—separated into verified facts, open questions and implications for buyers and sellers.":"Buying, selling, documentation, locality selection, NRI ownership and property economics—organized as usable checklists and frameworks."}</p></div></div></section>
    <section className="bg-[#F7F8FA] py-20"><div className="container mx-auto max-w-6xl px-6 lg:px-8"><div className="grid gap-6 md:grid-cols-2">{articles.map(article=><article key={article.slug} className="flex flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_4px_24px_-6px_rgba(11,31,58,.1)]"><div className="flex items-center justify-between gap-3 text-xs font-bold uppercase tracking-[.12em] text-[#9A7A2C]"><span>{article.category}</span><span className="text-slate-400">{article.readTime}</span></div><h2 className="mt-5 font-display text-2xl font-semibold text-[#0B1F3A]">{article.title}</h2><p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{article.description}</p><Link href={`/hyderabad-real-estate/${type}/${article.slug}`} className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#0B1F3A]">Read {isNews?"update":"guide"} <ArrowRight className="h-4 w-4"/></Link></article>)}</div><div className="mt-12"><ReraBadge/></div></div></section>
  </main>;
}
