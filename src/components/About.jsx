import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Typed from 'typed.js';
import { portfolioData } from '../data/portfolioData';

const About = () => {
  const typedTarget = useRef(null);

  useEffect(() => {
    document.title = "Home Page";

    const typed = new Typed(typedTarget.current, {
      strings: portfolioData.about.subtitles,
      typeSpeed: 55,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="column right">
          <img src="/ssets/main-image.jpg" alt="" />
        </div>
        <div className="column left">
          <div className="text">
            I'm Piyush Goel and I'm a <span ref={typedTarget} id="typed" className="iAm"></span>
          </div>
          <p>{portfolioData.about.description}</p>
          <div className="buttons">
            <a
              href="https://drive.google.com/file/d/1eu5TvPoaqUerg5HBIZIlEzRzmO2wPGp8/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
            <Link to="/contact" className="cm-button">Contact Me</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
