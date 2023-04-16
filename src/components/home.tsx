import { motion } from "framer-motion";
import ContactModal from "./contact-modal/contactModal";
import { ModalContext } from "../App";
import { useContext } from "react";
import Particles from "./particles/particles";
import MatrixFilter from "../svgs/custom-filters/matrixFilter";
import Hero from "./hero";
import Skills from "./skills";
import Projects from "./projects";

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
      <MatrixFilter elementId="profile" duration={2000} />

      <Hero />

      <Skills />

      <Projects />

      <footer>
        <span>Antony Rapando - @ {year}</span>
      </footer>
    </motion.div>
  );
};

export default Home;
