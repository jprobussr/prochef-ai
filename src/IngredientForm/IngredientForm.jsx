import './IngredientForm.css';
import { useState } from 'react';

const IngredientForm = () => {
  const [ingredient, setIngredient] = useState('');

  const handleIngredientChange = (e) => {
    console.log(e.target.value);
    setIngredient(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const trimmedIngredient = ingredient.trim();

    if (!trimmedIngredient) {
        return;
    }

    console.log(trimmedIngredient);
    setIngredient('');
  }

  return (
    <section className="ingredient-form-section">
      <h2>What's in your kitchen?</h2>

      <form className="ingredient-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g. chicken, rice, broccoli"
          value={ingredient}
          onChange={handleIngredientChange}
        />
        <button>Add Ingredient</button>
      </form>
    </section>
  );
};

export default IngredientForm;
