import { motion } from "framer-motion";
import ContactModal from "./contact-modal/contactModal";
import { ModalContext } from "../App";
import { useContext } from "react";
import Particles from "./particles/particles";
import MatrixFilter from "../svgs/custom-filters/matrixFilter";
import Hero from "./hero";
import Projects from "./projects";
import Skills from "./skills";
import SocialsKebab from "./socials-kebab";

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

  return (
    <motion.div
      className="home"
      variants={homeVariants}
      initial="hidden"
      animate="visible"
    >
      {isOpen && <ContactModal isOpen={isOpen} setIsOpen={setIsOpen} />}
      {/* Invisible SVG used to house custom profile avatar filter */}
      <MatrixFilter elementId="profile" duration={1000} />
      <Hero />
      <Skills />
      <Projects />
      <SocialsKebab />
      <footer>
        <span
          style={{
            color: "white",
          }}
        >
          Antony Rapando - @ {year}
        </span>
      </footer>
    </motion.div>
  );
};

export default Home;
