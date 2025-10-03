import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nazar Yankevych — Front‑End Developer",
  description: "Portfolio of Nazar Yankevych, Front‑End Developer (React/Next.js/TypeScript).",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          // Set theme ASAP to avoid flashes; prefers system, fallback to time of day if unavailable
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const stored = localStorage.getItem('theme');
                if (!stored) {
                  const mql = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)');
                  let theme = mql ? (mql.matches ? 'dark' : 'light') : null;
                  if (!theme) {
                    const h = new Date().getHours();
                    theme = (h >= 19 || h < 7) ? 'dark' : 'light';
                  }
                  document.documentElement.classList.remove('light','dark');
                  document.documentElement.classList.add(theme);
                }
              } catch {}
            `
          }}
        />
        {children}
      </body>
    </html>
  );
}
