import Link from "next/link";
import {getTranslations} from "next-intl/server";
import {ArrowLeft, ArrowRight} from "lucide-react";
import {PROJECTS} from "@/data/projects";
import type {Locale} from "@/i18n/locales";

/** Previous / next case links; wraps around at both ends. */
export default async function ProjectNav({slug, locale}: {slug: string; locale: Locale}) {
  const t = await getTranslations({locale, namespace: "project"});
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const prev = PROJECTS[(idx - 1 + PROJECTS.length) % PROJECTS.length];
  const next = PROJECTS[(idx + 1) % PROJECTS.length];

  return (
    <nav aria-label="Projects" className="mt-20 grid gap-4 border-t pt-8 sm:grid-cols-2">
      <Link href={`/${locale}/projects/${prev.slug}`} className="group rounded-2xl border p-5 transition-colors hover:border-primary/40">
        <span className="flex items-center gap-1 text-xs text-muted-foreground"><ArrowLeft className="size-3.5" /> {t("prev")}</span>
        <span className="mt-1 block font-semibold group-hover:text-primary">{prev.title}</span>
      </Link>
      <Link href={`/${locale}/projects/${next.slug}`} className="group rounded-2xl border p-5 text-right transition-colors hover:border-primary/40">
        <span className="flex items-center justify-end gap-1 text-xs text-muted-foreground">{t("next")} <ArrowRight className="size-3.5" /></span>
        <span className="mt-1 block font-semibold group-hover:text-primary">{next.title}</span>
      </Link>
    </nav>
  );
}
