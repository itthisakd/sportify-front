import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "../shared/Menu";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import Profile from "../home/Profile";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import ReplayRoundedIcon from "@material-ui/icons/ReplayRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import Typography from "@material-ui/core/Typography";
import axios from "../../config/axios";
import background from "../../images/likedby_bg.png";
import likeIcon from "../../images/icons/like_icon.png";
import rejectIcon from "../../images/icons/reject_icon.png";
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
    borderRadius: "10px",
    boxShadow: "4px 5px 17px -5px rgba(0,0,0,0.30)",
    display: "inline-block",
    margin: "1.5vw",
    width: "46vw",
    height: "60vw",
    overflow: "hidden",
    objectFit: "cover",
    objectPosition: "50% 50%",
  },
  container: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    margin: "0px",
    padding: "1vw",
  },
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
    justifyContent: "space-between",
    height: " 100%",
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
    height: "90vh",
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
    // background: "rgb(255,255,255)",
    background:
      "linear-gradient(0deg, rgba(255,255,255,1) 30%, rgba(255,255,255,0) 100%)",
  },
  button: {
    width: "20vw",
    height: "20vw",
    margin: "5px 0px",
    backgroundColor: "white",
    background: "white",
  },
}));

export default function LikedByPage() {
  const classes = useStyles();
  const [viewId, setViewId] = useState(0);
  const [accounts, setAccounts] = useState([]);
  const [account, setAccount] = useState({});
  const [trigger, setTrigger] = useState(false);

  useEffect(() => {
    const getAccounts = async () => {
      const res = await axios.get("/match/likedby");
      setAccounts(res.data);
    };
    getAccounts();
  }, [trigger]);

  useEffect(() => {
    if (viewId > 0) {
      const getAccount = async () => {
        const res = await axios.get("/account/" + viewId);
        setAccount(res.data.account);
      };
      getAccount();
    }
  }, [viewId]);

  const returnLike = async () => {
    await axios.patch("/match/returnLike", {
      matchId: account.likedMe.matchId,
    });
    setViewId(0);
    setTrigger(!trigger);
  };


  const deleteMatch = async () => {
    await axios.delete("/match/" + account.id);
    setViewId(0);
    setTrigger(!trigger);
  };

  if (accounts.length === 0) {
    return (
      <div style={{ position: "relative", heigh: "100vh" }}>
        <Menu />
        <img
          alt="landing"
          src={background}
          style={{
            margin: "auto",
            overflow: "hidden",
            objectFit: "cover",
            objectPosition: "50% 50%",
            position: "absolute",
            top: "0px",
            left: "0px",
          }}
        />
      </div>
    );
  }

  if (viewId === 0) {
    return (
      <div style={{ position: "relative" }}>
        <Menu />
        <Container className={classes.container}>
          {accounts?.map((account, idx) => {
            return (
              <div style={{ position: "relative" }}>
                <img
                  src={account.matchAcc.profilePhoto}
                  className={classes.paper}
                  onClick={() => {
                    setViewId(account.matchAcc.id);
                  }}
                />
                <div
                  style={{ position: "absolute", left: "15px", bottom: "15px" }}
                >
                  <Typography
                    variant="h5"
                    style={{
                      fontWeight: "600",
                      color: "white",
                      display: "inline-block",
                    }}
                  >
                    {account.matchAcc.firstName}
                    <Typography
                      variant="h6"
                      style={{
                        fontWeight: "400",
                        display: "inline-block",
                        color: "white",
                      }}
                    >
                      &nbsp;
                      {account.matchAcc.age}
                    </Typography>
                  </Typography>
                </div>
              </div>
            );
          })}
        </Container>
      </div>
    );
  } else if (viewId > 0) {
    return (
      <div style={{ position: "relative" }}>
        <Profile account={account} setViewId={setViewId} />
        <Container
          className={classes.buttonContainer}
          style={{ position: "sticky", bottom: "0px", padding: "15px 0px" }}
        >
          <MuiThemeProvider theme={whiteTheme}>
            <Fab
              color="primary"
              className={classes.button}
              disabled
              style={{ opacity: "0" }}
            >
              <img src={likeIcon} style={{ width: "50%" }} />
            </Fab>
            <Fab
              color="primary"
              className={classes.button}
              onClick={returnLike}
              style={{ color: "#e95370" }}
            >
              <img src={likeIcon} style={{ width: "50%" }} />
            </Fab>
            <Fab
              color="primary"
              className={classes.button}
              onClick={deleteMatch}
            >
              <img src={rejectIcon} style={{ width: "40%" }} />
            </Fab>
          </MuiThemeProvider>
        </Container>
      </div>
    );
  }
}
