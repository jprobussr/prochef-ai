import './RecipeDisplay.css';

const RecipeDisplay = ({ recipe }) => {
  return (
    <section className="recipe-display">
      <h2>Your Recipe</h2>
      <pre>{recipe}</pre>
    </section>
  );
};

export default RecipeDisplay;
