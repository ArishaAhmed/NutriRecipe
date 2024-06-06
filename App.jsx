
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import DiseasePage from './Diseases.jsx';
import HomePage from './Home.jsx';
import MenuPage from './Menu.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Recipe from './Recipe.jsx';
import BlogsPage from './Blogs.jsx';
import LoginForm from './LoginForm.jsx';
import RegisterForm from './RegisterForm.jsx';
import ProfilePage from './profilepage.jsx';
import MenuRecipe from './menu_recipe.jsx';
import RecipeDisplay from './RecipeDisplay.jsx';
import ScrollToTop from './ScrollToTop'; // Importing ScrollToTop

const Layout = ({ children }) => {
  const location = useLocation();

  // Define routes where the Header and Footer should not be displayed
  const noHeaderFooterRoutes = ['/login', '/register'];

  return (
    <>
      {!noHeaderFooterRoutes.includes(location.pathname) && <Header />}
      {children}
      {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Adding ScrollToTop component */}
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/diseases" element={<DiseasePage />} />
          <Route path="/NutriRecipe" element={<MenuRecipe />} />
          <Route path="/menu/:category" element={<MenuPage setSelectedRecipe={setSelectedRecipe} />} />
          <Route path="/:category/:dish" element={<Recipe selectedRecipe={selectedRecipe} />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/recipe/:dish" element={<RecipeDisplay />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
