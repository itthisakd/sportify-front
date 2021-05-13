import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import LongButton from "../shared/LongButton";
import AddPhoto from "../shared/AddPhoto";
import RegisHeader from "../shared/RegisHeader";
import { useHistory } from "react-router-dom";
import { useData } from "../../contexts/DataContext";

const useStyles = makeStyles((theme) => ({
  header: {
    fontWeight: 550,
    textAlign: "center",
    width: "100vw",
  },
}));

export default function PhotosPage() {
  const { setValues, data } = useData();
  const classes = useStyles();
  const history = useHistory();

  const createAccount = () => {
    console.log(data);
  };

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <RegisHeader
        text="I am a"
        onClick={() => history.push("/birthdate")}
        style={{ height: "105px" }}
      />
      <AddPhoto />
      <div style={{ position: "absolute", bottom: "0px", margin: "auto" }}>
        <LongButton
          name="CONTINUE"
          onClick={() => {
            createAccount();
            history.push("/welcome");
          }}
        />
      </div>
    </div>
  );
}
