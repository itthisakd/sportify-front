import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import logo from "../../images/branding/new_logo.png";
import landing from "../../images/branding/landing.png";
import { Transition } from "react-transition-group";
import { useGoogleLogin } from "react-google-login";
import LongButton from "../shared/LongButton";
import axios from "../../config/axios";
import localStorageService from "../../services/localStorageService";

// refresh token
import { refreshTokenSetup } from "../../utilities/refreshToken";

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

export default function LoginPage() {
  const history = useHistory();
  const [fadein, setFadein] = useState(false);
  const [fadeout, setFadeout] = useState(false);

  setTimeout(() => {
    setFadeout(true);
  }, 1500);

  

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

  const duration = 2000;

  const OUTdefaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 1,
  };

  const OUTtransitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  const INdefaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  };

  const INtransitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  };

  return (
    <>
      <Transition
        in={!fadeout}
        timeout={2000}
        unmountOnExit
        style={{
          width: "103vw",
          margin: "auto",
          overflow: "hidden",
          objectFit: "cover",
          objectPosition: "50% 50%",
          position: "absolute",
          top: "0px",
          left: "0px",
        }}
        onExit={() => {
          setTimeout(() => {
            setFadein(true);
          }, 1000);
        }}
      >
        {(state) => (
          <div
            style={{
              ...INdefaultStyle,
              ...INtransitionStyles[state],
            }}
          >
            <img
              alt="landing"
              src={landing}
              style={{
                width: "103vw",
                margin: "auto",
                overflow: "hidden",
                objectFit: "cover",
                objectPosition: "50% 50%",
                position: "absolute",
                top: "0px",
                left: "0px",
              }}
            />
          </div>
        )}
      </Transition>
      <Transition
        in={fadein}
        timeout={1000}
        style={{
          width: "103vw",
          margin: "auto",
          overflow: "hidden",
          objectFit: "cover",
          objectPosition: "50% 50%",
          position: "absolute",
          top: "0px",
          left: "0px",
        }}
      >
        {(state) => (
          <div
            style={{
              ...OUTdefaultStyle,
              ...OUTtransitionStyles[state],
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <img
                alt="logo"
                src={logo}
                style={{ width: "80vw", margin: "auto" }}
              />
              <LongButton
                style={{ margin: "50px 0px" }}
                name="LOGIN WITH GOOGLE"
                variant="outlined-inactive"
                onClick={signIn}
              />
            </div>
          </div>
        )}
      </Transition>
    </>
  );
}
