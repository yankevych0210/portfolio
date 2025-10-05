"use client";

import { motion } from "framer-motion";
import {useTranslations} from "next-intl";
import {usePathname} from "@/i18n/navigation";
import {cn} from "@/lib/utils";
import {ThemeToggle} from "@/components/theme-toggle";
import {LanguageSwitcher} from "@/components/language-switcher";
import {Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose, SheetDescription} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {CONTACTS} from "@/data/contacts";
import {Github, Linkedin, Send, Mail} from "lucide-react";
import Logo from "@/components/logo";
import {useLocale} from "next-intl";

export default function Header() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const locale = useLocale();
  const router = useRouter();

  const nav = [
    {href: "#projects", label: t("projects")},
    {href: "#experience", label: t("experience")},
    {href: "#contact", label: t("contact")},
    {href: "resume", label: t("resume")}
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b">
      <motion.div
        initial={{ y: -8, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 160, damping: 18, mass: 0.6 }}
        className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4"
      >
        <Link href={`/${locale}`} aria-label="Home"><Logo /></Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((item) => {
            const isHome = pathname === `/${locale}`;
            const isAnchor = item.href.startsWith("#");
            const href = item.href === "resume"
              ? `/${locale}/resume`
              : (isHome && isAnchor ? item.href : `/${locale}${item.href}`);
            const isActive = item.href === "resume" ? pathname?.startsWith(`/${locale}/resume`) : false;
            const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
              if (isHome && isAnchor) {
                e.preventDefault();
                const id = item.href.slice(1);
                const el = document.getElementById(id);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                // update URL hash without scrolling again
                history.replaceState(null, "", `#${id}`);
              }
            };
            return (
              <Link
                key={item.href}
                href={href}
                onClick={onClick}
                className={cn(
                  "text-muted-foreground hover:text-foreground transition-colors relative after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:scale-x-0 after:bg-current after:opacity-60 hover:after:scale-x-100 after:transition-transform after:origin-left",
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
            <SheetContent
              side="right"
              className="w-72 px-4"
              // Prevent focus restoration from scrolling the page to the top on close
              onCloseAutoFocus={(e) => e.preventDefault()}
            >
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription className="sr-only">Site navigation</SheetDescription>
              </SheetHeader>
              <div className="mt-6 grid gap-4">
                <nav className="grid gap-2">
                  {nav.map((item) => {
                    const isHome = pathname === `/${locale}`;
                    const isAnchor = item.href.startsWith("#");
                    const href = item.href === "resume"
                      ? `/${locale}/resume`
                      : (isHome && isAnchor ? item.href : `/${locale}${item.href}`);
                    const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
                      if (isHome && isAnchor) {
                        e.preventDefault();
                        const id = item.href.slice(1);
                        const el = document.getElementById(id);
                        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                        history.replaceState(null, "", `#${id}`);
                      }
                    };
                    return (
                      <SheetClose asChild key={item.href}>
                        <Link href={href} onClick={onClick} className="rounded-md px-2 py-2 text-base text-foreground hover:bg-accent">
                          {item.label}
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>
                <div className="h-px bg-border" />
                <div className="grid gap-2">
                  <Button asChild>
                    {/* Use native anchor to avoid Next prefetching with _rsc */}
                    <a href="/resume.pdf" target="_blank" rel="noreferrer noopener">View Resume</a>
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
      </motion.div>
    </header>
  );
}
