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
    title: "FreeCodeCamp",
    description: "Бесплатная платформа для обучения программированию с интерактивными уроками и проектами. Более 40 000 звёзд на GitHub.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    imageUrl: "/projects/freecodecamp.png",
    demoUrl: "https://www.freecodecamp.org",
    githubUrl: "https://github.com/freeCodeCamp/freeCodeCamp",
  },
  {
    id: 2,
    title: "Supabase",
    description: "Open-source альтернатива Firebase. Предоставляет базу данных PostgreSQL, аутентификацию, хранилище файлов и API в реальном времени.",
    technologies: ["PostgreSQL", "TypeScript", "React", "Edge Functions"],
    imageUrl: "/projects/supabase.png",
    demoUrl: "https://supabase.com",
    githubUrl: "https://github.com/supabase/supabase",
  },
  {
    id: 3,
    title: "Appwrite",
    description: "Бэкенд-сервер для веб, мобильных и Flutter разработчиков. Включает аутентификацию, базу данных, хранилище файлов и функции.",
    technologies: ["Docker", "PHP", "React", "REST API"],
    imageUrl: "/projects/appwrite.png",
    demoUrl: "https://appwrite.io",
    githubUrl: "https://github.com/appwrite/appwrite",
  },
  {
    id: 4,
    title: "Ollama",
    description: "Инструмент для запуска больших языковых моделей локально. Поддерживает Llama, Mistral и другие модели.",
    technologies: ["Go", "Python", "LLM", "AI"],
    imageUrl: "/projects/ollama.png",
    demoUrl: "https://ollama.com",
    githubUrl: "https://github.com/ollama/ollama",
  },
  {
    id: 5,
    title: "Strapi",
    description: "Headless CMS с открытым исходным кодом. Позволяет быстро создавать API и управлять контентом через удобную админ-панель.",
    technologies: ["Node.js", "React", "TypeScript", "GraphQL"],
    imageUrl: "/projects/strapi.png",
    demoUrl: "https://strapi.io",
    githubUrl: "https://github.com/strapi/strapi",
  },
  {
    id: 6,
    title: "GPT Researcher",
    description: "Автономный агент для исследования информации в интернете. Использует ИИ для сбора и анализа данных из множества источников.",
    technologies: ["Python", "OpenAI", "Web Scraping", "AI Agent"],
    imageUrl: "/projects/gpt-researcher.png",
    demoUrl: "https://github.com/assafelovic/gpt-researcher",
    githubUrl: "https://github.com/assafelovic/gpt-researcher",
  },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: "https://github.com/username", icon: "github" },
  { name: "Telegram", url: "https://t.me/username", icon: "telegram" },
  { name: "LinkedIn", url: "https://linkedin.com/in/username", icon: "linkedin" },
  { name: "Email", url: "mailto:example@email.com", icon: "email" },
];
