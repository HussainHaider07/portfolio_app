import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projectsData";
import "../styles/projects.css";

function Projects() {
  useEffect(() => { document.title = "Projects | Portfolio"; }, []);
  return (
    <div className="page-wrapper"><div className="container">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">Things I've built</p>
      <div className="projects-grid">
        {projectsData.map((p) => <ProjectCard key={p.id} {...p} />)}
      </div>
    </div></div>
  );
}
export default Projects;