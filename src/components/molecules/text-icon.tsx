import React from "react";
import { myColors } from "../../constants/colors";
import Icon, { MyIcons } from "../atoms/icon/icon";
import { TypeIconNames } from "../../constants/components/types";
import Typography, {
  families,
  spacings,
  variants,
} from "../atoms/typography/typography";

type TextIconProps = {
  label: string;
  labelColor?: string;
  labelSpacing?: spacings;
  icon?: MyIcons;
  iconColor?: string;
  iconSize?: string;
  variant: variants | undefined;
  family?: families | undefined;
  styles?: string;
};

const TextIcon: React.FC<TextIconProps> = ({
  label,
  labelSpacing,
  icon = "fire",
  iconColor = myColors.secondary,
  iconSize = "25",
  labelColor,
  family,
  variant = "small",
  styles,
}) => {
  return (
    <div className={`flex items-center gap-1.5 ${styles}`}>
      <Icon name={icon as TypeIconNames} size={iconSize} color={iconColor} />
      <Typography
        label={label}
        variant={variant}
        family={family}
        color={labelColor}
        spacing={labelSpacing}
      />
    </div>
  );
};

export default TextIcon;

TextIcon.defaultProps = {
  label: "My Icon Text",
  icon: "fire",
  iconColor: myColors.secondary,
  iconSize: "25",
  variant: "small",
  family: "regular",
};
