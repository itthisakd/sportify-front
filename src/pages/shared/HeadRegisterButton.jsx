import React from "react";
import { IconButton } from "@material-ui/core";
import "@fontsource/roboto";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';

const useStyles = makeStyles(() => ({
  icon: {
    textAlign: "start",
    opacity: '0.3'
  }
}));
export default function HeadRegisterButton({ text, action }) {
  const classes = useStyles();

  return (
    <div className={classes.icon}>
    <IconButton>
      <ArrowBackIosRoundedIcon fontSize="large"/>
    </IconButton>
    </div>
  );
}
