import React from "react";

type variants = "title" | "subtitle" | "body" | "small" | "link";
type families = "medium" | "regular" | "bold" | "semibold";
type TypographyProps = {
  label: string;
  variant: variants;
  family: families;
  color?: string;
};
const Typography: React.FC<TypographyProps> = ({
  label,
  variant,
  family,
  color,
}) => {
  const twVariants = {
    title: "text-2xl",
    subtitle: "text-xl",
    body: "text-base",
    small: "text-xs",
    link: "text-base underline cursor-pointer",
  };
  return (
    <p className={`${twVariants[variant]} font-montserrat-${family} ${color}`}>
      {label}
    </p>
  );
};

export default Typography;

Typography.defaultProps = {
  label: "My Text",
  variant: "body",
  family: "medium",
  color: "text-orange-300",
};
