import { ReactElement } from "react";
import Link from "next/link";
import { FaCode, FaDesktop } from "react-icons/fa";
import { SiTypescript, SiReact, SiNextdotjs } from "react-icons/si";

interface Props {
  name: string;
  description?: string | null;
  repository?: string | null;
  previewUrl?: string | null;
  thumbnail?: string | null;
  techStacks: string[];
}

function getTechBadge(tech: string, key: string) {
  switch (tech) {
    case "TYPESCRIPT":
      return <SiTypescript key={key} />;
    case "REACT":
      return <SiReact key={key} />;
    case "NEXT_JS":
      return <SiNextdotjs key={key} />;
    default:
      return (
        <span className="text-xs" key={key}>
          {tech}
        </span>
      );
  }
}

export function ProjectCard({
  name,
  description,
  repository,
  previewUrl,
  thumbnail,
  techStacks,
}: Props): ReactElement {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${thumbnail})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundColor: "oklch(91.7% 0.08 205.041)",
        }}
      />
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <div className="flex justify-between">
          <span className="text-xl font-semibold mb-2">{name}</span>
          <div className="flex gap-2 justify-end">
            {repository !== undefined && repository !== null ? (
              <Link
                href={repository}
                className="h-6 w-6 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                target="_blank"
              >
                <FaCode className="h-4 w-4 text-[#ADB7BE] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
              </Link>
            ) : (
              <FaCode className="h-6 w-6 text-[#ADB7BE]" />
            )}
            {previewUrl !== undefined && previewUrl !== null ? (
              <Link
                href={previewUrl}
                className="h-6 w-6 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
                target="_blank"
              >
                <FaDesktop className="h-4 w-4 text-[#ADB7BE] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
              </Link>
            ) : (
              <FaDesktop className="h-6 w-6 text-[#ADB7BE]" />
            )}
          </div>
        </div>

        <p className="text-[#ADB7BE]">{description}</p>

        <div className="flex gap-4 my-2">
          {techStacks.map((tech, index) => {
            return getTechBadge(tech, `tech-${tech}-${index}`);
          })}
        </div>
      </div>
    </div>
  );
}
