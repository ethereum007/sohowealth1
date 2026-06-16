import { RealEstateSeoPage } from "@/components/real-estate/RealEstateSeoPage";
import { buildRealEstateMetadata, getRealEstateGuideByPath } from "@/lib/real-estate/seo-pages";

function getPage() {
  const page = getRealEstateGuideByPath("/nri-property-checklist-hyderabad");

  if (!page) {
    throw new Error("Missing NRI property checklist page config");
  }

  return page;
}

const page = getPage();

export const metadata = buildRealEstateMetadata(page);

export default function NRIPropertyChecklistHyderabadPage() {
  return <RealEstateSeoPage page={page} />;
}
