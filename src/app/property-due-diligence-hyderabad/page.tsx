import type { Metadata } from "next";
import { PropertyServicePage } from "@/components/real-estate/PropertyServicePage";
import { getPropertyService } from "@/lib/real-estate/vertical";
const service = getPropertyService("property-due-diligence-hyderabad")!;
export const metadata: Metadata = { title: "Property Due Diligence Hyderabad | Project & Document Review", description: service.description, alternates: { canonical: `https://www.sohowealth.in${service.path}` } };
export default function Page(){ return <PropertyServicePage service={service}/>; }
