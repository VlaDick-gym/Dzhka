# 📦 Инструкция по созданию репозиториев для проектов

Все 6 проектов готовы к загрузке на GitHub!

## 📁 Список проектов

| Проект | Описание | Папка |
|--------|----------|-------|
| **To-Do List App** | Менеджер задач с localStorage | `projects/todo-app` |
| **Weather App** | Прогноз погоды с демо-данными | `projects/weather-app` |
| **Recipe Finder** | Поиск рецептов блюд | `projects/recipe-finder` |
| **GitHub Profile Viewer** | Просмотр профиля GitHub | `projects/github-profile-viewer` |
| **Expense Tracker** | Трекер расходов и доходов | `projects/expense-tracker` |
| **Movie Database** | Каталог фильмов с фильтрами | `projects/movie-database` |

---

## 🚀 Способ 1: Вручную через GitHub UI

### Для каждого проекта выполните:

1. **Создайте репозиторий на GitHub:**
   - Перейдите на https://github.com/new
   - Имя репозитория: `todo-app` (или другой проект)
   - Описание: "To-Do List App — React TypeScript проект"
   - **НЕ создавайте** с README, .gitignore, лицензией
   - Нажмите "Create repository"

2. **Запушьте проект:**
   ```bash
   cd projects/todo-app
   git init
   git add .
   git commit -m "Initial commit: todo-app"
   git branch -M main
   git remote add origin https://github.com/VlaDick-gym/todo-app.git
   git push -u origin main
   ```

3. **Повторите для всех проектов:**
   - `weather-app` → https://github.com/VlaDick-gym/weather-app
   - `recipe-finder` → https://github.com/VlaDick-gym/recipe-finder
   - `github-profile-viewer` → https://github.com/VlaDick-gym/github-profile-viewer
   - `expense-tracker` → https://github.com/VlaDick-gym/expense-tracker
   - `movie-database` → https://github.com/VlaDick-gym/movie-database

---

## ⚡ Способ 2: Через GitHub CLI (рекомендуется)

Если установлен [GitHub CLI](https://cli.github.com/):

```bash
# Todo App
gh repo create VlaDick-gym/todo-app --public --source=projects/todo-app --push

# Weather App
gh repo create VlaDick-gym/weather-app --public --source=projects/weather-app --push

# Recipe Finder
gh repo create VlaDick-gym/recipe-finder --public --source=projects/recipe-finder --push

# GitHub Profile Viewer
gh repo create VlaDick-gym/github-profile-viewer --public --source=projects/github-profile-viewer --push

# Expense Tracker
gh repo create VlaDick-gym/expense-tracker --public --source=projects/expense-tracker --push

# Movie Database
gh repo create VlaDick-gym/movie-database --public --source=projects/movie-database --push
```

---

## 🌐 Способ 3: PowerShell скрипт

Запустите подготовленный скрипт:

```powershell
.\deploy-projects.ps1
```

Затем для каждого проекта выполните `git push -u origin main`

---

## ✅ После создания репозиториев

1. **Обновите ссылки в портфолио:**
   - Откройте `src/utils/data.ts` в основном проекте
   - Проверьте, что `githubUrl` и `demoUrl` ведут на правильные URL

2. **Добавьте GitHub Pages (опционально):**
   - В каждом репозитории: Settings → Pages
   - Source: GitHub Actions или Deploy from branch
   - Через 1-2 минуты сайт будет доступен

3. **Добавьте темы репозиториев:**
   - React, TypeScript, Vite, Portfolio и т.д.

---

## 📊 Структура каждого проекта

```
todo-app/
├── src/
│   ├── App.tsx      # Основной компонент
│   ├── main.tsx     # Точка входа
│   └── index.css    # Стили
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🎉 Готово!

После выполнения всех шагов у вас будет:
- ✅ 6 отдельных репозиториев на GitHub
- ✅ Каждый проект с рабочим кодом
- ✅ Портфолио с реальными проектами

**Ваш GitHub:** https://github.com/VlaDick-gym
