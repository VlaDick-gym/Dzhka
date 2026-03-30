import { useState, useEffect } from 'react'

interface Transaction {
  id: number
  description: string
  amount: number
  type: 'income' | 'expense'
  category: string
  date: string
}

const categories = {
  income: ['Зарплата', 'Фриланс', 'Инвестиции', 'Подарок', 'Другое'],
  expense: ['Еда', 'Транспорт', 'Жильё', 'Развлечения', 'Здоровье', 'Одежда', 'Другое']
}

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>(() => {
    const saved = localStorage.getItem('transactions')
    if (saved) {
      return JSON.parse(saved)
    }
    // Демо-данные
    return [
      { id: 1, description: 'Зарплата', amount: 5000, type: 'income', category: 'Зарплата', date: '2024-03-01' },
      { id: 2, description: 'Продукты', amount: 300, type: 'expense', category: 'Еда', date: '2024-03-05' },
      { id: 3, description: 'Такси', amount: 50, type: 'expense', category: 'Транспорт', date: '2024-03-07' },
      { id: 4, description: 'Фриланс проект', amount: 800, type: 'income', category: 'Фриланс', date: '2024-03-10' },
      { id: 5, description: 'Кино', amount: 40, type: 'expense', category: 'Развлечения', date: '2024-03-12' },
    ]
  })

  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [type, setType] = useState<'income' | 'expense'>('expense')
  const [category, setCategory] = useState(categories.expense[0])

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions))
  }, [transactions])

  useEffect(() => {
    setCategory(categories[type][0])
  }, [type])

  const addTransaction = (e: React.FormEvent) => {
    e.preventDefault()
    if (!description.trim() || !amount) return

    const newTransaction: Transaction = {
      id: Date.now(),
      description: description.trim(),
      amount: parseFloat(amount),
      type,
      category,
      date: new Date().toISOString().split('T')[0]
    }

    setTransactions([newTransaction, ...transactions])
    setDescription('')
    setAmount('')
  }

  const deleteTransaction = (id: number) => {
    setTransactions(transactions.filter(t => t.id !== id))
  }

  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + t.amount, 0)

  const totalExpense = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + t.amount, 0)

  const balance = totalIncome - totalExpense

  const expensesByCategory = transactions
    .filter(t => t.type === 'expense')
    .reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount
      return acc
    }, {} as Record<string, number>)

  const maxExpense = Math.max(...Object.values(expensesByCategory), 1)

  return (
    <div className="app">
      <div className="container">
        <h1>💰 Expense Tracker</h1>

        {/* Balance Summary */}
        <div className="balance-summary">
          <div className="balance-card total">
            <span className="label">Баланс</span>
            <span className={`amount ${balance >= 0 ? 'positive' : 'negative'}`}>
              ${balance.toFixed(2)}
            </span>
          </div>
          <div className="balance-card income">
            <span className="label">Доходы</span>
            <span className="amount positive">+${totalIncome.toFixed(2)}</span>
          </div>
          <div className="balance-card expense">
            <span className="label">Расходы</span>
            <span className="amount negative">-${totalExpense.toFixed(2)}</span>
          </div>
        </div>

        <div className="main-content">
          {/* Add Transaction Form */}
          <div className="form-section">
            <h2>Добавить операцию</h2>
            <form onSubmit={addTransaction}>
              <div className="form-group">
                <label>Описание</label>
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Например: Продукты"
                  className="input"
                  required
                />
              </div>

              <div className="form-group">
                <label>Сумма ($)</label>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="0.00"
                  step="0.01"
                  min="0"
                  className="input"
                  required
                />
              </div>

              <div className="form-group">
                <label>Тип операции</label>
                <div className="type-selector">
                  <button
                    type="button"
                    className={`type-btn ${type === 'income' ? 'active income' : ''}`}
                    onClick={() => setType('income')}
                  >
                    ➕ Доход
                  </button>
                  <button
                    type="button"
                    className={`type-btn ${type === 'expense' ? 'active expense' : ''}`}
                    onClick={() => setType('expense')}
                  >
                    ➖ Расход
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label>Категория</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="select"
                >
                  {categories[type].map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <button type="submit" className="submit-btn">
                Добавить операцию
              </button>
            </form>
          </div>

          {/* Expenses by Category */}
          <div className="chart-section">
            <h2>Расходы по категориям</h2>
            {Object.keys(expensesByCategory).length > 0 ? (
              <div className="category-bars">
                {Object.entries(expensesByCategory).map(([cat, amount]) => (
                  <div key={cat} className="category-bar">
                    <div className="category-info">
                      <span className="category-name">{cat}</span>
                      <span className="category-amount">${amount.toFixed(2)}</span>
                    </div>
                    <div className="bar-container">
                      <div
                        className="bar"
                        style={{ width: `${(amount / maxExpense) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="empty-message">Нет расходов для отображения</p>
            )}
          </div>
        </div>

        {/* Transactions List */}
        <div className="transactions-section">
          <h2>История операций</h2>
          {transactions.length === 0 ? (
            <p className="empty-message">Нет операций. Добавьте первую!</p>
          ) : (
            <ul className="transactions-list">
              {transactions.map(transaction => (
                <li key={transaction.id} className={`transaction-item ${transaction.type}`}>
                  <div className="transaction-info">
                    <span className="transaction-description">{transaction.description}</span>
                    <span className="transaction-category">{transaction.category}</span>
                    <span className="transaction-date">{transaction.date}</span>
                  </div>
                  <div className="transaction-amount-section">
                    <span className={`transaction-amount ${transaction.type}`}>
                      {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toFixed(2)}
                    </span>
                    <button
                      className="delete-btn"
                      onClick={() => deleteTransaction(transaction.id)}
                      aria-label="Удалить"
                    >
                      ✕
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
