import Link from "next/link";
import {Badge} from "@/components/ui/badge";
import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import type {Project} from "@/data/projects";
import Image from "next/image";
import {ExternalLink, Code} from "lucide-react";

export default function ProjectCard({p, locale}: {p: Project; locale: string}) {
  return (
    <Card className="group p-4 transition-all duration-300 h-full hover:shadow-lg hover:-translate-y-0.5">
      <div className="space-y-3">
        <div className="relative aspect-[16/9] w-full rounded-lg ring-1 ring-border overflow-hidden">
          {p.status && (
            <Badge className="absolute left-2 top-2">{p.status}</Badge>
          )}
          {p.image ? (
            <Image src={p.image} alt={p.title} fill className="object-cover" />
          ) : (
            <div className="absolute inset-0 bg-accent/30" />
          )}
        </div>
        <h3 className="font-semibold tracking-tight transition-transform duration-200 group-hover:translate-x-[1px]">
          <Link href={`/${locale}/projects/${p.slug}`} className="hover:underline">
            {p.title}
          </Link>
        </h3>
        <p className="text-sm text-muted-foreground">{p.summary}</p>
        <div className="flex flex-wrap gap-1 pt-1">
          {p.stack.map((s) => (
            <Badge key={s} variant="outline" className="text-xs py-0.5">{s}</Badge>
          ))}
        </div>
        <div className="pt-2 flex gap-2">
          <Button asChild size="sm">
            <Link href={`/${locale}/projects/${p.slug}`}>View Case</Link>
          </Button>
          {p.url && (
            <Button asChild variant="outline" size="sm" className="gap-1">
              <Link href={p.url} target="_blank" rel="noopener noreferrer">
                Visit Site
                <ExternalLink className="size-3.5" />
              </Link>
            </Button>
          )}
          {p.repo && (
            <Button asChild variant="ghost" size="sm" className="gap-1">
              <Link href={p.repo} target="_blank" rel="noopener noreferrer">
                <Code className="size-3.5" />
                View Code
              </Link>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
