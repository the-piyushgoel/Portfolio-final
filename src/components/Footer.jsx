import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="left">
        &copy; 2026 • Piyush Goel • All Rights Reserved
      </div>
      <div className="right">
        <div className="social">
          <a href="https://www.instagram.com/the_piyushgoel" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div className="social">
          <a href="https://www.linkedin.com/in/the-piyushgoel" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
        <div className="social">
          <a href="https://github.com/the-piyushgoel" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
        <div className="social">
          <a href="https://codolio.com/profile/the_piyushgoel" target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-laptop-code"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
