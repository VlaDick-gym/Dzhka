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
    title: "TaskFlow — Менеджер задач",
    description: "Веб-приложение для управления задачами с функциями Trello. Drag-n-drop доски, командная работа, дедлайны и уведомления. Реализована реальная синхронизация через WebSocket.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Socket.io"],
    imageUrl: "/projects/taskflow.png",
    demoUrl: "https://taskflow-demo.vercel.app",
    githubUrl: "https://github.com/VlaDick-gym/taskflow",
  },
  {
    id: 2,
    title: "ShopHub — Интернет-магазин",
    description: "Полнофункциональный e-commerce проект с корзиной, оформлением заказа, интеграцией Stripe и админ-панелью. Адаптивный дизайн и оптимизация SEO.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Tailwind CSS"],
    imageUrl: "/projects/shophub.png",
    demoUrl: "https://shophub-demo.vercel.app",
    githubUrl: "https://github.com/VlaDick-gym/shophub",
  },
  {
    id: 3,
    title: "ChatWave — Мессенджер",
    description: "Реал-тайм чат с поддержкой личных и групповых бесед, отправкой файлов, эмодзи и реакциями. Аутентификация через JWT, шифрование сообщений.",
    technologies: ["React", "Express", "Socket.io", "Redis", "JWT"],
    imageUrl: "/projects/chatwave.png",
    demoUrl: "https://chatwave-demo.vercel.app",
    githubUrl: "https://github.com/VlaDick-gym/chatwave",
  },
  {
    id: 4,
    title: "WeatherDash — Погодный дашборд",
    description: "Приложение с прогнозом погоды для любого города мира. Интерактивные графики, 7-дневный прогноз, карта осадков. Интеграция с OpenWeatherMap API.",
    technologies: ["Next.js", "TypeScript", "Chart.js", "OpenWeatherMap API"],
    imageUrl: "/projects/weatherdash.png",
    demoUrl: "https://weatherdash-demo.vercel.app",
    githubUrl: "https://github.com/VlaDick-gym/weatherdash",
  },
  {
    id: 5,
    title: "CodeShare — Платформа для кода",
    description: "Сервис для публикации и обмена сниппетами кода с подсветкой синтаксиса. Поддержка 50+ языков, комментарии, лайки, коллекции. Аналог CodePen/JSFiddle.",
    technologies: ["React", "Node.js", "MongoDB", "Prism.js", "Express"],
    imageUrl: "/projects/codeshare.png",
    demoUrl: "https://codeshare-demo.vercel.app",
    githubUrl: "https://github.com/VlaDick-gym/codeshare",
  },
  {
    id: 6,
    title: "FitTrack — Трекер тренировок",
    description: "Приложение для отслеживания тренировок и прогресса. Упражнения с видео, статистика, календарь, экспорт данных. Интеграция с Google Fit.",
    technologies: ["React Native", "Firebase", "TypeScript", "Recharts"],
    imageUrl: "/projects/fittrack.png",
    demoUrl: "https://fittrack-demo.vercel.app",
    githubUrl: "https://github.com/VlaDick-gym/fittrack",
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/username", icon: "github" },
  { name: "Telegram", url: "https://t.me/username", icon: "telegram" },
  { name: "LinkedIn", url: "https://linkedin.com/in/username", icon: "linkedin" },
  { name: "Email", url: "mailto:example@email.com", icon: "email" },
];
