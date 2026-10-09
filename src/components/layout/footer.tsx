import {getLocale, getTranslations} from "next-intl/server";
import {ArrowUp, Github, Linkedin, Mail, Send} from "lucide-react";
import {CONTACTS} from "@/config/site";

export default async function Footer() {
  const locale = await getLocale();
  const t = await getTranslations({locale, namespace: "footer"});

  return (
    <footer className="mt-24 border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-muted-foreground sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-medium text-foreground">© {new Date().getFullYear()} Nazar Yankevych</p>
          <p className="text-xs">{t("built")}</p>
        </div>
        <div className="flex items-center gap-4">
          <a href={CONTACTS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-foreground"><Github className="size-5" /></a>
          <a href={CONTACTS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-foreground"><Linkedin className="size-5" /></a>
          <a href={CONTACTS.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="hover:text-foreground"><Send className="size-5" /></a>
          <a href={`mailto:${CONTACTS.email}`} aria-label="Email" className="hover:text-foreground"><Mail className="size-5" /></a>
          <a href="#main" className="ml-2 inline-flex items-center gap-1 rounded-md border px-2.5 py-1.5 text-xs hover:text-foreground">
            <ArrowUp className="size-3.5" /> {t("top")}
          </a>
        </div>
      </div>
    </footer>
  );
}
