import { User } from "firebase/auth";

interface Props {
  user: User;
  message: any;
}

const TargetUserMessage = ({ user, message }: Props) => {
  return (
    <div className="flex items-start gap-3 mb-3">
      <div>
        <img
          className="h-10 w-10 rounded-full object-cover object-center"
          src={user.photoURL || ""}
          alt="pfp"
        />
      </div>

      <div className="py-3 px-4 rounded-lg mt-2 rounded-tl-none bg-white">
        <p className="w-auto">{message.text}</p>

        {message.img && (
          <img className="h-[320px] mt-4 mb-1 rounded-md" src={message.img} />
        )}
      </div>
    </div>
  );
};

export default TargetUserMessage;
