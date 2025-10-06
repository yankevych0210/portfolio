import {Card} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {EXPERIENCE} from "@/data/experience";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose} from "@/components/ui/dialog";
import {Briefcase, Calendar, Rocket, ChevronRight, ExternalLink, X} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function ExperienceList() {
  return (
    <div className="grid gap-4">
      {EXPERIENCE.map((item) => (
        <Dialog key={item.company + item.period}>
          <DialogTrigger asChild>
            <Card className="group relative overflow-hidden p-4 cursor-pointer ring-1 ring-border hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-start gap-3">
                <div className="shrink-0 grid place-items-center rounded-full bg-primary/10 text-primary size-10 group-hover:bg-primary/15 transition-all group-hover:scale-105">
                  {item.type === 'Full-time' && <Briefcase className="size-5" />}
                  {item.type === 'Contract' && <Calendar className="size-5" />}
                  {item.type === 'Freelance' && <Calendar className="size-5" />}
                  {item.type === 'Project' && <Rocket className="size-5" />}
                  {!item.type && <Briefcase className="size-5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-base font-semibold tracking-tight transition-colors group-hover:text-foreground">
                      {item.company} — {item.role}
                    </h3>
                    <div className="text-xs text-muted-foreground">
                      {item.period}{item.type ? ` • ${item.type}` : ''}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {item.tags.map((t) => (
                      <Badge key={t} variant="outline" className="text-xs py-0.5 transition-colors group-hover:border-primary/40">{t}</Badge>
                    ))}
                  </div>
                </div>
                <ChevronRight className="mt-1 shrink-0 size-5 text-muted-foreground/70 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Card>
          </DialogTrigger>
          <DialogContent className="max-w-xl relative space-y-3 sm:space-y-4">
            <DialogClose asChild>
              <Button aria-label="Close" variant="ghost" size="icon" className="absolute right-2 top-2">
                <X className="size-4" />
              </Button>
            </DialogClose>
            <DialogHeader>
              <DialogTitle>{item.company} — {item.role}</DialogTitle>
            </DialogHeader>
            <div className="text-sm text-muted-foreground">{item.period}{item.type ? ` • ${item.type}` : ''}</div>
            <p className="text-sm leading-6">{item.description}</p>
            {item.projectUrls && item.projectUrls.length > 0 && (
              <div className="grid gap-2">
                <div className="text-xs uppercase tracking-wide text-muted-foreground">Project{item.projectUrls.length > 1 ? 's' : ''}{item.projectName ? `: ${item.projectName}` : ''}</div>
                <div className="flex flex-wrap gap-2">
                  {item.projectUrls.map((url) => (
                    <Button asChild key={url} variant="secondary" size="sm" className="gap-1">
                      <Link href={url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="size-4" /> {new URL(url).hostname}
                      </Link>
                    </Button>
                  ))}
                </div>
              </div>
            )}
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((t) => (
                <Badge key={t} variant="secondary" className="text-xs py-0.5">{t}</Badge>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
