import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section>
      <div className="container">
        <h1>Projects</h1>
        <div className="grid">
          {projects.map(p => (
            <ProjectCard key={p.length} {...p}/>
          ))}
        </div>
      </div>
    </section>
  );
}
