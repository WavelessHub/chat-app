import { ReactNode, useContext, useReducer } from "react";
import { AuthContext } from "../AuthContext";
import { ChatContext, ChatType, UserState } from "../ChatContext";

interface Props {
  children: ReactNode;
}

const ChatContextProvider = ({ children }: Props) => {
  const { currentUser } = useContext(AuthContext);

  const INITIAL_STATE = {
    chatId: "null",
    user: {},
  };

  const chatReducer = (state: UserState, action: ChatType): UserState => {
    switch (action.type) {
      case "CHANGE_USER":
        return {
          user: action.payload,
          chatId:
            currentUser.uid > action.payload.uid
              ? currentUser.uid + action.payload.uid
              : action.payload.uid + currentUser.uid,
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE as UserState);

  return (
    <ChatContext.Provider value={{ data: state as UserState, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
