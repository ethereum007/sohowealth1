import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SoHo Wealth — Premier Wealth Management Firm in Hyderabad";
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
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#C9A84C",
              marginBottom: 16,
              letterSpacing: "2px",
            }}
          >
            SoHo Wealth
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.9)",
              marginBottom: 40,
              fontStyle: "italic",
            }}
          >
            Boutique Wealth. Institutional Thinking.
          </div>
          <div
            style={{
              display: "flex",
              gap: "24px",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {["PMS", "SIF", "AIF", "Mutual Funds", "NRI Advisory", "Global Investing"].map(
              (service) => (
                <div
                  key={service}
                  style={{
                    padding: "10px 24px",
                    border: "1px solid rgba(201,168,76,0.4)",
                    borderRadius: "8px",
                    color: "rgba(255,255,255,0.8)",
                    fontSize: 18,
                  }}
                >
                  {service}
                </div>
              )
            )}
          </div>
          <div
            style={{
              marginTop: 48,
              fontSize: 18,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "1px",
            }}
          >
            sohowealth.in
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
