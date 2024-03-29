import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ Component, navLink, ...rest }) => {
  const user = JSON.parse(localStorage.getItem("user")) || null;
  if (user?.token && user?.role === "ADMIN") {
    return Component ? (
      <Component {...rest} />
    ) : (
      <Navigate to={navLink} replace />
    );
  }

  return <Navigate to="/" replace />;
};

export default PrivateRoute;
