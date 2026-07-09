import './App.css';
import Header from './components/Header/Header.jsx';
import IngredientForm from './components/IngredientForm/IngredientForm.jsx';
import { useState } from 'react';
import IngredientList from './components/IngredientList/IngredientList.jsx';
import RecipeCallout from './components/RecipeCallout.jsx';
import { getRecipe } from './ai.js';
import RecipeDisplay from './components/RecipeDisplay/RecipeDisplay.jsx';

const App = () => {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState('');

  const handleAddIngredient = (newIngredient) => {
    setIngredients((prevIngredients) => {
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
    const recipeText = await getRecipe(ingredients);

    setRecipe(recipeText);
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
          <RecipeCallout onGenerateRecipe={handleGenerateRecipe} />
        )}

        {recipe && <RecipeDisplay recipe={recipe} />}
      </main>
    </div>
  );
};

export default App;
