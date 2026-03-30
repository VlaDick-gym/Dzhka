import { Project, Skill, Experience, SocialLink } from "@/types";

export const personalInfo = {
  name: "Зубаль Даниил",
  title: "Frontend Разработчик",
  email: "example@email.com",
  location: "Минск, Беларусь",
  about: `Привет! Я frontend-разработчик с страстью к созданию красивых и функциональных веб-интерфейсов. 
  Специализируюсь на React экосистеме и постоянно изучаю новые технологии. 
  Люблю решать сложные задачи и превращать идеи в работающие продукты.`,
};

export const skills: Skill[] = [
  { name: "React / Next.js", level: 90 },
  { name: "TypeScript / JavaScript", level: 88 },
  { name: "Node.js / Express", level: 82 },
  { name: "Tailwind CSS / SCSS", level: 90 },
  { name: "PostgreSQL / MongoDB", level: 78 },
  { name: "Socket.io / WebSocket", level: 75 },
  { name: "Git / GitHub", level: 85 },
  { name: "Three.js / WebGL", level: 70 },
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Freelance / Пет-проекты",
    position: "Frontend / Fullstack Разработчик",
    period: "2023 — Настоящее время",
    description: [
      "Разработка веб-приложений на React и Next.js",
      "Создание REST API и WebSocket сервисов на Node.js",
      "Проектирование и оптимизация баз данных (PostgreSQL, MongoDB)",
      "Внедрение современных практик разработки и деплоя",
    ],
  },
  {
    id: 2,
    company: "Self-taught разработчик",
    position: "Изучение веб-разработки",
    period: "2021 — 2023",
    description: [
      "Освоение стека MERN (MongoDB, Express, React, Node.js)",
      "Создание пет-проектов для портфолио",
      "Изучение TypeScript, Tailwind CSS, современных инструментов",
      "Участие в open-source сообществах",
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "To-Do List App",
    description: "Классическое приложение для управления задачами. Добавление, редактирование, удаление задач, фильтрация по статусу, сохранение в localStorage. Идеальный проект для начала.",
    technologies: ["React", "TypeScript", "CSS Modules", "LocalStorage"],
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d79?w=600&h=400&fit=crop",
    demoUrl: "https://github.com/VlaDick-gym/todo-app",
    githubUrl: "https://github.com/VlaDick-gym/todo-app",
  },
  {
    id: 2,
    title: "Weather App",
    description: "Приложение с прогнозом погоды. Поиск городов, отображение текущей погоды и прогноза на 5 дней. Интеграция с OpenWeatherMap API.",
    technologies: ["React", "OpenWeatherMap API", "CSS3", "Fetch API"],
    imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
    demoUrl: "https://github.com/VlaDick-gym/weather-app",
    githubUrl: "https://github.com/VlaDick-gym/weather-app",
  },
  {
    id: 3,
    title: "Recipe Finder",
    description: "Поиск рецептов по ингредиентам или названию. Детальная информация о блюде, калорийность, пошаговое приготовление. API от TheMealDB.",
    technologies: ["React", "TheMealDB API", "Tailwind CSS", "Async/Await"],
    imageUrl: "https://images.unsplash.com/photo-1495521821758-02d05715e063?w=600&h=400&fit=crop",
    demoUrl: "https://github.com/VlaDick-gym/recipe-finder",
    githubUrl: "https://github.com/VlaDick-gym/recipe-finder",
  },
  {
    id: 4,
    title: "GitHub Profile Viewer",
    description: "Просмотр профиля GitHub по нику. Отображение репозиториев, статистики, языков программирования. Интеграция с GitHub API.",
    technologies: ["React", "GitHub API", "Styled Components", "Axios"],
    imageUrl: "https://images.unsplash.com/photo-1618477461853-5f8dd68aa395?w=600&h=400&fit=crop",
    demoUrl: "https://github.com/VlaDick-gym/github-profile-viewer",
    githubUrl: "https://github.com/VlaDick-gym/github-profile-viewer",
  },
  {
    id: 5,
    title: "Expense Tracker",
    description: "Трекер личных расходов и доходов. Категории трат, визуализация данных, экспорт в CSV. Помогает контролировать бюджет.",
    technologies: ["React", "Chart.js", "TypeScript", "IndexedDB"],
    imageUrl: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop",
    demoUrl: "https://github.com/VlaDick-gym/expense-tracker",
    githubUrl: "https://github.com/VlaDick-gym/expense-tracker",
  },
  {
    id: 6,
    title: "Movie Database",
    description: "Каталог фильмов с поиском, фильтрами и рейтингами. Информация о фильмах, трейлеры, актёрский состав. API от TMDB.",
    technologies: ["Next.js", "TMDB API", "Tailwind CSS", "SWR"],
    imageUrl: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&h=400&fit=crop",
    demoUrl: "https://github.com/VlaDick-gym/movie-database",
    githubUrl: "https://github.com/VlaDick-gym/movie-database",
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/username", icon: "github" },
  { name: "Telegram", url: "https://t.me/username", icon: "telegram" },
  { name: "LinkedIn", url: "https://linkedin.com/in/username", icon: "linkedin" },
  { name: "Email", url: "mailto:example@email.com", icon: "email" },
];
