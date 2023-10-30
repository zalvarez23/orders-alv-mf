import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingInContainer from "./containers/singIn-container";
import HomeContainer from "./containers/home-container";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SingInContainer />} />
        <Route path="/home" element={<HomeContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
