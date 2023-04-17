import Particles from "./particles/particles";
interface IProjectsProps {}

const Projects = ({}: IProjectsProps) => {
  return (
    <section id="projects-section" className="three">
      <header>
        <h2 id="projects-header">Projects</h2>
      </header>
      {/* <Particles /> */}
      <div className="projects-container">
        <a
          className="project project2"
          target="_blank"
          href="https://dragndrop-ace1012.netlify.app/"
          title="Create tier-lists or categorize anything!
            You can also download and load/share the list presets."
          data-project-name="Drag'n'Drop"
        >
          <span>Drag'n'Drop</span>
        </a>
        <a
          className="project project3"
          target="_blank"
          href="https://sssg-rapando.onrender.com"
          title="Generate html pages from markdown files!
          Go ahead and give it a try."
          data-project-name="Simple Static Site Generator"
        >
          <span>Simple Static Site Generator</span>
        </a>
      </div>
    </section>
  );
};

export default Projects;
