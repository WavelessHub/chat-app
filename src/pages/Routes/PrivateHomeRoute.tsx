import { ReactNode, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const PrivateHomeRoute = ({ children }: Props) => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) return <Navigate to="/login" />;

  return <>{children}</>;
};

export default PrivateHomeRoute;
