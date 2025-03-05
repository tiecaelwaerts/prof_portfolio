import React from 'react';
import Navigation from './navigation.jsx';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">Tyler Caelwaerts</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
