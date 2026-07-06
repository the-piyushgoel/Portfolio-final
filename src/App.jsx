import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Career from './components/Career';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <div className="page">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/index.html" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>

      <div
        className={`nav-touch-close ${isMenuOpen ? 'nav-touch-close-open' : ''}`}
        id="nav-tc-js"
        onClick={() => setIsMenuOpen(false)}
      ></div>
    </Router>
  );
}

export default App;
