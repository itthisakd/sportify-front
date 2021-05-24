import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import Container from "@material-ui/core/Container";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import ReplayRoundedIcon from "@material-ui/icons/ReplayRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import Button from "@material-ui/core/Button";
import Menu from "../shared/Menu";
import LongButton from "../shared/LongButton";
import likeIcon from "../../images/icons/like_icon.png";
import rejectIcon from "../../images/icons/reject_icon.png";
import rewindIcon from "../../images/icons/rewind_icon.png";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const whiteTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});

const useStyles = makeStyles(() => ({
  paper: {
    width: "90vw",
    height: "135vw",
    borderRadius: "15px",
    position: "relative",
  },
  flexCol: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px",
    padding: "0px",
    width: "100%",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    padding: "0px",
    margin: "10px 0px",
  },
  hidden: {
    opacity: "0",
  },
  skip: {
    margin: "10px",
    color: "lightgrey",
    fontWeight: "500",
  },
  button: {
    width: "17vw",
    height: "17vw",
    margin: "5px 0px",
    backgroundColor: "white",
  },
}));

export default function TutorialPage() {
  const classes = useStyles();
  const history = useHistory();
  const [current, setCurrent] = useState(1);

  const next = () => {
    setCurrent(current + 1);
  };

  const skip = () => {
    history.push("/home");
  };

  return (
    <div className={classes.flexCol}>
      <Menu />
      <div
        className={classes.flexCol}
        style={{ margin: "10px 0px 0px 0px", height: "90vh" }}
      >
        <Paper
          elevation={3}
          className={classes.paper}
          onClick={() => {
            if (current === 2 || current === 3 || current === 5) {
              next();
            }
          }}
        >
          <img
            src={`/src/images/tutorial/${current}.jpg`}
            className={classes.paper}
          />
          {current === 1 && (
            <div
              style={{ position: "absolute", top: "80vw" }}
              className={classes.flexCol}
            >
              <LongButton name="START TUTORIAL" onClick={next} />
              <Button className={classes.skip} onClick={skip}>
                SKIP
              </Button>
            </div>
          )}
          {[2, 3].includes(current) && (
            <div style={{ position: "absolute", top: "0px", right: "0px" }}>
              <Button className={classes.skip} onClick={skip}>
                SKIP
              </Button>
            </div>
          )}
          {current === 4 && (
            <div
              style={{ position: "absolute", top: "100vw" }}
              className={classes.flexCol}
            >
              <LongButton name="LET'S GO" onClick={next} />
            </div>
          )}
          {current === 5 && (
            <div
              style={{
                position: "absolute",
                top: "0px",
                width: "100%",
                height: "100%",
              }}
              onClick={skip}
            ></div>
          )}
        </Paper>

        <Container className={classes.buttonContainer}>
          <MuiThemeProvider theme={whiteTheme}>
            <Fab
              className={current === 5 ? classes.button : classes.hidden}
              style={{ color: "#f4ba41" }}
            >
              <img src={rewindIcon} style={{ width: "40%" }} />
            </Fab>
            <Fab
              onClick={current === 5 ? null : current === 3 ? next : null}
              className={
                [5, 3].includes(current) ? classes.button : classes.hidden
              }
              style={{ color: "#e95370" }}
            >
              <img src={likeIcon} style={{ width: "50%" }} />
            </Fab>
            <Fab
              onClick={current === 5 ? null : current === 2 ? next : null}
              className={
                [5, 2].includes(current) ? classes.button : classes.hidden
              }
            >
              <img src={rejectIcon} style={{ width: "40%" }} />
            </Fab>
          </MuiThemeProvider>
        </Container>
      </div>
    </div>
  );
}
