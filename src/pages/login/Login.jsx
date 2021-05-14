import React from "react";
import { useGoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import LongButton from "../shared/LongButton";
import axios from "../../config/axios";

// refresh token
import { refreshTokenSetup } from "../../utilities/refreshToken";

const clientId =
  "580354342835-jmnv6h24isps601e9c4f0rentp9hboad.apps.googleusercontent.com";

function LoginHooks() {
  const history = useHistory();

  const onSuccess = async (res) => {
    const email = res.profileObj.email
    console.log("Login Success: currentUser:", res.profileObj);
    const result = await axios.post("/auth/", {
      tokenId: res.tokenId,
    });

    console.log("result :>> ", result.data);
    // console.log("res :>> ", res);

    refreshTokenSetup(res);
    history.push("/home");
  };

  const onFailure = (res) => {
    console.log("Login failed: res:", res);
    alert(
      `Failed to login. 😢 Please ping this to repo owner twitter.com/sivanesh_fiz`
    );
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
    <LongButton
      style={{ margin: "50px 0px" }}
      name="LOGIN WITH GOOGLE"
      variant="outlined-active"
      onClick={() => {
        signIn();
        // history.push("/name");
      }}
    />
  );
}

export default LoginHooks;
