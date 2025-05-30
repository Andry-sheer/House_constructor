import type { IconProps } from "../../types/types";

export const IconComponent = ({
  icon: Icon,
  size = 24,
  className,
  color,
  fill,
}: IconProps) => {
  const iconSize = typeof size === "string" ? Number(size) : size;

  return (
    <Icon className={className} size={iconSize} color={color} fill={fill} />
  );
};
