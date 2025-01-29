export interface IAllMessageResponse {
  chatId: string;
  deletedMessageId: string;
  editedMessageId: string;
  extendedTextMessage: {
    description: string;
    forwardingScore: number;
    isForwarded: boolean;
    jpegThumbnail: string;
    previewType: string;
    text: string;
    title: string;
  };
  idMessage: string;
  isDeleted: boolean;
  isEdited: boolean;
  sendByApi: boolean;
  statusMessage: string;
  textMessage: string;
  timestamp: number;
  type: string;
  typeMessage: string;
}
