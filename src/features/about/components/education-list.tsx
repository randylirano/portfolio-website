import { ReactElement } from "react";
import { EducationCard } from "./education-card";

interface Props {
  educations: any[];
}

function EducationList({ educations }: Props): ReactElement {
  return (
    <div className="flex flex-col gap-4 p-4">
      {educations.map((education, index) => {
        return (
          <EducationCard
            key={index}
            degree={education.degree}
            university={education.school}
            startDate={education.startDate}
            endDate={education.endDate}
          />
        );
      })}
    </div>
  );
}

export default EducationList;
