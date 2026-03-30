import { useState } from 'react'

interface Movie {
  id: number
  title: string
  year: number
  rating: number
  genre: string[]
  director: string
  description: string
  image: string
}

const demoMovies: Movie[] = [
  {
    id: 1,
    title: "Начало",
    year: 2010,
    rating: 8.8,
    genre: ["Фантастика", "Боевик", "Триллер"],
    director: "Кристофер Нолан",
    description: "Кобб — талантливый вор, лучший в опасном искусстве извлечения секретов из подсознания во время сна. Он получает шанс на искупление благодаря заданию внедрить идею в разум наследника корпорации.",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&h=600&fit=crop"
  },
  {
    id: 2,
    title: "Интерстеллар",
    year: 2014,
    rating: 8.6,
    genre: ["Фантастика", "Драма", "Приключения"],
    director: "Кристофер Нолан",
    description: "Когда засуха и пыльные бури приводят человечество к продовольственному кризису, бывший пилот НАСА Купер отправляется в экспедицию через червоточину в поисках новой планеты для жизни.",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=600&fit=crop"
  },
  {
    id: 3,
    title: "Побег из Шоушенка",
    year: 1994,
    rating: 9.3,
    genre: ["Драма", "Криминал"],
    director: "Фрэнк Дарабонт",
    description: "Бухгалтер Энди Дюфрейн обвинён в убийстве собственной жены и её любовника. Оказавшись в тюрьме под названием Шоушенк, он сталкивается с жестокостью и беззаконием.",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&h=600&fit=crop"
  },
  {
    id: 4,
    title: "Зелёная миля",
    year: 1999,
    rating: 8.6,
    genre: ["Фэнтези", "Драма", "Криминал"],
    director: "Фрэнк Дарабонт",
    description: "В тюрьме для смертников появляется новый заключённый — огромный чернокожий Джон Коффи, обвиняемый в жестоком убийстве двух маленьких девочек.",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=600&fit=crop"
  },
  {
    id: 5,
    title: "Матрица",
    year: 1999,
    rating: 8.7,
    genre: ["Фантастика", "Боевик"],
    director: "Лана Вачовски, Лилли Вачовски",
    description: "Хакер Нео узнаёт, что наш мир — это иллюзия, созданная машинами. Он присоединяется к восстанию против машин под руководством Морфеуса.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop"
  },
  {
    id: 6,
    title: "Криминальное чтиво",
    year: 1994,
    rating: 8.9,
    genre: ["Криминал", "Драма"],
    director: "Квентин Тарантино",
    description: "Две истории о бандитах, одна — о боксёре, и одна — о паре грабителей. Все они переплетаются в культовом фильме Тарантино.",
    image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&h=600&fit=crop"
  },
  {
    id: 7,
    title: "Бойцовский клуб",
    year: 1999,
    rating: 8.8,
    genre: ["Триллер", "Драма"],
    director: "Дэвид Финчер",
    description: "Сотрудник страховой компании страдает хронической бессонницей и отчаянно пытается вырваться из мучительно скучной жизни. Однажды он встречает загадочного продавца мыла Тайлера Дёрдена.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=400&h=600&fit=crop"
  },
  {
    id: 8,
    title: "Властелин колец: Возвращение короля",
    year: 2003,
    rating: 8.9,
    genre: ["Фэнтези", "Приключения", "Драма"],
    director: "Питер Джексон",
    description: "Фродо и Сэм продолжают путь к Роковой горе, чтобы уничтожить Кольцо. Арагорн готовится к битве за Средиземье.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=600&fit=crop"
  }
]

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedGenre, setSelectedGenre] = useState<string>('Все')
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
  const [minRating, setMinRating] = useState<number>(0)

  const allGenres = ['Все', ...Array.from(new Set(demoMovies.flatMap(m => m.genre)))]

  const filteredMovies = demoMovies.filter(movie => {
    const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         movie.director.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesGenre = selectedGenre === 'Все' || movie.genre.includes(selectedGenre)
    const matchesRating = movie.rating >= minRating
    return matchesSearch && matchesGenre && matchesRating
  })

  if (selectedMovie) {
    return (
      <div className="app">
        <div className="container">
          <button onClick={() => setSelectedMovie(null)} className="back-btn">
            ← Назад к каталогу
          </button>
          
          <div className="movie-detail">
            <div className="movie-detail-image">
              <img src={selectedMovie.image} alt={selectedMovie.title} />
            </div>
            <div className="movie-detail-info">
              <h1>{selectedMovie.title}</h1>
              <div className="movie-meta">
                <span className="year">{selectedMovie.year}</span>
                <span className="rating">⭐ {selectedMovie.rating}</span>
              </div>
              <div className="genres">
                {selectedMovie.genre.map(g => (
                  <span key={g} className="genre-tag">{g}</span>
                ))}
              </div>
              <p className="director">🎬 {selectedMovie.director}</p>
              <p className="description">{selectedMovie.description}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <div className="container">
        <h1>🎬 Movie Database</h1>

        {/* Filters */}
        <div className="filters">
          <div className="search-box">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Поиск по названию или режиссёру..."
              className="search-input"
            />
          </div>

          <div className="filter-group">
            <label>Жанр:</label>
            <select
              value={selectedGenre}
              onChange={(e) => setSelectedGenre(e.target.value)}
              className="filter-select"
            >
              {allGenres.map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Рейтинг от: {minRating}</label>
            <input
              type="range"
              min="0"
              max="9"
              step="0.5"
              value={minRating}
              onChange={(e) => setMinRating(Number(e.target.value))}
              className="rating-slider"
            />
          </div>
        </div>

        {/* Movies Grid */}
        <div className="movies-grid">
          {filteredMovies.map(movie => (
            <div
              key={movie.id}
              className="movie-card"
              onClick={() => setSelectedMovie(movie)}
            >
              <div className="movie-poster">
                <img src={movie.image} alt={movie.title} />
                <div className="movie-rating">⭐ {movie.rating}</div>
              </div>
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p className="movie-year">{movie.year}</p>
                <p className="movie-director">🎬 {movie.director}</p>
                <div className="movie-genres">
                  {movie.genre.slice(0, 2).map(g => (
                    <span key={g} className="genre-badge">{g}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredMovies.length === 0 && (
          <div className="empty-state">
            <p>Фильмы не найдены. Попробуйте изменить фильтры.</p>
          </div>
        )}

        <div className="results-count">
          Найдено фильмов: {filteredMovies.length}
        </div>
      </div>
    </div>
  )
}

export default App
