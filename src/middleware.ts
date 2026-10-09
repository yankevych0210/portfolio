import createMiddleware from "next-intl/middleware";
import {locales, defaultLocale} from "./i18n/locales";

export default createMiddleware({
  locales,
  defaultLocale,
  localeDetection: false
});

export const config = {
  // Skip Next internals, API routes and any path with a file extension (static assets).
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"]
};
