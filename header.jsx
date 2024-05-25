import React, { useState } from "react";
import './header.css';
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import logo from './logo.png';
import pic from './picture.png';
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <>
    {/* <div className="header">
    <img src={pic} alt="Header Image" className="header-image" />
     </div> */}
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className={`navbar-links ${menu ? 'active' : ''}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#diseases" onClick={closeMenu}>Diseases</a>
        <a href="#blogs" onClick={closeMenu}>Blogs</a>
        <a href="#reviews" onClick={closeMenu}>Reviews</a>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        {menu ? <AiOutlineClose size={25} /> : <AiOutlineMenuUnfold size={25} />}
      </div>
    </nav>
    
 </> )
};

export default Navbar;
