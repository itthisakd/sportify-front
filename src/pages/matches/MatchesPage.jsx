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
  const [matches, setMatches] = useState([
    {
      id: 1,
      firstName: "Amy",
      gender: "female",
      phoneNumber: "0925419369",
      email: "amy@gmail.com",
      dob: "2001-09-09",
      aboutMe:
        "I am nice because I am veyr very nice and also extremely kind and nice.",
      instagram: "amylee",
      sporify: "samy",
      job: "",
      company: "",
      school: "Clerk County College",

      //WHEN ORGANISING STACK, check that search fields are mutual
      currentLocation: "13.741319-100.531151",
      lastActive: "2020-09-0900:00:09",
      showActive: 1,
      showInStack: 1,
      //––––––––––––––––––––––––––JOINED FROM SPORT BELONGS TO –––––––––––––––––––––––
      sports: [
        { id: 1, sportName: "Basketball" },
        { id: 3, sportName: "Badminton" },
        { id: 6, sportName: "Tennis" },
        { id: 7, sportName: "Golf" },
        { id: 96, sportName: "Fencing" },
      ],
      //––––––––––––––––––––––––––JOINED FROM MEDIA –––––––––––––––––––––––
      images: [
        {
          image:
            "https://i.picsum.photos/id/1002/600/900.jpg?hmac=4BSgpJzasHKS9vEgQ_Kn3WUjgvc1sUZv-E10bf1bCyA",
        },
        {
          image:
            "https://i.picsum.photos/id/277/600/900.jpg?hmac=0SZDnUgJesoCsIFVR9u9uG9hUC3dQOxx0_pgop-aIoY",
        },
        {
          image:
            "https://i.picsum.photos/id/705/600/900.jpg?hmac=19EE_8IKXcp7maJfLind1IgeEHKHlpbeSbN6o5uydJY",
        },
        //******GIVE IMAGES IN UPLOADED ORDER, order by timestamp
      ],
      viewed: 0,
      //––––––––––––––––––––––––––GENERATED–––––––––––––––––––––––––
      recentlyActive: 1, //show recentelyActive TRUE if lastActive is within 24 users
      distance: "6km", //generated from currentLocation (OR searchLocation) using isNearby
      //********ONLY SHOW IF MUTUAL */
      age: 18, //DateTime.now().diff(DateTime.fromISO(this.dob), "years"),
      locationName: "Bangkok, Thailand", //Generated using API ****CONFIRM WITH AUM AGAIN LATER ****
    },
    {
      id: 1,
      firstName: "Amy",
      gender: "female",
      phoneNumber: "0925419369",
      email: "amy@gmail.com",
      dob: "2001-09-09",
      aboutMe:
        "I am nice because I am veyr very nice and also extremely kind and nice.",
      instagram: "amylee",
      sporify: "samy",
      job: "",
      company: "",
      school: "Clerk County College",

      //WHEN ORGANISING STACK, check that search fields are mutual
      currentLocation: "13.741319-100.531151",
      lastActive: "2020-09-0900:00:09",
      showActive: 1,
      showInStack: 1,
      //––––––––––––––––––––––––––JOINED FROM SPORT BELONGS TO –––––––––––––––––––––––
      sports: [
        { id: 1, sportName: "Basketball" },
        { id: 3, sportName: "Badminton" },
        { id: 6, sportName: "Tennis" },
        { id: 7, sportName: "Golf" },
        { id: 96, sportName: "Fencing" },
      ],
      //––––––––––––––––––––––––––JOINED FROM MEDIA –––––––––––––––––––––––
      images: [
        {
          image:
            "https://i.picsum.photos/id/1002/600/900.jpg?hmac=4BSgpJzasHKS9vEgQ_Kn3WUjgvc1sUZv-E10bf1bCyA",
        },
        {
          image:
            "https://i.picsum.photos/id/277/600/900.jpg?hmac=0SZDnUgJesoCsIFVR9u9uG9hUC3dQOxx0_pgop-aIoY",
        },
        {
          image:
            "https://i.picsum.photos/id/705/600/900.jpg?hmac=19EE_8IKXcp7maJfLind1IgeEHKHlpbeSbN6o5uydJY",
        },
        //******GIVE IMAGES IN UPLOADED ORDER, order by timestamp
      ],
      viewed: 1,
      //––––––––––––––––––––––––––GENERATED–––––––––––––––––––––––––
      recentlyActive: 1, //show recentelyActive TRUE if lastActive is within 24 users
      distance: "6km", //generated from currentLocation (OR searchLocation) using isNearby
      //********ONLY SHOW IF MUTUAL */
      age: 18, //DateTime.now().diff(DateTime.fromISO(this.dob), "years"),
      locationName: "Bangkok, Thailand", //Generated using API ****CONFIRM WITH AUM AGAIN LATER ****
    },
  ]);

  // useEffect(async () => {
  //   const res = await axios.get("matches/mymatches")
  //   // setMatches(res.myMatches)
  // })

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
