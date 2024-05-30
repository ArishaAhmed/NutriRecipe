// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import './Header.css';
// import { AiOutlineMenuUnfold, AiOutlineClose } from 'react-icons/ai';
// import logo from './logo.svg'; // Ensure this is the correct path to your logo

// const Header = () => {
//   const [menu, setMenu] = useState(false);

//   const toggleMenu = () => {
//     setMenu(!menu);
//   };

//   const closeMenu = () => {
//     setMenu(false);
//   };

//   return (
//     <>
//       <header className="header">
//         <div className="navbar">
//           <div className="navbar-brand">
//             <img src={logo} alt="Logo" className="logo" />
//           </div>
//           <div className={`navbar-links ${menu ? 'active' : ''}`}>
//             <Link to="/" onClick={closeMenu}>Home</Link>
//             <Link to="/diseases" onClick={closeMenu}>Diseases</Link>
//             <Link to="/menu" onClick={closeMenu}>Menu</Link>
//             <Link to="/blogs" onClick={closeMenu}>Blogs</Link>
//             <Link to="/recipe" onClick={closeMenu}>Recipe</Link>
//           </div>
//           {/* <div className={`navbar-links-2 ${menu ? 'active' : ''}`}>
//           <Link to="/login" onClick={closeMenu}>Login</Link>
//           </div> */}
//           <div className="menu-icon" onClick={toggleMenu}>
//             {menu ? <AiOutlineClose size={25} /> : <AiOutlineMenuUnfold size={25} />}
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Header;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineMenuUnfold, AiOutlineClose } from 'react-icons/ai';
import './Header.css';
import logo from './logo.svg'; // Ensure this is the correct path to your logo

const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <>
      <header className="header">
      <div className="login-button">
            <Link to="/login">Login</Link>
          </div>
        <div className="navbar">
          <div className="navbar-brand">
            <img src={logo} alt="Logo" className="logo" />
          </div>
          <div className={`navbar-links ${menu ? 'active' : ''}`}>
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/diseases" onClick={closeMenu}>Diseases</Link>
            <Link to="/menu" onClick={closeMenu}>Menu</Link>
            <Link to="/blogs" onClick={closeMenu}>Blogs</Link>
            <Link to="/recipe" onClick={closeMenu}>Recipe</Link>
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            {menu ? <AiOutlineClose size={25} /> : <AiOutlineMenuUnfold size={25} />}
          </div>
        </div>
        
      </header>
    </>
  );
};

export default Header;

