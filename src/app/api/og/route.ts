import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Nazar Yankevych — Front-End Developer";
  const desc = searchParams.get("desc") || "Fast, accessible and beautiful web apps.";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #111827 0%, #0b1220 60%, #0a0a0a 100%)",
          color: "white",
          padding: "48px",
          fontFamily: "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, \"Apple Color Emoji\", \"Segoe UI Emoji\"",
        }}
      >
        <div style={{ fontSize: 48, fontWeight: 700, lineHeight: 1.15 }}>{title}</div>
        <div style={{ fontSize: 26, opacity: 0.9 }}>{desc}</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 28, fontWeight: 600 }}>Nazar Yankevych</div>
          <div style={{ fontSize: 20, opacity: 0.9 }}>Front‑End • Kremenchug, Ukraine</div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
