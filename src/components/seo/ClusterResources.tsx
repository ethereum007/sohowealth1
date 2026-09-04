import Link from "next/link";
const resources={
  pms:[{href:"/best-pms-in-india",title:"PMS research universe"},{href:"/pms-methodology",title:"Research methodology"},{href:"/resources/sample-pms-comparison",title:"Sample comparison brief"}],
  nri:[{href:"/services/nri",title:"NRI wealth planning"},{href:"/nri-telugu",title:"Telugu NRI desk"},{href:"/resources/sample-nri-portfolio-map",title:"Sample portfolio map"}],
  retirement:[{href:"/retirement-planning",title:"Retirement planning"},{href:"/tools/retirement-planning-calculators",title:"Retirement calculators"},{href:"/resources/sample-portfolio-diagnostic",title:"Sample diagnostic"}],
  rsu:[{href:"/rsu-esops",title:"RSU and ESOP planning"},{href:"/tools/rsu-concentration-calculator",title:"Concentration calculator"},{href:"/tools/rsu-decision-check",title:"RSU decision check"}],
  core:[{href:"/portfolio-review",title:"Portfolio review"},{href:"/why-us",title:"How we work"},{href:"/resources/sample-portfolio-diagnostic",title:"Sample diagnostic"}],
} as const;
export type ResourceCluster=keyof typeof resources;
export function ClusterResources({cluster}: {cluster:ResourceCluster}){return <aside aria-labelledby={`${cluster}-resources`} className="bg-slate-50 py-12"><div className="container mx-auto max-w-6xl px-6"><h2 id={`${cluster}-resources`} className="text-xl font-semibold text-[#0B1F3A]">Useful next steps</h2><div className="mt-5 grid gap-3 md:grid-cols-3">{resources[cluster].map(item=><Link key={item.href} href={item.href} className="rounded-lg border bg-white p-4 font-semibold text-[#0B1F3A] hover:border-[#C9A84C]">{item.title} →</Link>)}</div></div></aside>}
