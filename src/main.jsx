import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MenuContextProvider from "./contexts/MenuContextProvider";
import EditModeContext from "./contexts/EditModeContextProvider";
import { DataProvider } from "./contexts/DataContext";
import AuthContextProvider from "./contexts/AuthContextProvider";
import SocketContextProvider from "./contexts/SocketContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DataProvider>
        <EditModeContext>
          <MenuContextProvider>
            <SocketContextProvider>
              <App />
            </SocketContextProvider>
          </MenuContextProvider>
        </EditModeContext>
      </DataProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
