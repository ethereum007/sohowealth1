import type { Metadata } from "next";
import { PropertyServicePage } from "@/components/real-estate/PropertyServicePage";
import { getPropertyService } from "@/lib/real-estate/vertical";
const service = getPropertyService("new-projects-hyderabad")!;
export const metadata: Metadata = { title: "New Projects in Hyderabad | Compare Current Residential Projects", description: service.description, alternates: { canonical: `https://www.sohowealth.in${service.path}` } };
export default function Page(){ return <PropertyServicePage service={service}/>; }
