import { createContext } from "react";
import { User } from "firebase/auth";

interface AuthContextType {
  currentUser: User;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);
