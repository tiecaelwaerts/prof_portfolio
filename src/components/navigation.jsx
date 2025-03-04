import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li><NavLink to="/" activeClassName="text-yellow-500">About Me</NavLink></li>
        <li><NavLink to="/portfolio" activeClassName="text-yellow-500">Portfolio</NavLink></li>
        <li><NavLink to="/contact" activeClassName="text-yellow-500">Contact</NavLink></li>
        <li><NavLink to="/resume" activeClassName="text-yellow-500">Resume</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navigation;