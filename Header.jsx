
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineMenuUnfold, AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';
import './Header.css';
import logo from './logo.svg'; // Ensure this is the correct path to your logo

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profilePicture, setProfilePicture] = useState(null);
  const [initials, setInitials] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      fetchUserData(token);
    }
  }, []);

  const fetchUserData = async (token) => {
    try {
      const response = await axios.get('http://localhost:5000/secure', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      const userData = response.data?.user;
      if (userData) {
        if (userData.profile_picture) {
          setProfilePicture(`http://localhost:5000/profile_pics/${userData.profile_picture}`);
        }
        const userInitials = `${userData.firstName[0]}${userData.lastName[0]}`.toUpperCase();
        setInitials(userInitials);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <>
      <header className="header">
        <div className="navbar">
          <div className="navbar-brand">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className={`navbar-links ${menu ? 'active' : ''}`}>
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/diseases" onClick={closeMenu}>Diseases</Link>
            <Link to="/NutriRecipe" onClick={closeMenu}>Menu</Link>
            <Link to="/blogs" onClick={closeMenu}>Blogs</Link>
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            {menu ? <AiOutlineClose size={25} /> : <AiOutlineMenuUnfold size={25} />}
          </div>
          <div className="auth-button">
            {isLoggedIn ? (
              <>
                <Link to="/profile" onClick={closeMenu}>
                  <div className="profile-icon">
                    {profilePicture ? (
                      <img src={profilePicture} alt="Profile" className="profile-picture" />
                    ) : (
                      <div className="initials">{initials}</div>
                    )}
                  </div>
                </Link>
                <button onClick={handleLogout}>Logout</button>


              </>
            ) : (
              <Link to="/login" onClick={closeMenu}>Login</Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
