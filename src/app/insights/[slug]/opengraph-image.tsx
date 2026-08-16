import { ImageResponse } from "next/og";
import { getInsightPost } from "@/lib/insights/posts";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "SoHo Wealth plain-English financial decision guide";

export default async function OpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getInsightPost(slug);
  const title = post?.title ?? "SoHo Wealth Insights";
  const category = post?.category ?? "Wealth Planning";
  const fontSize = title.length > 70 ? 54 : title.length > 48 ? 62 : 70;

  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "linear-gradient(135deg, #07192F 0%, #0B1F3A 68%, #183D62 100%)", color: "white", padding: "64px 72px", fontFamily: "Arial, sans-serif", position: "relative" }}>
      <div style={{ position: "absolute", right: "-100px", top: "-100px", width: "450px", height: "450px", borderRadius: "50%", background: "rgba(201,168,76,.13)" }} />
      <div style={{ display: "flex", color: "#C9A84C", fontSize: 22, fontWeight: 700, letterSpacing: 3 }}>SOHO WEALTH · {category.toUpperCase()}</div>
      <div style={{ display: "flex", fontSize, fontWeight: 700, lineHeight: 1.08, maxWidth: 1030 }}>{title}</div>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22 }}><span style={{ color: "#C9A84C", fontWeight: 700 }}>Plain-English decision guide</span><span style={{ color: "rgba(255,255,255,.55)" }}>sohowealth.in</span></div>
    </div>,
    size,
  );
}
