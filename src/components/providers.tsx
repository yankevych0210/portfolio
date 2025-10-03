"use client";

import {ThemeProvider} from "next-themes";
import {NextIntlClientProvider} from "next-intl";
import {ReactNode} from "react";

type Messages = Record<string, unknown>;

export default function Providers({children, locale, messages}: {children: ReactNode; locale: string; messages: Messages}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}
