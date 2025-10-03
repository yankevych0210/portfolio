import {Card} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Code2, Palette, Wrench, Languages} from "lucide-react";

export default function SkillsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <SkillCard
        icon={<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-300"><Code2 className="size-5" /></span>}
        title="Frontend"
        items={["React", "Next.js", "TypeScript", "Redux", "SPA", "SSR/SSG"]}
      />
      <SkillCard
        icon={<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-300"><Palette className="size-5" /></span>}
        title="Styling"
        items={["Tailwind CSS", "SCSS/SASS", "CSS3", "Bootstrap", "Animations"]}
      />
      <SkillCard
        icon={<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-300"><Wrench className="size-5" /></span>}
        title="Tools"
        items={["Git", "Node.js", "GraphQL", "REST", "Vercel/Netlify"]}
      />
      <SkillCard
        icon={<span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-300"><Languages className="size-5" /></span>}
        title="Languages"
        items={["Ukrainian (C2)", "Russian (C2)", "English (B1)"]}
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
