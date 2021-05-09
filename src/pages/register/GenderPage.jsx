import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MadeButton from "../shared/Button";
import HeadButton from "../shared/HeadRegisterButton";

const useStyles = makeStyles(() => ({
  header: {
    fontWeight: 550,
    textAlign: "left",
    marginLeft: "10%",
    width: "40%",
  },
  icon: {
    textAlign: "start",
  },
}));

export default function GenderPage() {
  const classes = useStyles();
  const [gender, setGender] = useState("");
  const [selected, setSelected] = useState({
    selected1: "false",
    selected2: "false",
    selected3: "false",
  });
  const handleGender = (e, newGender) => {
    e.preventDefault();
    setGender(newGender);
    setSelected(!selected);
    console.log(gender);
  };
  return (
    <div>
      <HeadButton />
      <div style={{ marginTop: "1%" }}>
        <Typography variant="h4" className={classes.header}>
          I am a
        </Typography>
      </div>
      <div style={{ marginTop: "10%" }}>
        <MadeButton
          text="WOMAN"
          value="woman"
          variant="outlined"
          action={() => console.log("woman")}
        ></MadeButton>
      </div>
      <div style={{ marginTop: "5%" }}>
        <MadeButton
          text="MAN"
          value="man"
          action={() => console.log("man")}
        ></MadeButton>
      </div>
      <div style={{ marginTop: "70%" }}>
        <MadeButton text="CONTINUE" />
      </div>
    </div>
  );
}
