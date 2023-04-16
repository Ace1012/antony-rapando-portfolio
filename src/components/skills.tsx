import * as React from "react";
import assets from "../assets/assets";

interface ISkillsProps {}

const Skills: React.FunctionComponent<ISkillsProps> = (props) => {
  return (
    <section id="section-two" className="two">
      <header>
        <h1>Skills</h1>
      </header>
      <ul className="skills-container">
        <li className="skill-item">
          <span className="title">Basics</span>
          <div className="skill-logos">
            <img
              className="skill"
              title="HTML"
              src={assets.svgs.HtmlLogo}
              alt="HTML Logo"
            />
            <img
              className="skill"
              title="CSS"
              src={assets.svgs.CSSLogo}
              alt="CSS Logo"
            />
          </div>
        </li>
        <li className="skill-item">
          <span className="title">Front-End</span>
          <div className="skill-logos">
            <img
              className="skill"
              title="Javascript"
              src={assets.svgs.JSLogo}
              alt="Javascript Logo"
            />
            <img
              className="skill"
              title="Typescript"
              src={assets.svgs.TSLogo}
              alt="Typescript Logo"
            />
            <img
              className="skill"
              title="React"
              src={assets.svgs.ReactLogo}
              alt="React Logo"
            />
          </div>
        </li>
        <li className="skill-item">
          <span className="title">Version Control</span>
          <div className="skill-logos">
            <img
              className="skill"
              title="Github"
              src={assets.svgs.GitHubLogo}
              alt="GitHub Logo"
            />
            <img
              className="skill"
              title="Git"
              src={assets.svgs.GitLogo}
              alt="Git Logo"
            />
          </div>
        </li>
        <li className="skill-item">
          <span className="title">Back-End</span>
          <div className="skill-logos">
            <img
              className="backend-logo"
              title="Expressjs"
              src={assets.svgs.ExpressJS}
              alt="ExpressJS Logo"
            />
            <img
              className="backend-logo"
              title="Springboot"
              src={assets.svgs.SpringbootLogo}
              alt="Springboot Logo"
            />
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
