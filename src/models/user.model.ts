export type TRoles = "admin" | "user" | "bartender" | "kitchen";
export type TGender = "male" | "female";

export enum EUserState {
  ACTIVE = 1,
  INACTIVE = 0,
}

export interface UserModel {
  firstName: string;
  lastName: string;
  email: string;
  document: string;
  role?: TRoles;
  phone: string;
  address: string;
  gender: TGender;
  state?: number;
  user?: string;
  password?: string;
}
