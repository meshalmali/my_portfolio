import React from "react";
import "./Skills.css";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <div className="skills" id="skills">
      <h1>Here are my current skills</h1>
      <div className="skills_container">
        <div className="skills_wrapper">
          <SkillCard src="/logos/react.png" text="React" />
          <SkillCard src="/logos/html.png" text="HTML" />
          <SkillCard src="/logos/css-3.png" text="CSS" />
          <SkillCard src="/logos/js.png" text="Javascript" />
          <SkillCard src="/logos/git.png" text="Git" />
          <SkillCard src="/logos/github.png" text="Github" />
          <SkillCard src="/logos/firebase.png" text="Firebase" />
          <SkillCard src="/logos/java.png" text="Java" />
          <SkillCard src="/logos/selenium.png" text="Selenium" />
          <SkillCard src="/logos/jira.png" text="Jira" />
          <SkillCard src="/logos/confluence.png" text="Confluence" />
          <SkillCard src="/logos/mysql.png" text="SQL" />
        </div>
      </div>
    </div>
  );
}

export default Skills;
