import { ICheckContactResponse } from "@/entities/auth/types/types";
import { axiosAuth } from "@/shared/api/baseQuery";

class ChatService {
  private static instance: ChatService;

  private constructor() {}

  public static getInstance(): ChatService {
    if (!ChatService.instance) {
      ChatService.instance = new ChatService();
    }
    return ChatService.instance;
  }

  public async checkWhatsapp(request: {
    phoneNumber: string;
  }): Promise<ICheckContactResponse> {
    const { data } = await axiosAuth.post<ICheckContactResponse>(
      "/waInstance1103182509/checkWhatsapp/f7f5a9d2cda24a338dbea3c7c37a4312da5c82b23bb34fd1ad",
      request
    );
    return data;
  }
}

export const { checkWhatsapp } = ChatService.getInstance();
