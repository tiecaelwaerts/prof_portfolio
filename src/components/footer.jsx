import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 px-8 flex justify-between items-center">
      <a 
        href="https://github.com/tiecaelwaerts" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white hover:text-red-400 transition duration-300 text-lg font-semibold"
      >
        GitHub
      </a>

      <p className="text-sm text-gray-300">&copy; {new Date().getFullYear()} Tyler Caelwaerts</p>

      <a 
        href="https://www.linkedin.com/in/tyler-caelwaerts-439ab6342/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white hover:text-red-400 transition duration-300 text-lg font-semibold"
      >
        LinkedIn
      </a>
    </footer>
  );
};

export default Footer;
