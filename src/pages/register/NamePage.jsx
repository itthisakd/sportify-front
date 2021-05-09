import React, { useState } from "react";
import { Typography, TextField, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MadeButton from "../shared/Button";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";

const useStyles = makeStyles(() => ({
  header: {
    fontWeight: 550,
    textAlign: "left",
    marginLeft: "10%",
    width: "40%",
  },
  icon: {
    textAlign: "start",
    opacity: "0.3",
  },
}));

export default function NamePage() {
  const classes = useStyles();
  const [name, setName] = useState("");

  return (
    <div>
      <div className={classes.icon}>
        <IconButton>
          <ClearRoundedIcon fontSize="large" />
        </IconButton>
      </div>
      <div style={{ marginTop: "1%" }}>
        <Typography variant="h4" className={classes.header}>
          My First Name is
        </Typography>
      </div>
      <div style={{ marginTop: "10%" }}>
        <TextField
          placeholder="Enter name"
          style={{ width: "80%" }}
          
        ></TextField>
      </div>
      <div style={{ marginTop: "10%" }}>
        <MadeButton text="CONTINUE"></MadeButton>
        {/* {name ? (
          <MadeButton text="CONTINUE"></MadeButton>
        ) : (
          <MadeButton
            text="CONTINUE"
            disable={true}
            variant="outlined"
            style={{ background: "white" }}
          ></MadeButton>
        )} */}
      </div>
    </div>
  );
}
