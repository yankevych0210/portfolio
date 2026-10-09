import Image from "next/image";
import Link from "next/link";
import {getTranslations} from "next-intl/server";
import {ArrowLeft, ArrowUpRight, Github, Info} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import type {Project} from "@/data/projects";
import type {Locale} from "@/i18n/locales";

/** Back link, title, CTAs, key facts, cover screenshot and an optional caveat note. */
export default async function ProjectHeader({project, locale}: {project: Project; locale: Locale}) {
  const t = await getTranslations({locale, namespace: "project"});
  const tp = await getTranslations({locale, namespace: "projects"});

  const facts = [
    {label: t("role"), value: project.role[locale]},
    project.client ? {label: t("client"), value: project.client} : null,
    {label: t("year"), value: project.year},
    {label: t("category"), value: tp(project.category)}
  ].filter((f): f is {label: string; value: string} => f !== null);

  return (
    <>
      <Link href={`/${locale}#projects`} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-4" /> {t("back")}
      </Link>

      <header className="mt-6 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div className="space-y-4">
          <Badge variant="secondary">{tp(project.category)}</Badge>
          <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">{project.title}</h1>
          <p className="max-w-2xl text-pretty text-lg text-muted-foreground">{project.summary[locale]}</p>
          <div className="flex flex-wrap gap-3 pt-1">
            {project.url && (
              <Button asChild size="lg" className="gap-2">
                <a href={project.url} target="_blank" rel="noopener noreferrer">{t("live")} <ArrowUpRight className="size-4" /></a>
              </Button>
            )}
            {project.repo && (
              <Button asChild size="lg" variant="outline" className="gap-2">
                <a href={project.repo} target="_blank" rel="noopener noreferrer"><Github className="size-4" /> {t("code")}</a>
              </Button>
            )}
          </div>
        </div>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-border">
          {facts.map((f) => (
            <div key={f.label} className="bg-card p-4">
              <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">{f.label}</dt>
              <dd className="mt-1 text-sm font-medium">{f.value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="relative mt-10 overflow-hidden rounded-2xl border bg-muted shadow-2xl shadow-primary/5">
        <Image
          src={project.images[0]}
          alt={`${project.title} — ${t("screenshot")} 1`}
          width={1600}
          height={1000}
          priority
          sizes="(min-width: 1152px) 1120px, 100vw"
          className="h-auto w-full"
        />
      </div>

      {project.note && (
        <p className="mt-4 flex items-start gap-2 rounded-xl border border-dashed p-3 text-sm text-muted-foreground">
          <Info className="mt-0.5 size-4 shrink-0 text-primary" /> {project.note[locale]}
        </p>
      )}
    </>
  );
}
