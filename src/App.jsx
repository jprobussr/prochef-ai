import './App.css';
import Header from './components/Header/Header.jsx';
import IngredientForm from './components/IngredientForm/IngredientForm.jsx';
import { useState } from 'react';
import IngredientList from './components/IngredientList/IngredientList.jsx';

const App = () => {
  const [ingredients, setIngredients] = useState([]);

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
      </main>
    </div>
  );
};

export default App;
