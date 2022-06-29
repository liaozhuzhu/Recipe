import React, {useEffect, useState} from "react";
import './App.css';

const App = () => {
  const APP_ID = "cda2c799";
  const APP_KEY = "b2405b2b0ae79d4f6e6aeb8290b61842";

  useEffect(() => {
    console.log("Run");
  });

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    console.log(data);
  }
  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    </div>
  )
}

export default App;
