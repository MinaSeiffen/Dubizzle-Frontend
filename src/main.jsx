import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { MenuSelectionProvider } from "./Context/MenuSelectionContext.jsx";
import { SocketContextProvider } from "./Context/SocketContext.jsx";
import { Provider } from "react-redux";
import StroeConfig from "./Store/Store.js";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="507185982911-p3ri6j87629qfv4tpj7mkebpi5onc4um.apps.googleusercontent.com">
      <MenuSelectionProvider>
        <SocketContextProvider>
          <Provider store={StroeConfig}>
            <App />
          </Provider>
        </SocketContextProvider>
      </MenuSelectionProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
