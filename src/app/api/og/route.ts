import { ImageResponse } from "next/og";
import React from "react";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Nazar Yankevych — Front-End Developer";
  const desc = searchParams.get("desc") || "Fast, accessible and beautiful web apps.";

  const root = React.createElement(
    "div",
    {
      style: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "linear-gradient(135deg, #111827 0%, #0b1220 60%, #0a0a0a 100%)",
        color: "white",
        padding: "48px",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'",
      },
    },
    [
      React.createElement(
        "div",
        { key: "title", style: { fontSize: 48, fontWeight: 700, lineHeight: 1.15 } },
        title
      ),
      React.createElement(
        "div",
        { key: "desc", style: { fontSize: 26, opacity: 0.9 } },
        desc
      ),
      React.createElement(
        "div",
        {
          key: "footer",
          style: { display: "flex", alignItems: "center", justifyContent: "space-between" },
        },
        [
          React.createElement(
            "div",
            { key: "name", style: { fontSize: 28, fontWeight: 600 } },
            "Nazar Yankevych"
          ),
          React.createElement(
            "div",
            { key: "role", style: { fontSize: 20, opacity: 0.9 } },
            "Front‑End • Kremenchug, Ukraine"
          ),
        ]
      ),
    ]
  );

  return new ImageResponse(root, { width: 1200, height: 630 });
}
