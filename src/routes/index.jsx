import { useRoutes } from "react-router-dom";
import { RootLayout } from "../layout";
import { Home, Login } from "../pages";
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
      ],
    },
    {
      path: "/login",
      element: <PublicRoute Component={RootLayout} />,
      children: [
        {
          index: true,
          element: <Login />,
        },
      ],
    },
  ]);
}
