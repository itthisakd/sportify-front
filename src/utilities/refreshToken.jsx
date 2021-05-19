import axios from "../config/axios";
import localStorageServices from "../services/localStorageService";
import AuthContext from "../contexts/AuthContextProvider";
import React, { useContext } from "react";

export const refreshTokenSetup = (res) => {
  // Timing to renew access token
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async () => {
    const newAuthRes = await res.reloadAuthResponse();
    console.log(newAuthRes);

    refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    console.log("newAuthRes:", newAuthRes);

    localStorageServices.setToken(newAuthRes.id_token); // <-- save new token
    setAuthToken(newAuthRes.id_token);
    // Setup the other timer after the first one
    setTimeout(refreshToken, refreshTiming);
  };

  // Setup first refresh timer
  setTimeout(refreshToken, refreshTiming);
};
