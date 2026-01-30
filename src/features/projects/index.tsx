import { ProjectCard } from "./components/project-card";
import { ReactElement } from "react";

export function ProjectsSection(): ReactElement {
  const projectsContent = [
    {
      name: "Portfolio Website",
      description:
        "Portfolio website serves as my online resume. Built using React.",
      repository: "https://github.com/randylirano/portfolio-website",
      previewUrl: null,
      thumbnail: null,
    },
    {
      name: "Place Holder Project 2",
      description: "Place holder project description to populate project card.",
      repository: null,
      previewUrl: null,
      thumbnail: null,
    },
    {
      name: "Place Holder Project 3",
      description: "Place holder project description to populate project card.",
      repository: null,
      previewUrl: null,
      thumbnail: null,
    },
    {
      name: "Place Holder Project 4",
      description: "Place holder project description to populate project card.",
      repository: null,
      previewUrl: null,
      thumbnail: null,
    },
  ];
  return (
    <section>
      <h1 className="text-white pb-4">{"My Projects"}</h1>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsContent.map((project, index) => (
          <ProjectCard
            key={`${project}-${index}`}
            name={project.name}
            description={project.description}
            repository={project.repository}
          />
        ))}
      </div>
    </section>
  );
}
