import {getTranslations} from "next-intl/server";
import {ArrowUpRight, Award, GraduationCap} from "lucide-react";
import {Section, SectionHeading} from "@/components/shared/section";
import {EDUCATION} from "@/data/education";
import type {Locale} from "@/i18n/locales";

export default async function Education({locale}: {locale: Locale}) {
  const t = await getTranslations({locale, namespace: "education"});
  return (
    <Section id="education">
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
      <div className="grid gap-4 md:grid-cols-3">
        {EDUCATION.map((e, i) => (
          <article key={e.title.en} className="flex flex-col rounded-2xl border bg-card p-5">
            <div className="mb-4 grid size-10 place-items-center rounded-xl bg-primary/10 text-primary">
              {i === 0 ? <Award className="size-5" /> : <GraduationCap className="size-5" />}
            </div>
            <p className="font-mono text-xs text-muted-foreground">{e.period[locale]}</p>
            <h3 className="mt-1 font-semibold leading-snug">{e.title[locale]}</h3>
            <p className="text-sm text-muted-foreground">{e.issuer[locale]}</p>
            {e.description && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.description[locale]}</p>}
            {e.link && (
              <a href={e.link.href} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-primary hover:underline">
                {e.link.label} <ArrowUpRight className="size-3.5" />
              </a>
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}
