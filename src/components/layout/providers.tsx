"use client";

import {ThemeProvider} from "next-themes";
import {NextIntlClientProvider, type AbstractIntlMessages} from "next-intl";
import type {ReactNode} from "react";
import {Toaster} from "@/components/ui/sonner";

export default function Providers({children, locale, messages}: {children: ReactNode; locale: string; messages: AbstractIntlMessages}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <NextIntlClientProvider locale={locale} messages={messages} timeZone="Europe/Kyiv">
        {children}
        <Toaster position="bottom-center" />
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}
