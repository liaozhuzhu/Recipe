import React from "react";

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className="container">
            <h1>{title}</h1>
            <p>{calories}</p>
            <img src={image}/>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
        </div>
    )
}

export default Recipe;