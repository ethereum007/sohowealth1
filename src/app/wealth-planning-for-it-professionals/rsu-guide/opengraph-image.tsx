import { ImageResponse } from "next/og";

export const alt =
  "RSU Tax and Diversification Guide for IT Professionals by SoHo Wealth";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "linear-gradient(135deg, #07192F 0%, #0B1F3A 62%, #183D62 100%)",
          color: "white",
          display: "flex",
          fontFamily: "Georgia, serif",
          height: "100%",
          justifyContent: "center",
          padding: "68px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#C9A84C",
            height: "10px",
            left: 0,
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        />
        <div
          style={{
            border: "1px solid rgba(201,168,76,.28)",
            borderRadius: "999px",
            height: "360px",
            position: "absolute",
            right: "-80px",
            top: "-80px",
            width: "360px",
          }}
        />
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <div
            style={{
              color: "#C9A84C",
              display: "flex",
              fontFamily: "Arial, sans-serif",
              fontSize: 23,
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            SoHo Wealth · IT Professionals
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 70,
              fontWeight: 700,
              lineHeight: 1.06,
              marginTop: 28,
              maxWidth: "1040px",
            }}
          >
            RSU Tax &amp; Diversification Guide
          </div>
          <div
            style={{
              color: "rgba(255,255,255,.72)",
              display: "flex",
              fontFamily: "Arial, sans-serif",
              fontSize: 27,
              lineHeight: 1.4,
              marginTop: 30,
            }}
          >
            Vesting · Schedule FA · Concentration · Decision checklist
          </div>
        </div>
      </div>
    ),
    size,
  );
}
