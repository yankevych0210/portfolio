import type {MetadataRoute} from "next";
import {htmlLang, locales} from "@/i18n/locales";
import {PROJECTS} from "@/data/projects";
import {SITE_URL} from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {path: "", priority: 1},
    {path: "/resume", priority: 0.8},
    ...PROJECTS.map((p) => ({path: `/projects/${p.slug}`, priority: p.featured ? 0.8 : 0.6}))
  ];

  return routes.flatMap(({path, priority}) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority,
      alternates: {languages: Object.fromEntries(locales.map((l) => [htmlLang[l], `${SITE_URL}/${l}${path}`]))}
    }))
  );
}
