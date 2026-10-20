import { ImageResponse } from "next/og";

export const alt = "Follow The Money: Ilhan Omar, Tim Mynett and the Money Trail. Signed disclosures, sworn testimony and the separate $11.25 million Rose Lake Inc. wire account. An investigation by Apple Lamps.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", position: "relative", width: "100%", height: "100%", flexDirection: "column", background: "linear-gradient(120deg, #0f172a, #17243a)", color: "#f8fafc", padding: "46px 58px 38px", borderTop: "10px solid #b91c1c" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 46, height: 46, background: "#b91c1c", fontSize: 34, fontWeight: 700 }}>$</div>
          <div style={{ display: "flex", fontSize: 25, fontWeight: 700, letterSpacing: 3 }}>FOLLOW THE MONEY</div>
        </div>
        <div style={{ display: "flex", fontSize: 15, color: "#cbd5e1", letterSpacing: 2 }}>DOCUMENTED INVESTIGATION</div>
      </div>

      <div style={{ display: "flex", flex: 1, alignItems: "center", gap: 42 }}>
        <div style={{ display: "flex", flexDirection: "column", width: 674 }}>
          <div style={{ display: "flex", fontSize: 75, fontWeight: 700, lineHeight: 1.06, letterSpacing: -3 }}>Ilhan Omar,</div>
          <div style={{ display: "flex", fontSize: 75, fontWeight: 700, lineHeight: 1.06, letterSpacing: -3 }}>Tim Mynett &amp;</div>
          <div style={{ display: "flex", fontSize: 75, fontWeight: 700, lineHeight: 1.06, letterSpacing: -3 }}>the Money Trail</div>
          <div style={{ display: "flex", marginTop: 27, fontSize: 24, color: "#e2e8f0" }}>Signed disclosures. Sworn testimony.</div>
          <div style={{ display: "flex", marginTop: 7, fontSize: 22, color: "#94a3b8" }}>The records behind the questions.</div>
        </div>

        <div style={{ display: "flex", position: "relative", width: 368, height: 330, flexShrink: 0 }}>
          <div style={{ display: "flex", position: "absolute", top: 10, left: 10, width: 358, height: 320, background: "#334155", border: "1px solid #475569" }} />
          <div style={{ display: "flex", position: "relative", flexDirection: "column", width: 358, height: 320, background: "#f8f5ef", color: "#0f172a", padding: "27px 26px", borderTop: "5px solid #b91c1c" }}>
            <div style={{ display: "flex", fontSize: 16, fontWeight: 700, letterSpacing: 2, color: "#991b1b" }}>THE SEPARATE WIRE ACCOUNT</div>
            <div style={{ display: "flex", marginTop: 24, fontSize: 75, fontWeight: 700, letterSpacing: -4 }}>$11.25M</div>
            <div style={{ display: "flex", marginTop: 4, fontSize: 26, fontWeight: 700 }}>Rose Lake Inc.</div>
            <div style={{ display: "flex", marginTop: 12, fontSize: 19, color: "#475569" }}>Two wires described under oath.</div>
            <div style={{ display: "flex", marginTop: "auto", paddingTop: 16, borderTop: "1px solid #cbd5e1", fontSize: 14, color: "#64748b" }}>Hailer declaration · November 2024</div>
          </div>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid #475569", paddingTop: 22 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex", width: 28, height: 3, background: "#ef4444" }} />
          <div style={{ display: "flex", fontSize: 18, fontWeight: 700, letterSpacing: 1 }}>AN INVESTIGATION BY APPLE LAMPS</div>
        </div>
        <div style={{ display: "flex", fontSize: 19, color: "#cbd5e1" }}>rep-omar.vercel.app</div>
      </div>
    </div>,
    size,
  );
}
