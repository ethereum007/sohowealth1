import type { Metadata } from "next";
import { PropertyServicePage } from "@/components/real-estate/PropertyServicePage";
import { getPropertyService } from "@/lib/real-estate/vertical";
const service = getPropertyService("nri-property-services-hyderabad")!;
export const metadata: Metadata = { title: "NRI Property Services Hyderabad | Buy, Sell & Manage Remotely", description: service.description, alternates: { canonical: `https://www.sohowealth.in${service.path}` } };
export default function Page(){ return <PropertyServicePage service={service}/>; }
