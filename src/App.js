import React, {useEffect, useState} from "react";
import Recipe from "./components/Recipe";
import './App.css';

const App = () => {
  const APP_ID = "cda2c799";
  const APP_KEY = "b2405b2b0ae79d4f6e6aeb8290b61842";

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
  }
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe =>(
        <Recipe/>
      ))};
    </div>
  )
}

export default App;
