import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {getTranslations, setRequestLocale} from "next-intl/server";
import {Download, ExternalLink} from "lucide-react";
import {Button} from "@/components/ui/button";
import {isLocale} from "@/i18n/locales";
import {alternatesFor} from "@/lib/seo";

type Params = Promise<{locale: string}>;

export async function generateMetadata({params}: {params: Params}): Promise<Metadata> {
  const {locale} = await params;
  if (!isLocale(locale)) return {};
  const t = await getTranslations({locale, namespace: "resume"});
  return {title: t("title"), description: t("summary"), alternates: alternatesFor(locale, "/resume")};
}

export default async function ResumePage({params}: {params: Params}) {
  const {locale} = await params;
  if (!isLocale(locale)) notFound();
  setRequestLocale(locale);
  const t = await getTranslations({locale, namespace: "resume"});

  return (
    <main className="mx-auto max-w-4xl space-y-6 px-4 py-12">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{t("title")}</h1>
          <p className="text-muted-foreground">{t("summary")}</p>
        </div>
        {/* Plain anchors: a static PDF should not go through the client router. */}
        <div className="flex gap-2">
          <Button asChild className="gap-2">
            <a href="/resume.pdf" download="Nazar-Yankevych-CV.pdf"><Download className="size-4" /> {t("download")}</a>
          </Button>
          <Button asChild variant="outline" className="gap-2">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"><ExternalLink className="size-4" /> {t("open")}</a>
          </Button>
        </div>
      </header>
      <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
        <object data="/resume.pdf#view=FitH" type="application/pdf" className="aspect-[1/1.414] w-full">
          <p className="p-6 text-sm text-muted-foreground">{t("previewFallback")}</p>
        </object>
      </div>
    </main>
  );
}
