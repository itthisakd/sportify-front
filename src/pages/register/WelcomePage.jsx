import { Typography } from "@material-ui/core";
import React from "react";
import LongButton from "../shared/LongButton";
import logo from "../../images/branding/new_logo.png";
import { makeStyles } from "@material-ui/core/styles";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import { useHistory } from "react-router";

const useStyles = makeStyles(() => ({
  icon: {
    textAlign: "start",
    opacity: "0.3",
  },
  title: {
    color: "#4a4a4a",
    textAlign: "left",
    fontWeight: 600,
    width: "80%",
    margin: "auto",
    fontSize: "14px",
    marginTop: "2%",
  },
  info: {
    color: "#939393",
    textAlign: "left",
    fontWeight: 400,
    width: "80%",
    margin: "auto",
    fontSize: "14px",
  },
  textBox: {
    width: "100%",
    textAlign: "center",
  },
  checkIcon: {
    color: "#E8407D",
    height: "18px",
  },
}));

export default function WelcomePage() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <img
          alt="logo"
          src={logo}
          style={{ width: "80%", marginTop: "10%" }}
        ></img>
      </div>
      <div>
        <Typography
          style={{ color: "#4a4a4a", fontWeight: 600, textAlign: "center" }}
          variant="h5"
        > 
          Welcome to Sportify.
        </Typography>
      </div>
      <div>
        <Typography
          style={{ color: "#939393", fontWeight: 400, textAlign: "center" }}
        >
          Please follow these house rule
        </Typography>
      </div>
      <div>
        <Typography className={classes.title}>
          <CheckRoundedIcon className={classes.checkIcon} /> Be yourself
        </Typography>
      </div>
      <div>
        <Typography className={classes.info}>
          Make Sure your photos, age, and bio are ture to who you are
        </Typography>
      </div>
      <div>
        <Typography className={classes.title}>
          <CheckRoundedIcon className={classes.checkIcon} />
          Stay Safe
        </Typography>
      </div>
      <div>
        <Typography className={classes.info}>
          Don't be too quick to give out personal information.
        </Typography>
      </div>
      <div>
        <Typography className={classes.title}>
          <CheckRoundedIcon className={classes.checkIcon} /> Play Cool
        </Typography>
      </div>
      <div>
        <Typography className={classes.info}>
          Respect others and treat them as you would like to be treated
        </Typography>
      </div>
      <div>
        <Typography className={classes.title}>
          <CheckRoundedIcon className={classes.checkIcon} /> Be Proactive
        </Typography>
      </div>
      <div>
        <Typography className={classes.info}>
          Always report bad behavior
        </Typography>
      </div>
      <div style={{ marginTop: "20%", textAlign: "center" }}>
        <LongButton
          name="I AGREE"
          onClick={() => history.push("/name")}
        ></LongButton>
      </div>
    </div>
  );
}
