import { UserServices } from "../services/user.service";
import { TUserSaveParamsDto } from "../types/market/user.interface";
import FormRegisterLogin, {
  FormRegisterUserValues,
} from "../components/templates/register-user/form-register-user";
import { useState } from "react";
import TextIcon from "../components/molecules/text-icon";
import { myColors } from "../constants/colors";
import { useNavigate } from "react-router-dom";
import SuccessRegisterUser from "../components/templates/register-user/sucess-register-user";

const RegisterUserContainer: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [paramsUserSignIn, setParamsUserSignIn] = useState({
    user: "",
    password: "",
  });
  const navigate = useNavigate();

  const userServices = new UserServices();

  const handleOnSubmit = async (values: FormRegisterUserValues) => {
    setIsLoading(true);
    const user = `${values.firstName.charAt(0)}${
      values.lastName.split(" ")[0]
    }`;
    setParamsUserSignIn({
      user,
      password: user,
    });
    const userRequest: TUserSaveParamsDto = {
      ...values,
    };
    try {
      await userServices.saveUser(userRequest);
      setIsSuccess(true);
    } catch (error) {
      alert("Error al registrar usuario");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoToBack = () => {
    navigate(-1);
  };

  const handlerOnSignIn = async () => {
    try {
      setIsLoading(true);
      const result = await userServices.getUsers({
        user: paramsUserSignIn.user,
        password: paramsUserSignIn.password,
      });
      userServices.saveLocalStorageUser(result);
      navigate("/home");
    } catch (error) {
      alert("Error al iniciar sesión");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
      <SuccessRegisterUser onSignIn={handlerOnSignIn} isLoading={isLoading} />
    );
  }

  return (
    <div className="pt-10 px-5">
      <header>
        <TextIcon
          family="bold"
          iconSize="30"
          icon="back"
          label="Usuario"
          labelColor="text-gray-700"
          variant="subtitle"
          styles="gap-7"
          iconColor={myColors["danger-light"]}
          onClickIcon={handleGoToBack}
        />
      </header>
      <main className="pt-10 px-4">
        <FormRegisterLogin onSubmit={handleOnSubmit} isLoading={isLoading} />
      </main>
    </div>
  );
};

export default RegisterUserContainer;
