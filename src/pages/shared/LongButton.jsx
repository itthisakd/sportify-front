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
    border: "2px #EA5D6B solid",
  },
  outlinedInactive: {
    width: "70vw",
    height: "40px",
    fontWeight: "600",
    fontSize: "17px",
    borderRadius: "100px",
    color: "darkgray",
    border: "2px darkgray solid",
  },
  disabled: {
    width: "70vw",
    height: "40px",
    fontWeight: "600",
    fontSize: "17px",
    boxShadow: "0px 0px 11px rgba(0, 0, 0, 0.3)",
    borderRadius: "100px",
  },
  outlinedDisabled: {
    width: "70vw",
    height: "40px",
    fontWeight: "600",
    fontSize: "17px",
    borderRadius: "100px",
    color: "darkgray",
    border: "2px darkgray solid",
  },
}));

export default function LongButton({ onClick, type, name, variant, style }) {
  const classes = useStyles();
  return (
    <div style={{margin: "0vw 15vw 10vw", ...style}}>
      {(variant === undefined || variant === "contained") && (
        <Button
          variant="contained"
          onClick={onClick}
          className={classes.contained}
          type={type}
        >
          {name}
        </Button>
      )}
      {variant === "disabled" && (
        <Button variant="contained" className={classes.disabled} disabled>
          {name}
        </Button>
      )}
      {variant === "outlined-active" && (
        <Button
          variant="outlined"
          onClick={onClick}
          className={classes.outlined}
          type={type}
        >
          {name}
        </Button>
      )}
      {variant === "outlined-inactive" && (
        <Button
          variant="outlined"
          onClick={onClick}
          className={classes.outlinedInactive}
          type={type}
        >
          {name}
        </Button>
      )}
      {variant === "outlined-disabled" && (
        <Button
          variant="outlined"
          className={classes.outlinedDisabled}
          disabled
        >
          {name}
        </Button>
      )}
    </div>
  );
}

// <LongButton name="START TUTORIAL" variant="contained" onClick={next} />
// <LongButton name="START TUTORIAL" variant="outlined-active" onClick={next} />
// <LongButton name="START TUTORIAL" variant="outlined-inactive" onClick={next} />
// <LongButton name="START TUTORIAL" variant="outlined-disabled" onClick={next} />
// <LongButton name="START TUTORIAL" variant="disabled" onClick={next} />
