
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SidePanel from './sidepanel';
import './Menu.css';

const MenuPage = ({ setSelectedRecipe }) => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    fetchRecipes();
  }, [category, selectedSubCategory]);

  const fetchRecipes = () => {
    let apiUrl = `http://localhost:8000/menu/${category}`;
    if (selectedSubCategory) {
      apiUrl += `/${selectedSubCategory}`;
    }
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log('Fetched recipes:', data);
        setRecipes(Array.isArray(data) ? data : [data]);
      })
      .catch(error => console.error('Error fetching recipes:', error));
  };

  const handleViewRecipe = (recipe) => {
    if (!isLoggedIn) {
      setShowPrompt(true);
    } else {
      setSelectedRecipe(recipe);
      navigate(`/${category}/${recipe.Dish}`);
    }
  };

  const handleLoginSignup = () => {
    navigate('/login');
  };

  const closePrompt = () => {
    setShowPrompt(false);
  };

  return (
    <main className="menu-container">
      <SidePanel selectedCategory={selectedSubCategory} setSelectedCategory={setSelectedSubCategory} />
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
};

export default MenuPage;
