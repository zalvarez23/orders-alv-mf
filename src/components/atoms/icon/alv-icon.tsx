import React from "react";
import { icons as LuIcons } from "lucide-react";

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}

const AlvIcon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "black",
  className,
}) => {
  const formattedIconName = `${name.charAt(0).toUpperCase()}${name.slice(1)}`;
  const IconComponent = (LuIcons as Record<string, React.ComponentType<any>>)[
    formattedIconName
  ];
  if (!IconComponent) {
    console.error(`Icono '${name}' no encontrado en Lucide Icons`);
    return null;
  }
  const combinedClassName = `fa-icon ${className || ""}`;
  return (
    <IconComponent
      size={size}
      className={combinedClassName}
      style={{ color }}
    />
  );
};

export default AlvIcon;
