import React from "react";
import Typography, {
  families,
  spacings,
  variants,
} from "../atoms/typography/typography";

type ranking = "platinum" | "gold" | "silver";

type RankingProps = {
  rank: ranking;
  label: string;
  labelSpacing?: spacings;
  family?: families | undefined;
  variant: variants | undefined;
};

const UserRank: React.FC<RankingProps> = ({ 
  rank, 
  label,
  family,
  labelSpacing,
  variant = "body",
}) => {
  const twRank = {
    platinum: "bg-gray-100",
    gold: "bg-amber-400",
    silver: "bg-gray-400",
  };

  return (
      <div className={`${twRank[rank]} px-4 py-2 rounded-tr-md`}>
        <Typography
          label={label}
          family={family}
          spacing={labelSpacing}
          variant={variant}
        />
      </div>
  );
};

export default UserRank;

UserRank.defaultProps = {
  rank: "gold",
  label: "gold",
  labelSpacing:"normal",
  family: "regular",
};
