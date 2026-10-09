import type {Metadata} from "next";
import {htmlLang, locales, type Locale} from "@/i18n/locales";

/** Canonical + hreflang links for a path that exists in every locale (path starts with "/" or is ""). */
export function alternatesFor(locale: Locale, path: string): Metadata["alternates"] {
  const languages: Record<string, string> = {};
  for (const l of locales) languages[htmlLang[l]] = `/${l}${path}`;
  languages["x-default"] = `/en${path}`;
  return {canonical: `/${locale}${path}`, languages};
}
