import { useContext } from "react";
import TargetUserMessage from "./messages/TargetUserMessage";
import UserMessage from "./messages/UserMessage";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import { User } from "firebase/auth";

interface Props {
  isCurrentUser: boolean;
  m: any;
}

const Message = ({ isCurrentUser, m }: Props) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  return (
    <div>
      {isCurrentUser ? (
        <UserMessage user={currentUser} message={m} />
      ) : (
        <TargetUserMessage user={data.user as User} message={m} />
      )}
    </div>
  );
};

export default Message;
