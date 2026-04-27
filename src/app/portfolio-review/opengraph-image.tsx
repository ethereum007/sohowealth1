import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Free Portfolio Review by SoHo Wealth — Hyderabad";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #0B1F3A 0%, #162d50 50%, #0B1F3A 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 22,
            color: "#C9A84C",
            letterSpacing: "4px",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          No Sales Pitch. Promise.
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.1,
            marginBottom: 24,
            maxWidth: 1000,
          }}
        >
          Free 30-Min Portfolio Review
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.75)",
            marginBottom: 40,
            maxWidth: 900,
          }}
        >
          1-on-1 with Kiran Dutta. For portfolios ₹25 lakh+.
        </div>
        <div style={{ fontSize: 20, color: "#C9A84C", letterSpacing: "1px" }}>
          sohowealth.in/portfolio-review
        </div>
      </div>
    ),
    { ...size }
  );
}
