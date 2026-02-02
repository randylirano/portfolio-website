import { ReactElement } from "react";

interface Props {
  label: string;
  onClick: () => void;
  isActive?: boolean;
}

export function Button({ label, onClick, isActive }: Props): ReactElement {
  const buttonStyle = isActive
    ? "border-b border-cyan-200"
    : "hover:text-white text-slate-500 transition-all duration-100";
  return (
    <button className={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
}
