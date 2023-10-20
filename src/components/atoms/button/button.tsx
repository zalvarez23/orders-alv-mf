import React from "react";

type Theme = "primary" | "secondary";
type ButtonProps = {
  theme?: Theme;
  label: string;
  disabled?: boolean;
  expanded?: boolean;
  outlined?: boolean;
  style?: string;
};
const Button: React.FC<ButtonProps> = ({
  label,
  theme = "",
  disabled,
  expanded,
  outlined,
  style,
}) => {
  const themes: any = {
    primary: {
      bgColor: `${
        outlined
          ? "border-2 border-indigo-500 hover:border-indigo-700"
          : "bg-indigo-500 hover:bg-indigo-700"
      }`,
      textColor: `${
        outlined ? "text-indigo-500" : "text-white"
      } font-extrabold text-sm`,
    },
    secondary: {
      bgColor: `${
        outlined
          ? "border-2 border-green-500"
          : "bg-green-500 hover:bg-green-700"
      }`,
      textColor: `${
        outlined ? "text-green-500" : "text-white"
      } font-bold text-sm`,
    },
  };

  const twTransition =
    "transition duration-300 ease-in-out transform active:scale-90 active:opacity-75";

  const twDisabled = "opacity-60 text-white-700 pointer-events-none";

  const twExpanded = "w-full";

  return (
    <button
      className={`${disabled && twDisabled} ${themes[theme].bgColor} ${
        themes[theme]?.textColor
      } ${twTransition} ${
        expanded && twExpanded
      } px-3 py-1 rounded-md font-montserrat-bold ${style}`}
    >
      {label}
    </button>
  );
};

export default Button;

Button.defaultProps = {
  theme: "primary",
  label: "My Button",
  disabled: false,
  expanded: false,
  outlined: false,
};
