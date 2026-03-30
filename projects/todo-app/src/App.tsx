import { useState, useEffect } from 'react'

interface Todo {
  id: number
  text: string
  completed: boolean
  createdAt: Date
}

type FilterType = 'all' | 'active' | 'completed'

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos')
    if (saved) {
      return JSON.parse(saved).map((todo: Todo) => ({
        ...todo,
        createdAt: new Date(todo.createdAt)
      }))
    }
    return []
  })
  const [inputValue, setInputValue] = useState('')
  const [filter, setFilter] = useState<FilterType>('all')

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const newTodo: Todo = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false,
      createdAt: new Date()
    }

    setTodos([...todos, newTodo])
    setInputValue('')
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const clearCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const activeTodosCount = todos.filter(todo => !todo.completed).length

  return (
    <div className="app">
      <div className="container">
        <h1>📝 To-Do List</h1>
        
        <form onSubmit={addTodo} className="todo-form">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Добавить новую задачу..."
            className="todo-input"
          />
          <button type="submit" className="add-btn">Добавить</button>
        </form>

        <div className="filters">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            Все
          </button>
          <button
            className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
            onClick={() => setFilter('active')}
          >
            Активные
          </button>
          <button
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Завершённые
          </button>
        </div>

        <ul className="todo-list">
          {filteredTodos.length === 0 ? (
            <li className="empty-message">
              {filter === 'completed' 
                ? 'Нет завершённых задач' 
                : filter === 'active' 
                ? 'Нет активных задач' 
                : 'Список задач пуст. Добавьте первую задачу!'}
            </li>
          ) : (
            filteredTodos.map(todo => (
              <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                <label className="todo-label">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleTodo(todo.id)}
                  />
                  <span className="todo-text">{todo.text}</span>
                </label>
                <button
                  className="delete-btn"
                  onClick={() => deleteTodo(todo.id)}
                  aria-label="Удалить задачу"
                >
                  ✕
                </button>
              </li>
            ))
          )}
        </ul>

        {todos.some(todo => todo.completed) && (
          <button className="clear-btn" onClick={clearCompleted}>
            Очистить завершённые
          </button>
        )}

        <div className="footer">
          <span>{activeTodosCount} задач(и) осталось</span>
        </div>
      </div>
    </div>
  )
}

export default App
