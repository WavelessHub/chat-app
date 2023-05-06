import { useContext } from "react";
import { auth } from "../database/firebase";
import { signOut } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="w-full flex items-center justify-between px-[16px] bg-[#2f2d52] h-[70px]">
      <div className="text-lg font-medium text-white">Chat App</div>

      <div className="flex items-center gap-2">
        <img
          className="h-9 w-9 rounded-full object-cover object-center"
          src={currentUser.photoURL || ""}
          alt="pfp"
        />
        <div className="text-white">{currentUser.displayName}</div>
        <button
          onClick={() => signOut(auth)}
          className="bg-red-500 px-2 py-1 rounded-md text-white text-xs hover:bg-red-600 active:scale-[.96] cursor-pointer"
        >
          logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
