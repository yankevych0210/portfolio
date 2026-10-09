import {getTranslations} from "next-intl/server";
import ProjectsGrid from "@/components/project/projects-grid";
import {Section, SectionHeading} from "@/components/shared/section";
import type {Locale} from "@/i18n/locales";

export default async function Projects({locale}: {locale: Locale}) {
  const t = await getTranslations({locale, namespace: "projects"});
  return (
    <Section id="projects">
      <SectionHeading eyebrow={t("eyebrow")} title={t("title")} subtitle={t("subtitle")} />
      <ProjectsGrid locale={locale} />
    </Section>
  );
}
