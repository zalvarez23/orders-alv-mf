import { FC } from "react";
import HomeTemplate from "../components/templates/home-template/home-template";
import Input from "../components/atoms/input/input";

const BusinessContainer: FC = () => {
  return (
    <HomeTemplate>
      <header className="bg-white p-5 rounded-md mb-4">
        <h1>Lista de empresas</h1>
      </header>
      <main className="mt-10">
        <div className="flex gap-2 justify-center items-center">
          <Input placeholder="Nombre de empresa" />
          <Input placeholder="Nombre de empresa" />
          <Input placeholder="Nombre de empresa" />
        </div>
        <div className="flex gap-2 justify-center items-center my-10">
          <Input placeholder="Nombre de empresa" />
          <Input placeholder="Nombre de empresa" />
          <Input placeholder="Nombre de empresa" />
        </div>
      </main>
    </HomeTemplate>
  );
};

export default BusinessContainer;
