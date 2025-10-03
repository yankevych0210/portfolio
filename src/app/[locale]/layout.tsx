import type { Metadata, Viewport } from "next";
import "../globals.css";
import Providers from "@/components/providers";
import { locales, type Locale } from "@/i18n/locales";
import { notFound } from "next/navigation";
import { getMessages, getTranslations } from "next-intl/server";
import Header from "@/components/header";
import Footer from "@/components/footer";

export async function generateMetadata({ params }: { params: { locale: Locale } }): Promise<Metadata> {
  const { locale } = params;
  const tMeta = await getTranslations({ locale, namespace: "meta" });
  return {
    title: tMeta("title"),
    description: tMeta("description"),
    openGraph: {
      title: tMeta("title"),
      description: tMeta("description"),
      url: `/${locale}`,
      images: [
        { url: `/api/og?title=${encodeURIComponent(tMeta("title"))}&desc=${encodeURIComponent(tMeta("description"))}`, width: 1200, height: 630, alt: "OG Banner" }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: tMeta("title"),
      description: tMeta("description"),
      images: [`/api/og?title=${encodeURIComponent(tMeta("title"))}&desc=${encodeURIComponent(tMeta("description"))}`]
    },
    alternates: {
      languages: {
        en: "/en",
        ru: "/ru",
        uk: "/ua"
      }
    }
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" }
  ]
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LayoutParams = { locale?: string };
type MaybePromise<T> = T | Promise<T>;
function isPromise<T>(v: unknown): v is Promise<T> {
  return typeof (v as { then?: unknown })?.then === 'function';
}

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: MaybePromise<LayoutParams> }) {
  const resolved = isPromise<LayoutParams>(params) ? await params : params;
  const raw: string | undefined = resolved?.locale;
  const locale = locales.includes(raw as Locale) ? (raw as Locale) : undefined;
  if (!locale) notFound();

  const messages = await getMessages();

  return (
    <Providers locale={locale} messages={messages}>
      <Header />
      {children}
      <Footer />
    </Providers>
  );
}
