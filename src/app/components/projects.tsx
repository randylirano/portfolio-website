import { ReactElement, ReactNode } from "react";

function ProjectsSection(): ReactElement {
  const projectsContent = [
    {
      name: "Place Holder Project",
      description: "Place holder project description to populate project card.",
      repository: "",
      previewUrl: "",
      thumbnail: "",
    },
    {
      name: "Place Holder Project 2",
      description: "Place holder project description to populate project card.",
      repository: "",
      previewUrl: "",
      thumbnail: "",
    },
  ];
  return (
    <section>
      <h1 className="text-white">{"My Projects"}</h1>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectsContent.map((project, index) => (
          <ProjectCard
            key={`${project}-${index}`}
            name={project.name}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
}

interface ProjectCardProps {
  name: string;
  description?: string;
  repository?: string;
  previewUrl?: string;
}

function ProjectCard({
  name,
  description,
  repository,
  previewUrl,
}: ProjectCardProps): ReactElement {
  return (
    <div>
      <div className="h-52 bg-orange-300 rounded-t-xl relative group">
        <div className="w-full h-full">
          <div className="h-10 w-10">GIT</div>
        </div>
      </div>
      <div className="flex flex-col">
        <span>{name}</span>
        <span>{description}</span>
      </div>
    </div>
  );
}

export default ProjectsSection;
