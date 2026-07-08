import './IngredientList.css';

const IngredientList = ({ ingredients, onRemoveIngredient }) => {
  return (
    <section className="ingredient-list-section">
      <h2>Your Ingredients:</h2>

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
