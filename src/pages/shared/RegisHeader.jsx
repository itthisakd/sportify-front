import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, IconButton } from "@material-ui/core";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";

const useStyles = makeStyles(() => ({
  header: {
    fontWeight: 550,
    textAlign: "left",
    marginLeft: "10%",
    width: "180px",
  },
  icon: {
    textAlign: "start",
    opacity: "0.3",
  },
}));

export default function RegisHeader({ text, iconType, onClick }) {
  const classes = useStyles();

  return (
    <div style={{ height: "105px", margin: "0px 0px 80px  0px" }}>
      <div className={classes.icon}>
        <IconButton onClick={onClick}>
          {iconType === "cross" && <ClearRoundedIcon fontSize="large" />}
          {iconType === "back" && <ArrowBackIosRoundedIcon fontSize="large" />}
        </IconButton>
      </div>
      <div style={{ marginTop: "1%" }}>
        <Typography variant="h4" className={classes.header}>
          {text}
        </Typography>
      </div>
    </div>
  );
}
