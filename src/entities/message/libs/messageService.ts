import { axiosAuth } from "@/shared/api/baseQuery";
import { IAllMessageResponse } from "../types/types";

class MessageService {
  private static instance: MessageService;

  private constructor() {}

  public static getInstance(): MessageService {
    if (!MessageService.instance) {
      MessageService.instance = new MessageService();
    }
    return MessageService.instance;
  }

  public async sendMessage(request: { chatId: string; message: string }) {
    const { data } = await axiosAuth.post(
      "/waInstance1103182509/sendMessage/f7f5a9d2cda24a338dbea3c7c37a4312da5c82b23bb34fd1ad",
      request
    );
    return data;
  }

  public async getMessages(request: { chatId: string; count: number }) {
    const { data } = await axiosAuth.post(
      "/waInstance1103182509/getChatHistory/f7f5a9d2cda24a338dbea3c7c37a4312da5c82b23bb34fd1ad",
      request
    );
    return data;
  }

  public async getAllMessages({
    minutes,
  }: {
    minutes: number;
  }): Promise<Array<IAllMessageResponse>> {
    const { data } = await axiosAuth.get<Array<IAllMessageResponse>>(
      `/waInstance1103182509/lastOutgoingMessages/f7f5a9d2cda24a338dbea3c7c37a4312da5c82b23bb34fd1ad?minutes=${minutes}`
    );
    return data;
  }
}

export const { sendMessage, getAllMessages } = MessageService.getInstance();
