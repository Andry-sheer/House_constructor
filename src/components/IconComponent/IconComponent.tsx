
import type { IconType } from "react-icons";

type IconProps = {
  icon: IconType
  size?: string | number
  className?: string
  color?: string
  fill?: string
}

export const IconComponent = ({ icon: Icon, size = 24, className, color, fill }:IconProps) => {
  const iconSize = typeof size === 'string' ? Number(size) : size;

  return (
    <Icon 
      className={className}
      size={iconSize}
      color={color}
      fill={fill}
    />
  )
}