import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "../shared/Menu";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Badge from "@material-ui/core/Badge";
import axios from "../../config/axios";
import { SocketContext } from "../../contexts/SocketContextProvider";
import ChatContainer from "./ChatContainer";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  matchesContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItems: "center",
    wdith: "100vw",
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

  return (
    <div>
      <Menu />
      <Container
        style={{
          padding: "5px",
        }}
      >
        <Typography
          variant="h6"
          component="p"
          style={{
            margin: "5px 10px",
          }}
          color="secondary"
        >
          New Matches
        </Typography>
        <div className={classes.matchesContainer}>
          {matches.map((match) => {
            console.log(match);
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
                    {match.firstName}
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
                  {match.firstName}
                </Typography>
              </div>
            );
          })}
        </div>
      </Container>
      <Divider />
      <ChatContainer />
    </div>
  );
}
