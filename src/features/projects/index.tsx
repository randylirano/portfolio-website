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
      thumbnail: "/images/portfolio-thumbnail.png",
      techStacks: ["TYPESCRIPT", "REACT", "NEXT_JS"],
    },
  ];
  return (
    <section id="projects-section">
      <h1 className="text-white my-2 text-lg font-bold">{"My Projects"}</h1>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsContent.map((project, index) => (
          <ProjectCard
            key={`${project}-${index}`}
            name={project.name}
            description={project.description}
            repository={project.repository}
            thumbnail={project.thumbnail}
            techStacks={project.techStacks}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
}
