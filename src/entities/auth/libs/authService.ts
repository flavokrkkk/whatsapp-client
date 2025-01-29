import { axiosAuth } from "@/shared/api/baseQuery";
import { IAuthRequest } from "../types/types";

class AuthService {
  private static instance: AuthService;

  private constructor() {}

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  public async authorization({ apiTokenInstance, idInstance }: IAuthRequest) {
    const { data } = await axiosAuth.get(
      `/waInstance${idInstance}/getSettings/${apiTokenInstance}`
    );
    return data;
  }
}

export const instance = AuthService.getInstance();
