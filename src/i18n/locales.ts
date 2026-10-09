export const locales = ["en", "ua", "ru"] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** BCP 47 tags for <html lang> and hreflang ("ua" is the URL segment, "uk" is the language). */
export const htmlLang: Record<Locale, string> = {en: "en", ua: "uk", ru: "ru"};

/** A value translated into every supported locale. */
export type Localized<T = string> = Record<Locale, T>;
