import React from "react";
import Typography from "../atoms/typography/typography";
import Button from "../atoms/button/button";

type ItemButtonProps = {
  buttonLabel: string;
  textLabel: string;
};

const ItemButton: React.FC<ItemButtonProps> = () => {
  return (
    <div className="flex items-center justify-between">
      <Typography
        label="$27.00"
        variant="body"
        family="bold"
        color="text-dark"
      />
      <Button label="Add" outlined />
    </div>
  );
};

export default ItemButton;
