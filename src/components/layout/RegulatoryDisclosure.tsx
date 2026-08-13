import Link from "next/link";

export function RegulatoryDisclosure({ compact = false }: { compact?: boolean }) {
  return (
    <section aria-label="Regulatory disclosure" className={compact ? "text-slate-400" : "text-white/55"}>
      <div className={compact ? "space-y-2" : "space-y-3"}>
        <h2 className={`font-body font-semibold uppercase tracking-[0.14em] ${compact ? "text-xs text-amber-400" : "text-xs text-[#C9A84C]"}`}>
          Regulatory disclosure
        </h2>
        <p>SoHo Wealth (ARN – 306593) is an AMFI-registered Mutual Fund Distributor and AMFI Registered SIF Distributor (ARN – 306593), an authorised distributor of Portfolio Management Services (APMI: APRN01233), and a distributor of Alternative Investment Funds.</p>
        <p>SoHo Wealth is not a SEBI-Registered Investment Adviser. Distribution services are distinct from investment advisory services. SoHo Wealth earns distributor commissions from product manufacturers. No separate advisory fee is charged.</p>
        <p>PMS and AIF are products intended for eligible and sophisticated investors as defined by SEBI. Minimum investment thresholds apply. SIF products are governed under the SEBI (Mutual Funds) Amendment Regulations, 2024 — minimum investment ₹10 lakh for eligible investors only. Past performance is not indicative of future results. Returns are not guaranteed.</p>
        <p>Calculator outputs and product illustrations on this website are indicative and for educational purposes only. They do not constitute investment advice or a solicitation to invest. Investors are advised to read all scheme-related documents before investing.</p>
        {!compact && <p><Link href="/disclosures" className="font-semibold text-white/75 underline decoration-white/25 underline-offset-4 transition hover:text-white">Read the complete disclosures</Link></p>}
      </div>
    </section>
  );
}
