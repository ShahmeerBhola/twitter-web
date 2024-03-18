// import { useSelector } from 'react-redux'
import { Navigate } from "react-router-dom";
// import { RootState } from '~/store'

const PublicRoute = ({ Component, ...rest }) => {
  //   const authState = useSelector((state: RootState) => state.auth)
  const authState = null;

  // if (authState?.role) {
  //   return <Navigate to={`/admin`} replace />;
  // }

  return <Component {...rest} />;
};

export default PublicRoute;
