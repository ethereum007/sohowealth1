import { ImageResponse } from "next/og";

export const alt = "Wealth Planning for Doctors in Andhra Pradesh and Telangana by SoHo Wealth";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#07192f",
          color: "white",
          padding: "64px 72px",
          fontFamily: "Arial, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: "-80px",
            top: "-80px",
            width: "430px",
            height: "430px",
            borderRadius: "50%",
            background: "rgba(201,168,76,.12)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 16, color: "#C9A84C", fontSize: 22, letterSpacing: 3 }}>
          SOHO WEALTH FOR DOCTORS IN AP & TELANGANA
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 980 }}>
          <div style={{ fontSize: 72, lineHeight: 1.05, fontWeight: 700 }}>
            Wealth Planning for Doctors in AP & Telangana
          </div>
          <div style={{ color: "rgba(255,255,255,.7)", fontSize: 28, lineHeight: 1.35 }}>
            2026 guide + free Doctor Wealth Check-up
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22 }}>
          <span style={{ color: "#C9A84C", fontWeight: 700 }}>The Doctors Portfolio × SoHo Wealth</span>
          <span style={{ color: "rgba(255,255,255,.55)" }}>sohowealth.in</span>
        </div>
      </div>
    ),
    size,
  );
}
