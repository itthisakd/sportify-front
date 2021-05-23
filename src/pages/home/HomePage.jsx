import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Menu from "../shared/Menu";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import SwipeContainer from "./SwipeContainer";
import Fab from "@material-ui/core/Fab";
import ImageSlider from "./ImageSlider";
import Profile from "./Profile";
import Paper from "@material-ui/core/Paper";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import ReplayRoundedIcon from "@material-ui/icons/ReplayRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import axios from "../../config/axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import { DateTime } from "luxon";
import getCurrentLocation from "../../utilities/getCurrentLocation";
import getLocationName from "../../utilities/getLocationName";
import likeIcon from "../../images/icons/like_icon.png";
import rejectIcon from "../../images/icons/reject_icon.png";
import rewindIcon from "../../images/icons/rewind_icon.png";
import rewindIconDisabled from "../../images/icons/rewind_icon_disabled.png";
import background from "../../images/home_bg.png";

const useStyles = makeStyles(() => ({
  flexCol: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
  },
  flexBetween: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    height: "100%",
    width: "100vw",
    margin: "10px 0 0 0",
  },
  row: {
    padding: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  center: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  swipeContainer: {
    height: "80%",
    maxWidth: "90%",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "90vw",
    height: "135vw",
    borderRadius: "15px",
    margin: "0px auto",
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
    // position: "absolute",/
    // bottom: "0px",
    background:
      "linear-gradient(0deg, rgba(255,255,255,1) 30%, rgba(255,255,255,0) 100%)",
  },
  buttonContainerHOME: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "100%",
    padding: "0px",
    margin: "10px 0px",
  },
  button: {
    width: "20vw",
    height: "20vw",
    margin: "5px 0px",

    backgroundColor: "white",
    color: "purple",
  },
}));

export default function HomePage() {
  const classes = useStyles();
  const [current, setCurrent] = useState(0);
  const [viewId, setViewId] = useState(0);
  const [accounts, setAccounts] = useState([]);
  const [justLiked, setJustLiked] = useState(false);
  const [justRewinded, setJustRewinded] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    const getAccounts = async () => {
      const res = await axios.get("/account/stack");
      const currentLocation = await getCurrentLocation();
      // const currentLocationName = await getLocationName(currentLocation);

      await axios.patch("/account/myaccount", {
        lastActive: DateTime.now().toString(),
        currentLocation,
      });
      setAccounts(res.data.stack);
      setCurrent(0);
      console.log(res.data.stack);
    };
    getAccounts();
  }, [loadMore]);

  const nextSlide = () => {
    if (current !== accounts.length - 1) {
      setCurrent(current === accounts.length - 1 ? 0 : current + 1);
      setViewId(0);
    } else if (current === accounts.length - 1) {
      console.log("LOADING MORE");
      setLoadMore(!loadMore);

      setViewId(0);
    } else {
      setViewId(0);
    }
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? accounts.length - 1 : current - 1);
  };
  if (!Array.isArray(accounts) || accounts.length <= 0) {
    return null;
  }

  const createLike = async () => {
    if (accounts[current].likedMe) {
      await axios.patch("/match/returnLike", {
        matchId: accounts[current].likedMe.matchId,
      });
      await axios.patch("/account/updateoffset", {
        accId: accounts[current].id,
      });
    } else {
      await axios.post("/match/", { toId: accounts[current].id, superlike: 0 });
    }
    setViewId(0);
    setJustLiked(true);
    setJustRewinded(false);

    nextSlide();
  };

  // const createSuperlike = async () => {
  //   if (accounts[current].likedMe) {
  //     await axios.patch("/match/returnLike", {
  //       matchId: accounts[current].likedMe.matchId,
  //     });
  //     await axios.patch("/account/updateoffset", {
  //       accId: accounts[current].id,
  //     });
  //   } else {
  //     await axios.post("/match/", { toId: accounts[current].id, superlike: 1 });
  //   }
  //   setViewId(0);
  //   setJustLiked(true);
  //   setJustRewinded(false);
  //   nextSlide();
  // };

  const reject = async () => {
    await axios.patch("/account/updateoffset", { accId: accounts[current].id });
    setViewId(0);
    setJustLiked(false);
    setJustRewinded(false);
    nextSlide();
  };

  const rewind = async () => {
    prevSlide();
    setJustRewinded(true);
  };

  if (viewId === 0) {
    return (
      <div style={{ position: "relative", height: "90vh" }}>
        <Menu />

        <div className={classes.flexBetween}>
          <Paper elevation={3} className={classes.paper}>
            {accounts.length > 0 ? (
              accounts?.map((account, index) => {
                return (
                  <div key={index}>
                    {index === current && (
                      <ImageSlider
                        className={classes.paper}
                        account={account}
                        key={index}
                        viewProfile={() => {
                          setViewId(index + 1);
                        }}
                      />
                    )}
                  </div>
                );
              })
            ) : (
              <CircularProgress style={{ width: "15vw", height: "15vw" }} />
            )}
          </Paper>
          <Container className={classes.buttonContainerHOME}>
            {justLiked || justRewinded ? (
              <Fab color="primary" className={classes.button} disabled>
                <img src={rewindIconDisabled} style={{ width: "40%" }} />
              </Fab>
            ) : (
              <Fab
                color="primary"
                className={classes.button}
                onClick={rewind}
                style={{ color: "#f4ba41" }}
              >
                <img src={rewindIcon} style={{ width: "40%" }} />
              </Fab>
            )}
            <Fab
              color="primary"
              className={classes.button}
              onClick={createLike}
              style={{ color: "#e95370" }}
            >
              <img src={likeIcon} style={{ width: "50%" }} />
            </Fab>
            <Fab color="primary" className={classes.button} onClick={reject}>
              <img src={rejectIcon} style={{ width: "40%" }} />
            </Fab>
          </Container>
        </div>
      </div>
    );
  } else {
    return (
      <div style={{ position: "relative" }}>
        <Profile account={accounts[viewId - 1]} setViewId={setViewId} />
        <Container
          className={classes.buttonContainer}
          style={{ position: "sticky", bottom: "0px", padding: "15px 0px" }}
        >
          {/* <Fab
            color="primary"
            className={classes.button}
            style={{ opacity: "0" }}
          >
            <ReplayRoundedIcon />
          </Fab> */}
          <Fab
            color="primary"
            className={classes.button}
            onClick={createLike}
            style={{ color: "#e95370" }}
          >
            <FavoriteRoundedIcon />
          </Fab>

          {/* <Fab
            color="primary"
            className={classes.button}
            onClick={createSuperlike}
          >
            <StarRoundedIcon />
          </Fab> */}

          <Fab color="primary" className={classes.button} onClick={reject}>
            <CloseRoundedIcon />
          </Fab>
        </Container>
      </div>
    );
  }
}
