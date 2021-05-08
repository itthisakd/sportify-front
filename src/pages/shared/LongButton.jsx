import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  contained: {
    width: "70vw",
    height: "40px",
    fontWeight: "600",
    fontSize: "17px",
    borderRadius: "100px",
    position: "relative",
    color: "white",
    background: "linear-gradient(45deg, #E8407D 10%, #EE7F5E 90%)",
    boxShadow: "0px 0px 11px rgba(0, 0, 0, 0.5)",
  },
  disabled: {
    width: "90vw",
    height: "135vw",
    borderRadius: "15px",
    position: "relative",
  },
  outlined: {
    width: "90vw",
    height: "135vw",
    borderRadius: "15px",
    position: "relative",
  },
}));

export default function LongButton({ onClick, type, name }) {
  const classes = useStyles();
  return (
    <div>
      {(type === undefined || type === "contained") && (
        <Button
          variant="contained"
          onClick={onClick}
          className={classes.contained}
        >
          {name}
        </Button>
      )}
      {type === "outlined" && (
        <Button variant="contained" onClick={onClick}>
          {name}
        </Button>
      )}
      {type === "disabled" && <Button variant="contained">{name}</Button>}
    </div>
  );
}
