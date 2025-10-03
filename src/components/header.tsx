"use client";

import {useTranslations} from "next-intl";
import {Link as I18nLink, usePathname} from "@/i18n/navigation";
import {cn} from "@/lib/utils";
import {ThemeToggle} from "@/components/theme-toggle";
import {LanguageSwitcher} from "@/components/language-switcher";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";
import Link from "next/link";
import {CONTACTS} from "@/data/contacts";
import {Github, Linkedin, Send, Mail} from "lucide-react";
import Logo from "@/components/logo";
import {useLocale} from "next-intl";

export default function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const locale = useLocale();

  const nav = [
    {href: "#projects", label: t("projects")},
    {href: "#about", label: t("about")},
    {href: "#contact", label: t("contact")},
    {href: "resume", label: t("resume")}
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
        <Link href={`/${locale}`} aria-label="Home"><Logo /></Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((item) => {
            const href = item.href === "resume" ? `/${locale}/resume` : `/${locale}${item.href}`;
            const isActive = item.href === "resume" ? pathname?.startsWith(`/${locale}/resume`) : false;
            return (
              <Link
                key={item.href}
                href={href}
                className={cn(
                  "text-muted-foreground hover:text-foreground transition-colors",
                  isActive && "text-foreground"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 px-4">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 grid gap-4">
                <nav className="grid gap-2">
                  {nav.map((item) => {
                    const href = item.href === "resume" ? `/${locale}/resume` : `/${locale}${item.href}`;
                    return (
                      <Link key={item.href} href={href} className="rounded-md px-2 py-2 text-base text-foreground hover:bg-accent">
                        {item.label}
                      </Link>
                    );
                  })}
                </nav>
                <div className="h-px bg-border" />
                <div className="grid gap-2">
                  <Button asChild>
                    <Link href="/resume.pdf" target="_blank">View Resume</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href={`/${locale}/resume`}>Open Resume Page</Link>
                  </Button>
                </div>
                <div className="h-px bg-border" />
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Link href={CONTACTS.github} aria-label="GitHub" className="hover:text-foreground"><Github className="size-5" /></Link>
                  <Link href={CONTACTS.linkedin} aria-label="LinkedIn" className="hover:text-foreground"><Linkedin className="size-5" /></Link>
                  <Link href={CONTACTS.telegram} aria-label="Telegram" className="hover:text-foreground"><Send className="size-5" /></Link>
                  <Link href={`mailto:${CONTACTS.email}`} aria-label="Email" className="hover:text-foreground"><Mail className="size-5" /></Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
