import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="w-full">
      <ul className="flex justify-end space-x-6 pr-8 text-white text-lg font-semibold">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "text-yellow-500 border-b-2 border-yellow-500 pb-1" : "hover:text-yellow-300 transition duration-300"}
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/portfolio" 
            className={({ isActive }) => isActive ? "text-yellow-500 border-b-2 border-yellow-500 pb-1" : "hover:text-yellow-300 transition duration-300"}
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? "text-yellow-500 border-b-2 border-yellow-500 pb-1" : "hover:text-yellow-300 transition duration-300"}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/resume" 
            className={({ isActive }) => isActive ? "text-yellow-500 border-b-2 border-yellow-500 pb-1" : "hover:text-yellow-300 transition duration-300"}
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
