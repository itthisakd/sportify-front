import { Typography } from "@material-ui/core";
import React from "react";
import LongButton from "../shared/LongButton";
import logo from "../../images/branding/new_logo.png";
import { makeStyles } from "@material-ui/core/styles";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import { useHistory } from "react-router-dom";
import axios from "../../config/axios";
import { useData } from "../../contexts/DataContext";
import getCurrentLocation from "../../utilities/getCurrentLocation"

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
  const { setValues, data } = useData();
  const [next, setNext] = React.useState(false)

  setTimeout(async () => {
      setNext(true)
    }, 5000);
  

  console.log(data)

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <img alt="logo" src={logo} style={{ width: "70vw", marginTop: "10%" }} />
      <br />

      <Typography
        style={{ color: "#4a4a4a", fontWeight: 600, textAlign: "center" }}
        variant="h5"
      >
        Welcome to Sportify.
      </Typography>
      <div>
        <Typography
          style={{ color: "#939393", fontWeight: 400, textAlign: "center" }}
        >
          Please follow these house rule
        </Typography>
      </div>
      <br />
      <div style={{ width: "80vw" }}>
        <Typography className={classes.title}>
          <CheckRoundedIcon className={classes.checkIcon} /> Be yourself
        </Typography>
        <Typography className={classes.info}>
          Make Sure your photos, age, and bio are ture to who you are
        </Typography>
        <Typography className={classes.title}>
          <CheckRoundedIcon className={classes.checkIcon} />
          Stay Safe
        </Typography>
        <Typography className={classes.info}>
          Don't be too quick to give out personal information.
        </Typography>
        <Typography className={classes.title}>
          <CheckRoundedIcon className={classes.checkIcon} /> Play Cool
        </Typography>
        <Typography className={classes.info}>
          Respect others and treat them as you would like to be treated
        </Typography>
        <Typography className={classes.title}>
          <CheckRoundedIcon className={classes.checkIcon} /> Be Proactive
        </Typography>
        <Typography className={classes.info}>
          Always report bad behavior
        </Typography>
      </div>
      <div style={{ marginTop: "20%", textAlign: "center" }}>
        <LongButton
          name="I AGREE"
          onClick={() => {
            history.push("/tutorial");
          }}
          variant={next? "contained" : "disabled"}
        />
      </div>
    </div>
  );
}
