import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { AiOutlineMenuUnfold, AiOutlineClose } from 'react-icons/ai';
import logo from './logo.svg';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className={`navbar-links ${menu ? 'active' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/diseases" onClick={closeMenu}>Diseases</Link>
        <Link to="/menu" onClick={closeMenu}>Menu</Link>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {menu ? <AiOutlineClose size={25} /> : <AiOutlineMenuUnfold size={25} />}
      </div>
    </nav>
  );
};

export default Navbar;
