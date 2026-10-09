import {getTranslations} from "next-intl/server";
import {Button} from "@/components/ui/button";
import CopyEmail from "@/components/shared/copy-email";
import {Github, Linkedin, Mail, MapPin, Phone, Send} from "lucide-react";
import {Section} from "@/components/shared/section";
import {CONTACTS} from "@/config/site";
import {PROFILE} from "@/data/profile";
import type {Locale} from "@/i18n/locales";

export default async function Contact({locale}: {locale: Locale}) {
  const t = await getTranslations({locale, namespace: "contact"});
  const items = [
    {icon: Send, label: t("telegram"), value: CONTACTS.telegramHandle, href: CONTACTS.telegram},
    {icon: Mail, label: t("email"), value: CONTACTS.email, href: `mailto:${CONTACTS.email}`},
    {icon: Linkedin, label: t("linkedin"), value: CONTACTS.linkedinHandle, href: CONTACTS.linkedin},
    {icon: Github, label: t("github"), value: CONTACTS.githubHandle, href: CONTACTS.github},
    {icon: Phone, label: t("phone"), value: CONTACTS.phoneDisplay, href: `tel:${CONTACTS.phone}`},
    {icon: MapPin, label: t("location"), value: PROFILE.location[locale], href: "https://maps.google.com/?q=Kremenchuk,+Ukraine"}
  ];
  return (
    <Section id="contact">
      <div className="relative overflow-hidden rounded-3xl border bg-card px-6 py-12 sm:px-12 sm:py-16">
        <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" />
        <div aria-hidden className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div className="space-y-5">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-primary">{t("eyebrow")}</p>
            <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">{t("title")}</h2>
            <p className="text-pretty text-muted-foreground">{t("subtitle")}</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="lg" className="gap-2">
                <a href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer"><Send className="size-4" /> {t("writeTelegram")}</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2">
                <a href={`mailto:${CONTACTS.email}`}><Mail className="size-4" /> {t("write")}</a>
              </Button>
              <CopyEmail variant="ghost" />
            </div>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {items.map(({icon: Icon, label, value, href}) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex h-full items-center gap-3 rounded-xl border bg-background/60 p-3.5 transition-colors hover:border-primary/40 hover:bg-background"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">{label}</span>
                    <span className="block truncate text-sm font-medium group-hover:text-primary">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
