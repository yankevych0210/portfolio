"use client";

import {Moon, Sun} from "lucide-react";
import {useTheme} from "next-themes";
import {useTranslations} from "next-intl";
import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";

export function ThemeToggle() {
  const t = useTranslations("nav");
  // resolvedTheme is the actual theme even when the user preference is "system".
  const {resolvedTheme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={isDark ? t("themeLight") : t("themeDark")}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full"
    >
      {/* Render a stable placeholder before mount to avoid a hydration mismatch and layout shift. */}
      {!mounted ? <span className="size-5" /> : isDark ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </Button>
  );
}
