import React from "react";
import { Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  header: {
    fontWeight: 550,
    textAlign: "left",
    marginLeft: "10%",
    width: '60%',
  },
}));

export default function EmailPage() {
  const classes = useStyles();
  return (
    <div>
      <div style={{marginTop:'1%'}}>
      <Typography variant="h4" className={classes.header}>What's your email?</Typography>
      </div>
      <div style={{marginTop:'10%'}}>
        <TextField
          placeholder="Enter email"
          style={{ width: "80%" }}
        ></TextField>
      </div>
      <div style={{marginTop:'10%'}}>
        <MadeButton text="CONTINUE" ></MadeButton>
      </div>
    </div>
  );
}
