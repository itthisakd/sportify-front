import React from "react";
import { Button, Typography } from "@material-ui/core";
import "@fontsource/roboto";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  content: {
    fontWeight: 800
  },
}));
export default function MadeButton({text, action}) {
  const classes = useStyles();

  return (
  <Button
    style={{
      width: "80%",
      borderRadius: "100px",
      // backgroundColor: "#ff9600",
      background: "linear-gradient(262deg,#ff7854,#ff9600)",
      fontSize: "16px",
    }}
    onClick={action}
  >
    <Typography className={classes.content}>{text}</Typography>
  </Button>
  )
}
