import React from "react";

const Recipe = ({title, calories, image, ingredients, directions}) => {
    return(
        <div className="container">
            <h1 className="title">{title}</h1>
            <p className="calories">Calories (4 Servings): {Math.round(calories)}</p>
            <img className="image" src={image}/>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <a href={directions} target="_blank">Directions</a>
        </div>
    )
}

export default Recipe;