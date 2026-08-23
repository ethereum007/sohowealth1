import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { ReraBadge } from "@/components/real-estate/ReraBadge";
import type { RealEstateArticle } from "@/lib/real-estate/vertical";

export function ArticlePage({ article }: { article: RealEstateArticle }) {
  const section = article.type === "guide" ? "guides" : "news";
  const path = `/hyderabad-real-estate/${section}/${article.slug}`;
  const url = `https://www.sohowealth.in${path}`;
  const schema = { "@context":"https://schema.org", "@type": article.type === "news" ? "NewsArticle" : "Article", headline: article.title, description: article.description, datePublished: article.updatedAt, dateModified: article.updatedAt, author: { "@type":"Organization", name:"SoHo Wealth" }, publisher: { "@id":"https://www.sohowealth.in/#organization" }, mainEntityOfPage: url };
  return <main className="pt-20"><JsonLd data={schema}/>
    <article>
      <header className="bg-[#0B1F3A] py-20 lg:py-28"><div className="container mx-auto max-w-4xl px-6 lg:px-8"><Link href={`/hyderabad-real-estate/${article.type}`} className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white">← Real Estate {article.type === "news"?"News":"Guides"}</Link><p className="mt-9 text-xs font-bold uppercase tracking-[.18em] text-[#C9A84C]">{article.category}</p><h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-white md:text-6xl">{article.title}</h1><p className="mt-6 text-lg leading-relaxed text-white/70">{article.description}</p><div className="mt-8 flex gap-5 text-sm text-white/55"><span className="flex items-center gap-2"><CalendarDays className="h-4 w-4"/>{new Date(`${article.updatedAt}T00:00:00`).toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"})}</span><span className="flex items-center gap-2"><Clock3 className="h-4 w-4"/>{article.readTime}</span></div></div></header>
      <div className="container mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-[1fr_18rem] lg:px-8 lg:py-24"><div className="max-w-3xl space-y-14">{article.sections.map(section=><section key={section.heading}><h2 className="font-display text-3xl font-semibold text-[#0B1F3A]">{section.heading}</h2><div className="mt-5 space-y-4">{section.paragraphs.map(p=><p key={p} className="text-base leading-8 text-slate-700">{p}</p>)}</div>{section.bullets&&<ul className="mt-6 space-y-3">{section.bullets.map(item=><li key={item} className="flex gap-3 rounded-xl bg-slate-50 p-4 text-sm leading-relaxed text-slate-700"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C9A84C]"/>{item}</li>)}</ul>}</section>)}</div><aside className="space-y-5 lg:sticky lg:top-28 lg:self-start"><ReraBadge/><div className="rounded-2xl bg-[#0B1F3A] p-6 text-white"><h2 className="font-display text-2xl font-semibold">Discuss a property decision</h2><p className="mt-3 text-sm leading-relaxed text-white/65">Bring the property, project or sale question. We will help organize the next checks.</p><Link href="/hyderabad-real-estate#real-estate-consultation" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#C9A84C]">Book a call <ArrowRight className="h-4 w-4"/></Link></div></aside></div>
    </article>
  </main>;
}
