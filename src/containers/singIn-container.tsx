import React, { useState } from "react";
import Login from "../components/templates/login/login";
import { useNavigate } from "react-router-dom";
import { UserServices } from "../services/user.service";

const SingInContainer: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();
  const userServies = new UserServices();

  const handleLogIn = async (user: string, password: string) => {
    try {
      setIsLoading(true);
      const usersData = await userServies.getUsers({ user, password });
      userServies.saveLocalStorageUser(usersData);
      navigate("/home");
    } catch (error) {
      setIsError(true);
      // const errorMessage =
      //   error instanceof ErrorWithStatus
      //     ? error.message
      //     : "Internal Server Error";
    } finally {
      setIsLoading(false);
    }
  };
  const handlerRegister = () => {
    navigate("/register");
  };
  return (
    <Login
      onClickSingIn={handleLogIn}
      onClickRegister={handlerRegister}
      isLoading={isLoading}
      isError={isError}
    />
  );
};

export default SingInContainer;
