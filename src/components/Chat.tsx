import More from "../assets/more.png";
import Add from "../assets/add.png";
import Cam from "../assets/cam.png";
import Messages from "./Messages";
import Input from "./Input";

import { useParams } from "react-router-dom";
import { ChatContext } from "../context/ChatContext";
import { useContext } from "react";

const Chat = () => {
  const { data } = useContext(ChatContext);
  const { currentUserId, userId } = useParams();

  return (
    <div className="flex-[2]">
      <div className="h-[70px] bg-[#5d5b8d] flex items-center justify-between px-[20px]">
        {data.user.uid && currentUserId && userId && (
          <>
            <div className="flex items-center justify-center gap-3">
              <img
                className="h-9 w-9 rounded-full object-cover object-center"
                src={data.user.photoURL}
                alt="pfp"
              />
              <div className="text-xl text-white">{data.user.displayName}</div>
            </div>

            <div className="flex gap-[10px] items-center">
              <img className="w-[24px] cursor-pointer" src={Cam} />
              <img className="w-[24px] cursor-pointer" src={Add} />
              <img className="w-[24px] cursor-pointer" src={More} />
            </div>
          </>
        )}
      </div>

      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
