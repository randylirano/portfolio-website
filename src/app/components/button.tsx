import { ReactElement } from "react";

export interface Props {
  label: string;
  onClick: () => void;
}

export function Button({ label, onClick }: Props): ReactElement {
  return <button onClick={onClick}>{label}</button>;
}
