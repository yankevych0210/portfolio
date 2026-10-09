import type {ReactNode} from "react";
import "./globals.css";

// The <html> element lives in app/[locale]/layout.tsx so its `lang` matches the page language.
export default function RootLayout({children}: {children: ReactNode}) {
  return children;
}
