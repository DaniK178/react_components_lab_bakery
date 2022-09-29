import './App.css';
import Title from './Title'
import TopNav from './TopNav'
import SearchBar from './SearchBar'
import Recipes from './DisplayRecipes';
import AddNewRecipe from './NewRecipeForm';

function App() {
  return (
    <div>
      <Title/>
      <TopNav/>
      <SearchBar/>
      <Recipes/>
      <AddNewRecipe/>
    </div>
  
  );
}

export default App;
