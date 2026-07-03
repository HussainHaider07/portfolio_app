import { useEffect } from "react";
import SkillCard from "../components/SkillCard";
import skillsData from "../data/skillsData";
import "../styles/skills.css";

function Skills() {
  useEffect(() => { document.title = "Skills | Portfolio"; }, []);
  return (
    <div className="page-wrapper"><div className="container">
      <h2 className="section-title">Skills</h2>
      <p className="section-subtitle">Technologies and tools I work with</p>
      <div className="skills-grid">
        {skillsData.map((skill) => (
          <SkillCard key={skill.id} {...skill} />
        ))}
      </div>
    </div></div>
  );
}
export default Skills;