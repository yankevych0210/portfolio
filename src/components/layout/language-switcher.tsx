"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useLocale, useTranslations} from "next-intl";
import {Check, Languages} from "lucide-react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {locales, isLocale, type Locale} from "@/i18n/locales";

const LABELS: Record<Locale, {short: string; name: string}> = {
  en: {short: "EN", name: "English"},
  ua: {short: "UA", name: "Українська"},
  ru: {short: "RU", name: "Русский"}
};

function swapLocale(path: string, next: Locale) {
  const parts = path.split("/");
  if (parts[1] && isLocale(parts[1])) {
    parts[1] = next;
    return parts.join("/");
  }
  return `/${next}${path === "/" ? "" : path}`;
}

export function LanguageSwitcher() {
  const t = useTranslations("nav");
  const pathname = usePathname() || "/";
  const current = useLocale() as Locale;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" aria-label={t("language")} className="gap-1.5 font-medium">
          <Languages className="size-4" />
          {LABELS[current].short}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-40">
        {locales.map((l) => (
          <DropdownMenuItem key={l} asChild>
            <Link href={swapLocale(pathname, l)} hrefLang={l === "ua" ? "uk" : l} className="flex items-center justify-between gap-3">
              <span>{LABELS[l].name}</span>
              {l === current && <Check className="size-4 text-primary" />}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
