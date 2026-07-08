import './IngredientList.css';

const IngredientList = ({
  ingredients,
  onRemoveIngredient,
  onClearIngredients,
}) => {
  return (
    <section className="ingredient-list-section">
      <div className="ingredient-list-header">
        <h2>Your Ingredients:</h2>
        {ingredients.length > 0 && (
          <button type="button" onClick={onClearIngredients}>
            Clear
          </button>
        )}
      </div>

      {ingredients.length === 0 && (
        <p className="ingredient-list-empty">
          Add a few ingredients to start building your recipe.
        </p>
      )}

      <ul>
        {ingredients.map((ingredient) => {
          return (
            <li key={ingredient}>
              <span>{ingredient}</span>
              <button
                type="button"
                onClick={() => onRemoveIngredient(ingredient)}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default IngredientList;
