import {getTranslations} from "next-intl/server";
import {Badge} from "@/components/ui/badge";
import {Section, SectionHeading} from "@/components/shared/section";
import {SKILLS} from "@/data/skills";
import type {Locale} from "@/i18n/locales";

export default async function Skills({locale}: {locale: Locale}) {
  const t = await getTranslations({locale, namespace: "skills"});
  return (
    <Section id="skills">
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {SKILLS.map((g) => (
          <div key={g.title.en} className="rounded-2xl border bg-card p-5">
            <h3 className="font-mono text-xs font-medium uppercase tracking-wider text-primary">{g.title[locale]}</h3>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {g.items.map((s) => (
                <li key={s}>
                  <Badge variant="secondary" className="font-normal">{s}</Badge>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
