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
  { name: "TypeScript", level: 85 },
  { name: "Tailwind CSS", level: 88 },
  { name: "Three.js / WebGL", level: 70 },
  { name: "Node.js", level: 65 },
  { name: "Git / GitHub", level: 80 },
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Tech Company",
    position: "Frontend Разработчик",
    period: "2023 — Настоящее время",
    description: [
      "Разработка SPA на React и Next.js",
      "Оптимизация производительности приложений",
      "Внедрение TypeScript и улучшение типизации",
    ],
  },
  {
    id: 2,
    company: "Web Studio",
    position: "Junior Разработчик",
    period: "2021 — 2023",
    description: [
      "Создание лендингов и корпоративных сайтов",
      "Вёрстка адаптивных интерфейсов",
      "Работа с CMS и интеграция API",
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "E-commerce Платформа",
    description: "Полнофункциональный интернет-магазин с корзиной, оплатой и админ-панелью.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "Stripe"],
    imageUrl: "/projects/ecommerce.png",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/username/ecommerce",
  },
  {
    id: 2,
    title: "Dashboard Аналитики",
    description: "Панель управления с графиками, таблицами и реальным временем обновления данных.",
    technologies: ["React", "D3.js", "WebSocket", "Material UI"],
    imageUrl: "/projects/dashboard.png",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/username/dashboard",
  },
  {
    id: 3,
    title: "3D Портфолио",
    description: "Интерактивное портфолио с Three.js анимациями и эффектами.",
    technologies: ["Three.js", "React Three Fiber", "GSAP"],
    imageUrl: "/projects/3d-portfolio.png",
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/username/3d-portfolio",
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/username", icon: "github" },
  { name: "Telegram", url: "https://t.me/username", icon: "telegram" },
  { name: "LinkedIn", url: "https://linkedin.com/in/username", icon: "linkedin" },
  { name: "Email", url: "mailto:example@email.com", icon: "email" },
];
