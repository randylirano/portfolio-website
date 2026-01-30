import { ReactElement, useState } from "react";
import { Button } from "@/components/button";

interface Props {
  skills: string[];
}

function SkillList({ skills }: Props): ReactElement {
  return (
    <div className="grid grid-cols-4 gap-4 p-2">
      {skills.map((skill, index) => {
        return <div key={index}>{skill}</div>;
      })}
    </div>
  );
}

export default SkillList;
