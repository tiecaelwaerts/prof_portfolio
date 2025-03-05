import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white p-4">
      <p>Connect with me:</p>
      <ul className="flex space-x-4">
        <li><a href="https://github.com/tiecaelwaerts" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://linkedin.com/in/tiecaelwaerts" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        <li><a href="https://stackoverflow.com/users/tiecaelwaerts" target="_blank" rel="noopener noreferrer">Stack Overflow</a></li>
      </ul>
    </footer>
  );
};

export default Footer;