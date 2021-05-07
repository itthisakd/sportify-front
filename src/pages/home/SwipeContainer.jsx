import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageSlider from "./ImageSlider";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(() => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "90vw",
    height: "135vw",
    borderRadius: "15px",
  },
}));

export default function SwipeContainer({accounts}) {
  const classes = useStyles();

  return (
    <div>
      <Paper elevation={3} className={classes.paper}>
        {/* {accounts.map(() => {})} */}
        <ImageSlider className={classes.paper} account={accounts[0]}/>
      </Paper>
    </div>
  );
}
