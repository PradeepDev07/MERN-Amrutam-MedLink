import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ redirectTo, children }) => {
  const token = Cookies.get("auth_token");
  return token ? children : <Navigate to={redirectTo} replace />;
};

export default ProtectedRoute;
