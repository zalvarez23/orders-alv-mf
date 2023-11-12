import React from "react";


type FormProps = {
  negocio: string;
  tipo: string;
};

const Form: React.FC<FormProps> = ({ negocio,tipo }) => {
  return (
    <div >
    <h2 className="font-black text-3xl text-center">Agregar {negocio}</h2>
    
    <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
      <div className="mb-5">
        <label htmlFor = "negocio" className="block font-bold text-gray-700 uppercase">Nombre Negocio</label>
        <input
           id="negocio"
           type = 'text'
           placeholder="Nombre del negocio"
           className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        />
      </div>
      <div className="mb-5">
        <label htmlFor = "tipoNegocio" className="block font-bold text-gray-700 uppercase">Tipo de Negocio</label>
        <input
           id="tipoNegocio"
           type = 'text'
           placeholder="tipo de negocio"
           className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        />
      </div>
      <input
        type="submit"
        className="bg-indigo-600 w-full p-3 rounded-md text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
        value="Agregar Negocio"
      />

    </form>
  </div>
  );
};

export default Form;
