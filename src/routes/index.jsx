import { useRoutes } from "react-router-dom";
import { RootLayout } from "../layout";
import { Dashboard, Home, Login, UserDashboard } from "../pages";
import PrivateRoute from "./private-route";
import ProtectedRoute from "./protected-route";
import PublicRoute from "./public-route";

export default function Routes() {
  return useRoutes([
    {
      path: "/",
      element: <PublicRoute Component={RootLayout} />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      path: "/admin",
      element: <PrivateRoute Component={RootLayout} />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
      ],
    },
    {
      path: "/user",
      element: <ProtectedRoute Component={RootLayout} />,
      children: [
        {
          index: true,
          element: <UserDashboard />,
        },
      ],
    },
  ]);
}
