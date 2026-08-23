import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticlePage } from "@/components/real-estate/ArticlePage";
import { getRealEstateArticle, realEstateArticles } from "@/lib/real-estate/vertical";
type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return realEstateArticles.filter(a=>a.type==="guide").map(a=>({slug:a.slug}))}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const a=getRealEstateArticle("guide",slug);return a?{title:`${a.title} | SoHo Wealth`,description:a.description,alternates:{canonical:`https://www.sohowealth.in/hyderabad-real-estate/guides/${slug}`}}:{}}
export default async function Page({params}:Props){const {slug}=await params;const a=getRealEstateArticle("guide",slug);if(!a)notFound();return <ArticlePage article={a}/>}
