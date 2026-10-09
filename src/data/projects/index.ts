import {COMMERCIAL} from "./commercial";
import {PRODUCTS} from "./products";
import {ASSIGNMENTS} from "./assignments";
import {LEARNING} from "./learning";
import type {ProjectCategory} from "./types";

export type {Project, ProjectCategory} from "./types";

/** Order here is the order on the site (inside each category). */
export const PROJECTS = [...COMMERCIAL, ...PRODUCTS, ...ASSIGNMENTS, ...LEARNING];

export const CATEGORY_ORDER: ProjectCategory[] = ["commercial", "product", "test", "learning"];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
