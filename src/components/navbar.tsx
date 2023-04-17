import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useContext, useState } from "react";
import { ModalContext } from "../App";
import ExtraMenu from "./contact-modal/extraMenu";
import NavbarLogo from "./navbar-logo";

const navbarVariants = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: "0vh",
    transition: {
      duration: 0.5,
      type: "spring",
      ease: "easeInOut",
      mass: 1,
      staggerChildren: 0.2,
    },
  },
};

const NavBar = (props: any) => {
  const { isOpen, setIsOpen } = useContext(ModalContext);
  const [extraMenu, setExtraMenu] = useState(false);

  const changeContext = () => {
    setIsOpen(true);
  };

  const toggleExtraMenu = useCallback(() => {
    setExtraMenu((prevExtraMenu) => !prevExtraMenu);
  }, [setExtraMenu]);

  return (
    <motion.nav
      className="navbar"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      <NavbarLogo />

      {/* <span style={{
        color:"#212121"
      }}>Can you see me?</span> */}

      <ul className="links">
        <li>
          <a href="#skills-section" className="nav-option">
            Skills
          </a>
        </li>
        <li>
          <a href="#projects-section" className="nav-option">
            Projects
          </a>
        </li>
        <li>
          <span className="nav-option" onClick={() => changeContext()}>
            Contact
          </span>
        </li>
        {/* <li
          onMouseEnter={() => setExtraMenu(true)}
          onMouseLeave={() => setExtraMenu(false)}
        >
          <span id="socials" className="nav-option">
            Socials
          </span>
        </li> */}
      </ul>
      <AnimatePresence>
        {extraMenu && <ExtraMenu toggleExtraMenu={toggleExtraMenu} />}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
