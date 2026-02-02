import { ReactElement } from "react";

interface Props {
  degree: string;
  university: string;
  startDate: string;
  endDate?: string | null;
}

export function EducationCard({
  degree,
  university,
  startDate,
  endDate,
}: Props): ReactElement {
  return (
    <div className="flex flex-col">
      <span className="text-lg text-slate-100">{university}</span>
      <span className="text-sm text-slate-400">{degree}</span>
      <span className="text-sm text-slate-400">
        {startDate} - {endDate ? endDate : "N/A"}
      </span>
    </div>
  );
}
