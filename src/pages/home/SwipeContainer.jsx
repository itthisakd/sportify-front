import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import ImageSlider from "./ImageSlider";
import Paper from "@material-ui/core/Paper";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import ReplayRoundedIcon from "@material-ui/icons/ReplayRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import axios from "../../config/axios";

const useStyles = makeStyles(() => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "90vw",
    height: "135vw",
    borderRadius: "15px",
  },
  float: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "90vw",
    height: "135vw",
  },
  rightTap: {
    width: "45vw",
    height: "135vw",
    position: "absolute",
    top: "0px",
    right: "0px",
    fontSize: "3rem",
    color: "#000",
    zIndex: "10",
    cursor: "pointer",
    userSelect: "none",
  },
  leftTap: {
    width: "45vw",
    height: "135vw",
    position: "absolute",
    top: "0px",
    left: "0px",
    fontSize: "3rem",
    color: "#000",
    zIndex: "10",
    cursor: "pointer",
    userSelect: "none",
  },
  slide: {
    opacity: "0",
    transitionDuration: "1s ease",
  },
  active: {
    opacity: "1",
    transitionDuration: "1s",
    transform: "scale(1.08)",
  },
  imageIndexBar: {
    position: "relative",
    top: "150px",
    width: "85vw",
  },
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    position: "absolute",
    textAlign: "left",
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
  button: {
    // margin: "10px 5px",
  },
}));

export default function SwipeContainer({ accounts }) {
  const classes = useStyles();
  const [current, setCurrent] = useState(0);
  const curAcc = accounts[current];

  const nextSlide = () => {
    setCurrent(current === accounts.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? accounts.length - 1 : current - 1);
  };

  if (!Array.isArray(accounts) || accounts.length <= 0) {
    return null;
  }

  const createLike = async () => {
    //TODO
    // await axios.post("/match", { matchId: curAcc.id });
  };

  const createSuperlike = async () => {
    //TODO
    // await axios.post("/match", { matchId: curAcc.id, type: 1 });
  };

  return (
    <div className={classes.container}>
      <Paper elevation={3} className={classes.paper}>
        {accounts.map((account, index) => {
          return (
            <>
              {index === current && (
                <ImageSlider className={classes.paper} account={account} />
              )}
            </>
          );
        })}
      </Paper>
      <Container className={classes.buttonContainer}>
        <Fab
          color="primary"
          className={classes.button}
          onClick={() => {
            //TODO––––––––––––––––––– limit rewind to once per day for lite users
            prevSlide();
          }}
        >
          <ReplayRoundedIcon />
        </Fab>
        <Fab
          color="primary"
          className={classes.button}
          onClick={() => {
            createLike();
            nextSlide();
          }}
        >
          <FavoriteRoundedIcon />
        </Fab>

        <Fab
          color="primary"
          className={classes.button}
          onClick={() => {
            createSuperlike();
            nextSlide();
          }}
        >
          <StarRoundedIcon />
        </Fab>

        <Fab
          color="primary"
          className={classes.button}
          onClick={() => {
            nextSlide();
          }}
        >
          <CloseRoundedIcon />
        </Fab>
      </Container>
    </div>
  );
}
