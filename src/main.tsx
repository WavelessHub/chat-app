import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import AuthContextProvider from "./context/Providers/AuthContextProvider";
import ChatContextProvider from "./context/Providers/ChatContextProvider";

createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthContextProvider>
    <ChatContextProvider>
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>
);
