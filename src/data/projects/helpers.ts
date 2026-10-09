import type {Localized} from "@/i18n/locales";

/** Screenshot paths for public/projects/<slug>/: desktop-1..N.webp and optional mobile.webp. */
export const shots = (slug: string, count: number, mobile = true) => ({
  images: Array.from({length: count}, (_, i) => `/projects/${slug}/desktop-${i + 1}.webp`),
  mobileImage: mobile ? `/projects/${slug}/mobile.webp` : undefined
});

export const ROLE_FE: Localized = {en: "Front-End Developer", ua: "Front-End розробник", ru: "Front-End разработчик"};

export const ROLE_SOLO: Localized = {
  en: "Solo developer — design to deploy",
  ua: "Соло-розробник — від дизайну до деплою",
  ru: "Соло-разработчик — от дизайна до деплоя"
};

export const NO_WEB_DEMO: Localized = {
  en: "Mobile app — no web demo. Run it with Expo Go from the repository.",
  ua: "Мобільний застосунок — веб-демо немає. Запуск через Expo Go з репозиторію.",
  ru: "Мобильное приложение — веб-демо нет. Запуск через Expo Go из репозитория."
};
