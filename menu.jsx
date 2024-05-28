import React, { useState, useEffect } from 'react';
import SidePanel from './sidepanel';
import './Menu.css';

function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('breakfast');
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/recipes/${selectedCategory}`)
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error fetching recipes:', error));
  }, [selectedCategory]);

  return (
    <div className="menu-container">
      <SidePanel selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <section className="recipes-container">
        {recipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <h2>{recipe.Dish}</h2>
            {recipe.Image && <img src={recipe.Image} alt={recipe.Dish} />}
          </div>
        ))}
      </section>
    </div>
  );
}

export default MenuPage;
