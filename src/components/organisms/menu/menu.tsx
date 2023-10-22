import React from "react";
import { MyIcons } from "../../atoms/icon/icon";
import TextIcon from "../../molecules/text-icon";
import { myColors } from "../../../constants/colors";
import Typography from "../../atoms/typography/typography";

type MenuItemProps = {
  icon: MyIcons;
  label: string;
};
type MenuProps = {
  menuList: MenuItemProps[];
};

const Menu: React.FC<MenuProps> = ({ menuList }) => {
  return (
    <div className="w-60 min-h-screen rounded-2xl py-6 shadow-lg mt-4 flex flex-col justify-between">
      <header className="flex justify-center">
        <TextIcon
          labelSpacing="widest"
          labelColor="text-gray-600"
          label="FreshFood"
          variant="body"
          family="bold"
        />
      </header>
      <main className="flex flex-col gap-7 items-center flex-1 mt-20">
        {menuList.map((menu) => (
          <TextIcon
            styles="min-w-[100px] gap-4"
            label={menu.label}
            labelSpacing="wide"
            variant="small"
            labelColor="text-gray-600"
            family="bold"
            icon={menu.icon}
            iconSize="20"
            iconColor={myColors.dark}
          />
        ))}
      </main>
      <footer className="flex justify-center aboslute bottom-4">
        <TextIcon
          styles="min-w-[100px] gap-4"
          label={"Logout"}
          labelSpacing="widest"
          variant="small"
          labelColor="text-gray-600"
          family="bold"
          icon="logout"
          iconSize="20"
          iconColor={myColors.dark}
        />
      </footer>
    </div>
  );
};

export default Menu;

Menu.defaultProps = {
  menuList: [
    { icon: "menu", label: "Menu" },
    { icon: "car", label: "Delivery" },
    { icon: "payment", label: "Payment" },
    { icon: "about", label: "About" },
  ],
};
