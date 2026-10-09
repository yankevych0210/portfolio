import Link from "next/link";
import {getTranslations} from "next-intl/server";
import {Badge} from "@/components/ui/badge";
import {ArrowRight, ArrowUpRight} from "lucide-react";
import {Section, SectionHeading} from "@/components/shared/section";
import {PROJECTS} from "@/data/projects";
import {EXPERIENCE} from "@/data/experience";
import type {Locale} from "@/i18n/locales";

export default async function Experience({locale}: {locale: Locale}) {
  const t = await getTranslations({locale, namespace: "experience"});
  return (
    <Section id="experience">
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />
      <ol className="relative space-y-6 border-l pl-6 sm:pl-8">
        {EXPERIENCE.map((e) => (
          <li key={e.company} className="relative">
            <span
              aria-hidden
              className={`absolute -left-[31px] top-6 size-3.5 rounded-full border-2 border-background sm:-left-[39px] ${e.current ? "bg-primary ring-4 ring-primary/20" : "bg-muted-foreground/40"}`}
            />
            <article className="rounded-2xl border bg-card p-5 sm:p-6">
              <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight">
                    {e.role} <span className="text-muted-foreground">· {e.company}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {e.type[locale]}
                    {e.context && <> · {e.context[locale]}</>}
                  </p>
                </div>
                <div className="flex shrink-0 items-center gap-2">
                  {e.current && <Badge className="bg-success/15 text-success hover:bg-success/15">{t("current")}</Badge>}
                  <span className="font-mono text-xs text-muted-foreground">{e.period[locale]}</span>
                </div>
              </header>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {e.bullets[locale].map((b) => (
                  <li key={b} className="flex gap-2.5">
                    <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap items-center gap-1.5">
                {e.stack.map((s) => (
                  <Badge key={s} variant="secondary" className="font-normal">{s}</Badge>
                ))}
              </div>
              {(e.links?.length || e.projects?.length) && (
                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 border-t pt-4 text-sm">
                  {e.projects?.map((slug) => (
                    <Link key={slug} href={`/${locale}/projects/${slug}`} className="inline-flex items-center gap-1 font-medium text-primary hover:underline">
                      {t("relatedProjects")}: {PROJECTS.find((p) => p.slug === slug)?.title} <ArrowRight className="size-3.5" />
                    </Link>
                  ))}
                  {e.links?.map((l) => (
                    <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">
                      {l.label} <ArrowUpRight className="size-3.5" />
                    </a>
                  ))}
                </div>
              )}
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
