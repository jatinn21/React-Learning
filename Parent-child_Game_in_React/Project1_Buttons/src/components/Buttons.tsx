import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?: "primary" | "secondary" | "danger" | "warning";
  onClick: () => void;
}

function Buttons({ children, color = "primary", onClick }: Props) {
  return (
    <button type="button" className={`btn btn-${color}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Buttons;
