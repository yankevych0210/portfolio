import {getTranslations} from "next-intl/server";
import {Section, SectionHeading} from "@/components/shared/section";
import {PROFILE, LANGUAGES} from "@/data/profile";
import type {Locale} from "@/i18n/locales";

export default async function About({locale}: {locale: Locale}) {
  const t = await getTranslations({locale, namespace: "about"});
  const points = t.raw("points") as {title: string; text: string}[];
  return (
    <Section id="about">
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} />
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          <p>{t("p1")}</p>
          <p>{t("p2")}</p>
          <div className="flex flex-wrap gap-x-8 gap-y-3 pt-4 text-sm">
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-primary">{t("languages")}</p>
              <ul className="mt-2 space-y-1">
                {LANGUAGES.map((l) => (
                  <li key={l.name.en}>
                    <span className="font-medium text-foreground">{l.name[locale]}</span> — {l.level[locale]}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-primary">{t("location")}</p>
              <p className="mt-2 font-medium text-foreground">{PROFILE.location[locale]}</p>
            </div>
          </div>
        </div>
        <ul className="grid gap-4">
          {points.map((p, i) => (
            <li key={p.title} className="flex gap-4 rounded-2xl border bg-card p-5">
              <span className="font-mono text-sm font-semibold text-primary">0{i + 1}</span>
              <div>
                <h3 className="font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
