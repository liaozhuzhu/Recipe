import React, {useEffect, useState} from "react";
import uniqid from "uniqid";
import Recipe from "./components/Recipe";
import './App.css';

const App = () => {
  const APP_ID = "cda2c799";
  const APP_KEY = "b2405b2b0ae79d4f6e6aeb8290b61842";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={updateSearch} autoFocus/>
        <button className="search-button" type="submit">Search</button>
      </form>
      <h1 id="recipes-title">Recipes:</h1>
      <div className="recipes">
        {recipes.map(recipe =>(
          <Recipe 
            key={recipe.recipe.image}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            directions={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  )
}

export default App;
