import type {Localized} from "@/i18n/locales";

export type Education = {
  title: Localized;
  issuer: Localized;
  period: Localized;
  description?: Localized;
  link?: {label: string; href: string};
};

export const EDUCATION: Education[] = [
  {
    title: {en: "AI Fundamentals — Google", ua: "AI Fundamentals — Google", ru: "AI Fundamentals — Google"},
    issuer: {en: "Coursera", ua: "Coursera", ru: "Coursera"},
    period: {en: "May 2026", ua: "Тра 2026", ru: "Май 2026"},
    link: {label: "coursera.org/verify/AOIFOWVMZDH4", href: "https://coursera.org/verify/AOIFOWVMZDH4"}
  },
  {
    title: {en: "Front-End Development Course", ua: "Курс Front-End розробки", ru: "Курс Front-End разработки"},
    issuer: {en: "A-Level Ukraine IT School (Kharkiv)", ua: "IT-школа A-Level Ukraine (Харків)", ru: "IT-школа A-Level Ukraine (Харьков)"},
    period: {en: "Sep 2022 — Apr 2023", ua: "Вер 2022 — Кві 2023", ru: "Сен 2022 — Апр 2023"},
    description: {
      en: "Intensive hands-on program: HTML5/CSS3 (Flexbox, Grid, responsive), JavaScript ES6+ (OOP, DOM), React/Redux SPAs. Team diploma project — a CodePen clone.",
      ua: "Інтенсивна практична програма: HTML5/CSS3 (Flexbox, Grid, адаптив), JavaScript ES6+ (ООП, DOM), SPA на React/Redux. Командний дипломний проєкт — клон CodePen.",
      ru: "Интенсивная практическая программа: HTML5/CSS3 (Flexbox, Grid, адаптив), JavaScript ES6+ (ООП, DOM), SPA на React/Redux. Командный дипломный проект — клон CodePen."
    },
    link: {label: "Certificate No. 6233", href: "https://drive.google.com/file/d/1fHTo8G7cUJj-D7zyIBj34olLYaZhjxl8/view"}
  },
  {
    title: {en: "Digital Marketing & SMM Course", ua: "Курс Digital-маркетингу та SMM", ru: "Курс Digital-маркетинга и SMM"},
    issuer: {en: "EasyMarketing Online School (SmmTargetSchool)", ua: "Онлайн-школа EasyMarketing (SmmTargetSchool)", ru: "Онлайн-школа EasyMarketing (SmmTargetSchool)"},
    period: {en: "2021", ua: "2021", ru: "2021"},
    description: {
      en: "Digital marketing, SMM and targeted advertising; user behavior and conversion-driven layouts.",
      ua: "Digital-маркетинг, SMM і таргетована реклама; поведінка користувачів і верстка, що конвертує.",
      ru: "Digital-маркетинг, SMM и таргетированная реклама; поведение пользователей и вёрстка, которая конвертирует."
    }
  }
];
