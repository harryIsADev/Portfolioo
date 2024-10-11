import React from "react";
import SkillIcon from "./SkillsComponents/SkillIcon"; // Assuming the path is correct
import Heading from "./Heading";

export default function Skills() {
  const skills = [
    { iconClass: "fab fa-html5", name: "HTML" },
    { iconClass: "fab fa-css3-alt", name: "CSS" },
    { iconClass: "fab fa-js-square", name: "JavaScript" },
    { iconClass: "fab fa-node-js", name: "Node.js" },
    { iconClass: "fab fa-npm", name: "Express" },
    { iconClass: "fas fa-database", name: "PostgreSQL" },
    { iconClass: "fas fa-table", name: "SQL" },
    { iconClass: "fab fa-java", name: "Java" },
  ];

  return (
    <section id="skills">
      <Heading 
      text={"My Skills"}
      />
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <SkillIcon key={index} className={skill.iconClass} />
            <span></span>
          </div>
        ))}
      </div>
    </section>
  );
}
