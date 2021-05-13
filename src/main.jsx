import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MenuContextProvider from "./contexts/MenuContextProvider";
import EditModeContext from "./contexts/EditModeContextProvider";
import { DataProvider } from "./contexts/DataContext";

ReactDOM.render(
  <React.StrictMode>
    <DataProvider>
      <EditModeContext>
        <MenuContextProvider>
          <App />
        </MenuContextProvider>
      </EditModeContext>
    </DataProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
