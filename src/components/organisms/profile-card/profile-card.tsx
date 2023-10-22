import React from "react";
import AvatarProfile from "../../atoms/avatar-profile/avatar-profile";
import Typography from "../../atoms/typography/typography";
import TextIcon from "../../molecules/text-icon";
import { myColors } from "../../../constants/colors";
import Button from "../../atoms/button/button";

type ProfileCardProps = {
  title: string;
  subTitle: string;
  description: string;
  image: string;
  visits: number;
  typeProfile: string;
};

const ProfileCard: React.FC<ProfileCardProps> = () => {
  return (
    <div className="py-5 px-5 rounded-lg shadow-md relative">
      <section className="absolute right-0 top-0 px-4 py-2 bg-amber-400 rounded-tr-md">
        <Typography
          label="Premiun"
          variant="small"
          family="bold"
          color="text-white"
        />
      </section>
      <header className="flex gap-4">
        <section className="relative -top-16">
          <AvatarProfile size="large" />
        </section>
        <section className="flex flex-col gap-4">
          <Typography
            label="Pedrito Davila"
            variant="subtitle"
            family="bold"
            spacing="wider"
          />
          <Typography
            label="DEVELOPER SENIOR"
            variant="small"
            spacing="wider"
            color="text-gray-300"
            family="bold"
          />
          <TextIcon
            label="Lima - peru"
            variant="small"
            icon="fire"
            iconSize="15"
            labelColor="text-gray-300"
            iconColor={myColors["gray-3"]}
          />
        </section>
        <section className="flex flex-col justify-center">
          <Button label="My profile" outlined />
        </section>
      </header>
      <main className="flex justify-between">
        <section className="flex items-center gap-2">
          <Typography label="500" variant="title" family="bold" />
          <Typography
            label="Visitas"
            variant="small"
            color="text-gray-300"
            spacing="wider"
          />
        </section>
        <section className="flex items-center gap-2">
          <Typography label="80%" variant="title" family="bold" />
          <Typography
            label="Rating"
            variant="small"
            color="text-gray-300"
            spacing="wider"
          />
        </section>
        <section className="flex items-center gap-2">
          <Typography label="1.1k" variant="title" family="bold" />
          <Typography
            label="Followers"
            variant="small"
            color="text-gray-300"
            spacing="wider"
          />
        </section>
      </main>
    </div>
  );
};

export default ProfileCard;
