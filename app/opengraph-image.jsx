import { ImageResponse } from "next/og";

export const alt = "Anushrey Jain, Lead Frontend Engineer";
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
          padding: "72px 80px",
          background: "#0b0b0c",
          color: "#faf6ee",
          fontFamily: "serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#9b958a",
          }}
        >
          anushrey.com
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 112, lineHeight: 1.02, display: "flex" }}>
            Anushrey Jain
          </div>
          <div
            style={{
              fontSize: 52,
              marginTop: 24,
              fontStyle: "italic",
              color: "#cdbd9f",
              display: "flex",
            }}
          >
            Lead Frontend Engineer
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 28,
            color: "#9b958a",
            letterSpacing: 1,
          }}
        >
          React · Next.js · Design Systems · Agentic AI
        </div>
      </div>
    ),
    size
  );
}
