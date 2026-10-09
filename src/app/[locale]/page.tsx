import {notFound} from "next/navigation";
import {setRequestLocale} from "next-intl/server";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Skills from "@/components/sections/skills";
import Education from "@/components/sections/education";
import Contact from "@/components/sections/contact";
import PersonJsonLd from "@/components/sections/person-json-ld";
import {isLocale} from "@/i18n/locales";

export default async function HomePage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);

  return (
    <main>
      <PersonJsonLd locale={locale} />
      <Hero locale={locale} />
      <div className="mx-auto max-w-6xl space-y-28 px-4 sm:space-y-32">
        <About locale={locale} />
        <Projects locale={locale} />
        <Experience locale={locale} />
        <Skills locale={locale} />
        <Education locale={locale} />
        <Contact locale={locale} />
      </div>
    </main>
  );
}
