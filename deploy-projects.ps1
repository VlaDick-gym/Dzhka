# Скрипт для пуша проектов на GitHub
# Запускать из PowerShell в папке Dzhka

$projects = @(
  "todo-app",
  "weather-app",
  "recipe-finder",
  "github-profile-viewer",
  "expense-tracker",
  "movie-database"
)

$username = "VlaDick-gym"

foreach ($project in $projects) {
  Write-Host "📁 Обработка проекта: $project" -ForegroundColor Cyan
  $projectPath = "projects\$project"
  
  if (Test-Path $projectPath) {
    Set-Location $projectPath
    
    # Инициализация Git
    git init
    
    # Добавление файлов
    git add .
    
    # Коммит
    git commit -m "Initial commit: $project"
    
    # Переименование ветки
    git branch -M main
    
    # Добавление remote
    $remoteUrl = "https://github.com/$username/$project.git"
    git remote remove origin 2>$null
    git remote add origin $remoteUrl
    
    Write-Host "🚀 Готово к пушу в: $remoteUrl" -ForegroundColor Green
    Write-Host "   Для пуша выполните: git push -u origin main" -ForegroundColor Yellow
    
    Set-Location ..\..
  } else {
    Write-Host "❌ Папка проекта не найдена: $projectPath" -ForegroundColor Red
  }
  
  Write-Host ""
}

Write-Host "🎉 Все проекты подготовлены!" -ForegroundColor Green
Write-Host ""
Write-Host "Инструкция:" -ForegroundColor Cyan
Write-Host "1. Создайте репозитории на GitHub с именами проектов" -ForegroundColor White
Write-Host "2. Перейдите в папку каждого проекта и выполните: git push -u origin main" -ForegroundColor White
Write-Host ""
Write-Host "Или используйте GitHub CLI:" -ForegroundColor White
Write-Host "gh repo create VlaDick-gym/todo-app --public --source=projects/todo-app --push" -ForegroundColor Gray
Write-Host "gh repo create VlaDick-gym/weather-app --public --source=projects/weather-app --push" -ForegroundColor Gray
Write-Host "..." -ForegroundColor Gray
