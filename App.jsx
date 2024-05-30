import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import DiseasePage from './Diseases.jsx';
import HomePage from './Home.jsx';
import MenuPage from './Menu.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import BlogsPage from './Blogs.jsx';
import Recipe from './Recipe.jsx';
import Login from './login.jsx';
import CreateAccount from './CreateAccount.jsx';

const Layout = ({ children }) => {
  const location = useLocation();

  // Define routes where the Header and Footer should not be displayed
  const noHeaderFooterRoutes = ['/login', '/create-account'];

  return (
    <>
      {!noHeaderFooterRoutes.includes(location.pathname) && <Header />}
      {children}
      {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/diseases" element={<DiseasePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/recipe" element={<Recipe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} /> {/* Add this route */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
