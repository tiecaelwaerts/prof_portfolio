import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-6 text-center">
      <p className="text-lg font-semibold text-red-500">Connect with me:</p>
      <ul className="flex justify-center space-x-6 mt-2 list-none">
        <li>
          <a 
            href="https://github.com/tiecaelwaerts" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-red-400 transition duration-300"
          >
            <i className="fab fa-github text-xl"></i>
            <span>GitHub</span>
          </a>
        </li>
        <li>
          <a 
            href="https://www.linkedin.com/in/tyler-caelwaerts-439ab6342/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-red-400 transition duration-300"
          >
            <i className="fab fa-linkedin text-xl"></i>
            <span>LinkedIn</span>
          </a>
        </li>
      </ul>
      <p className="mt-4 text-sm text-gray-300">&copy; {new Date().getFullYear()} Tyler Caelwaerts. </p>
    </footer>
  );
};

export default Footer;
