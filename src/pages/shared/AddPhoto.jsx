import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
import { IconButton, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    margin: "5px",
    textAlign: "center",
    color: theme.palette.text.secondary,
    position: "relative",
    width: "24vw",
    height: "40vw",
  },
  icon: {
    position: "absolute",
    right: "-5px",
    bottom: "-5px",
    zIndex: "10",
    backgroundColor: "#ff9600",
    color: "white",
    width: "3.5vh",
    height: "3.5vh",
  },
  flexWrap: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px",
  },
}));

export default function AddPhoto() {
  const classes = useStyles();
  return (
    <div className={classes.flexWrap}>
      <Paper className={classes.paper}>
        <IconButton
          size="small"
          className={classes.icon}
          onClick={() => console.log("test")}
        >
          <ClearRoundedIcon style={{ fontSize: "100%" }} />
        </IconButton>
      </Paper>
      <Paper className={classes.paper}>
        <IconButton
          size="small"
          className={classes.icon}
          onClick={console.log("test")}
        >
          <ClearRoundedIcon style={{ fontSize: "100%" }} />
        </IconButton>
      </Paper>
      <Paper className={classes.paper}>
        <IconButton
          size="small"
          className={classes.icon}
          onClick={console.log("test")}
        >
          <ClearRoundedIcon style={{ fontSize: "100%" }} />
        </IconButton>
      </Paper>
      <Paper className={classes.paper}>
        <IconButton
          size="small"
          className={classes.icon}
          onClick={console.log("test")}
        >
          <ClearRoundedIcon style={{ fontSize: "100%" }} />
        </IconButton>
      </Paper>
      <Paper className={classes.paper}>
        <IconButton
          size="small"
          className={classes.icon}
          onClick={console.log("test")}
        >
          <ClearRoundedIcon style={{ fontSize: "100%" }} />
        </IconButton>
      </Paper>
      <Paper className={classes.paper}>
        <IconButton
          size="small"
          className={classes.icon}
          onClick={console.log("test")}
        >
          <ClearRoundedIcon style={{ fontSize: "100%" }} />
        </IconButton>
      </Paper>
    </div>
  );
}
