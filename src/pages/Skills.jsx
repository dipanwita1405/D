import React from "react";
import Section from "../components/Section";
import Skill from "../components/Skill";

const Skills = () => {
  const data = {
    skills: [
      { title: "Java" },
      { title: "HTML" },
      { title: "CSS" },
      { title: "Javascript" },
      { title: "ReactJS" },
      { title: "Mysql" },
      { title: "J2EE" },
      { title: "GitHub" },
      { title: "C/C++ Programming" },
      { title: "Kotlin" },
     
    ],
    frameworks: [
      { title: "React.js" },
      { title: "Bootstrap" },
      { title: "Figma" },
    ],
  };

  const { skills, frameworks } = data;

  const skillsJsx = skills.map((skill, index) => {
    return (
      <div className="col-md-8 py-1" key={index}>
        <Skill skill={skill} />
      </div>
    );
  });

  const frameworksJsx = frameworks.map((skill, index) => {
    return (
      <div className="col-md-8 py-1" key={index}>
        <Skill skill={skill} secondary />
      </div>
    );
  });

  return (
    <div id="skills">
      <Section title="Skills">
        <div className="subheading mb-3">Core Technical Skills</div>
        <div className="row mb-4">{skillsJsx}</div>
        <div className="subheading mb-3">Frameworks / Libraries</div>
        <div className="row mb-4">{frameworksJsx}</div>
      </Section>
    
    </div>
  );
};

export default Skills;
