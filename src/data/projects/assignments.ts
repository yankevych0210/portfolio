import type {Project} from "./types";
import {shots, ROLE_FE} from "./helpers";

export const ASSIGNMENTS: Project[] = [
  {
    slug: "interactive-zero",
    title: "Interactive Zero",
    category: "test",
    featured: true,
    year: "2026",
    role: ROLE_FE,
    summary: {
      en: "Cinematic scroll-driven experience — GSAP ScrollTrigger, particle canvas, custom cursor.",
      ua: "Кінематографічний scroll-driven сайт — GSAP ScrollTrigger, canvas з частинками, кастомний курсор.",
      ru: "Кинематографичный scroll-driven сайт — GSAP ScrollTrigger, canvas с частицами, кастомный курсор."
    },
    description: {
      en: "Recreation of the immersive \"Hall of Zero Limits\" experience without 3D: a loader, a video hero with a GSAP intro timeline and a chain of scroll-synchronised sections.",
      ua: "Відтворення імерсивного досвіду «Hall of Zero Limits» без 3D: лоадер, відео-hero з інтро на GSAP timeline і ланцюжок секцій, синхронізованих зі скролом.",
      ru: "Воссоздание иммерсивного опыта «Hall of Zero Limits» без 3D: лоадер, видео-hero с интро на GSAP timeline и цепочка секций, синхронизированных со скроллом."
    },
    features: {
      en: ["Loader and video hero with a GSAP timeline intro", "Particle canvas that reacts to the mouse", "Custom cursor, scroll-progress bar, quiz and library sections", "Scanline, cyber-grid and noise overlays"],
      ua: ["Лоадер і відео-hero з інтро на GSAP timeline", "Canvas з частинками, що реагують на мишу", "Кастомний курсор, прогрес скролу, секції квізу та бібліотеки", "Оверлеї scanlines, cyber-grid і шуму"],
      ru: ["Лоадер и видео-hero с интро на GSAP timeline", "Canvas с частицами, реагирующими на мышь", "Кастомный курсор, прогресс скролла, секции квиза и библиотеки", "Оверлеи scanlines, cyber-grid и шума"]
    },
    highlights: {
      en: ["Particle count scales with viewport area; the canvas is DPR-aware and cleans up its animation loop"],
      ua: ["Кількість частинок масштабується від площі в'юпорту; canvas враховує DPR і прибирає свій цикл анімації"],
      ru: ["Количество частиц масштабируется от площади вьюпорта; canvas учитывает DPR и очищает свой цикл анимации"]
    },
    stack: ["Next.js", "React 19", "TypeScript", "GSAP", "Tailwind CSS", "Canvas API"],
    url: "https://interactive-zero.vercel.app",
    repo: "https://github.com/yankevych0210/interactive_zero",
    ...shots("interactive-zero", 3)
  },
  {
    slug: "forms-lite",
    title: "Forms Lite",
    category: "test",
    year: "2026",
    role: {en: "Full-stack (React + NestJS)", ua: "Full-stack (React + NestJS)", ru: "Full-stack (React + NestJS)"},
    summary: {
      en: "Google Forms clone — pnpm monorepo with a React/RTK Query client and NestJS GraphQL API.",
      ua: "Клон Google Forms — pnpm-монорепо з клієнтом на React/RTK Query і GraphQL API на NestJS.",
      ru: "Клон Google Forms — pnpm-монорепо с клиентом на React/RTK Query и GraphQL API на NestJS."
    },
    description: {
      en: "A full-stack assignment: form builder, form filler and responses viewer. The server is a code-first NestJS GraphQL API; the client uses RTK Query hooks generated straight from the GraphQL schema.",
      ua: "Full-stack завдання: конструктор форм, заповнення та перегляд відповідей. Сервер — code-first GraphQL API на NestJS; клієнт використовує RTK Query хуки, згенеровані прямо з GraphQL-схеми.",
      ru: "Full-stack задание: конструктор форм, заполнение и просмотр ответов. Сервер — code-first GraphQL API на NestJS; клиент использует RTK Query хуки, сгенерированные прямо из GraphQL-схемы."
    },
    features: {
      en: ["Builder for text, date, single- and multiple-choice questions", "Form filler with required-field validation", "Responses page per form, delete with confirmation", "Own UI kit on CSS Modules"],
      ua: ["Конструктор питань: текст, дата, один і кілька варіантів", "Заповнення форми з валідацією обов'язкових полів", "Сторінка відповідей для кожної форми, видалення з підтвердженням", "Власний UI-кіт на CSS Modules"],
      ru: ["Конструктор вопросов: текст, дата, один и несколько вариантов", "Заполнение формы с валидацией обязательных полей", "Страница ответов для каждой формы, удаление с подтверждением", "Собственный UI-кит на CSS Modules"]
    },
    highlights: {
      en: ["GraphQL Codegen → typed RTK Query endpoints, enhanced with tag-based cache invalidation", "Custom GraphQL baseQuery with error mapping; Vitest tests for the builder reducer"],
      ua: ["GraphQL Codegen → типізовані ендпоінти RTK Query з інвалідацією кешу за тегами", "Власний GraphQL baseQuery з мапінгом помилок; тести Vitest для редюсера конструктора"],
      ru: ["GraphQL Codegen → типизированные эндпоинты RTK Query с инвалидацией кэша по тегам", "Собственный GraphQL baseQuery с маппингом ошибок; тесты Vitest для редьюсера конструктора"]
    },
    stack: ["React 19", "TypeScript", "RTK Query", "GraphQL Codegen", "NestJS", "Apollo Server", "pnpm workspaces"],
    url: "https://ten-thousand-test-client.vercel.app",
    repo: "https://github.com/yankevych0210/TenThousand-test",
    ...shots("forms-lite", 1),
    note: {
      en: "The demo API runs on a free tier and may be asleep — the builder UI works, saved forms need the server.",
      ua: "Демо-API працює на безкоштовному тарифі й може «спати» — конструктор працює, збережені форми потребують сервера.",
      ru: "Демо-API работает на бесплатном тарифе и может «спать» — конструктор работает, сохранённые формы требуют сервера."
    }
  },
  {
    slug: "tumli",
    title: "Tumli Tasks",
    category: "test",
    year: "2026",
    role: ROLE_FE,
    summary: {
      en: "Time-slot task planner with drag-and-drop and optimistic updates with rollback.",
      ua: "Планувальник задач у тайм-слотах з drag-and-drop і оптимістичними оновленнями з відкатом.",
      ru: "Планировщик задач в тайм-слотах с drag-and-drop и оптимистичными обновлениями с откатом."
    },
    description: {
      en: "A day planner with 15/30/60-minute slots. The backend is mocked inside RTK Query with latency and random sync conflicts — to demonstrate that the UI stays responsive and rolls back correctly.",
      ua: "Планувальник дня зі слотами 15/30/60 хвилин. Бекенд замоканий у RTK Query із затримкою та випадковими конфліктами синхронізації — щоб показати, що UI лишається чуйним і коректно відкочується.",
      ru: "Планировщик дня со слотами 15/30/60 минут. Бэкенд замокан в RTK Query с задержкой и случайными конфликтами синхронизации — чтобы показать, что UI остаётся отзывчивым и корректно откатывается."
    },
    features: {
      en: ["Switchable 15/30/60-minute grid", "Task CRUD with inline rename on double-click", "Drag tasks between slots (@dnd-kit)", "Live labels: starts in / active for / completed at / overdue"],
      ua: ["Перемикання сітки 15/30/60 хвилин", "CRUD задач з перейменуванням подвійним кліком", "Перетягування задач між слотами (@dnd-kit)", "Живі мітки: почнеться через / активна / завершена / прострочена"],
      ru: ["Переключение сетки 15/30/60 минут", "CRUD задач с переименованием двойным кликом", "Перетаскивание задач между слотами (@dnd-kit)", "Живые метки: начнётся через / активна / завершена / просрочена"]
    },
    highlights: {
      en: ["Real optimistic UI: onQueryStarted + updateQueryData + patch.undo() on failure", "Simulated 409 conflicts prove the rollback path; Panda CSS recipes for zero-runtime styles"],
      ua: ["Справжній optimistic UI: onQueryStarted + updateQueryData + patch.undo() при помилці", "Симульовані конфлікти 409 перевіряють відкат; рецепти Panda CSS для стилів без рантайму"],
      ru: ["Настоящий optimistic UI: onQueryStarted + updateQueryData + patch.undo() при ошибке", "Симулированные конфликты 409 проверяют откат; рецепты Panda CSS для стилей без рантайма"]
    },
    stack: ["React 19", "TypeScript", "RTK Query", "@dnd-kit", "Panda CSS", "Framer Motion"],
    url: "https://equity-test.vercel.app",
    repo: "https://github.com/yankevych0210/Equity_test",
    ...shots("tumli", 1)
  },
  {
    slug: "inventory",
    title: "Inventory SPA",
    category: "test",
    year: "2026",
    role: {en: "Full-stack (React + Node)", ua: "Full-stack (React + Node)", ru: "Full-stack (React + Node)"},
    summary: {
      en: "Orders & products inventory app with a live WebSocket session counter, i18n and Docker.",
      ua: "Застосунок обліку приходів і товарів з живим лічильником сесій через WebSocket, i18n і Docker.",
      ru: "Приложение учёта приходов и товаров с живым счётчиком сессий через WebSocket, i18n и Docker."
    },
    description: {
      en: "Inventory management SPA with orders and products. An Express + Socket.io server powers a real-time counter of open tabs; the client is React + Redux Toolkit, packaged with Docker Compose and nginx.",
      ua: "SPA для керування складом: приходи й товари. Сервер на Express + Socket.io рахує відкриті вкладки в реальному часі; клієнт — React + Redux Toolkit, упакований у Docker Compose з nginx.",
      ru: "SPA для управления складом: приходы и товары. Сервер на Express + Socket.io считает открытые вкладки в реальном времени; клиент — React + Redux Toolkit, упакованный в Docker Compose с nginx."
    },
    features: {
      en: ["Orders list with an expandable detail panel, add/delete modals", "Products with type filter", "Live tab counter over Socket.io and a real-time clock", "UA/EN switcher, lazy-loaded routes, orders chart in USD/UAH"],
      ua: ["Список приходів з панеллю деталей, модалки додавання/видалення", "Товари з фільтром за типом", "Живий лічильник вкладок через Socket.io та годинник", "Перемикач UA/EN, ліниві маршрути, графік приходів у USD/UAH"],
      ru: ["Список приходов с панелью деталей, модалки добавления/удаления", "Товары с фильтром по типу", "Живой счётчик вкладок через Socket.io и часы", "Переключатель UA/EN, ленивые маршруты, график приходов в USD/UAH"]
    },
    highlights: {
      en: ["Module-level socket that survives React StrictMode double mounts", "Jest + Testing Library tests for slices, utils and pages; two-service Docker setup"],
      ua: ["Сокет на рівні модуля, стійкий до подвійного монтування в StrictMode", "Тести Jest + Testing Library для слайсів, утиліт і сторінок; Docker з двома сервісами"],
      ru: ["Сокет на уровне модуля, устойчивый к двойному монтированию в StrictMode", "Тесты Jest + Testing Library для слайсов, утилит и страниц; Docker с двумя сервисами"]
    },
    stack: ["React", "TypeScript", "Redux Toolkit", "Socket.io", "Express", "i18next", "Docker", "Bootstrap"],
    url: "https://dzencode-test-iota.vercel.app/orders",
    repo: "https://github.com/yankevych0210/dzencode-test",
    ...shots("inventory", 2)
  },
  {
    slug: "cryptodash",
    title: "CryptoDash",
    category: "test",
    year: "2026",
    role: ROLE_FE,
    summary: {
      en: "Analytics dashboard on Ant Design + TanStack Query: coin tables, price chart, form wizard.",
      ua: "Аналітичний дашборд на Ant Design + TanStack Query: таблиці монет, графік ціни, форма-візард.",
      ru: "Аналитический дашборд на Ant Design + TanStack Query: таблицы монет, график цены, форма-визард."
    },
    description: {
      en: "Assignment for a company building an analytics product: a themed Ant Design app pulling live CoinGecko data, focused on data fetching and caching patterns rather than crypto itself.",
      ua: "Завдання для компанії, що будує аналітичний продукт: застосунок на Ant Design з глобальною темою та живими даними CoinGecko — фокус на патернах отримання й кешування даних.",
      ru: "Задание для компании, которая строит аналитический продукт: приложение на Ant Design с глобальной темой и живыми данными CoinGecko — фокус на паттернах получения и кэширования данных."
    },
    features: {
      en: ["Global Ant Design theme with Table and Button tokens", "Top-50 coins table with formatting and colored 24h change", "Server-side pagination with keepPreviousData", "7-day price chart with coin switcher; validated form with summary"],
      ua: ["Глобальна тема Ant Design з токенами Table і Button", "Таблиця топ-50 монет з форматуванням і кольоровою зміною за 24 год", "Серверна пагінація з keepPreviousData", "Графік ціни за 7 днів з перемикачем монет; валідована форма з підсумком"],
      ru: ["Глобальная тема Ant Design с токенами Table и Button", "Таблица топ-50 монет с форматированием и цветным изменением за 24 ч", "Серверная пагинация с keepPreviousData", "График цены за 7 дней с переключателем монет; валидированная форма с итогом"]
    },
    highlights: {
      en: ["Query keys include page and page size; one table component reused across pages"],
      ua: ["Ключі запитів включають сторінку та розмір; один компонент таблиці перевикористано на кількох сторінках"],
      ru: ["Ключи запросов включают страницу и размер; один компонент таблицы переиспользован на нескольких страницах"]
    },
    stack: ["React 19", "Vite", "Ant Design", "TanStack Query", "Recharts", "React Router", "Docker"],
    url: "https://test-vilar.vercel.app",
    repo: "https://github.com/yankevych0210/test_Vilar",
    ...shots("cryptodash", 3, false)
  },
  {
    slug: "posts",
    title: "Posts App",
    category: "test",
    year: "2026",
    role: ROLE_FE,
    summary: {
      en: "Next.js posts browser built with Feature-Sliced Design, TanStack Query and shadcn/ui.",
      ua: "Переглядач постів на Next.js з Feature-Sliced Design, TanStack Query і shadcn/ui.",
      ru: "Просмотрщик постов на Next.js с Feature-Sliced Design, TanStack Query и shadcn/ui."
    },
    description: {
      en: "A small app that lists posts and opens a detail page — built to show clean architecture: FSD layers, a query-key factory, skeletons, error boundaries and a typed API layer.",
      ua: "Невеликий застосунок зі списком постів і сторінкою деталей — щоб показати чисту архітектуру: шари FSD, фабрика ключів запитів, скелетони, error boundaries і типізований API-шар.",
      ru: "Небольшое приложение со списком постов и страницей деталей — чтобы показать чистую архитектуру: слои FSD, фабрика ключей запросов, скелетоны, error boundaries и типизированный API-слой."
    },
    features: {
      en: ["Paginated posts grid with excerpts", "Post page with generateMetadata and notFound()", "Skeleton loaders, error boundary and 404", "Favicon generated with ImageResponse"],
      ua: ["Сітка постів з пагінацією та уривками", "Сторінка поста з generateMetadata і notFound()", "Скелетони, error boundary і 404", "Фавікон, згенерований через ImageResponse"],
      ru: ["Сетка постов с пагинацией и отрывками", "Страница поста с generateMetadata и notFound()", "Скелетоны, error boundary и 404", "Фавикон, сгенерированный через ImageResponse"]
    },
    highlights: {
      en: ["Feature-Sliced Design: entities / features / shared with public APIs", "QueryClient created once per client with tuned staleTime and gcTime"],
      ua: ["Feature-Sliced Design: entities / features / shared з публічними API", "QueryClient створюється один раз на клієнт з налаштованими staleTime і gcTime"],
      ru: ["Feature-Sliced Design: entities / features / shared с публичными API", "QueryClient создаётся один раз на клиент с настроенными staleTime и gcTime"]
    },
    stack: ["Next.js 16", "TypeScript", "TanStack Query", "Axios", "Tailwind CSS", "shadcn/ui"],
    url: "https://rgb-test-one.vercel.app",
    repo: "https://github.com/yankevych0210/RGB-test",
    ...shots("posts", 3)
  },
  {
    slug: "weather",
    title: "Panda Weather",
    category: "test",
    year: "2026",
    role: ROLE_FE,
    summary: {
      en: "Vue 3 multi-city weather dashboard with charts, favorites, EN/UK and auto day/night theme.",
      ua: "Погодний дашборд на Vue 3 для кількох міст: графіки, обране, EN/UK і авто-тема день/ніч.",
      ru: "Погодный дашборд на Vue 3 для нескольких городов: графики, избранное, EN/UK и авто-тема день/ночь."
    },
    description: {
      en: "Shows current weather and a 5-day forecast for up to five cities side by side. Detects the user's city by IP, supports favorites and switches the whole UI to a dark theme when it's night in the first city.",
      ua: "Показує поточну погоду та прогноз на 5 днів для п'яти міст одночасно. Визначає місто за IP, підтримує обране й перемикає весь інтерфейс у темну тему, коли в першому місті ніч.",
      ru: "Показывает текущую погоду и прогноз на 5 дней для пяти городов одновременно. Определяет город по IP, поддерживает избранное и переключает весь интерфейс в тёмную тему, когда в первом городе ночь."
    },
    features: {
      en: ["City autocomplete with debounce and keyboard navigation", "Up to 5 weather blocks persisted to localStorage", "Today / 5-day toggle with Chart.js temperature chart", "Favorites tab and EN/UK localisation"],
      ua: ["Автокомпліт міст з debounce і навігацією з клавіатури", "До 5 погодних блоків, збережених у localStorage", "Перемикач сьогодні / 5 днів з графіком температури Chart.js", "Вкладка обраного та локалізація EN/UK"],
      ru: ["Автокомплит городов с debounce и навигацией с клавиатуры", "До 5 погодных блоков, сохранённых в localStorage", "Переключатель сегодня / 5 дней с графиком температуры Chart.js", "Вкладка избранного и локализация EN/UK"]
    },
    highlights: {
      en: ["Axios interceptors inject the API key and units into every request", "Pinia setup store with deep-watch persistence and safe JSON loading"],
      ua: ["Axios-інтерсептори додають API-ключ і одиниці в кожен запит", "Pinia setup store з deep-watch збереженням і безпечним читанням JSON"],
      ru: ["Axios-интерсепторы добавляют API-ключ и единицы в каждый запрос", "Pinia setup store с deep-watch сохранением и безопасным чтением JSON"]
    },
    stack: ["Vue 3", "Vite", "Pinia", "Axios", "Chart.js", "SCSS (BEM)", "OpenWeatherMap"],
    url: "https://panda-weather-five.vercel.app",
    repo: "https://github.com/yankevych0210/panda-weather",
    ...shots("weather", 1)
  },
  {
    slug: "ai-video",
    title: "AI Video Workflow",
    category: "test",
    year: "2026",
    role: ROLE_FE,
    summary: {
      en: "Vue 3 screen for configuring and launching an AI video-generation workflow.",
      ua: "Екран на Vue 3 для налаштування та запуску AI-генерації відео.",
      ru: "Экран на Vue 3 для настройки и запуска AI-генерации видео."
    },
    description: {
      en: "A polished, responsive single screen: pick a workflow, aspect ratio and duration, describe the video and launch generation. The request is mocked; results go to a history sidebar with a built-in player.",
      ua: "Відполірований адаптивний екран: обери воркфлоу, співвідношення сторін і тривалість, опиши відео та запусти генерацію. Запит замоканий; результати потрапляють в історію з вбудованим плеєром.",
      ru: "Отполированный адаптивный экран: выбери воркфлоу, соотношение сторон и длительность, опиши видео и запусти генерацию. Запрос замокан; результаты попадают в историю со встроенным плеером."
    },
    features: {
      en: ["Option pickers and prompt with validation", "Live summary card and button states: idle / loading / success / error", "Toasts, history sidebar persisted to localStorage", "Video player with regenerate"],
      ua: ["Вибір опцій і промпт з валідацією", "Живе зведення та стани кнопки: idle / loading / success / error", "Тости, історія в localStorage", "Відеоплеєр з повторною генерацією"],
      ru: ["Выбор опций и промпт с валидацией", "Живая сводка и состояния кнопки: idle / loading / success / error", "Тосты, история в localStorage", "Видеоплеер с повторной генерацией"]
    },
    highlights: {
      en: ["Form logic extracted into a composable; README documents architecture decisions and edge cases"],
      ua: ["Логіку форми винесено в composable; README документує архітектурні рішення та крайні випадки"],
      ru: ["Логика формы вынесена в composable; README документирует архитектурные решения и крайние случаи"]
    },
    stack: ["Vue 3", "Vite", "Pinia", "Composition API"],
    url: "https://test-kubricon.vercel.app",
    repo: "https://github.com/yankevych0210/test_Kubricon",
    ...shots("ai-video", 1)
  },
  {
    slug: "snake",
    title: "Snake (PixiJS)",
    category: "test",
    year: "2026",
    role: ROLE_FE,
    summary: {
      en: "Snake on PixiJS v8 with five game modes, swipe controls and a saved best score.",
      ua: "Змійка на PixiJS v8 з п'ятьма режимами, свайп-керуванням і збереженим рекордом.",
      ru: "Змейка на PixiJS v8 с пятью режимами, свайп-управлением и сохранённым рекордом."
    },
    description: {
      en: "Classic Snake rendered on canvas with PixiJS, split into manager classes for input, food, walls, UI and the snake itself.",
      ua: "Класична змійка на canvas з PixiJS, розбита на класи-менеджери для вводу, їжі, стін, UI та самої змійки.",
      ru: "Классическая змейка на canvas с PixiJS, разбитая на классы-менеджеры для ввода, еды, стен, UI и самой змейки."
    },
    features: {
      en: ["Modes: Classic, God, Walls, Portal, Speed", "Keyboard and swipe input that blocks 180° turns", "Pause, game-over screen, best score in localStorage"],
      ua: ["Режими: Classic, God, Walls, Portal, Speed", "Клавіатура та свайпи з блокуванням розвороту на 180°", "Пауза, екран кінця гри, рекорд у localStorage"],
      ru: ["Режимы: Classic, God, Walls, Portal, Speed", "Клавиатура и свайпы с блокировкой разворота на 180°", "Пауза, экран конца игры, рекорд в localStorage"]
    },
    highlights: {
      en: ["Fixed-timestep game loop on Pixi's ticker that accumulates deltaMS"],
      ua: ["Ігровий цикл з фіксованим кроком на тікері Pixi, що накопичує deltaMS"],
      ru: ["Игровой цикл с фиксированным шагом на тикере Pixi, накапливающий deltaMS"]
    },
    stack: ["JavaScript (ES6+)", "PixiJS v8", "Vite"],
    url: "https://snake-test-eight.vercel.app",
    repo: "https://github.com/yankevych0210/snake_test",
    ...shots("snake", 1)
  },
  {
    slug: "nova-sante",
    title: "Nova Santé",
    category: "test",
    year: "2026",
    role: ROLE_FE,
    summary: {
      en: "Landing page for a private clinic in Lausanne with multi-platform conversion tracking.",
      ua: "Лендинг приватної клініки в Лозанні з трекінгом конверсій для кількох платформ.",
      ru: "Лендинг частной клиники в Лозанне с трекингом конверсий для нескольких платформ."
    },
    description: {
      en: "A one-page site for a (fictional) medical clinic: hero, services with detail modals, gallery, team, testimonials, FAQ and a booking form leading to a thank-you page, plus legal pages.",
      ua: "Односторінковий сайт для (вигаданої) медичної клініки: hero, послуги з модалками, галерея, команда, відгуки, FAQ і форма запису з переходом на сторінку подяки, а також юридичні сторінки.",
      ru: "Одностраничный сайт для (вымышленной) медицинской клиники: hero, услуги с модалками, галерея, команда, отзывы, FAQ и форма записи с переходом на страницу благодарности, а также юридические страницы."
    },
    features: {
      en: ["Responsive layout with burger menu", "Service modals, gallery lightbox, FAQ accordion", "Privacy, Terms and Disclaimer pages", "Conversion tracking driven by a JSON config (Google Ads, Meta, TikTok, Snap)"],
      ua: ["Адаптивна верстка з бургер-меню", "Модалки послуг, лайтбокс галереї, FAQ-акордеон", "Сторінки Privacy, Terms і Disclaimer", "Трекінг конверсій через JSON-конфіг (Google Ads, Meta, TikTok, Snap)"],
      ru: ["Адаптивная вёрстка с бургер-меню", "Модалки услуг, лайтбокс галереи, FAQ-аккордеон", "Страницы Privacy, Terms и Disclaimer", "Трекинг конверсий через JSON-конфиг (Google Ads, Meta, TikTok, Snap)"]
    },
    highlights: {
      en: ["Thank-you conversion fires once per session, providers are loaded on demand from config"],
      ua: ["Конверсія на сторінці подяки спрацьовує раз на сесію, провайдери завантажуються з конфігу на вимогу"],
      ru: ["Конверсия на странице благодарности срабатывает раз за сессию, провайдеры загружаются из конфига по требованию"]
    },
    stack: ["HTML", "Tailwind CSS", "Vanilla JS", "Conversion tracking"],
    url: "https://test-nova-sant.vercel.app",
    repo: "https://github.com/yankevych0210/test_Nova-Sant-",
    ...shots("nova-sante", 3)
  },
  {
    slug: "webspark",
    title: "Post Feed",
    category: "test",
    year: "2026",
    role: ROLE_FE,
    summary: {
      en: "Social profile feed with date-range filtering, grid/list toggle and load-more.",
      ua: "Стрічка профілю з фільтром за датами, перемиканням сітка/список і «завантажити ще».",
      ru: "Лента профиля с фильтром по датам, переключением сетка/список и «загрузить ещё»."
    },
    description: {
      en: "Layout + vanilla JS assignment: a social-profile page rendering posts from data with date filtering and pagination.",
      ua: "Завдання на верстку + vanilla JS: сторінка соцпрофілю, що рендерить пости з даних з фільтрацією за датами та пагінацією.",
      ru: "Задание на вёрстку + vanilla JS: страница соцпрофиля, которая рендерит посты из данных с фильтрацией по датам и пагинацией."
    },
    features: {
      en: ["Date-from / date-to filtering with flatpickr", "Grid / list view toggle", "Load more (8, then +4)", "Sticky header and lazy-loaded images"],
      ua: ["Фільтр «від / до» з flatpickr", "Перемикач сітка / список", "Завантажити ще (8, далі +4)", "Липка шапка та ліниве завантаження зображень"],
      ru: ["Фильтр «от / до» с flatpickr", "Переключатель сетка / список", "Загрузить ещё (8, затем +4)", "Липкая шапка и ленивая загрузка изображений"]
    },
    highlights: {
      en: ["Single render function combines filtering and pagination"],
      ua: ["Одна функція рендеру поєднує фільтрацію та пагінацію"],
      ru: ["Одна функция рендера объединяет фильтрацию и пагинацию"]
    },
    stack: ["HTML", "CSS (BEM)", "Vanilla JS", "flatpickr"],
    url: "https://webspark-project.vercel.app",
    repo: "https://github.com/yankevych0210/WEBSPARK-project",
    ...shots("webspark", 1)
  },
  {
    slug: "aqvex",
    title: "AQVEX Catalog",
    category: "test",
    year: "2026",
    role: ROLE_FE,
    summary: {
      en: "Pixel-matched product catalog with search, sorting and pagination — React only, no UI libraries.",
      ua: "Каталог товарів точно за макетом: пошук, сортування й пагінація — лише React, без UI-бібліотек.",
      ru: "Каталог товаров точно по макету: поиск, сортировка и пагинация — только React, без UI-библиотек."
    },
    description: {
      en: "Assignment for AQVEX, a Ukrainian e-commerce brand: a catalog SPA built from their mockups against the company API, with all data logic in one memoized hook and zero runtime dependencies besides React.",
      ua: "Завдання для AQVEX, українського e-commerce бренду: SPA-каталог за їхніми макетами на API компанії; вся логіка даних — в одному мемоізованому хуку, жодних залежностей, крім React.",
      ru: "Задание для AQVEX, украинского e-commerce бренда: SPA-каталог по их макетам на API компании; вся логика данных — в одном мемоизированном хуке, никаких зависимостей, кроме React."
    },
    features: {
      en: ["Debounced search by name and category", "Sorting by popularity, price and name", "Pagination with ellipses", "Product cards with volume variants, rating and stock; skeleton and error states"],
      ua: ["Пошук з debounce за назвою та категорією", "Сортування за популярністю, ціною та назвою", "Пагінація з трикрапками", "Картки товарів з варіантами об'єму, рейтингом і наявністю; скелетони та стан помилки"],
      ru: ["Поиск с debounce по названию и категории", "Сортировка по популярности, цене и названию", "Пагинация с многоточиями", "Карточки товаров с вариантами объёма, рейтингом и наличием; скелетоны и состояние ошибки"]
    },
    highlights: {
      en: ["Fetch cancellation and page clamping when results shrink", "API proxied through Vite in dev and Vercel rewrites in prod to avoid CORS"],
      ua: ["Скасування запитів і корекція сторінки, коли результатів стає менше", "API проксюється через Vite у dev і rewrites Vercel у prod, щоб обійти CORS"],
      ru: ["Отмена запросов и коррекция страницы, когда результатов становится меньше", "API проксируется через Vite в dev и rewrites Vercel в prod, чтобы обойти CORS"]
    },
    stack: ["React 19", "TypeScript", "Vite", "SCSS Modules", "Vercel rewrites"],
    url: "https://test-work-aqvex.vercel.app",
    repo: "https://github.com/yankevych0210/test-work_AQVEX",
    ...shots("aqvex", 2),
    note: {
      en: "The products API belongs to the company and is currently offline, so the live demo shows an error state. Screenshots were taken with test data.",
      ua: "API товарів належить компанії і зараз недоступне, тому живе демо показує стан помилки. Скриншоти зроблено з тестовими даними.",
      ru: "API товаров принадлежит компании и сейчас недоступно, поэтому живое демо показывает состояние ошибки. Скриншоты сделаны с тестовыми данными."
    }
  },
  {
    slug: "lead-form",
    title: "Lead Form Landing",
    category: "test",
    year: "2026",
    role: {en: "Front-End + serverless proxy", ua: "Front-End + serverless-проксі", ru: "Front-End + serverless-прокси"},
    summary: {
      en: "Spanish lead-generation landing with a validated form sent through a server-side proxy.",
      ua: "Іспаномовний лідген-лендинг з валідованою формою, що відправляється через серверний проксі.",
      ru: "Испаноязычный лидген-лендинг с валидированной формой, которая отправляется через серверный прокси."
    },
    description: {
      en: "A news-style landing page for paid traffic. The lead form is validated on the client and again on the server, then forwarded to an affiliate tracker API through a proxy — implemented both in PHP and as a Vercel serverless function.",
      ua: "Лендинг у форматі новини під платний трафік. Форма заявки валідується на клієнті та повторно на сервері, а потім передається в API трекера через проксі — реалізовано і на PHP, і як serverless-функцію Vercel.",
      ru: "Лендинг в формате новости под платный трафик. Форма заявки валидируется на клиенте и повторно на сервере, затем передаётся в API трекера через прокси — реализовано и на PHP, и как serverless-функция Vercel."
    },
    features: {
      en: ["Validation on blur with Spanish error messages", "Phone input mask and honeypot anti-bot field", "Success / error modals and optional redirect from the API", "Server maps tracker error codes to user-friendly messages"],
      ua: ["Валідація при blur з повідомленнями іспанською", "Маска телефону та honeypot-поле проти ботів", "Модалки успіху / помилки та редирект з API", "Сервер перетворює коди помилок трекера на зрозумілі повідомлення"],
      ru: ["Валидация при blur с сообщениями на испанском", "Маска телефона и honeypot-поле против ботов", "Модалки успеха / ошибки и редирект из API", "Сервер превращает коды ошибок трекера в понятные сообщения"]
    },
    highlights: {
      en: ["Same proxy in PHP and Node serverless, including a hand-written multipart parser", "Handles timeouts and HTML-instead-of-JSON responses from the upstream API"],
      ua: ["Однаковий проксі на PHP і Node serverless, включно з власним парсером multipart", "Обробляє таймаути й відповіді HTML замість JSON від зовнішнього API"],
      ru: ["Одинаковый прокси на PHP и Node serverless, включая собственный парсер multipart", "Обрабатывает таймауты и ответы HTML вместо JSON от внешнего API"]
    },
    stack: ["HTML", "CSS", "Vanilla JS", "PHP", "Vercel Serverless"],
    url: "https://pablos-test.vercel.app",
    repo: "https://github.com/yankevych0210/pablos-test",
    ...shots("lead-form", 3)
  },
  {
    slug: "zero-limits",
    title: "Zero Limits",
    category: "test",
    year: "2025",
    role: ROLE_FE,
    summary: {
      en: "First version of the cinematic \"Hall of Zero Limits\" landing — React, GSAP parallax and video cards.",
      ua: "Перша версія кінематографічного лендингу «Hall of Zero Limits» — React, паралакс на GSAP і відеокартки.",
      ru: "Первая версия кинематографичного лендинга «Hall of Zero Limits» — React, параллакс на GSAP и видеокарточки."
    },
    description: {
      en: "The earlier take on the same brief as Interactive Zero, built with Create React App and GSAP: scroll-driven parallax sections, a progress bar and gallery cards with video previews.",
      ua: "Ранній варіант того самого брифу, що й Interactive Zero, на Create React App і GSAP: паралакс-секції на скролі, індикатор прогресу та галерея карток з відео-превʼю.",
      ru: "Ранний вариант того же брифа, что и Interactive Zero, на Create React App и GSAP: параллакс-секции на скролле, индикатор прогресса и галерея карточек с видео-превью."
    },
    features: {
      en: ["Hero and navigation with a scroll-progress bar", "Scroll sections with parallax backgrounds", "Gallery and inspiration cards with video previews", "Pagination buttons between sections"],
      ua: ["Hero і навігація з прогресом скролу", "Секції з паралакс-фонами", "Галерея та картки натхнення з відео-превʼю", "Кнопки пагінації між секціями"],
      ru: ["Hero и навигация с прогрессом скролла", "Секции с параллакс-фонами", "Галерея и карточки вдохновения с видео-превью", "Кнопки пагинации между секциями"]
    },
    highlights: {
      en: ["Reusable GSAP hooks wrapping ScrollTrigger: useParallax, useScrollTrigger, useScrollProgress"],
      ua: ["Перевикористовувані GSAP-хуки над ScrollTrigger: useParallax, useScrollTrigger, useScrollProgress"],
      ru: ["Переиспользуемые GSAP-хуки над ScrollTrigger: useParallax, useScrollTrigger, useScrollProgress"]
    },
    stack: ["React", "GSAP", "ScrollTrigger", "CSS Modules"],
    url: "https://zero-limits.vercel.app",
    repo: "https://github.com/yankevych0210/Zero-Limits",
    ...shots("zero-limits", 3)
  },
  {
    slug: "framer",
    title: "Agency Landing",
    category: "test",
    year: "2025",
    role: ROLE_FE,
    summary: {
      en: "Responsive hero and mosaic section for a marketing agency, recreated from a Framer design.",
      ua: "Адаптивний hero та мозаїка для маркетингової агенції, відтворені з дизайну у Framer.",
      ru: "Адаптивный hero и мозаика для маркетингового агентства, воссозданные из дизайна во Framer."
    },
    description: {
      en: "A layout assignment: recreate a Framer template in pure HTML/CSS — full-bleed hero with overlaid navigation and CTA, a numbered content block and a three-image mosaic.",
      ua: "Завдання на верстку: відтворити шаблон Framer на чистому HTML/CSS — hero на всю ширину з навігацією та CTA поверх фото, нумерований блок контенту та мозаїка з трьох зображень.",
      ru: "Задание на вёрстку: воссоздать шаблон Framer на чистом HTML/CSS — hero на всю ширину с навигацией и CTA поверх фото, нумерованный блок контента и мозаика из трёх изображений."
    },
    features: {
      en: ["Full-bleed hero with overlaid headline and CTAs", "Numbered content section and meta labels", "Three-image mosaic", "Breakpoints from 360 to 1400 px"],
      ua: ["Hero на всю ширину із заголовком і CTA поверх фото", "Нумерована секція контенту та мета-мітки", "Мозаїка з трьох зображень", "Брейкпоінти від 360 до 1400 px"],
      ru: ["Hero на всю ширину с заголовком и CTA поверх фото", "Нумерованная секция контента и мета-метки", "Мозаика из трёх изображений", "Брейкпоинты от 360 до 1400 px"]
    },
    highlights: {
      en: ["Consistent BEM naming and a mobile-first container scale"],
      ua: ["Послідовний BEM-нейминг і mobile-first шкала контейнерів"],
      ru: ["Последовательный BEM-нейминг и mobile-first шкала контейнеров"]
    },
    stack: ["HTML", "CSS (BEM)", "Responsive layout"],
    url: "https://framer-ebon.vercel.app",
    repo: "https://github.com/yankevych0210/framer",
    ...shots("framer", 2)
  }
];
