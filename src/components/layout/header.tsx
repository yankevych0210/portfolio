"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";
import {useLocale, useTranslations} from "next-intl";
import {Menu, FileText, Github, Linkedin, Send, Mail} from "lucide-react";
import {cn} from "@/lib/utils";
import {ThemeToggle} from "@/components/layout/theme-toggle";
import {LanguageSwitcher} from "@/components/layout/language-switcher";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose, SheetDescription} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import Logo from "@/components/layout/logo";
import {CONTACTS} from "@/config/site";

const SECTIONS = ["about", "projects", "experience", "skills", "contact"] as const;

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const isHome = pathname === `/${locale}`;
  const [active, setActive] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in the middle of the viewport.
  useEffect(() => {
    if (!isHome) {
      setActive(null);
      return;
    }
    const els = SECTIONS.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      {rootMargin: "-45% 0px -50% 0px"}
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [isHome]);

  const items = SECTIONS.map((id) => ({id, href: `/${locale}#${id}`, label: t(id)}));
  const resumeHref = `/${locale}/resume`;
  const onResume = pathname?.startsWith(resumeHref);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full transition-[background-color,border-color,box-shadow] duration-300",
        scrolled ? "border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/65" : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href={`/${locale}`} aria-label="Nazar Yankevych — home" className="rounded-md">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-1 text-sm md:flex">
          {items.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              aria-current={active === item.id ? "true" : undefined}
              className={cn(
                "rounded-md px-3 py-2 text-muted-foreground transition-colors hover:text-foreground",
                active === item.id && "text-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={resumeHref}
            aria-current={onResume ? "page" : undefined}
            className={cn("rounded-md px-3 py-2 text-muted-foreground transition-colors hover:text-foreground", onResume && "text-foreground")}
          >
            {t("resume")}
          </Link>
        </nav>

        <div className="flex items-center gap-1.5">
          <LanguageSwitcher />
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label={t("menu")}>
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 px-4" onCloseAutoFocus={(e) => e.preventDefault()}>
              <SheetHeader className="px-0">
                <SheetTitle>{t("menu")}</SheetTitle>
                <SheetDescription className="sr-only">Site navigation</SheetDescription>
              </SheetHeader>
              <nav aria-label="Mobile" className="grid gap-1">
                {items.map((item) => (
                  <SheetClose asChild key={item.id}>
                    <Link href={item.href} className="rounded-md px-3 py-2.5 text-base hover:bg-accent">
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <div className="my-4 h-px bg-border" />
              <SheetClose asChild>
                <Button asChild className="w-full gap-2">
                  <Link href={resumeHref}>
                    <FileText className="size-4" /> {t("resume")}
                  </Link>
                </Button>
              </SheetClose>
              <div className="mt-6 flex items-center gap-4 px-1 text-muted-foreground">
                <a href={CONTACTS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-foreground"><Github className="size-5" /></a>
                <a href={CONTACTS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin className="size-5" /></a>
                <a href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:text-foreground"><Send className="size-5" /></a>
                <a href={`mailto:${CONTACTS.email}`} aria-label="Email" className="hover:text-foreground"><Mail className="size-5" /></a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
