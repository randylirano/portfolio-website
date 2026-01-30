import { ReactElement } from "react";

export interface Props {
  label: string;
  onClick: () => void;
}

export function Button({ label, onClick }: Props): ReactElement {
  return (
    <button
      className="p-2 hover:bg-[rgb(243,196,65)] hover:text-black transition-all duration-300 rounded"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
