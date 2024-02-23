import React from "react";
import { IconType } from "react-icons";
import * as AiIcons from "react-icons/ai";
import * as BsICons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as HiIcons from "react-icons/hi";
import * as Hi2Icons from "react-icons/hi2";
import * as TbIcons from "react-icons/tb";
import * as BiIcons from "react-icons/bi";
import * as Io5Icons from "react-icons/io5";

export type MyIcons =
  | "fire"
  | "car"
  | "car-bg"
  | "payment"
  | "menu"
  | "about"
  | "point"
  | "logout"
  | "person"
  | "search"
  | "user"
  | "ubication"
  | "lock"
  | "email"
  | "phone"
  | "arrowBottom"
  | "back";

const IconsTransform: Record<MyIcons, string> = {
  fire: "AiFillFire",
  car: "BsCartDash",
  "car-bg": "BsCartFill",
  payment: "MdOutlinePayments",
  menu: "HiMenuAlt3",
  about: "AiOutlineInfoCircle",
  point: "TbPointFilled",
  logout: "HiLogout",
  person: "HiUser",
  search: "BiSearchAlt",
  user: "BiSolidUserCircle",
  ubication: "HiMapPin",
  lock: "IoLockOpen",
  email: "MdOutlineAlternateEmail",
  phone: "BsPhone",
  arrowBottom: "MdKeyboardArrowDown",
  back: "MdOutlineKeyboardBackspace",
};

interface IconProps {
  name: MyIcons;
  size?: number | string;
  color?: string;
  className?: string;
}
const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = "black",
  className,
}) => {
  const iconName = IconsTransform[name as MyIcons];

  const formattedIconName = `${iconName
    .charAt(0)
    .toUpperCase()}${iconName.slice(1)}`;

  const IconComponent =
    (AiIcons as Record<string, IconType>)[formattedIconName] ||
    (BsICons as Record<string, IconType>)[formattedIconName] ||
    (MdIcons as Record<string, IconType>)[formattedIconName] ||
    (HiIcons as Record<string, IconType>)[formattedIconName] ||
    (Hi2Icons as Record<string, IconType>)[formattedIconName] ||
    (TbIcons as Record<string, IconType>)[formattedIconName] ||
    (BiIcons as Record<string, IconType>)[formattedIconName] ||
    (Io5Icons as Record<string, IconType>)[formattedIconName];

  if (!IconComponent) {
    console.error(`Icono '${name}' no encontrado en el conjunto proporcionado`);
    return null;
  }

  return <IconComponent size={size} color={color} className={className} />;
};

export default Icon;
