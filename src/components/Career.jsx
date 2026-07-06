import React, { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import '../styles/career.css';

const Career = () => {
  useEffect(() => {
    document.title = "Career";
  }, []);

  return (
    <main className="career-main">
      <div className="career-section">
        <div className="professional-summary">
          <div className="ps-header career-header">
            <div className="text">Professional Summary</div>
            <div className="header-line"></div>
          </div>
          <div className="texts">{portfolioData.career.summary}</div>
        </div>
        <div className="career-goals">
          <div className="cg-header career-header">
            <div className="text">Career goals</div>
            <div className="header-line"></div>
          </div>
          <div className="goals">
            <div className="goals-row short-term-goals">
              <div className="goals-header">
                <div className="text">Short-Term Goals</div>
                <div className="header-line"></div>
              </div>
              <div className="texts">
                {portfolioData.career.shortTerm.map((goal, idx) => (
                  <div className="text-row" key={idx}>
                    <div className="tr-icon"></div>
                    {goal}
                  </div>
                ))}
              </div>
            </div>
            <div className="goals-row long-term-goals">
              <div className="goals-header">
                <div className="text">Long-Term Goals</div>
                <div className="header-line"></div>
              </div>
              <div className="texts">
                {portfolioData.career.longTerm.map((goal, idx) => (
                  <div className="text-row" key={idx}>
                    <div className="tr-icon"></div>
                    {goal}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Career;
