import { ReactElement } from "react";
import Link from "next/link";
import { FaCode, FaDesktop } from "react-icons/fa";
import { SiTypescript, SiReact, SiNextdotjs } from "react-icons/si";

interface Props {
  name: string;
  description?: string | null;
  repository?: string | null;
  previewUrl?: string | null;
  thumbnail: string;
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
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={repository!}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
          >
            <FaCode className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          {previewUrl !== undefined && previewUrl !== null ? (
            <Link
              href={previewUrl}
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
              target="_blank"
            >
              <FaDesktop className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
          ) : null}
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{name}</h5>
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
