import { onSnapshot, doc } from "firebase/firestore";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { db } from "../database/firebase";
import { ChatContext } from "../context/ChatContext";
import { useNavigate } from "react-router-dom";

const UserChats = () => {
  const [chats, setChats] = useState({});
  const { currentUser } = useContext(AuthContext);
  const { data, dispatch } = useContext(ChatContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data() as object);
      });

      return () => unsub();
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = (u: any) => {
    dispatch({ type: "CHANGE_USER", payload: u });
    navigate(`/chats/${currentUser.uid}/${data.user.uid}`);
  };

  return (
    <div>
      {Object.entries(chats)
        .sort((a: any, b: any) => b[1].date - a[1].date)
        .map((chat: any) => (
          <div
            key={chat[0]}
            onClick={() => handleSelect(chat[1].userInfo)}
            className="flex gap-3 items-center px-4 py-3 cursor-pointer hover:bg-white hover:bg-opacity-[0.05]"
          >
            <img
              className="h-12 w-12 object-cover object-center rounded-full"
              src={chat[1].userInfo.photoURL}
              alt="pfp"
            />

            <div>
              <span className="text-white">{chat[1].userInfo.displayName}</span>
              <p className="-mt-[2px] text-gray-300 text-sm">
                {chat[1].lastMessage?.text}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default UserChats;
