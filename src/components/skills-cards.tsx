import {Card} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Code2, Palette, Wrench, Languages} from "lucide-react";

export default function SkillsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {/* Development Stack (first) */}
      <SkillCard
        icon={<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300"><Code2 className="size-5" /></span>}
        title="Development Stack"
        items={["HTML/CSS", "JavaScript (JS)", "TypeScript", "PHP", "Node.js"]}
      />

      {/* UI Kits (second) */}
      <SkillCard
        icon={<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-300"><Palette className="size-5" /></span>}
        title="UI Kits"
        items={[
          "Tailwind CSS",
          "shadcn/ui",
          "Bootstrap",
          "HeroUI",
          "Bulma",
          "Foundation",
          "Metro 4",
          "Materialize",
          "WindyCSS",
          "Tachyons",
          "SCSS/SASS"
        ]}
      />

      {/* Libraries & Frameworks */}
      <SkillCard
        icon={<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-300"><Wrench className="size-5" /></span>}
        title="Libraries & Frameworks"
        items={["React", "Redux", "jQuery", "GraphQL", "JSX"]}
      />

      {/* Tools & Design */}
      <SkillCard
        icon={<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-300"><Languages className="size-5" /></span>}
        title="Tools & Design"
        items={["Git", "REST", "Web", "Figma", "Macros"]}
      />

    </div>
  );
}

function SkillCard({icon, title, items}: {icon: React.ReactNode; title: string; items: string[]}) {
  return (
    <Card className="p-4">
      <div className="flex items-center gap-3 mb-3 text-foreground">
        {icon}
        <h3 className="font-medium">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {items.map((i) => (
          <Badge key={i} variant="secondary" className="text-xs py-0.5">{i}</Badge>
        ))}
      </div>
    </Card>
  );
}
