export type IpoSource = {
  label: string;
  url: string;
  publisher: "SEBI" | "NSE" | "BSE" | "Issuer" | "Registrar" | "Other";
  accessedOn: string;
};

export type IpoReport = {
  slug: string;
  companyName: string;
  exchange: "Mainboard" | "SME";
  status: "DRHP filed" | "Upcoming" | "Open" | "Closed" | "Listed";
  analysisAsOf: string;
  summary: string;
  issue: {
    openDate?: string;
    closeDate?: string;
    priceBand?: string;
    lotSize?: number;
    issueSize?: string;
    freshIssue?: string;
    offerForSale?: string;
  };
  scores: {
    businessQuality: number;
    financialQuality: number;
    valuation: number;
    governance: number;
    useOfProceeds: number;
  };
  bullCase: string[];
  bearCase: string[];
  whatToMonitor: string[];
  sources: IpoSource[];
};
