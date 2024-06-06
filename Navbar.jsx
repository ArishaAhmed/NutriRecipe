import React from "react";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="menu-icon">
        <ul className="menu-list">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/diseases">Disease</NavLink></li>
          <li><NavLink to="/NutriRecipe">Menu</NavLink></li>
          <li><NavLink to="/blogs">Blogs</NavLink></li>
          {/* <li><NavLink to="/recipe">Recipe</NavLink></li> */}
          <li><NavLink to="/login">Login</NavLink></li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
