import React from "react";
// import { useSelector } from 'react-redux'
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ Component, navLink, ...rest }) => {
  const user = JSON.parse(localStorage.getItem("user")) || null;
  if (user?.token && user?.role === "USER") {
    return Component ? (
      <Component {...rest} />
    ) : (
      <Navigate to={navLink} replace />
    );
  }

  return <Navigate to="/" replace />;
};

export default ProtectedRoute;
