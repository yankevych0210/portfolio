import type {Project} from "./types";
import {NO_WEB_DEMO, shots} from "./helpers";

export const PRODUCTS: Project[] = [
  {
    slug: "acme",
    title: "Acme — B2B SaaS Dashboard",
    category: "product",
    featured: true,
    year: "2026",
    role: {en: "Full-stack (Next.js)", ua: "Full-stack (Next.js)", ru: "Full-stack (Next.js)"},
    summary: {
      en: "Multi-tenant SaaS dashboard: workspaces, roles, customers CRUD and Stripe subscriptions.",
      ua: "Мультитенантний SaaS-дашборд: воркспейси, ролі, CRUD клієнтів і підписки Stripe.",
      ru: "Мультитенантный SaaS-дашборд: воркспейсы, роли, CRUD клиентов и подписки Stripe."
    },
    description: {
      en: "A full-stack B2B SaaS starter built on the Next.js App Router with Server Actions. Users sign in with Google or a magic link, get a workspace, manage customers, invite teammates and upgrade through Stripe Checkout.",
      ua: "Full-stack стартер B2B SaaS на Next.js App Router із Server Actions. Користувачі входять через Google або magic link, отримують воркспейс, керують клієнтами, запрошують колег і оформлюють підписку через Stripe Checkout.",
      ru: "Full-stack стартер B2B SaaS на Next.js App Router с Server Actions. Пользователи входят через Google или magic link, получают воркспейс, управляют клиентами, приглашают коллег и оформляют подписку через Stripe Checkout."
    },
    features: {
      en: [
        "Auth.js v5: Google OAuth and a branded magic-link email (Resend)",
        "Workspaces with a switcher; active workspace stored in the JWT session",
        "Customers table (TanStack Table) with forms on react-hook-form + Zod",
        "Stripe Checkout subscriptions with a signed webhook",
        "Revenue chart (Recharts), onboarding tour (driver.js), dark mode"
      ],
      ua: [
        "Auth.js v5: Google OAuth і брендований лист з magic link (Resend)",
        "Воркспейси з перемикачем; активний воркспейс зберігається в JWT-сесії",
        "Таблиця клієнтів (TanStack Table) з формами на react-hook-form + Zod",
        "Підписки через Stripe Checkout з підписаним вебхуком",
        "Графік доходу (Recharts), онбординг-тур (driver.js), темна тема"
      ],
      ru: [
        "Auth.js v5: Google OAuth и брендированное письмо с magic link (Resend)",
        "Воркспейсы с переключателем; активный воркспейс хранится в JWT-сессии",
        "Таблица клиентов (TanStack Table) с формами на react-hook-form + Zod",
        "Подписки через Stripe Checkout с подписанным вебхуком",
        "График дохода (Recharts), онбординг-тур (driver.js), тёмная тема"
      ]
    },
    highlights: {
      en: [
        "Edge-safe split auth config used in middleware to redirect users without a workspace",
        "Prisma schema models tenancy: Workspace, WorkspaceMember with ADMIN/VIEWER roles, Customer",
        "Stripe webhook verifies the signature and maps the session back to a workspace through metadata"
      ],
      ua: [
        "Edge-сумісний розділений конфіг авторизації в middleware перенаправляє користувачів без воркспейсу",
        "Prisma-схема моделює мультитенантність: Workspace, WorkspaceMember з ролями ADMIN/VIEWER, Customer",
        "Stripe-вебхук перевіряє підпис і зв'язує сесію з воркспейсом через metadata"
      ],
      ru: [
        "Edge-совместимый разделённый конфиг авторизации в middleware перенаправляет пользователей без воркспейса",
        "Prisma-схема моделирует мультитенантность: Workspace, WorkspaceMember с ролями ADMIN/VIEWER, Customer",
        "Stripe-вебхук проверяет подпись и связывает сессию с воркспейсом через metadata"
      ]
    },
    stack: ["Next.js 16", "TypeScript", "Prisma", "PostgreSQL", "Auth.js", "Stripe", "shadcn/ui", "Zod"],
    url: "https://acme-corp-olive.vercel.app",
    repo: "https://github.com/yankevych0210/Acme-Corp",
    ...shots("acme", 2)
  },
  {
    slug: "nutrivision",
    title: "NutriVision",
    category: "product",
    year: "2026",
    role: {en: "Mobile developer (React Native)", ua: "Мобільний розробник (React Native)", ru: "Мобильный разработчик (React Native)"},
    summary: {
      en: "AI calorie tracker: snap a meal, Gemini returns the macros; plus an AI dietitian chat.",
      ua: "AI-трекер калорій: фото страви — і Gemini повертає БЖВ; плюс чат з AI-дієтологом.",
      ru: "AI-трекер калорий: фото блюда — и Gemini возвращает БЖУ; плюс чат с AI-диетологом."
    },
    description: {
      en: "An Expo / React Native app where users log meals manually or by photo. Google Gemini analyses the picture and returns structured macros; a chat assistant answers nutrition questions using the user's own profile as context. Auth, data and images live in Supabase.",
      ua: "Застосунок на Expo / React Native, де користувач записує прийоми їжі вручну або через фото. Google Gemini аналізує знімок і повертає структуровані БЖВ; чат-асистент відповідає на питання про харчування з урахуванням профілю користувача. Авторизація, дані й зображення — у Supabase.",
      ru: "Приложение на Expo / React Native, где пользователь записывает приёмы пищи вручную или через фото. Google Gemini анализирует снимок и возвращает структурированные БЖУ; чат-ассистент отвечает на вопросы о питании с учётом профиля пользователя. Авторизация, данные и изображения — в Supabase."
    },
    features: {
      en: [
        "Camera food scan → Gemini multimodal analysis → JSON macros",
        "AI dietitian chat with history and user-aware system prompt",
        "Dashboard with calorie and macro rings, water tracker, supplements",
        "Onboarding with calorie goals (Mifflin-St Jeor), history calendar, EN/UK/RU"
      ],
      ua: [
        "Сканування їжі камерою → мультимодальний аналіз Gemini → БЖВ у JSON",
        "Чат з AI-дієтологом з історією та системним промптом з даними користувача",
        "Дашборд з кільцями калорій і БЖВ, трекер води, добавки",
        "Онбординг із розрахунком норми калорій (Міффлін-Сан Жеор), календар історії, EN/UK/RU"
      ],
      ru: [
        "Сканирование еды камерой → мультимодальный анализ Gemini → БЖУ в JSON",
        "Чат с AI-диетологом с историей и системным промптом с данными пользователя",
        "Дашборд с кольцами калорий и БЖУ, трекер воды, добавки",
        "Онбординг с расчётом нормы калорий (Миффлин-Сан Жеор), календарь истории, EN/UK/RU"
      ]
    },
    highlights: {
      en: ["Jest + jest-expo tests for the calculator, diary store and components", "EAS Build / Update configuration for OTA releases"],
      ua: ["Тести Jest + jest-expo для калькулятора, стору щоденника та компонентів", "Конфігурація EAS Build / Update для OTA-релізів"],
      ru: ["Тесты Jest + jest-expo для калькулятора, стора дневника и компонентов", "Конфигурация EAS Build / Update для OTA-релизов"]
    },
    stack: ["React Native", "Expo", "TypeScript", "Zustand", "Supabase", "Gemini API", "NativeWind", "i18next"],
    repo: "https://github.com/yankevych0210/NutriVision",
    ...shots("nutrivision", 1, false),
    note: NO_WEB_DEMO
  },
  {
    slug: "gridify",
    title: "Gridify",
    category: "product",
    year: "2026",
    role: {en: "Mobile developer (React Native)", ua: "Мобільний розробник (React Native)", ru: "Мобильный разработчик (React Native)"},
    summary: {
      en: "Block-puzzle mobile game with classic and adventure modes, sounds and haptics.",
      ua: "Мобільна гра-головоломка з блоками: класичний і пригодницький режими, звуки та вібрація.",
      ru: "Мобильная игра-головоломка с блоками: классический и приключенческий режимы, звуки и вибрация."
    },
    description: {
      en: "A Block Blast-style puzzle game built with Expo. Drag shapes onto the grid, clear lines, chain combos. Adventure mode has a level map with obstacles and target scores; progress is saved between sessions.",
      ua: "Головоломка в стилі Block Blast на Expo. Перетягуй фігури на поле, очищуй лінії, збирай комбо. У пригодницькому режимі — мапа рівнів з перешкодами й цільовими очками; прогрес зберігається між сесіями.",
      ru: "Головоломка в стиле Block Blast на Expo. Перетаскивай фигуры на поле, очищай линии, собирай комбо. В приключенческом режиме — карта уровней с препятствиями и целевыми очками; прогресс сохраняется между сессиями."
    },
    features: {
      en: ["Drag-and-drop shapes with a ghost preview of the landing spot", "Line clears, combos, score popups and game-over detection", "Adventure map with levels parsed from ASCII maps", "Save/resume, settings for sound, music and vibration"],
      ua: ["Drag-and-drop фігур з «привидом» місця приземлення", "Очищення ліній, комбо, спливаючі очки та визначення кінця гри", "Мапа пригод з рівнями, що парсяться з ASCII-карт", "Збереження/продовження, налаштування звуку, музики й вібрації"],
      ru: ["Drag-and-drop фигур с «призраком» места приземления", "Очистка линий, комбо, всплывающие очки и определение конца игры", "Карта приключений с уровнями, которые парсятся из ASCII-карт", "Сохранение/продолжение, настройки звука, музыки и вибрации"]
    },
    highlights: {
      en: ["Placement preview runs on the UI thread with Reanimated shared values and gesture hit-testing — smooth at 60 fps", "Zustand persist with partialize stores only the state worth keeping"],
      ua: ["Превʼю розміщення працює в UI-потоці через shared values Reanimated і hit-testing жестів — плавно на 60 fps", "Zustand persist з partialize зберігає лише потрібний стан"],
      ru: ["Превью размещения работает в UI-потоке через shared values Reanimated и hit-testing жестов — плавно на 60 fps", "Zustand persist с partialize сохраняет только нужное состояние"]
    },
    stack: ["React Native", "Expo", "TypeScript", "Reanimated", "Gesture Handler", "Zustand"],
    repo: "https://github.com/yankevych0210/Gridify",
    ...shots("gridify", 1, false),
    note: NO_WEB_DEMO
  },
  {
    slug: "aurastream",
    title: "AuraStream",
    category: "product",
    year: "2026",
    role: {en: "Front-End Developer (Next.js)", ua: "Front-End розробник (Next.js)", ru: "Front-End разработчик (Next.js)"},
    summary: {
      en: "Netflix-style movie & TV catalog on TMDB with Google sign-in, search, watchlist and 3 languages.",
      ua: "Каталог фільмів і серіалів у стилі Netflix на TMDB: вхід через Google, пошук, список перегляду, 3 мови.",
      ru: "Каталог фильмов и сериалов в стиле Netflix на TMDB: вход через Google, поиск, список просмотра, 3 языка."
    },
    description: {
      en: "A streaming-service interface built on Next.js 16. Live catalogs come from the TMDB API in the selected language; users sign in with Google, search across movies and shows, open a detail modal with similar titles and keep a personal watchlist.",
      ua: "Інтерфейс стримінгового сервісу на Next.js 16. Каталоги в реальному часі приходять з TMDB API обраною мовою; користувач входить через Google, шукає фільми й серіали, відкриває модалку з деталями та схожими тайтлами і веде власний список перегляду.",
      ru: "Интерфейс стримингового сервиса на Next.js 16. Каталоги в реальном времени приходят из TMDB API на выбранном языке; пользователь входит через Google, ищет фильмы и сериалы, открывает модалку с деталями и похожими тайтлами и ведёт собственный список просмотра."
    },
    features: {
      en: [
        "Hero banner and content rows; Movies, TV Shows, New & Popular and My List pages",
        "Live multi-search in the header with trending suggestions",
        "Detail modal with similar titles and a multi-source player with fallback",
        "EN / RU / UA switch that refetches TMDB content in the chosen language",
        "Google OAuth (NextAuth v5) with protected routes in middleware"
      ],
      ua: [
        "Hero-банер і стрічки контенту; сторінки Фільми, Серіали, Нове та Мій список",
        "Живий мультипошук у шапці з трендовими підказками",
        "Модалка з деталями, схожими тайтлами та плеєром з кількома джерелами й фолбеком",
        "Перемикач EN / RU / UA, що перезапитує контент TMDB обраною мовою",
        "Google OAuth (NextAuth v5) і захищені маршрути в middleware"
      ],
      ru: [
        "Hero-баннер и ленты контента; страницы Фильмы, Сериалы, Новое и Мой список",
        "Живой мультипоиск в шапке с трендовыми подсказками",
        "Модалка с деталями, похожими тайтлами и плеером с несколькими источниками и фолбэком",
        "Переключатель EN / RU / UA, который перезапрашивает контент TMDB на выбранном языке",
        "Google OAuth (NextAuth v5) и защищённые маршруты в middleware"
      ]
    },
    highlights: {
      en: [
        "TanStack Query cache keys include the language, with a 10-minute staleTime for catalog data",
        "Sign-in upserts the user into Supabase without blocking login if the database is unavailable",
        "/api/health endpoint checks TMDB, Supabase and OAuth configuration for quick deploy diagnostics"
      ],
      ua: [
        "Ключі кешу TanStack Query включають мову, staleTime для каталогів — 10 хвилин",
        "Під час входу користувач записується в Supabase, але недоступність бази не блокує логін",
        "Ендпоінт /api/health перевіряє конфігурацію TMDB, Supabase та OAuth для швидкої діагностики деплою"
      ],
      ru: [
        "Ключи кэша TanStack Query включают язык, staleTime для каталогов — 10 минут",
        "При входе пользователь записывается в Supabase, но недоступность базы не блокирует логин",
        "Эндпоинт /api/health проверяет конфигурацию TMDB, Supabase и OAuth для быстрой диагностики деплоя"
      ]
    },
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "NextAuth", "TanStack Query", "Zustand", "Supabase", "TMDB API"],
    url: "https://aurastream-seven.vercel.app",
    repo: "https://github.com/yankevych0210/aurastream",
    ...shots("aurastream", 3)
  }
];
