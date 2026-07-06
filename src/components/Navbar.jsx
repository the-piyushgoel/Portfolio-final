import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerTop, setHeaderTop] = useState('0');
  const prevScrollPos = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (isMenuOpen) {
        setHeaderTop('0');
        prevScrollPos.current = currentScrollPos;
        return;
      }

      if (prevScrollPos.current > currentScrollPos) {
        setHeaderTop('0');
      } else {
        setHeaderTop('-100px');
      }
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, setIsMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    if (path === '/' && (location.pathname === '/' || location.pathname === '/index.html')) {
      return true;
    }
    return location.pathname === path;
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`} style={{ top: headerTop }} id="header">
      <Link to="/" className="logo">
        <span className="main-icon"></span>
        <span>Piyush Goel</span>
      </Link>
      
      <div className={`navbar ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" className={isActive('/') ? 'active' : ''}>Home</Link>
        <Link to="/skills" className={isActive('/skills') ? 'active' : ''}>Skills</Link>
        <Link to="/education" className={isActive('/education') ? 'active' : ''}>Education</Link>
        <Link to="/career" className={isActive('/career') ? 'active' : ''}>Career</Link>
      </div>

      <div className="main">
        <Link to="/contact" className={`user main-items ${isActive('/contact') ? 'active' : ''}`}>
          <i className="fas fa-envelope cm-icon"></i>Contact Me
        </Link>
        <div className="main-items menu-icon-container" id="menu-icon-js" onClick={toggleMenu}>
          <div className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'}`} id="menu-icon"></div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
