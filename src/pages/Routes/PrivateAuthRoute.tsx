import { ReactNode, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const PrivateAuthRoute = ({ children }: Props) => {
  const { currentUser } = useContext(AuthContext);

  if (currentUser) return <Navigate to="/" />;

  return <>{children}</>;
};

export default PrivateAuthRoute;
