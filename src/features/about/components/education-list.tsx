import { ReactElement } from "react";

interface Props {
  educations: any[];
}

function EducationList({ educations }: Props): ReactElement {
  return (
    <div className="flex flex-col gap-2 p-2">
      {educations.map((educations, index) => {
        return (
          <span key={index}>
            {educations.school} - {educations.degree}
          </span>
        );
      })}
    </div>
  );
}

export default EducationList;
