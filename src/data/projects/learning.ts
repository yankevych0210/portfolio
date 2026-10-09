import type {Project} from "./types";
import {ROLE_FE, shots} from "./helpers";

export const LEARNING: Project[] = [
  {
    slug: "codepen",
    title: "CodePen Clone",
    category: "learning",
    year: "2023",
    client: "A-Level Ukraine (diploma)",
    role: {en: "Front-End Developer (team of 2)", ua: "Front-End розробник (команда з 2)", ru: "Front-End разработчик (команда из 2)"},
    summary: {
      en: "Team diploma project: live HTML/CSS/JS editor with auth, saved pens and profile settings.",
      ua: "Командний дипломний проєкт: живий редактор HTML/CSS/JS з авторизацією, збереженими пенами та налаштуваннями профілю.",
      ru: "Командный дипломный проект: живой редактор HTML/CSS/JS с авторизацией, сохранёнными пенами и настройками профиля."
    },
    description: {
      en: "Diploma project of the A-Level front-end course, built together with Vitaly Babenko on the course GraphQL backend. A CodePen-like editor with live preview, user accounts and a gallery of saved works.",
      ua: "Дипломний проєкт курсу A-Level, створений разом з Віталієм Бабенком на GraphQL-бекенді курсу. Редактор у стилі CodePen з живим превʼю, акаунтами та галереєю збережених робіт.",
      ru: "Дипломный проект курса A-Level, созданный вместе с Виталием Бабенко на GraphQL-бэкенде курса. Редактор в стиле CodePen с живым превью, аккаунтами и галереей сохранённых работ."
    },
    features: {
      en: ["Three-pane HTML/CSS/JS editor with resizable panels and debounced live preview", "Login/registration with private routes", "Create, rename, delete and save pens through GraphQL", "Avatar upload with drag-and-drop and cropping"],
      ua: ["Редактор HTML/CSS/JS з трьох панелей зі зміною розміру та живим превʼю", "Вхід/реєстрація з приватними маршрутами", "Створення, перейменування, видалення та збереження пенів через GraphQL", "Завантаження аватара з drag-and-drop і кропом"],
      ru: ["Редактор HTML/CSS/JS из трёх панелей с изменением размера и живым превью", "Вход/регистрация с приватными маршрутами", "Создание, переименование, удаление и сохранение пенов через GraphQL", "Загрузка аватара с drag-and-drop и кропом"]
    },
    highlights: {
      en: ["Redux Toolkit store split into feature slices with async thunks"],
      ua: ["Redux Toolkit стор розбитий на фічеві слайси з async thunks"],
      ru: ["Redux Toolkit стор разбит на фичевые слайсы с async thunks"]
    },
    stack: ["React", "Redux Toolkit", "React Router", "GraphQL", "SCSS Modules", "CodeMirror"],
    url: "https://codepen-gray.vercel.app",
    repo: "https://github.com/yankevych0210/codepen",
    ...shots("codepen", 5)
  },
  {
    slug: "mole",
    title: "Whack-a-Mole",
    category: "learning",
    year: "2023",
    role: ROLE_FE,
    summary: {
      en: "Vanilla JS whack-a-mole mini-game with a custom hammer cursor and sound.",
      ua: "Міні-гра «Вдар крота» на чистому JS з кастомним курсором-молотком і звуком.",
      ru: "Мини-игра «Ударь крота» на чистом JS с кастомным курсором-молотком и звуком."
    },
    description: {
      en: "One of my first JavaScript projects: moles pop out of random holes, clicking one scores a point and plays a sound.",
      ua: "Один з моїх перших проєктів на JavaScript: кроти вистрибують з випадкових нір, клік по кроту додає очко та програє звук.",
      ru: "Один из моих первых проектов на JavaScript: кроты выпрыгивают из случайных нор, клик по кроту добавляет очко и проигрывает звук."
    },
    features: {
      en: ["Random spawn loop", "Score counter and hit sprite", "Hit sound effect", "Custom hammer cursor with click animation"],
      ua: ["Цикл випадкової появи", "Лічильник очок і спрайт удару", "Звук удару", "Кастомний курсор-молоток з анімацією кліку"],
      ru: ["Цикл случайного появления", "Счётчик очков и спрайт удара", "Звук удара", "Кастомный курсор-молоток с анимацией клика"]
    },
    highlights: {
      en: ["DOM manipulation, timers and events without any libraries"],
      ua: ["Робота з DOM, таймерами та подіями без бібліотек"],
      ru: ["Работа с DOM, таймерами и событиями без библиотек"]
    },
    stack: ["HTML", "CSS", "Vanilla JS"],
    url: "https://mole-js.vercel.app",
    repo: "https://github.com/yankevych0210/mole_js",
    ...shots("mole", 1)
  }
];
