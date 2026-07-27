import { ImageResponse } from "next/og";

export const alt =
  "Wealth Planning for IT Professionals in Hyderabad by SoHo Wealth";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "linear-gradient(135deg, #07192F 0%, #0B1F3A 58%, #183D62 100%)",
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
            SoHo Wealth · Hyderabad
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 70,
              fontWeight: 700,
              lineHeight: 1.08,
              marginTop: 28,
              maxWidth: "1000px",
            }}
          >
            Wealth Planning for IT Professionals
          </div>
          <div
            style={{
              color: "rgba(255,255,255,.72)",
              display: "flex",
              fontFamily: "Arial, sans-serif",
              fontSize: 29,
              lineHeight: 1.4,
              marginTop: 30,
            }}
          >
            Salary · RSUs · ESOPs · Career optionality
          </div>
        </div>
      </div>
    ),
    size,
  );
}
