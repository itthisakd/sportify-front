import React from "react";
import { useGoogleLogout } from "react-google-login";
import LongButton from "../shared/LongButton";
import { useHistory } from "react-router-dom";

const clientId =
  "(707788443358-u05p46nssla3l8tmn58tpo9r5sommgks.apps.googleusercontent.com)";

function LogoutHooks() {
  const history = useHistory();
  const onLogoutSuccess = (res) => {
    console.log("Logged out Success");
    history.push("/login");
  };

  const onFailure = () => {
    console.log("Handle failure cases");
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <LongButton
      variant="outlined-active"
      onClick={() => {
        signOut();
        history.push("/login");
      }}
      name="SIGN OUT"
    />
  );
}

export default LogoutHooks;
