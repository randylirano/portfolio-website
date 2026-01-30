import { ReactElement } from "react";

interface Props {
  name: string;
  description?: string | null;
  repository?: string | null;
  previewUrl?: string | null;
}

export function ProjectCard({
  name,
  description,
  repository,
  previewUrl,
}: Props): ReactElement {
  return (
    // Temporarily adding border for visualization
    <div className="border-2 border-solid border-white rounded-xl">
      <div className="h-52 bg-orange-300 rounded-t-xl relative group">
        <div className="w-full h-full">
          <div className="h-10 w-10">GIT</div>
        </div>
      </div>
      <div className="flex flex-col">
        <span>{name}</span>
        <span>{description}</span>
        {repository !== undefined && repository !== null ? (
          <a href={repository} target="_blank">
            GIT
          </a>
        ) : (
          <span>No repository view</span>
        )}
      </div>
    </div>
  );
}
