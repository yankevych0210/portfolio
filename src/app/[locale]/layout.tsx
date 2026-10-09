import type {Metadata, Viewport} from "next";
import type {ReactNode} from "react";
import {Geist, Geist_Mono} from "next/font/google";
import {notFound} from "next/navigation";
import {getMessages, getTranslations, setRequestLocale} from "next-intl/server";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Providers from "@/components/layout/providers";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import {htmlLang, isLocale, locales} from "@/i18n/locales";
import {SITE_URL} from "@/config/site";
import {alternatesFor} from "@/lib/seo";

const geistSans = Geist({variable: "--font-geist-sans", subsets: ["latin", "cyrillic"]});
const geistMono = Geist_Mono({variable: "--font-geist-mono", subsets: ["latin", "cyrillic"]});

type Params = Promise<{locale: string}>;

export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: {params: Params}): Promise<Metadata> {
  const {locale} = await params;
  if (!isLocale(locale)) return {};
  const t = await getTranslations({locale, namespace: "meta"});
  return {
    metadataBase: new URL(SITE_URL),
    title: {default: t("title"), template: `%s — Nazar Yankevych`},
    description: t("description"),
    authors: [{name: "Nazar Yankevych", url: SITE_URL}],
    creator: "Nazar Yankevych",
    keywords: ["Front-End Developer", "React", "Next.js", "TypeScript", "Shopify", "Liquid", "Portfolio", "Nazar Yankevych"],
    alternates: alternatesFor(locale, ""),
    openGraph: {
      type: "website",
      siteName: "Nazar Yankevych",
      title: t("title"),
      description: t("description"),
      url: `/${locale}`,
      locale: htmlLang[locale],
      images: [{url: `/api/og?locale=${locale}`, width: 1200, height: 630, alt: t("title")}]
    },
    twitter: {card: "summary_large_image", title: t("title"), description: t("description"), images: [`/api/og?locale=${locale}`]},
    icons: {icon: "/favicon.svg", shortcut: "/favicon.svg", apple: "/favicon.svg"}
  };
}

export const viewport: Viewport = {
  themeColor: [
    {media: "(prefers-color-scheme: light)", color: "#ffffff"},
    {media: "(prefers-color-scheme: dark)", color: "#0b0d12"}
  ]
};

export default async function LocaleLayout({children, params}: {children: ReactNode; params: Params}) {
  const {locale} = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({locale, namespace: "nav"});

  return (
    <html lang={htmlLang[locale]} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">
          {t("skip")}
        </a>
        <Providers locale={locale} messages={messages}>
          <Header />
          <div id="main">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
