import {Card} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {EDUCATION} from "@/data/education";
import {GraduationCap, Calendar, ExternalLink, ChevronRight, X} from "lucide-react";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogClose} from "@/components/ui/dialog";

export default function EducationList() {
  return (
    <div className="grid gap-4">
      {EDUCATION.map((item) => (
        <Dialog key={item.institution + item.period}>
          <DialogTrigger asChild>
            <Card className="group relative overflow-hidden p-4 cursor-pointer ring-1 ring-border hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative flex items-start gap-3">
                <div className="shrink-0 grid place-items-center rounded-full bg-primary/10 text-primary size-10 group-hover:bg-primary/15 transition-all group-hover:scale-105">
                  <GraduationCap className="size-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-base font-semibold tracking-tight transition-colors group-hover:text-foreground">
                      {item.institution} — {item.degree}
                    </h3>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <Calendar className="size-3.5" /> {item.period}
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {item.description}
                  </p>
                  {item.tags && item.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.tags.map((t) => (
                        <Badge key={t} variant="outline" className="text-xs py-0.5 transition-colors group-hover:border-primary/40">{t}</Badge>
                      ))}
                    </div>
                  )}
                </div>
                <ChevronRight className="mt-1 shrink-0 size-5 text-muted-foreground/70 transition-transform group-hover:translate-x-0.5" />
              </div>
            </Card>
          </DialogTrigger>
          <DialogContent className="max-w-xl relative">
            <DialogClose asChild>
              <Button aria-label="Close" variant="ghost" size="icon" className="absolute right-2 top-2">
                <X className="size-4" />
              </Button>
            </DialogClose>
            <DialogHeader>
              <DialogTitle>{item.institution} — {item.degree}</DialogTitle>
            </DialogHeader>
            <div className="text-sm text-muted-foreground">{item.period}</div>
            <p className="mt-3 text-sm leading-6">{item.description}</p>
            {item.certificateUrl && (
              <div className="mt-4">
                <Button asChild variant="secondary" size="sm" className="gap-1">
                  <Link href={item.certificateUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="size-4" /> View Certificate
                  </Link>
                </Button>
              </div>
            )}
            {item.tags && item.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.tags.map((t) => (
                  <Badge key={t} variant="secondary" className="text-xs py-0.5">{t}</Badge>
                ))}
              </div>
            )}
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
