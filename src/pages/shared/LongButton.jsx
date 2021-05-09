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
    color: "white",
    background: "linear-gradient(45deg, #E8407D 10%, #EE7F5E 90%)",
    boxShadow: "0px 0px 11px rgba(0, 0, 0, 0.3)",
  },
  outlined: {
    width: "70vw",
    height: "40px",
    fontWeight: "600",
    fontSize: "17px",
    borderRadius: "100px",
    color: "#EA5D6B",
    border: "1px #EA5D6B solid",
  },
  outlinedInactive: {
    width: "70vw",
    height: "40px",
    fontWeight: "600",
    fontSize: "17px",
    borderRadius: "100px",
    color: "darkgray",
    border: "1px darkgray solid",
  },
  disabled: {
    width: "70vw",
    height: "40px",
    fontWeight: "600",
    fontSize: "17px",
    boxShadow: "0px 0px 11px rgba(0, 0, 0, 0.3)",
    borderRadius: "100px",
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
      {type === "outlined-active" && (
        <Button
          variant="outlined"
          onClick={onClick}
          className={classes.outlined}
        >
          {name}
        </Button>
      )}
      {type === "outlined-inactive" && (
        <Button
          variant="outlined"
          onClick={onClick}
          className={classes.outlinedInactive}
        >
          {name}
        </Button>
      )}
      {type === "outlined-disabled" && (
        <Button
          variant="outlined"
          onClick={onClick}
          className={classes.outlinedInactive}
          disabled
        >
          {name}
        </Button>
      )}
      {type === "disabled" && (
        <Button
          variant="contained"
          onClick={onClick}
          className={classes.disabled}
          disabled
        >
          {name}
        </Button>
      )}
    </div>
  );
}

// <LongButton name="START TUTORIAL" type="contained" onClick={next} />
// <LongButton name="START TUTORIAL" type="outlined-active" onClick={next} />
// <LongButton name="START TUTORIAL" type="outlined-inactive" onClick={next} />
// <LongButton name="START TUTORIAL" type="outlined-disabled" onClick={next} />
// <LongButton name="START TUTORIAL" type="disabled" onClick={next} />

