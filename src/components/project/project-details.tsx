import {getTranslations} from "next-intl/server";
import {ArrowUpRight, Check, Sparkles} from "lucide-react";
import {Badge} from "@/components/ui/badge";
import type {Project} from "@/data/projects";
import type {Locale} from "@/i18n/locales";

/** Overview, "what I built", engineering highlights, plus a sticky sidebar with stack and links. */
export default async function ProjectDetails({project, locale}: {project: Project; locale: Locale}) {
  const t = await getTranslations({locale, namespace: "project"});
  const links = [project.url, ...(project.links?.map((l) => l.href) ?? []), project.repo].filter((l): l is string => !!l);

  return (
    <div className="mt-14 grid gap-12 lg:grid-cols-[1.5fr_1fr]">
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold tracking-tight">{t("overview")}</h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{project.description[locale]}</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold tracking-tight">{t("features")}</h2>
          <ul className="mt-5 grid gap-3">
            {project.features[locale].map((f) => (
              <li key={f} className="flex gap-3 rounded-xl border bg-card p-4 text-sm leading-relaxed">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </section>

        {project.highlights[locale].length > 0 && (
          <section>
            <h2 className="text-2xl font-bold tracking-tight">{t("highlights")}</h2>
            <ul className="mt-5 grid gap-3">
              {project.highlights[locale].map((h) => (
                <li key={h} className="flex gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm leading-relaxed">
                  <Sparkles className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
        <section className="rounded-2xl border bg-card p-5">
          <h2 className="font-mono text-xs font-medium uppercase tracking-wider text-primary">{t("stack")}</h2>
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {project.stack.map((s) => (
              <li key={s}><Badge variant="secondary" className="font-normal">{s}</Badge></li>
            ))}
          </ul>
        </section>
        {links.length > 0 && (
          <section className="rounded-2xl border bg-card p-5">
            <h2 className="font-mono text-xs font-medium uppercase tracking-wider text-primary">{t("links")}</h2>
            <ul className="mt-3 space-y-2 text-sm">
              {links.map((href) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 break-all text-muted-foreground hover:text-primary">
                    {href.replace(/^https?:\/\//, "").replace(/\/$/, "")} <ArrowUpRight className="size-3.5 shrink-0" />
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </aside>
    </div>
  );
}
