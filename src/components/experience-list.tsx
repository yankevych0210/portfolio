import {Card} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {EXPERIENCE} from "@/data/experience";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";

export default function ExperienceList() {
  return (
    <div className="grid gap-4">
      {EXPERIENCE.map((item) => (
        <Dialog key={item.company + item.period}>
          <DialogTrigger asChild>
            <Card className="p-4 cursor-pointer hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base font-semibold tracking-tight">{item.company} — {item.role}</h3>
                <div className="text-xs text-muted-foreground">{item.period}{item.type ? ` • ${item.type}` : ''}</div>
              </div>
              <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{item.description}</p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.tags.map((t) => (
                  <Badge key={t} variant="outline" className="text-xs py-0.5">{t}</Badge>
                ))}
              </div>
            </Card>
          </DialogTrigger>
          <DialogContent className="max-w-xl">
            <DialogHeader>
              <DialogTitle>{item.company} — {item.role}</DialogTitle>
            </DialogHeader>
            <div className="text-sm text-muted-foreground">{item.period}{item.type ? ` • ${item.type}` : ''}</div>
            <p className="mt-3 text-sm leading-6">{item.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
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
