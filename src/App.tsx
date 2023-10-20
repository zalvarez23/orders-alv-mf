import { useState } from "react";
import "./App.css";
import Button from "./components/atoms/button";

function App() {
  return (
    <>
      <div>
        hola aqui un componente button
        <Button label="Mi boton" />
      </div>
    </>
  );
}

export default App;
