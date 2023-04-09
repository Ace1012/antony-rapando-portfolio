import { motion } from "framer-motion";
import Modal from "./modal";
import { ModalContext } from "./App";
import { useContext, useEffect, useRef } from "react";
import assets from "./assets";
import Particles from "./particles";

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

const year = new Date().getFullYear();

const Home = () => {
  const { isOpen, setIsOpen } = useContext(ModalContext);

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
    <motion.div
      className="home"
      variants={homeVariants}
      initial="hidden"
      animate="visible"
    >
        {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
      <motion.section ref={sectionOne} id="section-one #" className="one">
        <Particles />
        <motion.div layout="position" className="summary">
          <div className="summary-content">
            <span>Hey there 👋🏾😁,</span>
            <span id="name" data-tool-tip="NOT pronounced Rapunzel">I'm Antony Rapando</span>
            <span id="role" data-tool-tip="(┛ಠ_ಠ)┛彡┻━┻">Fullstack Software Engineer</span>
            <p id="description">
              I've recently graduated and made React.ts, Node, Express.ts/Springboot and PostgreSQL
               my stack of choice. Ready to tackle any project that comes my way
              💪🏾😤
            </p>
          </div>
          <motion.div className="profile-picture">
            <img src={assets.pictures.ProfilePicture} alt="profile picture" />
          </motion.div>
        </motion.div>
      </motion.section>

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
            <div
              className="skill-logos"
            >
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

      <section id="section-three" className="three">
        <header>
          <h1>Projects</h1>
        </header>
        <div className="projects-container">
          {/* <a
            className="project project1"
            href="#"
            title="My portfolio webpage"
          >
            PORTFOLIO
          </a> */}
          <a
            className="project project2"
            target="_blank"
            href="https://dragndrop-ace1012.netlify.app/"
            title="Create tier-lists or categorize anything!
            You can also download and load/share the list presets."
          >
            Drag'n'Drop
          </a>
          <a
            className="project project3"
            target="_blank"
            href="https://sssg-rapando.onrender.com"
            title="Generate html pages from markdown files!
            Go ahead and give it a try."
          >
            Simple Static Site Generator
          </a>
        </div>
      </section>
      <footer>
        <span>Antony Rapando - @ {year}</span>
      </footer>
    </motion.div>
  );
};

export default Home;
