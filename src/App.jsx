import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import IngredientForm from './components/IngredientForm/IngredientForm.jsx';
import IngredientList from './components/IngredientList/IngredientList.jsx';
import RecipeCallout from './components/RecipeCallout.jsx';
import { getRecipe } from './ai.js';
import RecipeDisplay from './components/RecipeDisplay/RecipeDisplay.jsx';

const App = () => {
  const [recipe, setRecipe] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [ingredients, setIngredients] = useState(() => {
    const savedIngredients = localStorage.getItem('ingredients');

    return savedIngredients ? JSON.parse(savedIngredients) : [];
  });

  useEffect(() => {
    setRecipe('');
  }, [ingredients]);

  useEffect(() => {
    localStorage.setItem('ingredients', JSON.stringify(ingredients));
  }, [ingredients]);

  const handleAddIngredient = (newIngredient) => {
    setIngredients((prevIngredients) => {
      const ingredientExists = prevIngredients.some((ingredient) => {
        return ingredient.toLowerCase() === newIngredient.toLowerCase();
      });

      if (ingredientExists) {
        return prevIngredients;
      }

      return [...prevIngredients, newIngredient];
    });
  };

  const handleRemoveIngredient = (ingredientToRemove) => {
    setIngredients((prevIngredients) => {
      return prevIngredients.filter((ingredient) => {
        return ingredient !== ingredientToRemove;
      });
    });
  };

  const handleClearIngredients = () => {
    setIngredients([]);
  };

  const handleGenerateRecipe = async () => {
    setIsLoading(true);
    setError('');
    setRecipe('');

    try {
      const recipeText = await getRecipe(ingredients);
      setRecipe(recipeText);
    } catch {
      setError('Unable to generate a recipe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <main className="app-container">
        <Header />

        <IngredientForm onAddIngredient={handleAddIngredient} />

        <IngredientList
          ingredients={ingredients}
          onRemoveIngredient={handleRemoveIngredient}
          onClearIngredients={handleClearIngredients}
        />

        {ingredients.length >= 3 && (
          <RecipeCallout
            onGenerateRecipe={handleGenerateRecipe}
            isLoading={isLoading}
          />
        )}

        {error && <p className="recipe-error">{error}</p>}

        {recipe && <RecipeDisplay recipe={recipe} />}
      </main>
    </div>
  );
};

export default App;
