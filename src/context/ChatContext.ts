import { Dispatch, createContext } from "react";

interface UserData {
  displayName: string;
  photoURL: string;
  uid: string;
}

interface ChatAction {
  type: "CHANGE_USER";
  payload: UserData;
}

export interface UserState {
  chatId: string;
  user: UserData;
}

export type ChatType = ChatAction;

interface ChatContextType {
  data: UserState;
  dispatch: Dispatch<ChatType>;
}

export const ChatContext = createContext<ChatContextType>(
  {} as ChatContextType
);
