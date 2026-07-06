import React, { useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';
import '../styles/skills.css';

const Skills = () => {
  useEffect(() => {
    document.title = "Skills";
  }, []);

  const renderSkillGroup = (skills, groupHeader) => {
    return (
      <div className="skills-group-row">
        <div className="skills-group-header">{groupHeader}</div>
        <div className="border-line"></div>
        <div className="skills-group">
          {skills.map((skill, index) => (
            <div className={`${skill.cssClass} skill`} key={index}>
              <div className="icon">
                <i className={`${skill.icon} icon-img`}></i>
              </div>
              <div className="skill-block">
                <div className="block-header">{skill.name}</div>
                <div className="block-section">{skill.details}</div>
                <div className="progress-block">{skill.displayPercent}</div>
                <div className="progress-bar">
                  <div className="progress-per"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <main className="skills-main">
      <div className="skills-section">
        <div className="header">
          <div className="text">My Skills</div>
          <div className="border-line"></div>
        </div>
        <div className="skills">
          {renderSkillGroup(portfolioData.skills.technical, "Technical Skills")}
          {renderSkillGroup(portfolioData.skills.professional, "Professional Skills")}
        </div>
      </div>
    </main>
  );
};

export default Skills;
