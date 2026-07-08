import './IngredientForm.css';

const IngredientForm = () => {
  return (
    <section className='ingredient-form-section'>
        <h2>What's in your kitchen?</h2>

        <form className="ingredient-form">
            <input type="text" placeholder='e.g. chicken, rice, broccoli' />
            <button>Add Ingredient</button>
        </form>
    </section>
  )
}

export default IngredientForm