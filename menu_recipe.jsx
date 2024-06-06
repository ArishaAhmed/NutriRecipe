
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

function MenuRecipe() {
  const navigate = useNavigate(); // Provides navigation functionality
  const [recipes, setRecipes] = useState([]); // State for storing recipes
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token')); // State for checking user login status
  const [showPrompt, setShowPrompt] = useState(false); // State for showing login prompt

  // Effect to fetch recipes when component mounts
  useEffect(() => {
    fetchRecipes();
  }, []);

  // Function to fetch recipes from the API
  const fetchRecipes = () => {
    const apiUrl = `http://127.0.0.1:8000/NutriRecipe`;
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched recipes:', data);
        // Flatten the nested recipe structure into a single array
        const flattenedRecipes = Object.values(data).flat();
        setRecipes(flattenedRecipes);
      })
      .catch(error => console.error('Error fetching recipes:', error));
  };

  // Function to handle viewing a recipe
  const handleViewRecipe = (recipe) => {
    if (!isLoggedIn) {
      setShowPrompt(true); // Show login prompt if user is not logged in
    } else {
      navigate(`/recipe/${recipe.Dish}`, { state: { recipe } }); // Navigate to the RecipeDisplay page with recipe data
    }
  };

  // Function to handle login/signup click
  const handleLoginSignup = () => {
    navigate('/login'); // Redirect to the login page
  };

  // Function to close the login prompt
  const closePrompt = () => {
    setShowPrompt(false);
  };

  return (
    <main className="menu-container">
      <section className="recipes-container">
        {recipes.map((recipe, index) => (
          <div className="recipe-card" key={index} onClick={() => handleViewRecipe(recipe)}>
            {recipe['Image Link'] && (
              <img src={recipe['Image Link']} alt={recipe.Dish} className="recipe-image" />
            )}
            <h2>{recipe.Dish}</h2>
          </div>
        ))}
      </section>
      {showPrompt && (
        <div className="popup-overlay">
          <div className="login-prompt">
            <p>You are not logged in. To view the entire recipe, please log in or sign up.</p>
            <button onClick={handleLoginSignup}>Login / Signup</button>
            <button className="close-button" onClick={closePrompt}>Close</button>
          </div>
        </div>
      )}
    </main>
  );
}

export default MenuRecipe;
