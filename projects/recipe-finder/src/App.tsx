import { useState } from 'react'

interface Recipe {
  idMeal: string
  strMeal: string
  strCategory: string
  strArea: string
  strInstructions: string
  strMealThumb: string
  strTags?: string
  strYoutube?: string
}

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null)
  const [loading, setLoading] = useState(false)

  const demoRecipes: Recipe[] = [
    {
      idMeal: '52768',
      strMeal: 'Apple Frangipane Tart',
      strCategory: 'Dessert',
      strArea: 'British',
      strInstructions: 'Preheat the oven to 200C/180C Fan/Gas 6. Put the biscuits in a large re-sealable freezer bag and bash with a rolling pin into fine crumbs. Melt the butter in a small pan, then add the biscuit crumbs and stir until coated with butter. Tip into the tart tin and spread over the base and sides. Press down level with the back of a spoon. Put in the fridge to set for 30 minutes.',
      strMealThumb: 'https://images.unsplash.com/photo-1562007908-17c67e878c7c?w=400&h=300&fit=crop',
      strTags: 'Tart,Baking,Fruity',
      strYoutube: 'https://www.youtube.com/watch?v=rp8Slv4INLk'
    },
    {
      idMeal: '52893',
      strMeal: 'Chicken Alfredo Pizza',
      strCategory: 'Chicken',
      strArea: 'Italian',
      strInstructions: 'Preheat oven to 450 degrees. Roll out pizza dough on a floured surface. Spread alfredo sauce over the dough. Top with cooked chicken, mozzarella cheese, and parmesan cheese. Bake for 12-15 minutes until crust is golden brown.',
      strMealThumb: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop',
      strTags: 'Pizza,Chicken,Cheese',
      strYoutube: 'https://www.youtube.com/watch?v=7Rq5qXUZfEU'
    },
    {
      idMeal: '52771',
      strMeal: 'Spicy Arrabiata Penne',
      strCategory: 'Vegetarian',
      strArea: 'Italian',
      strInstructions: 'Bring a large pot of water to a boil. Add kosher salt to the boiling water, then add the pasta. Cook according to the package instructions, about 9 minutes. In a large skillet over medium-high heat, add the olive oil and heat until the oil starts to shimmer. Add the garlic and cook, stirring, until fragrant, 1 to 2 minutes.',
      strMealThumb: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop',
      strTags: 'Pasta,Curry,Spicy',
      strYoutube: 'https://www.youtube.com/watch?v=1IszT_guI08'
    },
    {
      idMeal: '52804',
      strMeal: 'Poutine',
      strCategory: 'Miscellaneous',
      strArea: 'Canadian',
      strInstructions: 'Heat oil in a deep fryer or deep heavy skillet to 365°F (185°C). While the oil is heating, begin making the gravy. Melt butter in a skillet over medium-high heat. Whisk in the flour, and cook for about 5 minutes, stirring constantly so it does not burn.',
      strMealThumb: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop',
      strTags: 'UnHealthy,Speciality',
      strYoutube: 'https://www.youtube.com/watch?v=UVAMAoR2_WU'
    },
    {
      idMeal: '52832',
      strMeal: 'Beef Banh Mi',
      strCategory: 'Beef',
      strArea: 'Vietnamese',
      strInstructions: 'Combine the fish sauce, sugar, water, vinegar, garlic, and chili in a bowl. Stir until the sugar is dissolved. Add the carrots and daikon. Let sit for at least 30 minutes. Season the beef with salt and pepper. Heat the oil in a large skillet over high heat. Add the beef and cook, stirring occasionally, until browned and cooked through.',
      strMealThumb: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400&h=300&fit=crop',
      strTags: 'Sandwich,Beef',
      strYoutube: 'https://www.youtube.com/watch?v=7Rq5qXUZfEU'
    },
    {
      idMeal: '52855',
      strMeal: 'Chocolate Gateau',
      strCategory: 'Dessert',
      strArea: 'French',
      strInstructions: 'Preheat the oven to 180C/160C Fan/Gas 4. Grease and line 2 x 20cm sandwich tins. Break the chocolate into a heatproof bowl and add the butter. Set the bowl over a pan of gently simmering water and stir until melted. Remove from the heat and stir in the sugar, then beat in the eggs one at a time.',
      strMealThumb: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop',
      strTags: 'Cake,Chocolate,Dessert',
      strYoutube: 'https://www.youtube.com/watch?v=dsJtgmAhFF4'
    }
  ]

  const searchRecipes = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!searchTerm.trim()) return

    setLoading(true)
    
    // Имитация задержки API
    await new Promise(resolve => setTimeout(resolve, 600))
    
    // Фильтрация демо-рецептов
    const filtered = demoRecipes.filter(recipe =>
      recipe.strMeal.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.strCategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.strArea.toLowerCase().includes(searchTerm.toLowerCase())
    )
    
    setRecipes(filtered.length > 0 ? filtered : demoRecipes)
    setLoading(false)
  }

  const loadRecipeDetails = (recipe: Recipe) => {
    setSelectedRecipe(recipe)
  }

  const backToSearch = () => {
    setSelectedRecipe(null)
  }

  if (selectedRecipe) {
    return (
      <div className="app">
        <div className="container">
          <button onClick={backToSearch} className="back-btn">
            ← Назад к рецептам
          </button>
          
          <div className="recipe-detail">
            <img src={selectedRecipe.strMealThumb} alt={selectedRecipe.strMeal} />
            <div className="recipe-info">
              <h1>{selectedRecipe.strMeal}</h1>
              <div className="recipe-meta">
                <span className="category">🍽️ {selectedRecipe.strCategory}</span>
                <span className="area">🌍 {selectedRecipe.strArea}</span>
              </div>
              {selectedRecipe.strTags && (
                <div className="tags">
                  {selectedRecipe.strTags.split(',').map(tag => (
                    <span key={tag} className="tag">#{tag.trim()}</span>
                  ))}
                </div>
              )}
              <h3>Ингредиенты:</h3>
              <div className="instructions">
                <p>{selectedRecipe.strInstructions}</p>
              </div>
              {selectedRecipe.strYoutube && (
                <a href={selectedRecipe.strYoutube} target="_blank" rel="noopener noreferrer" className="youtube-link">
                  📺 Смотреть видео
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <div className="container">
        <h1>🍳 Recipe Finder</h1>
        
        <form onSubmit={searchRecipes} className="search-form">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Поиск рецептов (например: pasta, chicken, dessert)..."
            className="search-input"
          />
          <button type="submit" className="search-btn" disabled={loading}>
            {loading ? '⏳' : '🔍'}
          </button>
        </form>

        {loading && <div className="loading">Загрузка рецептов...</div>}

        <div className="recipes-grid">
          {recipes.map(recipe => (
            <div
              key={recipe.idMeal}
              className="recipe-card"
              onClick={() => loadRecipeDetails(recipe)}
            >
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <div className="recipe-card-info">
                <h3>{recipe.strMeal}</h3>
                <div className="recipe-card-meta">
                  <span>{recipe.strCategory}</span>
                  <span>{recipe.strArea}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {recipes.length === 0 && !loading && (
          <div className="empty-state">
            <p>Введите название блюда или ингредиент для поиска рецептов</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
