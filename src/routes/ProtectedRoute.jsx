import { Navigate } from "react-router-dom";
import { useStore } from "../store/useStore";

const ProtectedRoute = ({ children }) => {
  const user = useStore((state) => state.user);

  return user.email
    ? children
    : <Navigate to="/" replace />;
};

export default ProtectedRoute;