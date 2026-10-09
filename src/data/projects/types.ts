import type {Localized} from "@/i18n/locales";

export type ProjectCategory = "commercial" | "product" | "test" | "learning";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  /** Shown first in the "All" tab on the home page. */
  featured?: boolean;
  year: string;
  /** Company / client the work was done for. */
  client?: string;
  role: Localized;
  summary: Localized;
  description: Localized;
  features: Localized<string[]>;
  highlights: Localized<string[]>;
  stack: string[];
  url?: string;
  repo?: string;
  links?: {label: string; href: string}[];
  /** Desktop screenshots; the first one is the cover. */
  images: string[];
  mobileImage?: string;
  /** Caveat shown on the case page (e.g. demo API offline). */
  note?: Localized;
};
