#!/bin/bash

# Скрипт для создания репозиториев и пуша проектов на GitHub

PROJECTS=(
  "todo-app"
  "weather-app"
  "recipe-finder"
  "github-profile-viewer"
  "expense-tracker"
  "movie-database"
)

USERNAME="VlaDick-gym"

for project in "${PROJECTS[@]}"; do
  echo "📁 Обработка проекта: $project"
  cd "projects/$project" || continue
  
  # Инициализация Git
  git init
  
  # Добавление всех файлов
  git add .
  
  # Коммит
  git commit -m "Initial commit: $project"
  
  # Переименование ветки
  git branch -M main
  
  # Создание удалённого репозитория (требуется аутентификация)
  echo "🔗 Создание репозитория на GitHub..."
  # Примечание: для автоматического создания нужен GitHub CLI или API
  # gh repo create "$USERNAME/$project" --public --source=. --push
  
  # Добавление remote (замените USERNAME на ваш)
  git remote add origin "https://github.com/$USERNAME/$project.git"
  
  # Пуш
  echo "🚀 Пуш в $USERNAME/$project..."
  git push -u origin main
  
  cd ../..
  echo "✅ Проект $project готов!"
  echo ""
done

echo "🎉 Все проекты загружены на GitHub!"
