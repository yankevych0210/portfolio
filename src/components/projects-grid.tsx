"use client";

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
        >
          {t("all")}
        </Button>
        {allTags.map((tag) => (
          <Button
            key={tag}
            variant={active === tag ? "default" : "outline"}
            size="sm"
            onClick={() => setActive(tag)}
          >
            {tag}
          </Button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((p: Project) => (
          <ProjectCard key={p.slug} p={p} locale={locale} />
        ))}
      </div>
    </div>
  );
}
