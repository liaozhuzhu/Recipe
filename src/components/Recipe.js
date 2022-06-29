import React from "react";

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className="container">
            <h1 className="title">{title}</h1>
            <p className="calories">Calories: {Math.round(calories)}</p>
            <img className="image" src={image}/>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    )
}

export default Recipe;