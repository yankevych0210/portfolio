import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {getTranslations, setRequestLocale} from "next-intl/server";
import ProjectHeader from "@/components/project/project-header";
import ProjectDetails from "@/components/project/project-details";
import ProjectGallery from "@/components/project/project-gallery";
import ProjectNav from "@/components/project/project-nav";
import JsonLd from "@/components/shared/json-ld";
import {PROJECTS, getProject} from "@/data/projects";
import {SITE_NAME, SITE_URL} from "@/config/site";
import {isLocale, locales} from "@/i18n/locales";
import {alternatesFor} from "@/lib/seo";

type Params = Promise<{locale: string; slug: string}>;

export function generateStaticParams() {
  return locales.flatMap((locale) => PROJECTS.map((p) => ({locale, slug: p.slug})));
}

export async function generateMetadata({params}: {params: Params}): Promise<Metadata> {
  const {locale, slug} = await params;
  const p = getProject(slug);
  if (!p || !isLocale(locale)) return {};
  return {
    title: p.title,
    description: p.summary[locale],
    alternates: alternatesFor(locale, `/projects/${slug}`),
    openGraph: {
      type: "article",
      title: `${p.title} — ${SITE_NAME}`,
      description: p.summary[locale],
      url: `/${locale}/projects/${slug}`,
      images: [{url: p.images[0], alt: p.title}]
    },
    twitter: {card: "summary_large_image", title: p.title, description: p.summary[locale], images: [p.images[0]]}
  };
}

export default async function ProjectPage({params}: {params: Params}) {
  const {locale, slug} = await params;
  if (!isLocale(locale)) notFound();
  const project = getProject(slug);
  if (!project) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({locale, namespace: "project"});

  return (
    <main className="mx-auto max-w-6xl px-4 pb-8 pt-8 sm:pt-12">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.title,
          description: project.summary[locale],
          url: `${SITE_URL}/${locale}/projects/${slug}`,
          image: `${SITE_URL}${project.images[0]}`,
          dateCreated: project.year.slice(0, 4),
          author: {"@type": "Person", name: SITE_NAME, url: SITE_URL},
          keywords: project.stack.join(", ")
        }}
      />

      <ProjectHeader project={project} locale={locale} />
      <ProjectDetails project={project} locale={locale} />

      {(project.images.length > 1 || project.mobileImage) && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight">{t("gallery")}</h2>
          <div className="mt-6">
            <ProjectGallery
              images={project.images.slice(1)}
              mobileImage={project.mobileImage}
              alt={project.title}
              labels={{screenshot: t("screenshot"), mobile: t("mobile")}}
            />
          </div>
        </section>
      )}

      <ProjectNav slug={slug} locale={locale} />
    </main>
  );
}
