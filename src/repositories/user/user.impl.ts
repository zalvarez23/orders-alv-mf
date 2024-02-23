import { IUserRepository } from "./user.repository";
import db from "./../../../src/utils/firebase/firebase-config";
import {
  TUserDto,
  TUserSaveParamsDto,
  TUserSignInParams,
} from "../../types/market/user.interface";
import {
  DocumentData,
  QuerySnapshot,
  addDoc,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { EUserState, UserModel } from "../../models/user.model";
import { ErrorWithStatus } from "../../utils/errors/custom-errors";

export class ApiUserImpl implements IUserRepository {
  constructor() {}

  public transformUserModelToUserDto(
    userSnapshot: QuerySnapshot<DocumentData, DocumentData>
  ): TUserDto {
    let userDtoResponse = {} as TUserDto;
    userSnapshot.forEach((doc) => {
      const user = doc.data();
      userDtoResponse = {
        key: doc.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        document: user.document,
        role: user.role,
        phone: user.phone,
        address: user.address,
        gender: user.gender,
        state: user.state,
      } as TUserDto;
    });

    return userDtoResponse;
  }

  async getUsers(userSignInParams: TUserSignInParams): Promise<TUserDto> {
    const collectionUsers = collection(db, "Users");
    const { user, password } = userSignInParams;
    try {
      const q = query(
        collectionUsers,
        where("user", "==", user),
        where("password", "==", password)
      );
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        throw new ErrorWithStatus("User not found", 404);
      }

      return this.transformUserModelToUserDto(querySnapshot);
    } catch (error) {
      throw error;
    }
  }

  transformUserParamsDtoToUserModel = (
    userSaveParams: TUserSaveParamsDto
  ): UserModel => {
    let userModel = {} as UserModel;
    const { firstName, lastName, email, phone, address, gender } =
      userSaveParams;

    const user = `${userSaveParams.firstName.charAt(0)}${
      userSaveParams.lastName.split(" ")[0]
    }`;
    userModel = {
      firstName,
      lastName,
      email,
      phone,
      address,
      gender,
      state: EUserState.ACTIVE,
      document: "11111111",
      role: "user",
      user,
      password: user,
    };
    return userModel;
  };

  async saveUser(userSaveParamsDto: TUserSaveParamsDto): Promise<void> {
    const collectionUsers = collection(db, "Users");

    const userModel = this.transformUserParamsDtoToUserModel(userSaveParamsDto);

    try {
      await addDoc(collectionUsers, userModel);
    } catch (error) {
      console.log(error);
      throw new Error(JSON.stringify(error));
    }
  }

  async saveLocalStorageUser(user: TUserDto): Promise<void> {
    localStorage.setItem("user", JSON.stringify(user));
  }
}
