import { getPmsResearchPage } from "@/lib/pms/research-server";
import { PmsPerformanceExplorer } from "./PmsPerformanceExplorer";

/** Server boundary for the enriched PMS research dataset. */
export function PmsPerformanceLeadersSection() {
  return <PmsPerformanceExplorer initialPage={getPmsResearchPage()} />;
}
