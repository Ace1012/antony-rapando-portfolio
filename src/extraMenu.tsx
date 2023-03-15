import { motion } from "framer-motion";
import assets from "./assets";

const extraMenuVariants = {
  hidden: {
    opacity: 0,
    y: -1000,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.5,
      type: "spring",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: {
      delay: 0.2,
      duration: 0.3,
    },
  },
};

const ExtraMenu = (props: any) => {
  const { toggleExtraMenu } = props;

  return (
    <motion.div
      variants={extraMenuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onMouseEnter={toggleExtraMenu}
      onMouseLeave={toggleExtraMenu}
      className="navbar-extra-menu"
    >
      {/* <span>Nothing to see here lol</span> */}
      <div className="social-links">
        <a href="https://www.linkedin.com/in/antony-rapando/" target={"_blank"}>
          <img
            className="social-link"
            src={assets.svgs.LinkedIn}
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
    </motion.div>
  );
};

export default ExtraMenu;
