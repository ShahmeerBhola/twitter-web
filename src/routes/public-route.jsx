import { Navigate } from "react-router-dom";

const PublicRoute = ({ Component, ...rest }) => {
  const user = JSON.parse(localStorage.getItem("user")) || null;

  if (user?.token && user?.role === "ADMIN") {
    return <Navigate to={`/admin`} replace />;
  }
  if (user?.token && user?.role === "USER") {
    return <Navigate to={`/user`} replace />;
  }

  return <Component {...rest} />;
};

export default PublicRoute;
