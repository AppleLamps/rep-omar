import { ImageResponse } from "next/og";

export const alt = "Follow The Money: Ilhan Omar, Tim Mynett and the Money Trail. An investigation by Apple Lamps.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", background: "#0f172a", color: "#fff", padding: "65px", flexDirection: "column", justifyContent: "space-between", borderLeft: "20px solid #b91c1c" }}>
      <div style={{ display: "flex", fontSize: 25, fontWeight: 700, color: "#fecaca", letterSpacing: 5 }}>FOLLOW THE MONEY · APPLE LAMPS</div>
      <div style={{ display: "flex", fontSize: 74, fontWeight: 700, lineHeight: 1.05, maxWidth: 1000 }}>Ilhan Omar, Tim Mynett &amp; the Money Trail</div>
      <div style={{ display: "flex", fontSize: 29, color: "#cbd5e1" }}>Revised valuations. Newly reported income. The Rose Lake network.</div>
      <div style={{ display: "flex", fontSize: 23, color: "#fecaca" }}>The filings. The business network. The unanswered questions.</div>
    </div>, size,
  );
}
