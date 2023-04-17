import * as React from "react";
import assets from "../assets/assets";

interface ISocialsKebabProps {}

const SocialsKebab: React.FunctionComponent<ISocialsKebabProps> = (props) => {
  return (
    <div className="social-kebab">
      <a href="https://www.linkedin.com/in/antony-rapando/" target={"_blank"}>
        <img
          className="social-link"
          src={assets.svgs.LinkedInLogo}
          alt="LinkedIn profile link"
          title="LinkedIn profile link"
        />
      </a>
      <a href="https://github.com/Ace1012" target={"_blank"}>
        <img
          className="social-link"
          src={assets.svgs.GitHubLogo}
          alt="Github profile link"
          title="Github profile link"
        />
      </a>
    </div>
  );
};

export default SocialsKebab;
