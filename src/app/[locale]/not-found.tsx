import Link from "next/link";
import {getLocale, getTranslations} from "next-intl/server";
import {Button} from "@/components/ui/button";

export default async function NotFound() {
  const locale = await getLocale();
  const t = await getTranslations({locale, namespace: "notFound"});
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center gap-4 px-4 text-center">
      <p className="font-mono text-6xl font-bold text-primary">404</p>
      <h1 className="text-2xl font-bold tracking-tight">{t("title")}</h1>
      <p className="text-muted-foreground">{t("text")}</p>
      <Button asChild className="mt-2">
        <Link href={`/${locale}`}>{t("back")}</Link>
      </Button>
    </main>
  );
}
