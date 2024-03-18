import React from "react";
// import { useSelector } from 'react-redux'
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ Component, navLink, ...rest }) => {
  //   const authState = useSelector((state) => state.auth)
  const authState = null;
  if (false) {
    return Component ? (
      <Component {...rest} />
    ) : (
      <Navigate to={navLink} replace />
    );
  }

  return <Navigate to="/" replace />;
};

export default PrivateRoute;
