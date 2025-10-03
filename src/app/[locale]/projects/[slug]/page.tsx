import {notFound} from "next/navigation";
import {PROJECTS} from "@/data/projects";
import Link from "next/link";
import type {Locale} from "@/i18n/locales";
import ProjectGallery from "@/components/project-gallery";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({slug: p.slug}));
}

export default function ProjectPage({params}: {params: {locale: Locale; slug: string}}) {
  const project = PROJECTS.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-8">
      <Link href={`/${params.locale}#projects`} className="text-sm text-muted-foreground hover:underline">← Back to projects</Link>

      <header className="space-y-2">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-semibold tracking-tight">{project.title}</h1>
          {project.status && (
            <Badge variant="secondary" className="ml-1">{project.status}</Badge>
          )}
        </div>
        <p className="text-muted-foreground">{project.summary}</p>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.stack.map((s) => (
            <Badge key={s} variant="outline">{s}</Badge>
          ))}
        </div>
        <div className="flex gap-3 pt-2">
          {project.url && (
            <Button asChild>
              <Link href={project.url} target="_blank" rel="noopener noreferrer">Visit Site</Link>
            </Button>
          )}
          {project.repo && (
            <Button asChild variant="outline">
              <Link href={project.repo} target="_blank" rel="noopener noreferrer">View Code</Link>
            </Button>
          )}
          <Button asChild variant="outline">
            <Link href={`/${params.locale}#projects`}>Back</Link>
          </Button>
        </div>
      </header>

      <section>
        <ProjectGallery images={project.images ?? (project.image ? [project.image] : [])} alt={project.title} />
      </section>

      <section className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border p-4">
          <h2 className="text-lg font-semibold tracking-tight mb-2">Details</h2>
          <dl className="grid grid-cols-3 gap-x-3 gap-y-2 text-sm">
            <dt className="text-muted-foreground">Role</dt>
            <dd className="col-span-2">{project.role}</dd>
            <dt className="text-muted-foreground">Stack</dt>
            <dd className="col-span-2">{project.stack.join(', ')}</dd>
            {project.url && (
              <>
                <dt className="text-muted-foreground">Website</dt>
                <dd className="col-span-2"><Link className="underline" href={project.url} target="_blank" rel="noopener noreferrer">{project.url}</Link></dd>
              </>
            )}
            {project.repo && (
              <>
                <dt className="text-muted-foreground">Repository</dt>
                <dd className="col-span-2"><Link className="underline" href={project.repo} target="_blank" rel="noopener noreferrer">{project.repo}</Link></dd>
              </>
            )}
          </dl>
        </div>
        <div className="rounded-lg border p-4">
          <h2 className="text-lg font-semibold tracking-tight mb-2">Overview</h2>
          <p className="text-sm leading-6 text-muted-foreground">{project.summary}</p>
          {project.tags && project.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <Badge key={t} variant="secondary" className="text-xs py-0.5">{t}</Badge>
              ))}
            </div>
          )}
        </div>
      </section>

      {project.case && (
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border p-4">
            <h3 className="font-medium mb-2">Goal</h3>
            <p className="text-sm text-muted-foreground">{project.case.goal}</p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-medium mb-2">Tasks</h3>
            <ul className="list-disc pl-4 space-y-1 text-sm text-muted-foreground">
              {(project.case.tasks ?? []).map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-medium mb-2">Solution</h3>
            <ul className="list-disc pl-4 space-y-1 text-sm text-muted-foreground">
              {(project.case.solution ?? []).map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="font-medium mb-2">Results</h3>
            <ul className="list-disc pl-4 space-y-1 text-sm text-muted-foreground">
              {(project.case.results ?? []).map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}
