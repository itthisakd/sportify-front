import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../images/branding/new_logo.png";
import { useGoogleLogin } from "react-google-login";
import LongButton from "../shared/LongButton";
import axios from "../../config/axios";
import localStorageService from "../../services/localStorageService";

// refresh token
import { refreshTokenSetup } from "../../utilities/refreshToken";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID

export default function LoginPage() {
  const history = useHistory();

  const onSuccess = async (res) => {
    const result = await axios.post("/auth/login", {
      tokenId: res.tokenId,
    });

    localStorageService.setToken(res.tokenId);
    refreshTokenSetup(res);

    if (result.data.registered) {
      history.push("/home");
    } else {
      history.push("/name");
    }
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: false,
    accessType: "offline",
    // responseType: 'code',
    // prompt: 'consent',
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img alt="logo" src={logo} style={{ width: "80vw", margin: "auto" }} />
      <LongButton
        style={{ margin: "50px 0px" }}
        name="LOGIN WITH GOOGLE"
        variant="outlined-active"
        onClick={signIn}
      />
    </div>
  );
}
