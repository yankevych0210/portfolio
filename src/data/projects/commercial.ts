import type {Project} from "./types";
import {shots, ROLE_FE, ROLE_SOLO} from "./helpers";

export const COMMERCIAL: Project[] = [
  {
    slug: "nass",
    title: "NASS",
    category: "commercial",
    featured: true,
    year: "2026",
    client: "GoGuru",
    role: {en: "Front-End / Shopify Developer", ua: "Front-End / Shopify розробник", ru: "Front-End / Shopify разработчик"},
    summary: {
      en: "Shopify storefront and paid-traffic funnels for a fitness e-commerce brand.",
      ua: "Shopify-вітрина та воронки під платний трафік для фітнес e-commerce бренду.",
      ru: "Shopify-витрина и воронки под платный трафик для фитнес e-commerce бренда."
    },
    description: {
      en: "NASS sells training programs and activewear. As part of the GoGuru team I develop the storefront on a custom Shopify Horizon theme and build the landing pages that paid traffic lands on — where every change is measured in conversion.",
      ua: "NASS продає тренувальні програми та спортивний одяг. У команді GoGuru я розробляю вітрину на кастомній темі Shopify Horizon і верстаю лендинги, на які йде платний трафік, — тут кожна зміна вимірюється конверсією.",
      ru: "NASS продаёт тренировочные программы и спортивную одежду. В команде GoGuru я разрабатываю витрину на кастомной теме Shopify Horizon и верстаю лендинги, на которые идёт платный трафик, — здесь каждое изменение измеряется конверсией."
    },
    features: {
      en: [
        "Custom Liquid sections, reusable theme blocks and restyled native Horizon sections",
        "Funnel landing pages for prenatal and postpartum programs, with A/B variants and presale pages",
        "Development store for testing subscriptions, documented for the team",
        "Theme workflow on GitHub + Shopify CLI; onboarded a second developer"
      ],
      ua: [
        "Кастомні Liquid-секції, перевикористовувані блоки теми та рестайл нативних секцій Horizon",
        "Воронкові лендинги для програм вагітності та відновлення після пологів з A/B-варіантами та presale-сторінками",
        "Dev-магазин для тестування підписок із документацією для команди",
        "Робота з темою через GitHub + Shopify CLI; онбординг другого розробника"
      ],
      ru: [
        "Кастомные Liquid-секции, переиспользуемые блоки темы и рестайл нативных секций Horizon",
        "Воронки-лендинги для программ беременности и восстановления после родов с A/B-вариантами и presale-страницами",
        "Dev-магазин для тестирования подписок с документацией для команды",
        "Работа с темой через GitHub + Shopify CLI; онбординг второго разработчика"
      ]
    },
    highlights: {
      en: [
        "Found and fixed a live checkout issue caused by a wrong shipping profile, then added a shipping check to the launch checklist",
        "Landing variants are shipped as A/B tests, so design decisions are backed by conversion data"
      ],
      ua: [
        "Знайшов і виправив проблему на живому чекауті через неправильний shipping profile, після чого додав перевірку доставки в чекліст запуску",
        "Варіанти лендингів запускаються як A/B-тести, тож дизайн-рішення підкріплені даними конверсії"
      ],
      ru: [
        "Нашёл и исправил проблему на живом чекауте из-за неверного shipping profile, после чего добавил проверку доставки в чеклист запуска",
        "Варианты лендингов запускаются как A/B-тесты, поэтому дизайн-решения подкреплены данными конверсии"
      ]
    },
    stack: ["Shopify", "Liquid", "Horizon theme", "Shopify CLI", "JavaScript", "CSS", "Intelligems", "GitHub"],
    url: "https://nasswear.com",
    ...shots("nass", 1)
  },
  {
    slug: "yeva",
    title: "Yeva Hairstyle",
    category: "commercial",
    featured: true,
    year: "2026",
    client: "Yeva Hairstyle",
    role: ROLE_SOLO,
    summary: {
      en: "Pre-rendered React site for a hair stylist — strict CSP, CI and automated visual QA.",
      ua: "Пре-рендерений React-сайт для стилістки зачісок — суворий CSP, CI та автоматизований візуальний QA.",
      ru: "Пре-рендеренный React-сайт для стилиста причёсок — строгий CSP, CI и автоматизированный визуальный QA."
    },
    description: {
      en: "A mobile-first site for a hair stylist in Kremenchuk: video showreel, services, a filterable works gallery and booking via Instagram. The page is pre-rendered to static HTML at build time and hydrated with React, so it is fast, indexable and works before JavaScript loads.",
      ua: "Mobile-first сайт для стилістки зачісок у Кременчуці: відео-шоурил, послуги, галерея робіт із фільтрами та запис через Instagram. Сторінка пре-рендериться в статичний HTML під час збірки й гідрується React, тому вона швидка, індексується та працює ще до завантаження JavaScript.",
      ru: "Mobile-first сайт для стилиста причёсок в Кременчуге: видео-шоурил, услуги, галерея работ с фильтрами и запись через Instagram. Страница пре-рендерится в статический HTML при сборке и гидрируется React, поэтому она быстрая, индексируется и работает ещё до загрузки JavaScript."
    },
    features: {
      en: [
        "Hero showreel video, services, \"hair + makeup\" looks, works gallery with photo/video lightbox",
        "Live Instagram feed (Behold) with SSR fallback covers",
        "Prices, reviews, FAQ and map appear automatically once their data is filled in",
        "Branded 404, generated logo, favicons and OG image"
      ],
      ua: [
        "Відео-шоурил у hero, послуги, образи «у 4 руки», галерея робіт з фото/відео-лайтбоксом",
        "Живий Instagram-фід (Behold) з SSR-заглушками",
        "Ціни, відгуки, FAQ і карта з'являються автоматично після заповнення даних",
        "Брендована 404, згенеровані логотип, фавікони та OG-зображення"
      ],
      ru: [
        "Видео-шоурил в hero, услуги, образы «в 4 руки», галерея работ с фото/видео-лайтбоксом",
        "Живой Instagram-фид (Behold) с SSR-заглушками",
        "Цены, отзывы, FAQ и карта появляются автоматически после заполнения данных",
        "Брендированная 404, сгенерированные логотип, фавиконки и OG-изображение"
      ]
    },
    highlights: {
      en: [
        "Strict Content-Security-Policy with a SHA-256 hash of the inline script; the build fails if the hash goes stale. HSTS, COOP and Permissions-Policy headers",
        "Automated QA: Playwright screenshots from 320 to 1440 px plus WebKit checks for iOS scroll-lock and HEVC playback; lint + build in GitHub Actions",
        "Media pipeline: responsive WebP, HEVC + H.264 video; the hero video respects prefers-reduced-motion and Save-Data",
        "JSON-LD (HairSalon, Person, VideoObject) and a content guide written for the non-technical client"
      ],
      ua: [
        "Суворий Content-Security-Policy з SHA-256 хешем інлайн-скрипта; збірка падає, якщо хеш застарів. Заголовки HSTS, COOP, Permissions-Policy",
        "Автоматизований QA: скриншоти Playwright від 320 до 1440 px і WebKit-перевірки scroll-lock на iOS та відтворення HEVC; lint + build у GitHub Actions",
        "Медіа-пайплайн: адаптивний WebP, відео HEVC + H.264; hero-відео враховує prefers-reduced-motion і Save-Data",
        "JSON-LD (HairSalon, Person, VideoObject) та інструкція з контенту для нетехнічного клієнта"
      ],
      ru: [
        "Строгий Content-Security-Policy с SHA-256 хешем инлайн-скрипта; сборка падает, если хеш устарел. Заголовки HSTS, COOP, Permissions-Policy",
        "Автоматизированный QA: скриншоты Playwright от 320 до 1440 px и WebKit-проверки scroll-lock на iOS и воспроизведения HEVC; lint + build в GitHub Actions",
        "Медиа-пайплайн: адаптивный WebP, видео HEVC + H.264; hero-видео учитывает prefers-reduced-motion и Save-Data",
        "JSON-LD (HairSalon, Person, VideoObject) и инструкция по контенту для нетехнического клиента"
      ]
    },
    stack: ["React", "TypeScript", "Vite (SSR prerender)", "Tailwind CSS", "Playwright", "GitHub Actions", "Vercel"],
    url: "https://yeva-hairstyle.vercel.app",
    repo: "https://github.com/yankevych0210/yeva-hairstyle",
    ...shots("yeva", 3)
  },
  {
    slug: "lana-studio",
    title: "Lana Studio",
    category: "commercial",
    featured: true,
    year: "2026",
    client: "Lana Studio, California",
    role: ROLE_SOLO,
    summary: {
      en: "Fast, dependency-free marketing site for a lash & brow studio in the San Francisco Bay Area.",
      ua: "Швидкий сайт без залежностей для студії вій і брів у районі Сан-Франциско.",
      ru: "Быстрый сайт без зависимостей для студии ресниц и бровей в районе Сан-Франциско."
    },
    description: {
      en: "Marketing website for a lash extension and brow studio with two locations — Walnut Creek and San Francisco. Live on the client's own domain. A single static page with zero JavaScript dependencies, built to load instantly on mobile and turn visits into bookings.",
      ua: "Маркетинговий сайт студії нарощування вій і брів з двома локаціями — Walnut Creek і San Francisco. Працює на власному домені клієнта. Одна статична сторінка без жодних JS-залежностей, створена, щоб миттєво завантажуватись на мобільних і перетворювати візити на записи.",
      ru: "Маркетинговый сайт студии наращивания ресниц и бровей с двумя локациями — Walnut Creek и San Francisco. Работает на собственном домене клиента. Одна статическая страница без JS-зависимостей, созданная, чтобы мгновенно загружаться на мобильных и превращать визиты в записи."
    },
    features: {
      en: [
        "Filterable gallery with an accessible lightbox and a before/after slider",
        "Price list per studio and category in tabs",
        "Booking via Square Appointments, plus a request builder that composes a pre-filled SMS or WhatsApp message",
        "Reviews, FAQ accordion and BeautySalon JSON-LD for both locations"
      ],
      ua: [
        "Галерея з фільтрами, доступним лайтбоксом і слайдером «до/після»",
        "Прайс за студіями та категоріями у вкладках",
        "Запис через Square Appointments і конструктор заявки, що формує готове SMS або повідомлення у WhatsApp",
        "Відгуки, FAQ-акордеон і JSON-LD BeautySalon для обох локацій"
      ],
      ru: [
        "Галерея с фильтрами, доступным лайтбоксом и слайдером «до/после»",
        "Прайс по студиям и категориям во вкладках",
        "Запись через Square Appointments и конструктор заявки, который формирует готовое SMS или сообщение в WhatsApp",
        "Отзывы, FAQ-аккордеон и JSON-LD BeautySalon для обеих локаций"
      ]
    },
    highlights: {
      en: [
        "No framework and no build step — the whole site is one HTML file, so the payload is tiny",
        "Thorough accessibility: ARIA states on tabs, filters and accordions, aria-live regions, prefers-reduced-motion support",
        "Content guide for the client to update prices and photos without a developer"
      ],
      ua: [
        "Без фреймворку та без збірки — весь сайт в одному HTML-файлі, тому вага мінімальна",
        "Ретельна доступність: ARIA-стани у вкладках, фільтрах і акордеонах, aria-live, підтримка prefers-reduced-motion",
        "Інструкція для клієнта, щоб оновлювати ціни й фото без розробника"
      ],
      ru: [
        "Без фреймворка и без сборки — весь сайт в одном HTML-файле, поэтому вес минимальный",
        "Тщательная доступность: ARIA-состояния во вкладках, фильтрах и аккордеонах, aria-live, поддержка prefers-reduced-motion",
        "Инструкция для клиента, чтобы обновлять цены и фото без разработчика"
      ]
    },
    stack: ["HTML", "CSS", "Vanilla JS", "Square Appointments", "JSON-LD", "Vercel"],
    url: "https://lanalashstudio.com",
    repo: "https://github.com/yankevych0210/lanalashstudio",
    ...shots("lana-studio", 3)
  },
  {
    slug: "chirva",
    title: "Chirva Studio",
    category: "commercial",
    featured: true,
    year: "2026",
    client: "Yevheniia Chirva (@chirva.cm)",
    role: ROLE_SOLO,
    summary: {
      en: "Editorial portfolio site for a content creator — Reels, UGC and brand photo production.",
      ua: "Editorial-портфоліо для контент-мейкерки — Reels, UGC та бренд-фотопродакшн.",
      ru: "Editorial-портфолио для контент-мейкера — Reels, UGC и бренд-фотопродакшн."
    },
    description: {
      en: "A premium one-page site for a content creator and visual strategist. Minimal editorial + fashion style that sells a personal brand: services, a filterable photo/video portfolio, case studies, pricing and an Instagram feed baked in at build time.",
      ua: "Преміальний односторінковий сайт для контент-мейкерки та візуальної стратегині. Мінімалістичний editorial + fashion стиль, що продає особистий бренд: послуги, портфоліо фото/відео з фільтрами, кейси, ціни та Instagram-фід, вбудований під час збірки.",
      ru: "Премиальный одностраничный сайт для контент-мейкера и визуального стратега. Минималистичный editorial + fashion стиль, который продаёт личный бренд: услуги, портфолио фото/видео с фильтрами, кейсы, цены и Instagram-фид, встроенный при сборке."
    },
    features: {
      en: [
        "Hero, about, services, portfolio, cases, pricing and Instagram sections",
        "Portfolio filters and a full-screen photo/video lightbox",
        "Self-hosted Cyrillic fonts (Cormorant Garamond, Inter, IBM Plex Mono)",
        "JSON-LD for Person, ProfessionalService and WebSite, plus OG tags"
      ],
      ua: [
        "Секції hero, про мене, послуги, портфоліо, кейси, ціни та Instagram",
        "Фільтри портфоліо та повноекранний фото/відео-лайтбокс",
        "Self-hosted шрифти з кирилицею (Cormorant Garamond, Inter, IBM Plex Mono)",
        "JSON-LD для Person, ProfessionalService і WebSite та OG-теги"
      ],
      ru: [
        "Секции hero, обо мне, услуги, портфолио, кейсы, цены и Instagram",
        "Фильтры портфолио и полноэкранный фото/видео-лайтбокс",
        "Self-hosted шрифты с кириллицей (Cormorant Garamond, Inter, IBM Plex Mono)",
        "JSON-LD для Person, ProfessionalService и WebSite и OG-теги"
      ]
    },
    highlights: {
      en: [
        "Static pre-render: SSR HTML and head are injected at build time, robots.txt and sitemap.xml are generated, then React hydrates",
        "Instagram feed is fetched before each build with a fallback to committed data, so a third-party outage never breaks a deploy",
        "Media scripts produce 480/960 WebP and HEVC + H.264 video with auto-generated posters; hero image preloaded with fetchpriority",
        "Lightbox with focus trap, Esc to close, focus restore and scroll lock"
      ],
      ua: [
        "Статичний пре-рендер: SSR-HTML і head вставляються під час збірки, генеруються robots.txt і sitemap.xml, потім React гідрується",
        "Instagram-фід завантажується перед кожною збіркою з фолбеком на збережені дані, тому збій стороннього сервісу ніколи не ламає деплой",
        "Скрипти для медіа генерують WebP 480/960 і відео HEVC + H.264 з автопостерами; hero-зображення з preload і fetchpriority",
        "Лайтбокс з focus trap, закриттям по Esc, поверненням фокусу та блокуванням скролу"
      ],
      ru: [
        "Статический пре-рендер: SSR-HTML и head вставляются при сборке, генерируются robots.txt и sitemap.xml, затем React гидрируется",
        "Instagram-фид загружается перед каждой сборкой с фолбэком на сохранённые данные, поэтому сбой стороннего сервиса никогда не ломает деплой",
        "Скрипты для медиа генерируют WebP 480/960 и видео HEVC + H.264 с автопостерами; hero-изображение с preload и fetchpriority",
        "Лайтбокс с focus trap, закрытием по Esc, возвратом фокуса и блокировкой скролла"
      ]
    },
    stack: ["React 19", "TypeScript", "Vite (SSR prerender)", "Tailwind CSS", "Fontsource", "Vercel"],
    url: "https://chirva-studio.vercel.app",
    repo: "https://github.com/yankevych0210/CHIRVA-STUDIO",
    ...shots("chirva", 3)
  },
  {
    slug: "cherrytrader",
    title: "CherryTrader",
    category: "commercial",
    featured: true,
    year: "2024–2025",
    client: "Veido",
    role: {en: "Front-End Engineer (team)", ua: "Front-End інженер (у команді)", ru: "Front-End инженер (в команде)"},
    summary: {
      en: "Marketplace for trucks, trailers and heavy equipment — responsive UI, features and performance.",
      ua: "Маркетплейс вантажівок, причепів і спецтехніки — адаптивний UI, нові фічі та продуктивність.",
      ru: "Маркетплейс грузовиков, прицепов и спецтехники — адаптивный UI, новые фичи и производительность."
    },
    description: {
      en: "CherryTrader is a US marketplace for buying, selling, leasing and renting commercial vehicles and equipment. On a contract with Veido I built and scaled front-end features as part of the development team, working with designers and backend engineers.",
      ua: "CherryTrader — американський маркетплейс для купівлі, продажу, лізингу та оренди комерційного транспорту й техніки. За контрактом з Veido я розробляв і масштабував фронтенд-функціонал у складі команди разом із дизайнерами та бекенд-інженерами.",
      ru: "CherryTrader — американский маркетплейс для покупки, продажи, лизинга и аренды коммерческого транспорта и техники. По контракту с Veido я разрабатывал и масштабировал фронтенд-функциональность в составе команды вместе с дизайнерами и бэкенд-инженерами."
    },
    features: {
      en: [
        "Responsive UI components for listings, categories and search",
        "Interactive features built with Next.js, TypeScript and HeroUI",
        "Cross-browser fixes across desktop and mobile"
      ],
      ua: [
        "Адаптивні UI-компоненти для оголошень, категорій і пошуку",
        "Інтерактивні фічі на Next.js, TypeScript і HeroUI",
        "Кросбраузерні виправлення для десктопа й мобільних"
      ],
      ru: [
        "Адаптивные UI-компоненты для объявлений, категорий и поиска",
        "Интерактивные фичи на Next.js, TypeScript и HeroUI",
        "Кроссбраузерные исправления для десктопа и мобильных"
      ]
    },
    highlights: {
      en: [
        "Worked inside an existing production codebase with code review and a shared Git flow",
        "Performance work on heavy listing pages"
      ],
      ua: [
        "Робота в існуючій продакшн-кодовій базі з код-рев'ю та спільним Git-флоу",
        "Оптимізація продуктивності важких сторінок з оголошеннями"
      ],
      ru: [
        "Работа в существующей продакшн-кодовой базе с код-ревью и общим Git-флоу",
        "Оптимизация производительности тяжёлых страниц с объявлениями"
      ]
    },
    stack: ["Next.js", "TypeScript", "React", "Redux", "HeroUI", "Tailwind CSS", "SCSS"],
    url: "https://cherrytrader.com",
    ...shots("cherrytrader", 4, false)
  },
  {
    slug: "avtoinstall",
    title: "AvtoInstallServis",
    category: "commercial",
    year: "2024",
    client: "Annamax",
    role: ROLE_FE,
    summary: {
      en: "Corporate websites for a car protection service — main and Austrian localized versions.",
      ua: "Корпоративні сайти автосервісу із захисту кузова — основна та австрійська локалізовані версії.",
      ru: "Корпоративные сайты автосервиса по защите кузова — основная и австрийская локализованные версии."
    },
    description: {
      en: "Freelance project: two production websites for a car detailing and protection service (ceramic coatings, films, tinting). Clear service structure, lead-generating calls to action and SEO-friendly markup for local search.",
      ua: "Фриланс-проєкт: два продакшн-сайти для сервісу детейлінгу й захисту авто (керамічні покриття, плівки, тонування). Зрозуміла структура послуг, CTA для заявок і SEO-дружня розмітка для локального пошуку.",
      ru: "Фриланс-проект: два продакшн-сайта для сервиса детейлинга и защиты авто (керамические покрытия, плёнки, тонировка). Понятная структура услуг, CTA для заявок и SEO-дружелюбная разметка для локального поиска."
    },
    features: {
      en: ["Main Ukrainian site and a localized Austrian version", "Services, gallery, reviews and contact sections", "Responsive layout and cross-browser checks"],
      ua: ["Основний український сайт і локалізована австрійська версія", "Секції послуг, галереї, відгуків і контактів", "Адаптивна верстка та кросбраузерна перевірка"],
      ru: ["Основной украинский сайт и локализованная австрийская версия", "Секции услуг, галереи, отзывов и контактов", "Адаптивная вёрстка и кроссбраузерная проверка"]
    },
    highlights: {
      en: ["Shipped end-to-end on a tight freelance timeline, including deployment and domains"],
      ua: ["Здано під ключ у стислі фриланс-терміни, включно з деплоєм і доменами"],
      ru: ["Сдано под ключ в сжатые фриланс-сроки, включая деплой и домены"]
    },
    stack: ["HTML", "CSS", "JavaScript", "SEO"],
    url: "https://avtoinstallservis.site",
    links: [{label: "at.avtoinstallservis.site", href: "https://at.avtoinstallservis.site"}],
    ...shots("avtoinstall", 4)
  },
  {
    slug: "streaming",
    title: "Streaming Platform",
    category: "commercial",
    year: "2025",
    client: "LeadAR",
    role: {en: "Sole Front-End Developer", ua: "Єдиний Front-End розробник", ru: "Единственный Front-End разработчик"},
    summary: {
      en: "Pixel-perfect landing with sign-up flows for a web streaming platform.",
      ua: "Pixel-perfect лендинг зі сценаріями реєстрації для стримінгової платформи.",
      ru: "Pixel-perfect лендинг со сценариями регистрации для стриминговой платформы."
    },
    description: {
      en: "Freelance project for LeadAR: I was the only front-end developer, taking the platform's landing from Figma to launch with responsive sign-up forms and content carousels.",
      ua: "Фриланс-проєкт для LeadAR: я був єдиним фронтенд-розробником і провів лендинг платформи від макета у Figma до запуску — з адаптивними формами реєстрації та каруселями контенту.",
      ru: "Фриланс-проект для LeadAR: я был единственным фронтенд-разработчиком и провёл лендинг платформы от макета в Figma до запуска — с адаптивными формами регистрации и каруселями контента."
    },
    features: {
      en: ["Header slider with sign-up forms", "Password visibility toggle and a date-of-birth input mask", "Streamer and communication carousels (Swiper)"],
      ua: ["Слайдер у шапці з формами реєстрації", "Перемикач видимості пароля та маска дати народження", "Каруселі стрімерів і комунікації (Swiper)"],
      ru: ["Слайдер в шапке с формами регистрации", "Переключатель видимости пароля и маска даты рождения", "Карусели стримеров и коммуникации (Swiper)"]
    },
    highlights: {
      en: ["Pixel-perfect implementation of the Figma design across breakpoints"],
      ua: ["Pixel-perfect реалізація дизайну з Figma на всіх брейкпоінтах"],
      ru: ["Pixel-perfect реализация дизайна из Figma на всех брейкпоинтах"]
    },
    stack: ["HTML", "CSS", "JavaScript", "Swiper", "Figma"],
    url: "https://streaming-platform-pi.vercel.app",
    repo: "https://github.com/yankevych0210/Streaming-Platform",
    ...shots("streaming", 3)
  }
];
