import { ProjectCard } from "./components/project-card";
import { ReactElement } from "react";

export function ProjectsSection(): ReactElement {
  const projectsContent = [
    {
      name: "Portfolio Website",
      description:
        "A website to host a list of my tech stacks and past projects",
      repository: "https://github.com/randylirano/portfolio-website",
      previewUrl: null,
      thumbnail: "/images/portfolio-thumbnail.png",
      techStacks: ["TYPESCRIPT", "REACT", "NEXT_JS"],
    },
    {
      name: "RAG ChatBot",
      description:
        "A RAG supported chatbot. Inspired by Vercel's official tutorial.",
      repository: "https://github.com/randylirano/RAG-Supported-ChatBot",
      previewUrl: null,
      thumbnail: null,
      techStacks: ["TYPESCRIPT", "REACT", "NEXT_JS"],
    },
    {
      name: "Work Station",
      description:
        "A web application where users can store notes, todo list, images, etc. as part of their own desk space.",
      repository: "https://github.com/randylirano/WorkStation",
      previewUrl: null,
      thumbnail: null,
      techStacks: ["PYTHON", "HTML", "CSS", "JAVASCRIPT"],
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
