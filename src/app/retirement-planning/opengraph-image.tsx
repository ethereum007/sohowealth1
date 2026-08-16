import { ImageResponse } from "next/og";

export const alt = "Retirement Planning in Hyderabad and India by SoHo Wealth";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "linear-gradient(135deg, #07192F 0%, #0B1F3A 65%, #183D62 100%)", color: "white", padding: "64px 72px", fontFamily: "Arial, sans-serif", position: "relative" }}>
      <div style={{ position: "absolute", right: "-90px", top: "-100px", width: "460px", height: "460px", borderRadius: "50%", background: "rgba(201,168,76,.13)" }} />
      <div style={{ display: "flex", color: "#C9A84C", fontSize: 22, fontWeight: 700, letterSpacing: 3 }}>SOHO WEALTH · HYDERABAD</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 1000 }}>
        <div style={{ display: "flex", fontSize: 72, lineHeight: 1.05, fontWeight: 700 }}>Retirement Planning Is a 30-Year Income Plan</div>
        <div style={{ display: "flex", color: "rgba(255,255,255,.72)", fontSize: 28, lineHeight: 1.35 }}>Corpus · Monthly income · Inflation · Healthcare · EPF · NPS</div>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22 }}><span style={{ color: "#C9A84C", fontWeight: 700 }}>Planning service · not an investment product</span><span style={{ color: "rgba(255,255,255,.55)" }}>sohowealth.in</span></div>
    </div>,
    size,
  );
}
