import type { propsButton } from "../../types/types";

export const Button = ({
  type = "button",
  text,
  className,
  icon,
  disable,
  onClick,
}: propsButton) => {
  return (
    <button
      className={className}
      type={type}
      disabled={disable}
      onClick={onClick}
    >
      {icon}
      {text}
    </button>
  );
};
