import './RecipeDisplay.css';
import ReactMarkdown from 'react-markdown';

const RecipeDisplay = ({ recipe }) => {
  return (
    <section className="recipe-display">
      <h2>Your Recipe</h2>
      <div className="recipe-display__content">
        <ReactMarkdown>{recipe}</ReactMarkdown>
      </div>
    </section>
  );
};

export default RecipeDisplay;
