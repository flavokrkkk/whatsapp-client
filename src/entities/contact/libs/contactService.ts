import { axiosAuth } from "@/shared/api/baseQuery";
import { IContactInfoResponse } from "../types/types";

class ChatService {
  private static instance: ChatService;

  private constructor() {}

  public static getInstance(): ChatService {
    if (!ChatService.instance) {
      ChatService.instance = new ChatService();
    }
    return ChatService.instance;
  }

  public async getContactInfo(request: {
    chatId: string;
  }): Promise<IContactInfoResponse> {
    const { data } = await axiosAuth.post<IContactInfoResponse>(
      "/waInstance1103182509/getContactInfo/f7f5a9d2cda24a338dbea3c7c37a4312da5c82b23bb34fd1ad",
      request
    );
    return data;
  }
}

export const { getContactInfo } = ChatService.getInstance();
