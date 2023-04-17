import assets from "../assets/assets";
import Skill from "./skill";
import SkillCard from "./skillCard";
import Particles from "./particles/particles";
import MatrixFilter from "../svgs/custom-filters/matrixFilter";
import FuzzyFilter from "../svgs/custom-filters/fuzzyFilter";
import { useEffect, useRef, useState } from "react";

interface INewSkillsProps {}

const Skills = ({}: INewSkillsProps) => {
  return (
    <section id="skills-section" className="two">
      <header>
        <h2 id="skills-header">Skills</h2>
      </header>
      {/* <Particles /> */}
      {/* 0 size SVGs used to create filters for each skill-card */}

      <ul className="skill-cards-container">
        <SkillCard category="Fundamentals">
          <Skill name="HTML" src={assets.svgs.HtmlLogo} alt="HTML Logo" />
          <Skill name="CSS" src={assets.svgs.CSSLogo} alt="CSS Logo" />
          <Skill
            name="Javascript"
            src={assets.svgs.JSLogo}
            alt="Javascript Logo"
          />
        </SkillCard>
        <SkillCard category="Front-End">
          <Skill
            name="Typescript"
            src={assets.svgs.TSLogo}
            alt="Typescript Logo"
          />
          <Skill name="React" src={assets.svgs.ReactLogo} alt="React Logo" />
          <Skill name="Redux" src={assets.svgs.Reduxlogo} alt="Redux Logo" />
        </SkillCard>
        <SkillCard category="Back-End">
          <Skill
            name="Expressjs"
            className="back-end-icon"
            src={assets.svgs.ExpressJS2Logo}
            alt="Express Logo"
          />
          <Skill
            name="Nodejs"
            className="back-end-icon"
            src={assets.svgs.NodejsLogo}
            alt="Nodejs Logo"
          />
          <Skill
            name="Springboot"
            className="back-end-icon"
            src={assets.svgs.SpringbootLogo}
            alt="Springboot Logo"
          />
        </SkillCard>
        <SkillCard category="Version Control">
          <Skill name="Git" src={assets.svgs.GitLogo} alt="Git Logo" />
          <Skill name="GitHub" src={assets.svgs.GitHubLogo} alt="GitHub Logo" />
          <Skill name="GitLab" src={assets.svgs.GitLabLogo} alt="GitLab Logo" />
        </SkillCard>
      </ul>
    </section>
  );
};

export default Skills;
