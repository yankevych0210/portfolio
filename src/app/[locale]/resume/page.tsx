import {getTranslations} from "next-intl/server";
import Link from "next/link";
import {FileDown} from "lucide-react";

type LayoutParams = { locale: string };

export default async function ResumePage({params}: {params: Promise<LayoutParams>}) {
  const { locale } = await params;
  const t = await getTranslations({locale, namespace: "resume"});
  return (
    <main className="mx-auto max-w-4xl px-4 py-12 space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">{t("title")}</h1>
        <p className="text-muted-foreground">{t("summary")}</p>
        <div className="flex gap-3 pt-1">
          <Link href="/resume.pdf" target="_blank" className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90">
            <FileDown className="size-4" /> {t("download")}
          </Link>
        </div>
      </header>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
        <div className="aspect-[8.5/11] w-full">
          <object data="/resume.pdf" type="application/pdf" width="100%" height="100%">
            <p className="p-4 text-sm text-muted-foreground">{t("previewFallback")}</p>
          </object>
        </div>
      </div>
    </main>
  );
}

