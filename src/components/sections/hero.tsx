import Image from "next/image";
import Link from "next/link";
import {getTranslations} from "next-intl/server";
import {Button} from "@/components/ui/button";
import {ArrowRight, Download, Github, Linkedin, MapPin, Send} from "lucide-react";
import {PROJECTS} from "@/data/projects";
import {CONTACTS} from "@/config/site";
import {EXPERIENCE} from "@/data/experience";
import {PROFILE, yearsOfExperience} from "@/data/profile";
import type {Locale} from "@/i18n/locales";

export default async function Hero({locale}: {locale: Locale}) {
  const t = await getTranslations({locale, namespace: "hero"});
  const companies = new Set([...EXPERIENCE.map((e) => e.company), ...PROJECTS.filter((p) => p.category === "commercial").map((p) => p.client)]).size;
  const stats = [
    {value: `${yearsOfExperience()}+`, label: t("stat_years")},
    {value: `${PROJECTS.length}`, label: t("stat_projects")},
    {value: `${companies}`, label: t("stat_companies")}
  ];

  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl dark:bg-primary/10" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-12 sm:pt-20 md:grid-cols-[1.35fr_1fr] md:pb-28">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            {t("available")}
          </div>

          <div className="space-y-3">
            <p className="text-lg text-muted-foreground">{t("greeting")} 👋</p>
            <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-6xl">
              {t("role")}
            </h1>
            <p className="font-mono text-sm text-primary sm:text-base">{t("focus")}</p>
          </div>

          <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">{t("tagline")}</p>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="gap-2">
              <Link href="#projects">{t("cta_projects")} <ArrowRight className="size-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <Link href="#contact">{t("cta_contact")}</Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="gap-2">
              {/* Plain anchor: a static PDF should not go through the client router. */}
              <a href="/resume.pdf" download="Nazar-Yankevych-CV.pdf"><Download className="size-4" /> {t("cta_resume")}</a>
            </Button>
          </div>

          <dl className="grid max-w-lg grid-cols-3 gap-4 border-t pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="text-3xl font-bold tracking-tight">{s.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-[340px]">
          <div aria-hidden className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-primary/40 via-primary/5 to-transparent blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border bg-card shadow-2xl shadow-primary/10">
            <Image
              src="/profile.webp"
              alt={PROFILE.name[locale]}
              width={800}
              height={800}
              priority
              sizes="(min-width: 768px) 340px, 80vw"
              className="aspect-[4/5] w-full object-cover object-top"
            />
            <div className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-xl border bg-background/85 px-4 py-3 backdrop-blur-md">
              <div>
                <p className="text-sm font-semibold">{PROFILE.name[locale]}</p>
                <p className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="size-3" /> {PROFILE.location[locale]}
                </p>
              </div>
              <div className="flex gap-1">
                <a href={CONTACTS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid size-8 place-items-center rounded-md hover:bg-accent"><Github className="size-4" /></a>
                <a href={CONTACTS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid size-8 place-items-center rounded-md hover:bg-accent"><Linkedin className="size-4" /></a>
                <a href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="grid size-8 place-items-center rounded-md hover:bg-accent"><Send className="size-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
