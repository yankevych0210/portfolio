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

export default async function ProjectPage({params}: {params: Promise<{locale: Locale; slug: string}>}) {
  const { locale, slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <main className="mx-auto max-w-5xl px-4 py-12 space-y-8">
      <Link href={`/${locale}#projects`} className="text-sm text-muted-foreground hover:underline">← Back to projects</Link>

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
            <Link href={`/${locale}#projects`}>Back</Link>
          </Button>
        </div>
      </header>

      <section>
        <ProjectGallery images={project.images ?? (project.image ? [project.image] : [])} alt={project.title} />
      </section>

      <section className="grid gap-6 sm:grid-cols-1">
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
                <dd className="col-span-2 break-all"><Link className="underline break-all" href={project.url} target="_blank" rel="noopener noreferrer">{project.url}</Link></dd>
              </>
            )}
            {project.repo && (
              <>
                <dt className="text-muted-foreground">Repository</dt>
                <dd className="col-span-2 break-all"><Link className="underline break-all" href={project.repo} target="_blank" rel="noopener noreferrer">{project.repo}</Link></dd>
              </>
            )}
          </dl>
        </div>
      </section>
    </main>
  );
}
