import Img from "../assets/img.png";
import Attach from "../assets/attach.png";
import { FormEvent, useContext, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { AuthContext } from "../context/AuthContext";
import { checkEmpty } from "../pages/Hooks/useRegister";
import {
  Timestamp,
  arrayUnion,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../database/firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useParams } from "react-router-dom";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImage] = useState({} as File);

  const { currentUserId, userId } = useParams();

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = (event: FormEvent) => {
    event.preventDefault();

    const send = async () => {
      if (checkEmpty(img)) {
        const storageRef = ref(storage, crypto.randomUUID());

        await uploadBytes(storageRef, img, {
          contentType: "image/png",
        }).then(async (snapshot) => {
          await getDownloadURL(snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: crypto.randomUUID(),
                text,
                img: downloadURL,
                senderId: currentUser.uid,
                date: Timestamp.now(),
              }),
            });
          });
        });
      } else {
        await updateDoc(doc(db, "chats", data.chatId), {
          messages: arrayUnion({
            id: crypto.randomUUID(),
            text,
            senderId: currentUser.uid,
            date: Timestamp.now(),
          }),
        });
      }

      await updateDoc(doc(db, "userChats", currentUser.uid), {
        [data.chatId + ".lastMessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
      });

      await updateDoc(doc(db, "userChats", data.user.uid), {
        [data.chatId + ".lastMessage"]: {
          text,
        },
        [data.chatId + ".date"]: serverTimestamp(),
      });
    };

    text !== "" && send();

    setText("");
    setImage({} as File);
  };

  return (
    <div className="h-[70px] w-full bg-white flex items-center justify-between">
      <form className="w-full" onSubmit={(e) => handleSend(e)}>
        <input
          onChange={(e) => setText(e.target.value)}
          placeholder={
            currentUserId && userId && data.user.uid
              ? `Send a message to ${data.user.displayName}`
              : "Choose a User to start the conversation"
          }
          className="h-full w-full px-[20px] outline-none"
          value={text}
          type="text"
        />
      </form>

      <div className="flex gap-3 items-center justify-between px-[20px]">
        <img className="w-[24px] cursor-pointer" src={Attach} />

        <input
          type="file"
          id="file"
          className="hidden"
          onChange={(e) =>
            setImage(
              e.target.files ? (e.target.files[0] as File) : ({} as File)
            )
          }
        />

        <label htmlFor="file">
          <img className="w-[24px] cursor-pointer mr-7" src={Img} />
        </label>

        <button
          onClick={handleSend}
          className="py-2 px-4 mr-4 rounded-sm text-white bg-[#8da4f1]"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Input;
