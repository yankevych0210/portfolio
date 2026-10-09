import type {Localized} from "@/i18n/locales";

export const PROFILE = {
  name: {en: "Nazar Yankevych", ua: "Назар Янкевич", ru: "Назар Янкевич"} satisfies Localized,
  location: {en: "Kremenchuk, Ukraine", ua: "Кременчук, Україна", ru: "Кременчуг, Украина"} satisfies Localized,
  /** First commercial job (WhiteGen) — used to compute "years of experience". */
  careerStart: "2023-05-01"
} as const;

export function yearsOfExperience(now = new Date()) {
  const start = new Date(PROFILE.careerStart);
  return Math.floor((now.getTime() - start.getTime()) / (365.25 * 24 * 3600 * 1000));
}

export const LANGUAGES: {name: Localized; level: Localized}[] = [
  {name: {en: "Ukrainian", ua: "Українська", ru: "Украинский"}, level: {en: "Native", ua: "Рідна", ru: "Родной"}},
  {name: {en: "Russian", ua: "Російська", ru: "Русский"}, level: {en: "Fluent", ua: "Вільно", ru: "Свободно"}},
  {name: {en: "English", ua: "Англійська", ru: "Английский"}, level: {en: "B1 — Intermediate", ua: "B1 — середній", ru: "B1 — средний"}}
];
