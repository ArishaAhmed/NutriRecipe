import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DiseasePage from './Diseases.jsx';
import HomePage from './Home.jsx';
import MenuPage from './Menu.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Recipe from './Recipe.jsx';
import LoginForm from './LoginForm' // Add this import for Recipe component

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/diseases" element={<DiseasePage />} />
          <Route path="/menu/:category" element={<MenuPage setSelectedRecipe={setSelectedRecipe} />} />
          <Route path="/:category/:dish" element={<Recipe selectedRecipe={selectedRecipe} />} /> {/* New route for Recipe component */}
          <Route path="/login" component={LoginForm} /> {/* Route for LoginForm */}
        {/* Add more routes as needed */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
