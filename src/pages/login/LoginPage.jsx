import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../images/branding/new_logo.png";
import { useGoogleLogin } from "react-google-login";
import LongButton from "../shared/LongButton";
import axios from "../../config/axios";
import { AuthContext } from "../../contexts/AuthContextProvider";
import localStorageService from "../../services/localStorageService";

// refresh token
import { refreshTokenSetup } from "../../utilities/refreshToken";

const clientId =
  "580354342835-jmnv6h24isps601e9c4f0rentp9hboad.apps.googleusercontent.com";

export default function LoginPage() {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const history = useHistory();

  const onSuccess = async (res) => {
    const result = await axios.post("/auth/", {
      tokenId: res.tokenId,
    });
    localStorageService.setToken(res.tokenId);


    refreshTokenSetup(res);
    history.push("/home");
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert("Log in failed. Please try again.");
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
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
        onClick={() => {
          signIn();
          // history.push("/name");
        }}
      />
    </div>
  );
}
