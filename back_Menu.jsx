import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SidePanel from './sidepanel';
import './Menu.css';

function MenuPage() {
  const { category } = useParams(); // Use useParams to get the category from the URL
  const [selectedSubCategory, setSelectedSubCategory] = useState(''); // State to track the selected subcategory
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetchRecipes();
  }, [category, selectedSubCategory]); // Fetch recipes when category or subcategory changes

  const fetchRecipes = () => {
    let apiUrl = `http://localhost:8000/menu/${category}`;
    if (selectedSubCategory) {
      apiUrl += `/${selectedSubCategory}`;
    }

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setRecipes(data))
      .catch(error => console.error('Error fetching recipes:', error));
  };

  return (
    <>
      <main className="menu-container">
        <SidePanel selectedCategory={selectedSubCategory} setSelectedCategory={setSelectedSubCategory} />
        <section className="recipes-container">
          {recipes.map((recipe, index) => (
            <div className="recipe-card" key={index}>
              <h2>{recipe.Dish}</h2>
              {recipe['Image Link'] && <img src={recipe['Image Link']} alt={recipe.Dish} />}
            </div>
          ))}
        </section>
      </main>
    </>
  );
}

export default MenuPage;
