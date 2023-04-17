import ProfileAvatar from "../svgs/Profile-Avatar/profileAvatar";
import { useEffect, useRef } from "react";
import Particles from "./particles/particles";

interface ISectionOneProps {}

const Hero = ({}: ISectionOneProps) => {
  const sectionOne = useRef<HTMLElement>(null);
  return (
    <section ref={sectionOne} id="hero-section" className="one">
      {/* <Particles /> */}
      <div className="summary">
        <div className="summary-content">
          <span>Hey there,</span>
          <span id="name" data-tool-tip="NOT pronounced Rapunzel">
            I'm Antony Rapando
          </span>
          <span id="role" data-tool-tip="(┛ಠ_ಠ)┛彡┻━┻">
            Fullstack Software Engineer
          </span>
          <p id="description">
            I've recently graduated and made React.ts, Node,
            Express.ts and PostgreSQL my stack of choice. Ready to
            tackle any project that comes my way.
          </p>
        </div>
        <div className="profile-picture">
          {/* <img src={assets.pictures.ProfilePicture} alt="profile picture" /> */}
          <ProfileAvatar />
        </div>
      </div>
    </section>
  );
};

export default Hero;
