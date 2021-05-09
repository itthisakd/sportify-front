import React from "react";
import HeadButton from "../shared/HeadRegisterButton";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Paper, IconButton } from "@material-ui/core";
import MadeButton from "../shared/Button";
import AddRoundedIcon from "@material-ui/icons/AddRounded";

const useStyles = makeStyles((theme) => ({
  header: {
    fontWeight: 550,
    textAlign: "center",
    width: "100%",
  },
  icon: {
    position: "absolute",
    right: "-5px",
    bottom: "-5px",
    zIndex: "1",
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
    marginTop: "5%",
  },
  paper: {
    margin: "5px",
    textAlign: "center",
    color: theme.palette.text.secondary,
    position: "relative",
    width: "24vw",
    height: "40vw",
  },
}));

export default function PhotosPage() {
  const classes = useStyles();

  return (
    <div>
      <HeadButton />
      <div style={{ marginTop: "1%" }}>
        <Typography variant="h4" className={classes.header}>
          Add photos
        </Typography>
      </div>
      <div className={classes.flexWrap}>
        <Paper className={classes.paper}>
          <IconButton size="small" className={classes.icon}>
            <AddRoundedIcon />
          </IconButton>
        </Paper>
        <Paper className={classes.paper}>
          <img
            src="https://picsum.photos/1000"
            style={{ width: "100%", height: "100%", borderRadius: "4px" }}
          ></img>
          <IconButton size="small" className={classes.icon} onClick={() => console.log("test")}>
            <AddRoundedIcon />
          </IconButton>
        </Paper>
        <Paper className={classes.paper}>
          <IconButton size="small" className={classes.icon}>
            <AddRoundedIcon />
          </IconButton>
        </Paper>
        <Paper className={classes.paper}>
          <IconButton size="small" className={classes.icon}>
            <AddRoundedIcon />
          </IconButton>
        </Paper>
        <Paper className={classes.paper}>
          <IconButton size="small" className={classes.icon}>
            <AddRoundedIcon />
          </IconButton>
        </Paper>
        <Paper className={classes.paper}>
          <IconButton size="small" className={classes.icon}>
            <AddRoundedIcon />
          </IconButton>
        </Paper>
      </div>
      <div style={{ marginTop: "25%", textAlign: "center" }}>
        <MadeButton text="CONTINUE" />
      </div>
    </div>
  );
}
