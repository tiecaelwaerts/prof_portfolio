import React from 'react';
import Navigation from './Navigation.jsx';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4">
      <h1 className="text-3xl">Tyler Caelwaerts</h1>
      <Navigation />
    </header>
  );
};

export default Header;