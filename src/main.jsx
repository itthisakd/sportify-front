import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MenuContextProvider from "./contexts/MenuContextProvider";
import EditModeContext from "./contexts/EditModeContextProvider";
import { DataProvider } from "./contexts/DataContext";
import AuthContextProvider from "./contexts/AuthContextProvider";


ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <DataProvider>
        <EditModeContext>
          <MenuContextProvider>
            <App />
          </MenuContextProvider>
        </EditModeContext>
      </DataProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
