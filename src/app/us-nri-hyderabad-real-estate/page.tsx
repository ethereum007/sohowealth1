import { RealEstateSeoPage } from "@/components/real-estate/RealEstateSeoPage";
import { buildRealEstateMetadata, getRealEstateGuideByPath } from "@/lib/real-estate/seo-pages";

function getPage() {
  const page = getRealEstateGuideByPath("/us-nri-hyderabad-real-estate");

  if (!page) {
    throw new Error("Missing US NRI Hyderabad real estate page config");
  }

  return page;
}

const page = getPage();

export const metadata = buildRealEstateMetadata(page);

export default function USNRIHyderabadRealEstatePage() {
  return <RealEstateSeoPage page={page} />;
}
