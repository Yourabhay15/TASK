import React from 'react';

const Footer = () => (
  <footer className="bg-dark text-white text-center py-3 mt-5">
    <div className="container">
      <div className="mb-2">
        <a href="https://instagram.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-instagram"></i> Instagram
        </a>
        <a href="https://facebook.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-facebook"></i> Facebook
        </a>
        <a href="https://linkedin.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin"></i> LinkedIn
        </a>
        <a href="https://twitter.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-twitter-x"></i> X
        </a>
      </div>
      <div>&copy; {new Date().getFullYear()} Vap'd Dashsteam. All rights reserved.</div>
    </div>
  </footer>
);

export default Footer; 