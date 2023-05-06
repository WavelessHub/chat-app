import { User, onAuthStateChanged } from "firebase/auth";
import { ReactNode, useState, useEffect } from "react";
import { auth } from "../../database/firebase";
import { AuthContext } from "../AuthContext";

interface Props {
  children: ReactNode;
}

const AuthContextProvider = ({ children }: Props) => {
  const [currentUser, setCurrentUser] = useState<User>({} as User);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user as User);
    });

    return () => unsub();
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser: currentUser as User }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
