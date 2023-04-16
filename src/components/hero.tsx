import ProfileAvatar from "../svgs/Profile-Avatar/profileAvatar";
import { useEffect, useRef } from "react";
import Particles from "./particles/particles";

interface ISectionOneProps {}

const Hero: React.FunctionComponent<ISectionOneProps> = (props) => {
  const sectionOne = useRef<HTMLElement>(null);

  useEffect(() => {
    const navOption = document.querySelectorAll(
      ".nav-option"
    ) as NodeListOf<HTMLElement>;
    const nav = document.querySelector(".navbar") as HTMLElement;
    const svgPaths = document.querySelectorAll(
      ".svg path"
    ) as NodeListOf<SVGTextPathElement>;

    const observer = new IntersectionObserver(
      (entries) => {
        const two = entries[0];
        two.isIntersecting
          ? (nav.style.border = "")
          : (nav.style.border = "1px solid black");
        svgPaths.forEach((p) => {
          two.isIntersecting
            ? (p.style.fill = "")
            : ((p.style.fill = "rgb(207, 86, 52)"), (p.style.stroke = "black"));
        });
        navOption.forEach((a) => {
          two.isIntersecting ? (a.style.color = "") : (a.style.color = "black");
        });
      },
      {
        threshold: 0.1,
      }
    );
    sectionOne.current && observer.observe(sectionOne.current);
  }, [sectionOne]);
  return (
    <section ref={sectionOne} id="section-one" className="one">
      {/* <Particles /> */}
      <div className="summary">
        <div className="summary-content">
          <span>Hey there 👋🏾😁,</span>
          <span id="name" data-tool-tip="NOT pronounced Rapunzel">
            I'm Antony Rapando
          </span>
          <span id="role" data-tool-tip="(┛ಠ_ಠ)┛彡┻━┻">
            Fullstack Software Engineer
          </span>
          <p id="description">
            I've recently graduated and made React.ts, Node,
            Express.ts/Springboot and PostgreSQL my stack of choice. Ready to
            tackle any project that comes my way 💪🏾😤
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
