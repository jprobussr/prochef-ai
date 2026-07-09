import './RecipeCallout.css';

const RecipeCallout = ({onGenerateRecipe}) => {
    
  return (
    <section className="recipe-callout">
      <div className="recipe-callout__content">
          <h2>Ready to cook?</h2>
          <p>You have enough ingredients to generate an AI-powered recipe.</p>
      </div>
      <button type='button' onClick={onGenerateRecipe}>Generate Recipe</button>
    </section>
  );
};

export default RecipeCallout;
