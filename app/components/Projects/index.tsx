import { ReactElement } from "react";

import ProjectCard from "@/components/ProjectCard";
import { projectsData } from "@/components/Projects/data";

const Projects = (): ReactElement => {
  return (
    <section id="projects" className="pt-16 md:pt-28">
      <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6 border-solid border-l-8 pl-2 border-yellow-500">
        Projects
      </h2>
      <p className="md:w-4/5 lg:w-3/5 text-left md:text-justify mb-6 md:mb-12">
        {`I've had opportunity to collaborate on many interesting projects but unfortunately not all of them are publicly visible. Here is curated sample of my work.`}
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => {
          return (
            <ProjectCard
              key={project.name}
              name={project.name}
              description={project.description}
              img={project.img}
              url={project.url}
              ghUrl={project.ghUrl}
              database={project.database}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
