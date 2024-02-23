import { TGender, TRoles, UserModel } from "../../models/user.model";

export type TUserSignInParams = {
  user: string;
  password: string;
};

export interface TUserSaveParamsDto {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  gender: TGender;
}

export interface TUserDto {
  key: string;
  firstName: string;
  lastName: string;
  email: string;
  document: string;
  role: TRoles;
  phone: string;
  address: string;
  gender: TGender;
  state: string;
}
