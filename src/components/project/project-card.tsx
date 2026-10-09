import Link from "next/link";
import Image from "next/image";
import {ArrowUpRight, Github} from "lucide-react";
import {useTranslations} from "next-intl";
import {Badge} from "@/components/ui/badge";
import type {Project} from "@/data/projects";
import type {Locale} from "@/i18n/locales";

export default function ProjectCard({p, locale}: {p: Project; locale: Locale}) {
  const t = useTranslations("projects");
  const href = `/${locale}/projects/${p.slug}`;
  const maxStack = 4;
  const extra = p.stack.length - maxStack;

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-[box-shadow,transform,border-color] duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 has-[a:focus-visible]:ring-2 has-[a:focus-visible]:ring-ring">
      <div className="relative aspect-[16/10] overflow-hidden border-b bg-muted">
        <Image
          src={p.images[0]}
          alt=""
          fill
          sizes="(min-width: 1024px) 370px, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute left-3 top-3 flex gap-1.5">
          <Badge className="bg-background/85 text-foreground shadow-sm backdrop-blur hover:bg-background/85">{t(p.category)}</Badge>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="text-lg font-semibold tracking-tight">
              {/* The stretched link makes the whole card clickable while keeping a single tab stop. */}
              <Link href={href} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
                {p.title}
              </Link>
            </h3>
            <p className="mt-0.5 truncate text-xs text-muted-foreground">
              {[p.client, p.year].filter(Boolean).join(" · ")}
            </p>
          </div>
          <ArrowUpRight className="mt-1 size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        </div>

        <p className="text-pretty text-sm leading-relaxed text-muted-foreground">{p.summary[locale]}</p>

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-1" aria-label="Tech stack">
          {p.stack.slice(0, maxStack).map((s) => (
            <li key={s}>
              <Badge variant="secondary" className="font-normal">{s}</Badge>
            </li>
          ))}
          {extra > 0 && (
            <li>
              <Badge variant="outline" className="font-normal">+{extra}</Badge>
            </li>
          )}
        </ul>

        {(p.url || p.repo) && (
          <div className="relative z-10 flex gap-4 border-t pt-3 text-sm">
            {p.url && (
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-medium text-primary hover:underline">
                {t("live")} <ArrowUpRight className="size-3.5" />
              </a>
            )}
            {p.repo && (
              <a href={p.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-muted-foreground hover:text-foreground">
                <Github className="size-3.5" /> {t("code")}
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
