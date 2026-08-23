import type { Metadata } from "next";
import { EditorialIndex } from "@/components/real-estate/EditorialIndex";
export const metadata: Metadata = { title: "Hyderabad Real Estate News | Regulation, Projects & Infrastructure", description: "Hyderabad property news with verified facts, uncertainties and buyer or seller implications.", alternates:{canonical:"https://www.sohowealth.in/hyderabad-real-estate/news"} };
export default function Page(){return <EditorialIndex type="news"/>}
