import { signInWithEmailAndPassword } from "firebase/auth";
import { FormData } from "../schema/loginSchema";
import { auth } from "../../database/firebase";

const useLogin = async ({ email, password }: FormData, setError: any) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    setError(true);
  }
};

export default useLogin;
