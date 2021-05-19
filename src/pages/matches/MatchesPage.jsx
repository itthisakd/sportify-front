import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Menu from "../shared/Menu";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Badge from "@material-ui/core/Badge";
import axios from "../../config/axios";

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
  const [matches, setMatches] = useState([]);

useEffect(() => {
  const getAccounts = async () => {
    const res = await axios.get("/match/likedby");
    setAccounts(res.data);
  };
  getAccounts();
}, [trigger]);

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
            if (match.viewed === 0)
              return (
                <Badge
                  className={classes.badge}
                  color="secondary"
                  overlap="circle"
                  badgeContent=""
                  style={{
                    margin: "5px 10px",
                  }}
                >
                  <div>
                    <img
                      src={match.images[0].image}
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
              );
            else
              return (
                <div
                  style={{
                    margin: "5px 10px",
                  }}
                >
                  <img
                    src={match.images[0].image}
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
    </div>
  );
}
