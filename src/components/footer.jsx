import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a 
          href="https://github.com/tiecaelwaerts" 
          target="_blank" 
          rel="noopener noreferrer"
          className="footer-link"
        >
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/tyler-caelwaerts-439ab6342/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="footer-link"
        >
          LinkedIn
        </a>
      </div>
      <p className="footer-text">&copy; {new Date().getFullYear()} Tyler Caelwaerts</p>
    </footer>
  );
};

export default Footer;
