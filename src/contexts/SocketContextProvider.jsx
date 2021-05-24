import { createContext } from "react";
import React, { useState } from "react";

import setUpSocket from "../utilities/socket";
export const SocketContext = createContext();

export default function SocketContextProvider({ children }) {
  let newSocket = setUpSocket({ socket: null });

  return (
    <SocketContext.Provider value={{ newSocket }}>
      {children}
    </SocketContext.Provider>
  );
}
