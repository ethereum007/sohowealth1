import type { Metadata } from "next";
import { PropertyServicePage } from "@/components/real-estate/PropertyServicePage";
import { getPropertyService } from "@/lib/real-estate/vertical";
const service = getPropertyService("buy-property-hyderabad")!;
export const metadata: Metadata = { title: "Buy Property in Hyderabad | RERA Registered Buyer Support | SoHo Wealth", description: service.description, alternates: { canonical: `https://www.sohowealth.in${service.path}` } };
export default function Page(){ return <PropertyServicePage service={service}/>; }
