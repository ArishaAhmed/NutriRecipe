import React from "react";
import { NavLink } from 'react-router-dom';

const Navbar =() => {
    return <nav>
        <div className="menu-icon">
            <ul className="menu-list">

                <li> 
                <NavLink to="/">Home</NavLink>
                </li>

                <li> 
                <NavLink to="/disease">Disease</NavLink>
                </li>

                <li> 
                <NavLink to="/menu">Menu</NavLink>
                </li>

            </ul>
        </div>
    </nav>

};
