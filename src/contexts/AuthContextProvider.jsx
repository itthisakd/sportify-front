import { createContext } from "react";
import React, { useState } from "react";
import localStorageService from "../services/localStorageService";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState(localStorageService.getToken());
  return (
    <AuthContext.Provider value={{ authToken, setAuthToken }}>
      {children}
    </AuthContext.Provider>
  );
}
