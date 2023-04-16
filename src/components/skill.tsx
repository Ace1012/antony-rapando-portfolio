import assets from "../assets/assets";

interface ISkillProps {}

const Skill: React.FunctionComponent<ISkillProps> = (props) => {
  return (
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
  );
};

export default Skill;
