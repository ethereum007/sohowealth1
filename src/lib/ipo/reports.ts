import type { IpoReport } from "./types";

// Reports are deliberately empty until the publisher's regulatory capacity,
// disclosures and review workflow are confirmed. Do not add an analysis without
// a dated source pack and documented editorial sign-off.
export const ipoReports: IpoReport[] = [];

export function getIpoReport(slug: string) {
  return ipoReports.find((report) => report.slug === slug);
}
