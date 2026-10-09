"use client";

import {Copy} from "lucide-react";
import {useTranslations} from "next-intl";
import {toast} from "sonner";
import {Button} from "@/components/ui/button";
import {CONTACTS} from "@/config/site";

export default function CopyEmail({variant = "outline"}: {variant?: "outline" | "ghost"}) {
  const t = useTranslations("contact");
  return (
    <Button
      type="button"
      variant={variant}
      size="lg"
      className="gap-2"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(CONTACTS.email);
          toast.success(t("copied"), {description: CONTACTS.email});
        } catch {
          window.location.href = `mailto:${CONTACTS.email}`;
        }
      }}
    >
      <Copy className="size-4" /> {t("copy")}
    </Button>
  );
}
