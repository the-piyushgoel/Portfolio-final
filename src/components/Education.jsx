import React, { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import '../styles/education.css';

const Education = () => {
  useEffect(() => {
    document.title = "Education";
  }, []);

  return (
    <main className="education-main">
      <div className="education-section">
        {portfolioData.education.map((item, index) => (
          <div className={`study ${item.className}`} key={index}>
            <div className="image">
              <img src={item.image} alt="" />
            </div>
            <div className="line"></div>
            <div className="texts">
              <div className="header">{item.degree}</div>
              <div className="name">{item.school}</div>
              <div className="year">{item.year}</div>
              <div className="text">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Education;
