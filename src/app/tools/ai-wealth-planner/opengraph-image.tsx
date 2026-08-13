import { ImageResponse } from "next/og";

export const alt = "Free AI Wealth Planner India by SoHo Wealth";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#07192f", color: "white", padding: "64px 72px", fontFamily: "Arial, sans-serif", position: "relative" }}>
      <div style={{ position: "absolute", right: "-80px", top: "-80px", width: 430, height: 430, borderRadius: "50%", background: "rgba(201,168,76,.14)" }} />
      <div style={{ display: "flex", color: "#E5CB83", fontSize: 22, letterSpacing: 3 }}>SOHO WEALTH · FREE PLANNING TOOL</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 970 }}><div style={{ fontSize: 74, lineHeight: 1.04, fontWeight: 700 }}>AI Wealth Planner India</div><div style={{ color: "rgba(255,255,255,.72)", fontSize: 29, lineHeight: 1.35 }}>Goal corpus · Required monthly SIP · Illustrative asset allocation</div></div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22 }}><span style={{ color: "#C9A84C", fontWeight: 700 }}>Private. No sign-up. Free.</span><span style={{ color: "rgba(255,255,255,.55)" }}>sohowealth.in</span></div>
    </div>, size,
  );
}
