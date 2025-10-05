import {getTranslations} from "next-intl/server";
import Image from "next/image";
import {CONTACTS} from "@/data/contacts";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {Card} from "@/components/ui/card";
import {PROJECTS} from "@/data/projects";
import ProjectCard from "@/components/project-card";
import {Section} from "@/components/section";
import {Github, Linkedin, Mail, Phone, Send, MapPin, Calendar} from "lucide-react";
import SkillsCards from "@/components/skills-cards";
import ExperienceList from "@/components/experience-list";
import EducationList from "@/components/education-list";
import {PROFILE} from "@/data/profile";

type LayoutParams = { locale: string };
type MaybePromise<T> = T | Promise<T>;
function isPromise<T>(v: unknown): v is Promise<T> {
  return typeof (v as { then?: unknown })?.then === 'function';
}

export default async function HomePage({params}: {params: MaybePromise<LayoutParams>}) {
  const resolved = isPromise<LayoutParams>(params) ? await params : params;
  const tHero = await getTranslations({locale: resolved.locale, namespace: "hero"});
  const tContact = await getTranslations({locale: resolved.locale, namespace: "contact"});
  const tAbout = await getTranslations({locale: resolved.locale, namespace: "about"});
  const tSkills = await getTranslations({locale: resolved.locale, namespace: "skills"});
  const tProjects = await getTranslations({locale: resolved.locale, namespace: "projects"});
  const tExperience = await getTranslations({locale: resolved.locale, namespace: "experience"});
  const tEducation = await getTranslations({locale: resolved.locale, namespace: "education"});

  return (
    <main className="relative">
      <div className="pointer-events-none absolute inset-x-0 -top-24 -z-10 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,theme(colors.primary/15%),transparent_70%)] dark:bg-[radial-gradient(60%_60%_at_50%_0%,theme(colors.primary/25%),transparent_70%)]" />

      <div className="mx-auto max-w-6xl px-4 py-12 space-y-24">
      
      <Section className="grid md:grid-cols-2 gap-8 items-center" id="hero">
        <div className="space-y-4">
          <p className="text-muted-foreground">{tHero("greeting")}</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            {tHero("name")}
          </h1>
          <p className="text-xl text-muted-foreground">{tHero("role")}</p>
          <p className="text-base sm:text-lg">
            {tHero("tagline")}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button asChild>
              <Link href="#projects">{tHero("cta_projects")}</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="#contact">{tHero("cta_contact")}</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/resume.pdf" target="_blank">{tHero("download_resume")}</Link>
            </Button>
          </div>
          <div className="flex items-center gap-4 pt-4 text-muted-foreground">
            <Link href={CONTACTS.github} aria-label="GitHub" className="hover:text-foreground transition-colors"><Github className="size-5" /></Link>
            <Link href={CONTACTS.linkedin} aria-label="LinkedIn" className="hover:text-foreground transition-colors"><Linkedin className="size-5" /></Link>
            <Link href={CONTACTS.telegram} aria-label="Telegram" className="hover:text-foreground transition-colors"><Send className="size-5" /></Link>
            <Link href={`mailto:${CONTACTS.email}`} aria-label="Email" className="hover:text-foreground transition-colors"><Mail className="size-5" /></Link>
            <Link href={`tel:${CONTACTS.phone}`} aria-label="Phone" className="hover:text-foreground transition-colors"><Phone className="size-5" /></Link>
          </div>
        </div>
        <div className="justify-self-center">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64">
            <div className="relative w-full h-full rounded-full overflow-hidden ring-1 ring-border">
              <Image src="/profile.jpg" alt="Profile" fill className="object-cover" />
            </div>
            {(() => {
              const birth = new Date(PROFILE.birthDate);
              const now = new Date();
              let age = now.getFullYear() - birth.getFullYear();
              const m = now.getMonth() - birth.getMonth();
              if (m < 0 || (m === 0 && now.getDate() < birth.getDate())) age--;
              return (
                <div className="absolute -bottom-2 right-0 sm:bottom-1 sm:right-1 z-10">
                  <div className="flex items-center gap-2 rounded-full border bg-background/95 backdrop-blur px-3 py-1.5 shadow-lg ring-1 ring-border">
                    <Calendar className="size-4 text-primary" />
                    <span className="text-sm font-medium">{tAbout("age")}: {age}</span>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </Section>

      <Section id="skills" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">{tSkills("title")}</h2>
        <SkillsCards />
      </Section>

      <Section id="projects" className="space-y-4">
        <div className="relative">
          <div className="pointer-events-none absolute inset-x-0 -top-10 -z-10 h-40 bg-[radial-gradient(50%_60%_at_50%_0%,theme(colors.primary/12%),transparent_70%)] dark:bg-[radial-gradient(50%_60%_at_50%_0%,theme(colors.primary/20%),transparent_70%)]" />
          <h2 className="text-2xl font-semibold tracking-tight">{tProjects("title")}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.slug} p={p} locale={resolved.locale} />
          ))}
        </div>
      </Section>

      {/* About section removed as requested; key facts moved to Hero */}

      <Section id="education" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">{tEducation("title")}</h2>
        <EducationList />
      </Section>

      <Section id="experience" className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">{tExperience("title")}</h2>
        <ExperienceList />
      </Section>

      <Section id="contact" className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">{tContact("title")}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ContactItem icon={<Mail className="size-5" />} label={tContact("email")} value={CONTACTS.email} href={`mailto:${CONTACTS.email}`} />
          <ContactItem icon={<Send className="size-5" />} label={tContact("telegram")} value="@nazar_yankevich" href={CONTACTS.telegram} />
          <ContactItem icon={<Linkedin className="size-5" />} label={tContact("linkedin")} value="nazar-yankevych" href={CONTACTS.linkedin} />
          <ContactItem icon={<Phone className="size-5" />} label={tContact("phone")} value={CONTACTS.phone} href={`tel:${CONTACTS.phone}`} />
          <ContactItem icon={<Github className="size-5" />} label={tContact("github")} value="yankevych0210" href={CONTACTS.github} />
          <ContactItem icon={<MapPin className="size-5" />} label="Location" value="Kremenchug, Ukraine" href="https://maps.google.com/?q=Kremenchuk,+Ukraine" />
        </div>
      </Section>
      </div>
    </main>
  );
}

function ContactItem({label, value, href, icon}: {label: string; value: string; href: string; icon: React.ReactNode}) {
  return (
    <Link href={href} className="group">
      <Card className="p-4 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
        <div className="flex items-start gap-3">
          <div className="shrink-0 rounded-full bg-primary/10 text-primary grid place-items-center size-10 group-hover:bg-primary/15 transition-colors">
            {icon}
          </div>
          <div className="min-w-0">
            <div className="text-xs text-muted-foreground">{label}</div>
            <div className="font-medium break-all transition-colors group-hover:text-muted-foreground">{value}</div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
