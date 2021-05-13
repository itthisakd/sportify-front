import React from "react";
import { Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  header: {
    fontWeight: 550,
    textAlign: "left",
    marginLeft: "10%",
    width: "60%",
  },
}));

export default function VerifyMobilePage() {
  const classes = useStyles();

  return (
    <div>
      <div style={{ marginTop: "1%" }}>
        <Typography variant="h4" className={classes.header}>
          My code is
        </Typography>
      </div>
      <div style={{display: 'flex', padding: '1%', width: '60%', marginLeft: "10%"}}>
        <Typography style={{ color: "#939393", fontWeight: 400 }}>
          9999999
        </Typography>
        &nbsp;&nbsp;&nbsp;
        <Typography style={{ color: "#4a4a4a", fontWeight: 600 }}>
          Resend
        </Typography>
      </div>
      <div style={{ marginTop: "10%" }}>
        <TextField style={{ width: "80%" }}></TextField>
      </div>
      <div style={{ marginTop: "10%" }}>
        <MadeButton text="CONTINUE"></MadeButton>
      </div>
    </div>
  );
}
