import type { Metadata } from "next";
import { EditorialIndex } from "@/components/real-estate/EditorialIndex";
export const metadata: Metadata = { title: "Hyderabad Real Estate Guides | Buying, Selling & Due Diligence", description: "Detailed Hyderabad property guides for buyers, sellers, NRIs and investors.", alternates:{canonical:"https://www.sohowealth.in/hyderabad-real-estate/guides"} };
export default function Page(){return <EditorialIndex type="guide"/>}
