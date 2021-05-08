import React from "react";
import { useHistory } from "react-router-dom";
import Menu from "../shared/Menu";
import Container from "@material-ui/core/Container"
import { makeStyles } from "@material-ui/core/styles";
import SwipeContainer from "./SwipeContainer";

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
    height: " 100%",
    width: "100vw",
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
}));

export default function HomePage() {
  const history = useHistory();
  const classes = useStyles();


  //TODO –––––––– GET API to get accounts and their info
  const accounts = [
    {
      id: 1,
      planName: "lite",
      planId: "1",
      firstName: "Amy",
      gender: "female",
      email: "amy@gmail.com",
      dob: "2001-09-09",
      aboutMe: "I am nice because I am veyr very nice and also extremely kind and nice.",
      instagram: "amylee",
      sporify: "samy",
      job: "",
      company: "",
      school: "Clerk County College",
      searchLocation: "",
      currentLocation: "",
      lastActive: "2020-09-0900:00:09",
      showActive: 1,
      recentlyActive: 1,
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
        //GIVE IMAGES IN UPLOADED ORDER
      ],
      age: 18,
      // age: DateTime.now().diff(DateTime.fromISO(this.dob), "years"),
      
      //––––––––––––––––––––––––––GENERATE–––––––––––––––––––––––––
      distance: "6km"
    },
    {
      id: 2,
      planName: "lite",
      planId: "1",
      firstName: "JITTY",
      gender: "female",
      email: "amy@gmail.com",
      dob: "2001-09-09",
      aboutMe: "I am nice.",
      instagram: "amylee",
      sporify: "samy",
      job: "",
      company: "",
      school: "Clerk County College",
      searchLocation: "",
      currentLocation: "",
      lastActive: "2020-09-0900:00:09",
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
        //GIVE IMAGES IN UPLOADED ORDER
      ],
      age: 18,
      // age: DateTime.now().diff(DateTime.fromISO(this.dob), "years"),
    },
  ];

  return (
    <div className={classes.flexBetween}>
      <Menu />
      <Container className={classes.flexBetween}>
        <SwipeContainer className={classes.swipeContainer} accounts={accounts} />
        
      </Container>
    </div>
  );
}
