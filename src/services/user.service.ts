import { IUserRepository } from "../repositories/user/user.repository";
import { ApiUserImpl } from "../repositories/user/user.impl";
import {
  TUserDto,
  TUserSaveParamsDto,
  TUserSignInParams,
} from "../types/market/user.interface";

export class UserServices implements IUserRepository {
  private apiUserImpl: ApiUserImpl;
  constructor() {
    this.apiUserImpl = new ApiUserImpl();
  }

  async getUsers(userSignInParams: TUserSignInParams): Promise<TUserDto> {
    return await this.apiUserImpl.getUsers(userSignInParams);
  }

  async saveUser(userSaveParams: TUserSaveParamsDto): Promise<void> {
    return await this.apiUserImpl.saveUser(userSaveParams);
  }

  async saveLocalStorageUser(user: TUserDto): Promise<void> {
    return await this.apiUserImpl.saveLocalStorageUser(user);
  }
}
