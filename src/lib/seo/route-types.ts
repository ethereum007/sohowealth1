export type RouteCluster = "core" | "pms" | "sif" | "retirement" | "nri" | "rsu" | "audience" | "ipo" | "real-estate" | "legal";
export type PageType = "home" | "service" | "hub" | "tool" | "article" | "research" | "legal";
export type PublicRoute = { path: `/${string}` | "/"; indexable: boolean; lastModified: string; cluster: RouteCluster; pageType: PageType };
