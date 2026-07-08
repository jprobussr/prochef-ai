import './IngredientList.css';

const IngredientList = ({ ingredients }) => {
  return (
    <section className="ingredient-list-section">
      <h2>Your Ingredients:</h2>

      <ul>
        {ingredients.map((ingredient) => {
          return <li key={ingredient}>{ingredient}</li>;
        })}
      </ul>
    </section>
  );
};

export default IngredientList;
