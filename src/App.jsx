import './App.css';
import Header from './Header/Header.jsx';
import IngredientForm from './IngredientForm/IngredientForm.jsx';

const App = () => {
  return (
    <div className='app'>
      <main className='app-container'>
        <Header />
        
        <IngredientForm />

      </main>
    </div>
  )
}

export default App