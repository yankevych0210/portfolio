import type {Localized} from "@/i18n/locales";

export type SkillGroup = {title: Localized; items: string[]};

export const SKILLS: SkillGroup[] = [
  {title: {en: "Core", ua: "Основа", ru: "Основа"}, items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"]},
  {title: {en: "Frameworks & state", ua: "Фреймворки та стейт", ru: "Фреймворки и стейт"}, items: ["React", "Next.js", "Redux Toolkit", "RTK Query", "Zustand", "TanStack Query", "Vue 3", "React Native / Expo"]},
  {title: {en: "Styling & UI", ua: "Стилі та UI", ru: "Стили и UI"}, items: ["SCSS", "Tailwind CSS", "CSS Modules", "shadcn/ui", "Material UI", "Ant Design", "HeroUI", "Framer Motion", "GSAP"]},
  {title: {en: "E-commerce & CMS", ua: "E-commerce та CMS", ru: "E-commerce и CMS"}, items: ["Shopify (Liquid, OS 2.0)", "Shopify CLI", "Klaviyo", "WordPress", "WooCommerce", "Elementor", "Strapi"]},
  {title: {en: "Analytics & CRO", ua: "Аналітика та CRO", ru: "Аналитика и CRO"}, items: ["Microsoft Clarity", "Intelligems", "Keitaro", "A/B testing", "Core Web Vitals"]},
  {title: {en: "Backend & data", ua: "Бекенд і дані", ru: "Бэкенд и данные"}, items: ["Node.js", "NestJS", "GraphQL", "PHP", "PostgreSQL", "Prisma", "Supabase", "REST APIs"]},
  {title: {en: "Tools & deployment", ua: "Інструменти та деплой", ru: "Инструменты и деплой"}, items: ["Git", "GitHub", "GitLab", "Docker", "Vite", "Vercel", "Postman", "DNS / SSL"]},
  {title: {en: "Design & AI", ua: "Дизайн та AI", ru: "Дизайн и AI"}, items: ["Figma", "Canva", "Claude Code", "Claude Design", "AI APIs"]}
];
