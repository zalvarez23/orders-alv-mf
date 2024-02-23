import {
  TUserDto,
  TUserSaveParamsDto,
  TUserSignInParams,
} from "../../types/market/user.interface";

export interface IUserRepository {
  getUsers(userSignInParams: TUserSignInParams): Promise<TUserDto>;
  saveUser(usersSaveParams: TUserSaveParamsDto): Promise<void>;
  saveLocalStorageUser(userDto: TUserDto): Promise<void>;
}
