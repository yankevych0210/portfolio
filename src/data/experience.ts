import type {Localized} from "@/i18n/locales";

export type Experience = {
  company: string;
  role: string;
  period: Localized;
  current?: boolean;
  type: Localized;
  context?: Localized;
  links?: {label: string; href: string}[];
  bullets: Localized<string[]>;
  stack: string[];
  /** Slugs of portfolio projects delivered in this role. */
  projects?: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    company: "GoGuru",
    role: "Front-End / Shopify Developer",
    period: {en: "Jul 2026 — Present", ua: "Лип 2026 — тепер", ru: "Июль 2026 — сейчас"},
    current: true,
    type: {en: "Full-time", ua: "Повна зайнятість", ru: "Полная занятость"},
    context: {en: "Project: NASS — fitness e-commerce brand", ua: "Проєкт: NASS — фітнес e-commerce бренд", ru: "Проект: NASS — фитнес e-commerce бренд"},
    links: [{label: "nasswear.com", href: "https://nasswear.com"}],
    bullets: {
      en: [
        "Develop the NASS storefront on a custom Shopify Horizon theme: custom Liquid sections, reusable blocks, restyled native sections.",
        "Build funnel landing pages for paid traffic (prenatal and postpartum programs), including A/B variants and presale pages.",
        "Set up a development store for testing subscriptions and documented the setup for the team.",
        "Run the theme workflow with GitHub and Shopify CLI; onboarded a second developer.",
        "Fixed a live checkout issue caused by a wrong shipping profile and added a shipping check to the launch checklist."
      ],
      ua: [
        "Розробляю вітрину NASS на кастомній темі Shopify Horizon: власні Liquid-секції, перевикористовувані блоки, рестайл нативних секцій.",
        "Верстаю воронкові лендинги під платний трафік (програми для вагітних і після пологів), A/B-варіанти та presale-сторінки.",
        "Налаштував dev-магазин для тестування підписок і задокументував його для команди.",
        "Веду процес роботи з темою через GitHub і Shopify CLI; онбордив другого розробника.",
        "Виправив проблему на живому чекауті через неправильний shipping profile і додав перевірку доставки в чекліст запуску."
      ],
      ru: [
        "Разрабатываю витрину NASS на кастомной теме Shopify Horizon: свои Liquid-секции, переиспользуемые блоки, рестайл нативных секций.",
        "Верстаю воронки-лендинги под платный трафик (программы для беременных и после родов), A/B-варианты и presale-страницы.",
        "Настроил dev-магазин для тестирования подписок и задокументировал его для команды.",
        "Веду процесс работы с темой через GitHub и Shopify CLI; онбордил второго разработчика.",
        "Исправил проблему на живом чекауте из-за неверного shipping profile и добавил проверку доставки в чеклист запуска."
      ]
    },
    stack: ["Shopify", "Liquid", "Horizon theme", "Shopify CLI", "Klaviyo", "Intelligems", "Microsoft Clarity", "GitHub"],
    projects: ["nass"]
  },
  {
    company: "WhiteGen",
    role: "Front-End Developer",
    period: {en: "May 2023 — Present", ua: "Тра 2023 — тепер", ru: "Май 2023 — сейчас"},
    current: true,
    type: {en: "Full-time", ua: "Повна зайнятість", ru: "Полная занятость"},
    bullets: {
      en: [
        "Develop React applications with scalable components and state management (Redux, Zustand).",
        "Build and launch WordPress blogs, landing pages and WooCommerce stores end-to-end, using Elementor.",
        "Write custom interactive features and scripts (macros) in vanilla JavaScript.",
        "Deliver responsive, cross-browser layouts for all device types.",
        "Improve page load speed, Core Web Vitals and user engagement on key pages."
      ],
      ua: [
        "Розробляю React-застосунки з масштабованими компонентами та керуванням станом (Redux, Zustand).",
        "Створюю та запускаю під ключ WordPress-блоги, лендинги й магазини на WooCommerce з Elementor.",
        "Пишу кастомні інтерактивні фічі та скрипти (макроси) на чистому JavaScript.",
        "Роблю адаптивну кросбраузерну верстку для всіх типів пристроїв.",
        "Покращую швидкість завантаження, Core Web Vitals і залученість на ключових сторінках."
      ],
      ru: [
        "Разрабатываю React-приложения с масштабируемыми компонентами и управлением состоянием (Redux, Zustand).",
        "Создаю и запускаю под ключ WordPress-блоги, лендинги и магазины на WooCommerce с Elementor.",
        "Пишу кастомные интерактивные фичи и скрипты (макросы) на чистом JavaScript.",
        "Делаю адаптивную кроссбраузерную вёрстку для всех типов устройств.",
        "Улучшаю скорость загрузки, Core Web Vitals и вовлечённость на ключевых страницах."
      ]
    },
    stack: ["React", "Redux", "Zustand", "JavaScript", "WordPress", "WooCommerce", "Elementor", "Tailwind CSS"]
  },
  {
    company: "Inno-Soft",
    role: "Front-End Developer",
    period: {en: "Oct 2025 — Jan 2026", ua: "Жов 2025 — Січ 2026", ru: "Окт 2025 — Янв 2026"},
    type: {en: "Contract · HiTech department", ua: "Контракт · HiTech-відділ", ru: "Контракт · HiTech-отдел"},
    bullets: {
      en: [
        "Developed and supported the front-end of high-traffic web apps.",
        "Integrated UIs with Keitaro tracking and third-party APIs.",
        "Worked in an Agile team with backend, UI/UX, integrators and media buyers.",
        "Refactored and optimized the codebase; ran A/B tests for conversion.",
        "Took part in architecture discussions, task planning and daily stand-ups."
      ],
      ua: [
        "Розробляв і підтримував фронтенд високонавантажених вебзастосунків.",
        "Інтегрував інтерфейси з трекером Keitaro та сторонніми API.",
        "Працював в Agile-команді з бекендом, UI/UX, інтеграторами та медіабаєрами.",
        "Рефакторив і оптимізував кодову базу; проводив A/B-тести конверсії.",
        "Брав участь в архітектурних обговореннях, плануванні задач і дейлі."
      ],
      ru: [
        "Разрабатывал и поддерживал фронтенд высоконагруженных веб-приложений.",
        "Интегрировал интерфейсы с трекером Keitaro и сторонними API.",
        "Работал в Agile-команде с бэкендом, UI/UX, интеграторами и медиабайерами.",
        "Рефакторил и оптимизировал кодовую базу; проводил A/B-тесты конверсии.",
        "Участвовал в архитектурных обсуждениях, планировании задач и дейли."
      ]
    },
    stack: ["JavaScript", "TypeScript", "React", "Keitaro", "REST APIs", "A/B testing"]
  },
  {
    company: "Veido",
    role: "Front-End Engineer",
    period: {en: "Dec 2024 — Feb 2025", ua: "Гру 2024 — Лют 2025", ru: "Дек 2024 — Фев 2025"},
    type: {en: "Contract", ua: "Контракт", ru: "Контракт"},
    links: [{label: "cherrytrader.com", href: "https://cherrytrader.com"}],
    bullets: {
      en: [
        "Built and scaled features for cherrytrader.com as part of a development team.",
        "Implemented responsive UI components, fixed cross-browser issues and improved performance.",
        "Worked closely with UI/UX designers and backend engineers."
      ],
      ua: [
        "Розробляв і масштабував функціонал cherrytrader.com у складі команди.",
        "Реалізовував адаптивні UI-компоненти, виправляв кросбраузерні баги та покращував продуктивність.",
        "Тісно працював з UI/UX-дизайнерами та бекенд-інженерами."
      ],
      ru: [
        "Разрабатывал и масштабировал функциональность cherrytrader.com в составе команды.",
        "Реализовывал адаптивные UI-компоненты, исправлял кроссбраузерные баги и улучшал производительность.",
        "Тесно работал с UI/UX-дизайнерами и бэкенд-инженерами."
      ]
    },
    stack: ["Next.js", "TypeScript", "React", "Redux", "HeroUI", "Tailwind CSS", "SCSS"],
    projects: ["cherrytrader"]
  },
  {
    company: "LeadAR",
    role: "Front-End Developer",
    period: {en: "Jan 2025", ua: "Січ 2025", ru: "Янв 2025"},
    type: {en: "Freelance", ua: "Фриланс", ru: "Фриланс"},
    bullets: {
      en: [
        "Sole front-end developer on a web streaming platform, from layout to launch.",
        "Built a pixel-perfect responsive UI from Figma with clean structure; optimized sign-up and user flows."
      ],
      ua: [
        "Єдиний фронтенд-розробник стримінгової платформи — від верстки до запуску.",
        "Зробив pixel-perfect адаптивний UI за макетом Figma; оптимізував реєстрацію та користувацькі сценарії."
      ],
      ru: [
        "Единственный фронтенд-разработчик стриминговой платформы — от вёрстки до запуска.",
        "Сделал pixel-perfect адаптивный UI по макету Figma; оптимизировал регистрацию и пользовательские сценарии."
      ]
    },
    stack: ["HTML", "CSS", "JavaScript", "Swiper", "Figma"],
    projects: ["streaming"]
  },
  {
    company: "Annamax",
    role: "Front-End Developer",
    period: {en: "Nov 2024", ua: "Лис 2024", ru: "Ноя 2024"},
    type: {en: "Freelance", ua: "Фриланс", ru: "Фриланс"},
    links: [
      {label: "avtoinstallservis.site", href: "https://avtoinstallservis.site"},
      {label: "at.avtoinstallservis.site", href: "https://at.avtoinstallservis.site"}
    ],
    bullets: {
      en: ["Developed and deployed several production websites for AvtoInstallServis, including localized versions, with SEO-friendly layouts."],
      ua: ["Розробив і задеплоїв кілька продакшн-сайтів для AvtoInstallServis, включно з локалізованими версіями та SEO-дружньою версткою."],
      ru: ["Разработал и задеплоил несколько продакшн-сайтов для AvtoInstallServis, включая локализованные версии и SEO-дружелюбную вёрстку."]
    },
    stack: ["HTML", "CSS", "JavaScript", "SEO"],
    projects: ["avtoinstall"]
  }
];
