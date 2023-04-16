interface IProjectsProps {}

const Projects = ({}: IProjectsProps) => {
  return (
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
  );
};

export default Projects;
