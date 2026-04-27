"use client";

import { motion } from "framer-motion";
import {
  Building2, Factory, Train, Zap, Wheat, GraduationCap,
  HeartPulse, Landmark, Shield, Plane, TrendingUp, FileText,
  ChevronRight, IndianRupee, Users, Calendar
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { JsonLd } from "@/components/seo/JsonLd";

const budgetArticleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Union Budget 2026-27: Comprehensive Analysis",
  description: "Comprehensive analysis of India's Union Budget 2026-27 presented by Finance Minister Nirmala Sitharaman — key tax changes, sectoral allocations and the new income-tax slabs.",
  datePublished: "2026-02-01",
  dateModified: "2026-02-01",
  author: { "@id": "https://sohowealth.in/#kiran-dutta" },
  publisher: { "@id": "https://sohowealth.in/#organization" },
  image: "https://sohowealth.in/soho-logo.jpeg",
  mainEntityOfPage: "https://sohowealth.in/budget-2026",
  keywords: "Union Budget 2026, Budget 2026-27, India tax slabs 2026, Nirmala Sitharaman budget, Viksit Bharat",
  articleSection: "Budget Analysis",
};

const budgetBreadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://sohowealth.in/" },
    { "@type": "ListItem", position: 2, name: "Insights", item: "https://sohowealth.in/budget-2026" },
    { "@type": "ListItem", position: 3, name: "Budget 2026-27", item: "https://sohowealth.in/budget-2026" },
  ],
};

