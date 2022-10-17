import Aos from "aos";
import React, { useEffect } from "react";
import { IoMdFolderOpen } from "react-icons/io";
import ExternalLinks from "./ExternalLinks";
import "./projects.css";

function Projects() {
  useEffect(() => {
    Aos.init();
  }, []);

  const projects = {
    Carte: {
      desc: "Carte is cloud-based restaurant management solution that reinvents the dine-in/restaurant experience with a streamline of cloud-dynamic operations, including but not limited to: labor management, inventory management, and a dynamic digital menu",
      techStack: "React.js, DOTNET, T-SQL",
      link: "https://github.com/Jeremiom",
      open: "https://lacarte.azurewebsites.net/",
    },
  };
  return (
    <div id="projects">
      <div
        className="projects-heading highlight"
        data-aos="fade-up"
        data-aos-duration="2000"
        data-aos-delay="60"
      >
        <span className="font-monospace">Projects</span>
      </div>
      <div
        className="project-container"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <ul className="projects-grid">
          {Object.keys(projects).map((key) => (
            <li className="projects-card">
              <div className="card-header">
                <div className="folder-icon">
                  <IoMdFolderOpen style={{ fontSize: 35 }}></IoMdFolderOpen>
                </div>
                <ExternalLinks
                  githubLink={projects[key]["link"]}
                  openLink={projects[key].open}
                ></ExternalLinks>
              </div>
              <div className="card-title font-monospace">{key}</div>
              <div className="card-desc font-monospace">
                {projects[key]["desc"]}
              </div>
              <div className="card-tech font-monospace">
                {projects[key]["techStack"]}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;
