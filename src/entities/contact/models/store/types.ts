import { IContactInfoResponse } from "@/entities/contact/types/types";

export interface IContactState {
  selectContact: IContactInfoResponse | null;
}
