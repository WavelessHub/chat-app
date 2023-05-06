import { User } from "firebase/auth";
import { useRef, MutableRefObject, useEffect } from "react";

interface Props {
  user: User;
  message: any;
}

const UserMessage = ({ user, message }: Props) => {
  const ref = useRef() as MutableRefObject<any>;

  useEffect(() => {
    ref.current.scrollIntoView({ behaviour: "smooth" });
  }, []);

  return (
    <div ref={ref} className="flex items-start gap-3 mb-3 flex-row-reverse">
      <div>
        <img
          className="h-10 w-10 rounded-full object-cover object-center"
          src={user.photoURL || ""}
          alt="pfp"
        />
      </div>

      <div className="py-3 px-4 rounded-lg mt-2 rounded-tr-none text-white bg-[#8da4f1]">
        <p className="w-auto">{message.text}</p>

        {message.img && (
          <img className="h-[320px] mt-4 mb-1 rounded-md" src={message.img} />
        )}
      </div>
    </div>
  );
};

export default UserMessage;
