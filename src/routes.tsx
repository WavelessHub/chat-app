import { createBrowserRouter } from "react-router-dom";

import PrivateAuthRoute from "./pages/Routes/PrivateAuthRoute";
import PrivateHomeRoute from "./pages/Routes/PrivateHomeRoute";
import Register from "./pages/Authentication/Register";
import Login from "./pages/Authentication/Login";
import Page404 from "./pages/Error/Page404";
import Home from "./pages/Home";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Page404 />,
    children: [
      {
        path: "app",
        index: true,
        element: (
          <PrivateHomeRoute>
            <Home />
          </PrivateHomeRoute>
        ),
      },
      {
        path: "chats/:currentUserId/:userId",
        element: (
          <PrivateHomeRoute>
            <Home />
          </PrivateHomeRoute>
        ),
      },
      {
        path: "login",
        element: (
          <PrivateAuthRoute>
            <Login />
          </PrivateAuthRoute>
        ),
      },
      {
        path: "register",
        element: (
          <PrivateAuthRoute>
            <Register />
          </PrivateAuthRoute>
        ),
      },
    ],
  },
]);

export default router;
