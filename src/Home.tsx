import { motion } from "framer-motion";
import Modal from "./modal";
import { ModalContext } from "./App";
import { useContext, useEffect, useRef } from "react";
import assets from "./assets";

const homeVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 0.5,
    },
  },
};

const Home = () => {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  const sectionOne = useRef<HTMLElement>(null);

  useEffect(() => {
    const navOption = document.querySelectorAll(".nav-option") as NodeListOf<HTMLElement>;
    const nav = document.querySelector(".navbar") as HTMLElement;
    const svgPaths = document.querySelectorAll(".svg path") as NodeListOf<SVGTextPathElement>;

    const styles = document.styleSheets[1];

    const observer = new IntersectionObserver(entries => {
      const two = entries[0];
      two.isIntersecting ? nav.style.border = "" : nav.style.border = "1px solid black";
      svgPaths.forEach( p =>{
        two.isIntersecting ? p.style.fill = "" : (
          // p.style.fill = "rgb(207, 86, 52)",
          p.style.fill = "rgb(207, 86, 52)",
          p.style.stroke = "black"
        );
      })
      navOption.forEach((a) => {
        two.isIntersecting ? a.style.color = "" : a.style.color = "black"
      })
    },{
      threshold: 0.1
    });
    observer.observe(sectionOne.current!);
  },[sectionOne])

  return (
    <motion.div
      className="home"
      variants={homeVariants}
      initial="hidden"
      animate="visible"
    >
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
      <motion.section ref={sectionOne} id="section-one" className="section one">
        <motion.div layout="position" className="summary">
          <div className="summary-content">
            <h3>Hey there 👋🏾😁,</h3>
            <h1 data-tool-tip="That's my name lol">I'm Antony Rapando</h1>
            <h2 data-tool-tip="(┛ಠ_ಠ)┛彡┻━┻">A Junior Fullstack Engineer</h2>
            <p>
              I've recently graduated and made React.ts, Springboot and PostgreS
              my stack of choice. Ready to tackle any project that comes my way
              💪🏾😤
            </p>
          </div>
          <motion.div className="profile-picture">
            <img src={assets.pictures.ProfilePicture} alt="profile picture" />
          </motion.div>
        </motion.div>
      </motion.section>

      <section id="section-two" className="section two">
        <header>
          <h1>Skills</h1>
        </header>
        <ul className="skills-container">
          <li className="skill-item">
            <h1>Basics</h1>
            <div className="skill-logos">
              <img id="skill" src={assets.svgs.HtmlLogo} alt="HTML Logo" />
              <img id="skill" src={assets.svgs.CSSLogo} alt="CSS Logo" />
            </div>
          </li>
          <li className="skill-item">
            <h1>Front-End</h1>
            <div className="skill-logos">
              <img id="skill" src={assets.svgs.JSLogo} alt="Javascript Logo" />
              <img id="skill" src={assets.svgs.TSLogo} alt="Typescript Logo" />
              <img id="skill" src={assets.svgs.ReactLogo} alt="React Logo" />
            </div>
          </li>
          <li className="skill-item">
            <h1>Version Control</h1>
            <div className="skill-logos">
              <img id="skill" src={assets.svgs.GitHubLogo} alt="GitHub Logo" />
              <img id="skill" src={assets.svgs.GitLabLogo} alt="GitLab  Logo" />
            </div>
          </li>
        </ul>
      </section>

      <section id="section-three" className="section three">
        <header>
          <h1>Projects</h1>
        </header>
        <div className="projects-container">
          <a className="test project1" href="/" title="My portfolio webpage">PORTFOLIO</a>
          <a className="test project2" href="">Raps Shopping Incoming</a>
          <a className="test project3" href="">Project 3</a>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
