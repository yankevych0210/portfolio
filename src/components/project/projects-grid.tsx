"use client";

import {AnimatePresence, motion, useReducedMotion} from "framer-motion";
import {useMemo, useState} from "react";
import {useTranslations} from "next-intl";
import {ChevronDown} from "lucide-react";
import ProjectCard from "@/components/project/project-card";
import {CATEGORY_ORDER, PROJECTS, type ProjectCategory} from "@/data/projects";
import type {Locale} from "@/i18n/locales";
import {cn} from "@/lib/utils";

type Filter = "all" | ProjectCategory;

const INITIAL_COUNT = 9;

export default function ProjectsGrid({locale}: {locale: Locale}) {
  const t = useTranslations("projects");
  const reduce = useReducedMotion();
  const [active, setActive] = useState<Filter>("all");
  const [expanded, setExpanded] = useState(false);

  const counts = useMemo(() => {
    const c: Record<Filter, number> = {all: PROJECTS.length, commercial: 0, product: 0, test: 0, learning: 0};
    for (const p of PROJECTS) c[p.category]++;
    return c;
  }, []);

  const list = useMemo(() => {
    if (active !== "all") return PROJECTS.filter((p) => p.category === active);
    // "All": featured first, then by category order, keeping data order inside groups.
    return [...PROJECTS].sort(
      (a, b) => Number(!!b.featured) - Number(!!a.featured) || CATEGORY_ORDER.indexOf(a.category) - CATEGORY_ORDER.indexOf(b.category)
    );
  }, [active]);

  const filters: Filter[] = ["all", ...CATEGORY_ORDER];
  // The "All" tab starts collapsed so the page isn't an endless wall of cards.
  const collapsed = active === "all" && !expanded && list.length > INITIAL_COUNT;
  const visible = collapsed ? list.slice(0, INITIAL_COUNT) : list;

  return (
    <div className="space-y-6">
      <div role="tablist" aria-label={t("title")} className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none]">
        {filters.map((f) => (
          <button
            key={f}
            role="tab"
            type="button"
            aria-selected={active === f}
            onClick={() => setActive(f)}
            className={cn(
              "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === f ? "border-primary bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
            )}
          >
            {t(f)}
            <span className={cn("rounded-full px-1.5 text-xs tabular-nums", active === f ? "bg-black/20" : "bg-muted")}>{counts[f]}</span>
          </button>
        ))}
      </div>

      <motion.ul layout={!reduce} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((p) => (
            <motion.li
              key={p.slug}
              layout={!reduce}
              initial={{opacity: 0, scale: 0.98}}
              animate={{opacity: 1, scale: 1}}
              exit={{opacity: 0, scale: 0.98}}
              transition={{duration: 0.25}}
            >
              <ProjectCard p={p} locale={locale} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      {active === "all" && list.length > INITIAL_COUNT && (
        <div className="flex justify-center pt-2">
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="inline-flex items-center gap-2 rounded-full border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/40 hover:text-primary"
          >
            {expanded ? t("showLess") : t("showAll", {count: list.length})}
            <ChevronDown className={cn("size-4 transition-transform", expanded && "rotate-180")} />
          </button>
        </div>
      )}
    </div>
  );
}
