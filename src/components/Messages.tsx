import { useContext, useEffect, useState } from "react";
import Message from "./Message";
import { ChatContext } from "../context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../database/firebase";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useParams } from "react-router-dom";

const Messages = () => {
  const [messages, setMessages] = useState<object[]>([]);
  const { currentUserId, userId } = useParams();

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const getMessages = () => {
      const unsub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
        doc.exists() && setMessages(doc.data().messages);
      });

      return () => unsub();
    };

    getMessages();
  }, [data.chatId, currentUserId, userId]);

  return (
    <div className="messages bg-[#ddddf7] px-[20px] py-[20px]">
      {currentUserId &&
        userId &&
        messages.map((m: any) => (
          <Message
            key={m.uid}
            isCurrentUser={m.senderId === currentUser.uid}
            m={m}
          />
        ))}
    </div>
  );
};

export default Messages;
