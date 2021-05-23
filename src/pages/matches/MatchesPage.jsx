import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "../shared/Menu";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Badge from "@material-ui/core/Badge";
import axios from "../../config/axios";
import { SocketContext } from "../../contexts/SocketContextProvider";
import { useHistory } from "react-router-dom";
import background from "../../images/matches_bg.png"

const useStyles = makeStyles((theme) => ({
  matchesContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    width: "100vw",
    overflow: "scroll",
  },
  flexCenter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
  badge: {},
  flexStart: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
}));

export default function MatchesPage() {
  const classes = useStyles();
  const history = useHistory();
  const [matches, setMatches] = useState([]);
  const { newSocket } = useContext(SocketContext);
  const [trigger, setTrigger] = useState([]);

  useEffect(() => {
    const getMatches = async () => {
      const res = await axios.get("/match/");
      const rearranged = [
        ...res.data.filter((item) => !item.seen),
        ...res.data.filter((item) => item.seen),
      ];
      setMatches(rearranged);
    };
    getMatches();
  }, [trigger]);

  const handleOpen = async (match) => {
    if (!match.seen) {
      await axios.patch("/match/seen", { matchId: match.matchId });
    }

    const roomId = [match.toId, match.fromId].sort((a, b) => a - b).join("-");
    newSocket.emit("joinRoom", roomId);

    history.push("/chat/" + roomId);
  };

  if (matches.length === 0) {
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

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "sticky",
          top: "0px",
          backgroundColor: "white",
        }}
      >
        <Menu />

        {matches.filter((match) => match.latestMessage === false).length >
          0 && (
          <Typography
            variant="h6"
            component="p"
            style={{
              margin: "5px 15px",
            }}
            color="secondary"
          >
            New Matches
          </Typography>
        )}
        <Container
          style={{
            padding: "5px",
          }}
        >
          <div className={classes.matchesContainer}>
            {matches.map((match) => {
              if (!match.latestMessage) {
                return match.seen === 0 ? (
                  <Badge
                    className={classes.badge}
                    color="secondary"
                    overlap="circle"
                    badgeContent=""
                    variant="standard"
                    style={{
                      margin: "5px 10px",
                    }}
                    onClick={() => {
                      handleOpen(match);
                    }}
                  >
                    <div>
                      <img
                        src={match.matchAcc.profilePhoto}
                        style={{
                          width: "20vw",
                          height: "20vw",
                          overflow: "hidden",
                          objectFit: "cover",
                          objectPosition: "50% 50%",
                          borderRadius: "50%",
                        }}
                      />
                      <Typography
                        variant="h6"
                        component="p"
                        style={{
                          textAlign: "center",
                        }}
                      >
                        {match.matchAcc.firstName}
                      </Typography>
                    </div>
                  </Badge>
                ) : (
                  <div
                    style={{
                      margin: "5px 10px",
                    }}
                    onClick={() => {
                      handleOpen(match);
                    }}
                  >
                    <img
                      src={match.matchAcc.profilePhoto}
                      style={{
                        width: "20vw",
                        height: "20vw",
                        overflow: "hidden",
                        objectFit: "cover",
                        objectPosition: "50% 50%",
                        borderRadius: "50%",
                      }}
                    />
                    <Typography
                      variant="h6"
                      component="p"
                      style={{
                        textAlign: "center",
                      }}
                    >
                      {match.matchAcc.firstName}
                    </Typography>
                  </div>
                );
              }
            })}
          </div>
        </Container>
        {matches.filter((match) => match.latestMessage === false).length >
          0 && <Divider style={{}} />}
        <Typography
          variant="h6"
          component="p"
          style={{
            margin: "5px 15px",
          }}
          color="secondary"
        >
          Conversations
        </Typography>
      </div>
      <Container>
        {matches.map((match, idx) => {
          if (match.latestMessage) {
            return (
              <>
                <div
                  className={classes.flexStart}
                  key={idx}
                  onClick={() => {
                    handleOpen(match);
                  }}
                >
                  <img
                    src={match.matchAcc.profilePhoto}
                    style={{
                      width: "20vw",
                      height: "20vw",
                      overflow: "hidden",
                      objectFit: "cover",
                      objectPosition: "50% 50%",
                      borderRadius: "50%",
                      padding: "10px 0px",
                    }}
                  />
                  <div style={{ padding: "20px" }}>
                    <Typography variant="h6" component="p">
                      {match.matchAcc.firstName}
                    </Typography>
                    <Typography variant="body1" component="p">
                      {match.latestMessage.fromId === match.matchAcc.id
                        ? ""
                        : "You: "}
                      {match.latestMessage.text}
                    </Typography>
                  </div>
                </div>
                <Divider />
              </>
            );
          }
        })}
      </Container>
    </div>
  );
}
