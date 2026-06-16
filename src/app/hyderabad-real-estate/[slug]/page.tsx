import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { RealEstateSeoPage } from "@/components/real-estate/RealEstateSeoPage";
import {
  buildRealEstateMetadata,
  getRealEstateMicroMarketGuide,
  realEstateMicroMarketPages,
} from "@/lib/real-estate/seo-pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return realEstateMicroMarketPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getRealEstateMicroMarketGuide(slug);

  if (!page) {
    return {};
  }

  return buildRealEstateMetadata(page);
}

export default async function HyderabadRealEstateMicroMarketPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getRealEstateMicroMarketGuide(slug);

  if (!page) {
    notFound();
  }

  return <RealEstateSeoPage page={page} />;
}
