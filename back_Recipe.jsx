import React from 'react';
import './Recipe.css';
import { useParams } from 'react-router-dom';

const Recipe = ({ selectedRecipe }) => {
  const { category, dish } = useParams();

  // Debugging: log the selectedRecipe
  console.log('selectedRecipe:', selectedRecipe);

  if (!selectedRecipe || selectedRecipe.Dish !== dish) {
    return <div>Loading...</div>; // Handle loading state
  }

  return (
    <div className="recipe-container">
      <h1 className="recipe-title">{selectedRecipe.Dish}</h1>

      <div className="recipe-content">
        <div className="ingredients">
          <h2>Ingredients</h2>
          <p>{selectedRecipe.Ingredients}</p>
        </div>
        <div className="recipe-image">
          {selectedRecipe['Image Link'] && (
            <img src={selectedRecipe['Image Link']} alt={selectedRecipe.Dish} />
          )}
        </div>
      </div>

      <div className="instructions">
        <h2>Instructions</h2>
        <p>{selectedRecipe.Instructions}</p>
      </div>
    </div>
  );
};

export default Recipe;