const Budget2026Client = () => {
  const keyHighlights = [
    { icon: IndianRupee, label: "Tax Relief", value: "\u20B90 tax up to \u20B912L", color: "bg-primary/10 text-primary" },
    { icon: Train, label: "Railways", value: "\u20B92,62,200 Cr", color: "bg-blue-500/10 text-blue-600" },
    { icon: Users, label: "Internships", value: "1 Cr opportunities", color: "bg-purple-500/10 text-purple-600" },
    { icon: Factory, label: "Electronics", value: "\u20B940,000 Cr", color: "bg-orange-500/10 text-orange-600" },
  ];

  const kartavyas = [
    { title: "First Kartavya", description: "Accelerate and sustain economic growth through enhanced productivity, competitiveness, and resilience" },
    { title: "Second Kartavya", description: "Fulfill aspirations and build capacity of citizens as partners in prosperity" },
    { title: "Third Kartavya", description: "Ensure universal access to resources, amenities, and opportunities for all communities" },
  ];

  const allocations = [
    { sector: "Railways", allocation: "\u20B92,62,200 Cr", remarks: "Record allocation, \u20B921,400 increase" },
    { sector: "Internship Programme", allocation: "\u20B92,00,000 Cr", remarks: "Over 5 years" },
    { sector: "Electronics Components", allocation: "\u20B940,000 Cr", remarks: "Increased from \u20B922,919 crore" },
    { sector: "Biopharma SHAKTI", allocation: "\u20B910,000 Cr", remarks: "Over 5 years" },
    { sector: "Container Manufacturing", allocation: "\u20B910,000 Cr", remarks: "Over 5 years" },
    { sector: "Leather Sector", allocation: "\u20B94,000 Cr", remarks: "Over 3 years" },
  ];

  const taxSlabs = [
    { range: "\u20B90 to \u20B94 lakh", rate: "NIL" },
    { range: "\u20B94 lakh to \u20B98 lakh", rate: "5%" },
    { range: "\u20B98 lakh to \u20B912 lakh", rate: "10%" },
    { range: "\u20B912 lakh to \u20B916 lakh", rate: "15%" },
    { range: "\u20B916 lakh to \u20B920 lakh", rate: "20%" },
    { range: "\u20B920 lakh to \u20B924 lakh", rate: "25%" },
    { range: "Above \u20B924 lakh", rate: "30%" },
  ];

  return (
    <main className="pt-20">
      <JsonLd data={budgetArticleSchema} />
      <JsonLd data={budgetBreadcrumbs} />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/10 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20"><Calendar className="w-3 h-3 mr-1" />February 1, 2026</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">Union Budget <span className="text-gradient-green">2026-27</span></h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4">Comprehensive Analysis Report</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><FileText className="w-4 h-4" />Presented by Nirmala Sitharaman</span>
              <span className="hidden md:inline">\u2022</span>
              <span>Magha Purnima & Birth Anniversary of Guru Ravidas</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Highlights Cards */}
      <section className="py-12 bg-background border-b border-border/50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {keyHighlights.map((item, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }}>
                <Card className="text-center border-border/50 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center mx-auto mb-3`}><item.icon className="w-6 h-6" /></div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    <p className="font-bold text-foreground">{item.value}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Summary */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Executive Summary</h2>
            <Card className="mb-8 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed">
                  The Budget 2026-27 represents a strategic blueprint for India's journey toward <strong className="text-foreground">"Viksit Bharat"</strong> (Developed India).
                  It marks 12 years of governance with stability, fiscal discipline, sustained ~7% growth, and moderate inflation.
                  This is a unique <strong className="text-foreground">"Yuva Shakti-driven Budget"</strong> inspired by Viksit Bharat Young Leaders Dialogue 2026,
                  with 350+ reforms rolled out post-PM's Independence Day 2025 announcement.
                </p>
              </CardContent>
            </Card>
            <h3 className="text-xl font-semibold mb-4">Three Core Kartavyas (Duties)</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {kartavyas.map((kartavya, index) => (
                <Card key={index} className="border-border/50">
                  <CardHeader className="pb-2"><Badge variant="outline" className="w-fit mb-2">{kartavya.title}</Badge></CardHeader>
                  <CardContent><p className="text-sm text-muted-foreground">{kartavya.description}</p></CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Income Tax Slabs */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">New Tax Regime Slabs</h2>
            <p className="text-center text-muted-foreground mb-8">Revised Personal Income Tax Structure</p>
            <Card className="border-border/50 overflow-hidden">
              <Table>
                <TableHeader><TableRow className="bg-primary/5"><TableHead className="font-semibold">Income Range</TableHead><TableHead className="font-semibold text-right">Tax Rate</TableHead></TableRow></TableHeader>
                <TableBody>{taxSlabs.map((slab, index) => (<TableRow key={index}><TableCell>{slab.range}</TableCell><TableCell className="text-right font-medium"><Badge variant={slab.rate === "NIL" ? "default" : "secondary"}>{slab.rate}</Badge></TableCell></TableRow>))}</TableBody>
              </Table>
            </Card>
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              <Card className="border-primary/20 bg-primary/5">
                <CardContent className="pt-6"><p className="text-sm text-muted-foreground mb-1">Standard Deduction</p><p className="text-2xl font-bold text-primary">\u20B975,000</p><p className="text-xs text-muted-foreground">Increased from \u20B950,000</p></CardContent>
              </Card>
              <Card className="border-border/50">
                <CardContent className="pt-6"><p className="text-sm text-muted-foreground mb-1">Tax Savings Example</p><p className="text-sm"><strong>\u20B912L income:</strong> Save \u20B960,000</p><p className="text-sm"><strong>\u20B916L income:</strong> Save \u20B980,000</p><p className="text-sm"><strong>\u20B920L income:</strong> Save \u20B91,00,000</p></CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Major Allocations */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Key Sectoral Allocations</h2>
            <p className="text-center text-muted-foreground mb-8">Major Budget Allocations (\u20B9 Crore)</p>
            <Card className="border-border/50 overflow-hidden">
              <Table>
                <TableHeader><TableRow className="bg-muted/50"><TableHead className="font-semibold">Sector/Scheme</TableHead><TableHead className="font-semibold">Allocation</TableHead><TableHead className="font-semibold hidden md:table-cell">Remarks</TableHead></TableRow></TableHeader>
                <TableBody>{allocations.map((item, index) => (<TableRow key={index}><TableCell className="font-medium">{item.sector}</TableCell><TableCell><Badge variant="outline" className="font-mono">{item.allocation}</Badge></TableCell><TableCell className="text-muted-foreground text-sm hidden md:table-cell">{item.remarks}</TableCell></TableRow>))}</TableBody>
              </Table>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Detailed Modules Accordion */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Detailed Sector Analysis</h2>
            <p className="text-center text-muted-foreground mb-8">Click to expand each module</p>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="manufacturing" className="bg-card border border-border/50 rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"><Factory className="w-5 h-5 text-primary" /></div><div className="text-left"><h3 className="font-semibold">Manufacturing & Industrial Policy</h3><p className="text-sm text-muted-foreground">7 Frontier Sectors Strategy</p></div></div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <Card className="border-border/50"><CardHeader className="pb-2"><CardTitle className="text-base">Biopharma SHAKTI</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground"><p className="mb-2"><strong>\u20B910,000 Cr</strong> over 5 years</p><ul className="list-disc list-inside space-y-1"><li>3 new NIPERs + upgrade 7 existing</li><li>1,000+ India Clinical Trials sites</li><li>Modernizing CDSCO</li></ul></CardContent></Card>
                      <Card className="border-border/50"><CardHeader className="pb-2"><CardTitle className="text-base">Semiconductors ISM 2.0</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground"><ul className="list-disc list-inside space-y-1"><li>Complete value chain integration</li><li>Full-stack Indian IP design</li><li>Supply chain fortification</li><li>Industry-led R&D centers</li></ul></CardContent></Card>
                      <Card className="border-border/50"><CardHeader className="pb-2"><CardTitle className="text-base">Electronics Components</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground"><p>Increased from \u20B922,919 Cr to <strong>\u20B940,000 Cr</strong> due to 200% investment commitments</p></CardContent></Card>
                      <Card className="border-border/50"><CardHeader className="pb-2"><CardTitle className="text-base">Rare Earth Corridors</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground"><p>Target States: Odisha, Kerala, Andhra Pradesh, Tamil Nadu</p><p className="mt-1">Mining, processing, research & manufacturing</p></CardContent></Card>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="infrastructure" className="bg-card border border-border/50 rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center"><Train className="w-5 h-5 text-blue-600" /></div><div className="text-left"><h3 className="font-semibold">Infrastructure Development</h3><p className="text-sm text-muted-foreground">Railways, Roads, Urban & Maritime</p></div></div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <Card className="border-blue-500/20 bg-blue-500/5">
                    <CardHeader className="pb-2"><CardTitle className="text-base flex items-center gap-2"><Train className="w-4 h-4" /> Railways - \u20B92,62,200 Crore</CardTitle></CardHeader>
                    <CardContent className="text-sm text-muted-foreground"><div className="grid md:grid-cols-2 gap-4"><ul className="list-disc list-inside space-y-1"><li>10,000 new coaches (general & AC)</li><li>50 new Vande Bharat routes</li><li>100 Amrit Bharat trains</li></ul><ul className="list-disc list-inside space-y-1"><li>Kavach: 8,000 km additional coverage</li><li>800 additional Amrit stations</li></ul></div></CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="energy" className="bg-card border border-border/50 rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center"><Zap className="w-5 h-5 text-yellow-600" /></div><div className="text-left"><h3 className="font-semibold">Energy Security & Sustainability</h3><p className="text-sm text-muted-foreground">Renewables, Nuclear & Green Hydrogen</p></div></div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="border-border/50"><CardHeader className="pb-2"><CardTitle className="text-base">Hydropower Corp</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground"><p>Himalayan, Northeast & Western Ghats development for clean baseload power</p></CardContent></Card>
                    <Card className="border-border/50"><CardHeader className="pb-2"><CardTitle className="text-base">Bharat SMR</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground"><p>Indigenous small modular reactor technology for distributed generation</p></CardContent></Card>
                    <Card className="border-border/50"><CardHeader className="pb-2"><CardTitle className="text-base">PM Surya Ghar</CardTitle></CardHeader><CardContent className="text-sm text-muted-foreground"><p>Extended to <strong>3 Cr households</strong> by 2027. Current: 62L installations</p></CardContent></Card>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="fiscal" className="bg-card border border-border/50 rounded-lg px-4">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center"><TrendingUp className="w-5 h-5 text-emerald-600" /></div><div className="text-left"><h3 className="font-semibold">Fiscal Management & Outlook</h3><p className="text-sm text-muted-foreground">Deficit targets & GDP growth</p></div></div>
                </AccordionTrigger>
                <AccordionContent className="pt-4">
                  <div className="grid md:grid-cols-3 gap-4">
                    <Card className="border-emerald-500/20 bg-emerald-500/5"><CardContent className="pt-6 text-center"><p className="text-sm text-muted-foreground mb-1">Fiscal Deficit Target</p><p className="text-3xl font-bold text-emerald-600">4.9%</p><p className="text-xs text-muted-foreground">of GDP (down from 5.1%)</p></CardContent></Card>
                    <Card className="border-border/50"><CardContent className="pt-6 text-center"><p className="text-sm text-muted-foreground mb-1">GDP Growth</p><p className="text-3xl font-bold text-foreground">6.5-7%</p><p className="text-xs text-muted-foreground">Projected for FY 2026-27</p></CardContent></Card>
                    <Card className="border-border/50"><CardContent className="pt-6 text-center"><p className="text-sm text-muted-foreground mb-1">Export Target</p><p className="text-3xl font-bold text-foreground">$2T</p><p className="text-xs text-muted-foreground">by 2030</p></CardContent></Card>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Strategic Outlook</h2>
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Budget 2026-27 is architecturally designed to position India as a <strong className="text-foreground">$7-10 trillion economy by 2030</strong> through:
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {[
                    { title: "Growth", desc: "Infrastructure, manufacturing, services" },
                    { title: "Inclusion", desc: "Rural development, social security, skilling" },
                    { title: "Sustainability", desc: "Clean energy, resource efficiency" },
                    { title: "Technology", desc: "Digital infrastructure, AI adoption" },
                    { title: "Resilience", desc: "Import substitution, supply chain security" },
                    { title: "Innovation", desc: "R&D focus, startup ecosystem" },
                  ].map((item, i) => (
                    <div key={i} className="text-center p-3 rounded-lg bg-background/50">
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic text-center">
                  The "Reform Express" momentum, combined with targeted interventions, fiscal discipline, and inclusive growth focus,
                  creates a robust framework for India's Viksit Bharat vision.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Budget2026Client;
