import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingInContainer from "./containers/singIn-container";
import HomeContainer from "./containers/home-container";
import RegisterUserContainer from "./containers/register-user-container";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SingInContainer />} />
        <Route path="/home" element={<HomeContainer />} />
        <Route path="/register" element={<RegisterUserContainer />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
