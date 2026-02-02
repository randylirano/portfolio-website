import { ReactElement } from "react";
import { SkillTag } from "@/components";

interface Props {
  skills: string[];
}

function SkillList({ skills }: Props): ReactElement {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-4">
      {skills.map((skill, index) => {
        return <SkillTag key={`skill-${index}-${skill}`} skill={skill} />;
      })}
    </div>
  );
}

export default SkillList;
