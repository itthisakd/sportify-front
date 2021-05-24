import React from "react";
import { useGoogleLogout } from "react-google-login";
import LongButton from "../shared/LongButton";
import { useHistory } from "react-router-dom";
import localStorageService from "../../services/localStorageService";

const clientId =
  "580354342835-jmnv6h24isps601e9c4f0rentp9hboad.apps.googleusercontent.com";

function LogoutHooks() {
  const history = useHistory();
  const onLogoutSuccess = (res) => {
    history.push("/login");
    localStorageService.clearToken();
  };

  const onFailure = () => {
  };

  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  return (
    <LongButton variant="outlined-active" onClick={signOut} name="SIGN OUT" />
  );
}

export default LogoutHooks;
