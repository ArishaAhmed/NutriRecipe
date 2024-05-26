import React, { useState, useEffect } from 'react';
import Navbar from './header';
import Footer from './footer';
import SidePanel from './sidepanel';
import './menu.css';


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
    <>
      
      <main className="menu-container">
        <SidePanel setSelectedCategory={setSelectedCategory} />
        <section className="recipes-container">
          {recipes.map((recipe, index) => (
            <div className="recipe-card" key={index}>
              <h2>{recipe.Dish}</h2>
              
              {recipe.Image && <img src={recipe.Image} alt={recipe.Dish} />}
            </div>
          ))}
        </section>
      </main>
      
    </>
  );
}

export default MenuPage;
