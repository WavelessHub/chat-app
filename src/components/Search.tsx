import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { FormEvent, useContext, useState } from "react";
import { db } from "../database/firebase";
import { User } from "firebase/auth";
import { AuthContext } from "../context/AuthContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState({} as User);

  const { currentUser } = useContext(AuthContext);

  const handleSelect = async () => {
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;

    const ref = doc(db, "chats", combinedId);
    const res = await getDoc(ref);

    if (!res.exists()) {
      await setDoc(ref, { messages: [] });

      const currentUserRef = doc(db, "userChats", currentUser.uid);
      const userRef = doc(db, "userChats", user.uid);

      await updateDoc(currentUserRef, {
        [combinedId + ".userInfo"]: {
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        },
        [combinedId + ".date"]: serverTimestamp(),
      });

      await updateDoc(userRef, {
        [combinedId + ".userInfo"]: {
          uid: currentUser.uid,
          displayName: currentUser.displayName,
          photoURL: currentUser.photoURL,
        },
        [combinedId + ".date"]: serverTimestamp(),
      });
    }

    setUser({} as User);
    setUsername("");
  };

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data() as User);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border-b-[1px] border-gray-400">
      <form onSubmit={handleSearch} className="w-full">
        <input
          onChange={(event) => setUsername(event.target.value)}
          className="w-full h-12 px-4 bg-transparent outline-none text-white"
          placeholder="Search Users..."
          value={username}
          type="text"
        />
      </form>

      {user.uid && (
        <div
          onClick={handleSelect}
          className="flex gap-3 items-center px-4 py-3 cursor-pointer hover:bg-white hover:bg-opacity-[0.05]"
        >
          <img
            className="h-12 w-12 object-cover object-center rounded-full"
            src={user?.photoURL || ""}
            alt="pfp"
          />

          <div className="text-white">{user.displayName}</div>
        </div>
      )}
    </div>
  );
};

export default Search;
