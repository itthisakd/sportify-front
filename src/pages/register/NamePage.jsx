import React from "react";
import { Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MadeButton from "../shared/Button";
import HeadButton from "../shared/HeadRegisterButton"

const useStyles = makeStyles(() => ({
  header: {
    fontWeight: 550,
    textAlign: "left",
    marginLeft: "10%",
    width: '40%',
  },
  icon: {
    textAlign: "start"
  }

}));

export default function NamePage() {
  const classes = useStyles();
  return (
    <div>
      <HeadButton/>
      <div style={{marginTop:'1%'}}>
      <Typography variant="h4" className={classes.header}>My First Name is</Typography>
      </div>
      <div style={{marginTop:'10%'}}>
        <TextField
          placeholder="Enter name"
          style={{ width: "80%" }}
        ></TextField>
      </div>
      <div style={{marginTop:'10%'}}>
        <MadeButton text="CONTINUE" ></MadeButton>
      </div>
    </div>
  );
}
