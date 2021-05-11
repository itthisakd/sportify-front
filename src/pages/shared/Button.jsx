import React from "react";
import { Button, Typography } from "@material-ui/core";
import "@fontsource/roboto";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  content: {
    fontWeight: 500,
    color: "white",
  },
}));
export default function MadeButton({
  text,
  action,
  value,
  disable,
  variant,
  stlye
}) {
  const classes = useStyles();

  return (
    <Button
      style={{
        width: "80%",
        borderRadius: "100px",
        background: "linear-gradient(262deg,#ff7854,#ff9600)",
        fontSize: "16px",
      }}
      variant={variant}
      disabled={disable}
      onClick={action}
      value={value}
    >
      <Typography className={classes.content}>{text}</Typography>
    </Button>
  );
}
