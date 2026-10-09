import {ImageResponse} from "next/og";

export const runtime = "edge";

const COPY = {
  en: {name: "Nazar Yankevych", role: "Front-End Developer", tagline: "Fast, conversion-focused web products", location: "Kremenchuk, Ukraine"},
  ua: {name: "Назар Янкевич", role: "Front-End розробник", tagline: "Швидкі вебпродукти, що конвертують", location: "Кременчук, Україна"},
  ru: {name: "Назар Янкевич", role: "Front-End разработчик", tagline: "Быстрые веб-продукты, которые конвертируют", location: "Кременчуг, Украина"}
} as const;

export async function GET(request: Request) {
  const {searchParams} = new URL(request.url);
  const locale = (searchParams.get("locale") ?? "en") as keyof typeof COPY;
  const c = COPY[locale] ?? COPY.en;
  const stack = ["React", "Next.js", "TypeScript", "Shopify", "Tailwind"];

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 64,
          color: "white",
          background: "linear-gradient(135deg, #0f1b33 0%, #1f3557 55%, #2f5bd3 100%)"
        }}
      >
        <div style={{display: "flex", alignItems: "center", gap: 16}}>
          <div style={{display: "flex", alignItems: "center", justifyContent: "center", width: 64, height: 64, borderRadius: 16, background: "white", color: "#1f3557", fontSize: 28, fontWeight: 800}}>NY</div>
          <div style={{fontSize: 26, opacity: 0.85}}>{c.location}</div>
        </div>
        <div style={{display: "flex", flexDirection: "column", gap: 12}}>
          <div style={{fontSize: 76, fontWeight: 800, lineHeight: 1.05}}>{c.name}</div>
          <div style={{fontSize: 40, fontWeight: 600, color: "#a9c4ff"}}>{c.role}</div>
          <div style={{fontSize: 30, opacity: 0.85}}>{c.tagline}</div>
        </div>
        <div style={{display: "flex", gap: 12}}>
          {stack.map((s) => (
            <div key={s} style={{display: "flex", padding: "8px 18px", borderRadius: 999, border: "2px solid rgba(255,255,255,0.35)", fontSize: 24}}>{s}</div>
          ))}
        </div>
      </div>
    ),
    {width: 1200, height: 630}
  );
}
