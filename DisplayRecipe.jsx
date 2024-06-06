import React from 'react';
import './Menu.css';

const DisplayRecipe = ({ recipe, closeRecipe }) => {
    return (
        <div className="recipe-details-overlay">
            <div className="recipe-details">
                <button className="close-button" onClick={closeRecipe}>Close</button>
                <h2>{recipe.Dish}</h2>
                {recipe['Image Link'] && (
                    <img src={recipe['Image Link']} alt={recipe.Dish} className="recipe-image" />
                )}
                <h3>Ingredients:</h3>
                <ul>
                    {recipe.Ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DisplayRecipe;
