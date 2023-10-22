import React from "react";
import { AiFillFire, AiOutlineInfoCircle } from "react-icons/ai";
import { myColors } from "../../../constants/colors";
import { BsCartDash } from "react-icons/bs";
import { MdOutlinePayments } from "react-icons/md";
import { HiLogout, HiMenuAlt3 } from "react-icons/hi";
import { TbPointFilled } from "react-icons/tb";
import { TypeIconNames } from "../../../constants/components/types";

type IconProps = {
  size: string;
  name: TypeIconNames;
  color: string;
};
export type MyIcons =
  | "fire"
  | "car"
  | "payment"
  | "menu"
  | "about"
  | "point"
  | "logout";

const Icon: React.FC<IconProps> = ({ size, name, color }) => {
  const icons: Record<MyIcons, any> = {
    fire: <AiFillFire size={size} color={color} />,
    car: <BsCartDash size={size} color={color} />,
    payment: <MdOutlinePayments size={size} color={color} />,
    menu: <HiMenuAlt3 size={size} color={color} />,
    about: <AiOutlineInfoCircle size={size} color={color} />,
    point: <TbPointFilled size={size} color={color} />,
    logout: <HiLogout size={size} color={color} />,
  };
  return <div>{icons[name as MyIcons]}</div>;
};

export default Icon;

Icon.defaultProps = {
  size: "20",
  name: "fire",
  color: myColors.dark,
};
