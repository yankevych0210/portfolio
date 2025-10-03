"use client";

import {ThemeProvider} from "next-themes";
import {NextIntlClientProvider} from "next-intl";
import {ReactNode} from "react";

export default function Providers({children, locale, messages}: {children: ReactNode; locale: string; messages: any}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}
