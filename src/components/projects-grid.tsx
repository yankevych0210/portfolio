"use client";

import { AnimatePresence, motion } from "framer-motion";
import {useMemo, useState} from "react";
import {Button} from "@/components/ui/button";
import ProjectCard from "@/components/project-card";
import {PROJECTS, type Project} from "@/data/projects";
import {useTranslations} from "next-intl";

export default function ProjectsGrid({locale}: {locale: string}) {
  const t = useTranslations("projects");
  const [active, setActive] = useState<string>("all");

  const allTags = useMemo(() => {
    const set = new Set<string>();
    PROJECTS.forEach((p) => p.tags?.forEach((tag) => set.add(tag)));
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    if (active === "all") return PROJECTS;
    return PROJECTS.filter((p) => p.tags?.includes(active));
  }, [active]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button
          variant={active === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setActive("all")}
          className="transition-transform active:scale-[0.98]"
        >
          {t("all")}
        </Button>
        {allTags.map((tag) => (
          <Button
            key={tag}
            variant={active === tag ? "default" : "outline"}
            size="sm"
            onClick={() => setActive(tag)}
            className="transition-transform active:scale-[0.98]"
          >
            {tag}
          </Button>
        ))}
      </div>
      <motion.div
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        transition={{ layout: { type: "spring", stiffness: 160, damping: 20 } }}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((p: Project) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 180, damping: 18, mass: 0.5 }}
            >
              <ProjectCard p={p} locale={locale} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
