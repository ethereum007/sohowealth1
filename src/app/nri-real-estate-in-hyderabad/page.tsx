import { RealEstateSeoPage } from "@/components/real-estate/RealEstateSeoPage";
import { buildRealEstateMetadata, getRealEstateGuideByPath } from "@/lib/real-estate/seo-pages";

function getPage() {
  const page = getRealEstateGuideByPath("/nri-real-estate-in-hyderabad");

  if (!page) {
    throw new Error("Missing NRI real estate in Hyderabad page config");
  }

  return page;
}

const page = getPage();

export const metadata = buildRealEstateMetadata(page);

export default function NRIRealEstateInHyderabadPage() {
  return <RealEstateSeoPage page={page} />;
}
