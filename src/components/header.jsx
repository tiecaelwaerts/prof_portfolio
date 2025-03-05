import React from 'react';
import Navigation from './Navigation.jsx';

const Header = () => {
  return (
    <header className="bg-blue-900 text-white py-4 shadow-lg">
      <div className="container mx-auto flex flex-col items-center">
        <h1 className="text-3xl font-bold text-red-500">Tyler Caelwaerts</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
