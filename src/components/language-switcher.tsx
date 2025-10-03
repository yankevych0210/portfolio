"use client";

import {usePathname} from "next/navigation";
import {locales, type Locale} from "@/i18n/locales";
import {useMemo} from "react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {useLocale} from "next-intl";
import Link from "next/link";

const labels: Record<Locale, string> = {
  en: "EN",
  ru: "RU",
  ua: "UA",
};

export function LanguageSwitcher() {
  const pathname = usePathname();
  const current = useLocale() as Locale;

  const items = useMemo(() => locales.filter((l) => l !== current), [current]);

  function swapLocaleInPath(path: string, next: Locale) {
    const parts = path.split("/"); // "", "en", "..."
    if (parts[1] && locales.includes(parts[1] as Locale)) {
      parts[1] = next;
      return parts.join("/") || "/";
    }
    // if no locale segment, prefix
    return `/${next}${path.startsWith("/") ? path : `/${path}`}`;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" aria-label="Change language">
          {labels[current]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {items.map((l) => (
          <DropdownMenuItem key={l} asChild>
            <Link href={swapLocaleInPath(pathname, l)}>
              {labels[l]}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
