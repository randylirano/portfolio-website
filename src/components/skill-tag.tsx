import { ReactElement } from "react";

interface Props {
  skill: string;
}

export function SkillTag({ skill }: Props): ReactElement {
  return (
    <span className="border border-slate-400 rounded text-center p-2">
      {skill}
    </span>
  );
}
