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

const useStyles = makeStyles(() => ({
  paper: {
    borderRadius: "10px",
    boxShadow: "-2px 5px 15px 7px rgba(0,0,0,0.2)",
    display: "inline-block",
    margin: "1vw",
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
    justifyContent: "space-evenly",
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
    width: "17vw",
    height: "17vw",
    margin: "5px 0px",
  },
}));

export default function LikedByPage() {
  const classes = useStyles();
  const [viewId, setViewId] = useState(0);
  const [accounts, setAccounts] = useState([
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

  const getAccounts = async () => {
    //TODO
    // const res = await axios.get("/accounts");
    // setAccounts(res)
  };

  //TODO
  // useEffect(() => {
  //   getAccounts();
  // }, []);

  const createLike = async () => {
    //TODO
    // await axios.post("/match", { matchId: curAcc.id });
    setViewId(0);
  };

  const createSuperlike = async () => {
    //TODO
    // await axios.post("/match", { matchId: curAcc.id, type: 1 });
    setViewId(0);
  };

  const deleteMatch = async () => {
    // await axios.delete("/match", { matchId: id});
  };

  if (viewId === 0) {
    return (
      <div style={{ position: "relative" }}>
        <Menu />
        <Container className={classes.container}>
          {accounts.map((account, idx) => {
            return (
              <div style={{ position: "relative" }}>
                <img
                  src={account.images[0].image}
                  className={classes.paper}
                  onClick={() => {
                    setViewId(idx + 1);
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
                    {account.firstName}
                    <Typography
                      variant="h6"
                      style={{
                        fontWeight: "400",
                        display: "inline-block",
                        color: "white",
                      }}
                    >
                      &nbsp;
                      {account.age}
                    </Typography>
                  </Typography>
                  {/* {!!account.showActive && !!account.recentlyActive && (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "start",
                        alignItems: "center",
                      }}
                    >
                      <div className={classes.greenCircle}></div>
                      <Typography variant="body2">Recently Active</Typography>
                    </div>
                  )} */}
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
        <Profile account={accounts[viewId - 1]} setViewId={setViewId} />
        <Container
          className={classes.buttonContainer}
          style={{ position: "sticky", bottom: "0px", padding: "15px 0px" }}
        >
          <Fab
            color="primary"
            className={classes.button}
            style={{ opacity: "0" }}
            onClick={() => {
              //TODO––––––––––––––––––– limit rewind to once per day for lite users
              prevSlide();
            }}
          >
            <ReplayRoundedIcon />
          </Fab>
          <Fab
            color="primary"
            style={{ opacity: "0" }}
            className={classes.button}
            onClick={() => {
              createLike();
            }}
          >
            <FavoriteRoundedIcon />
          </Fab>
          <Fab
            color="primary"
            className={classes.button}
            onClick={() => {
              createLike();
              setViewId(0);
            }}
          >
            <FavoriteRoundedIcon />
          </Fab>

          <Fab
            color="primary"
            className={classes.button}
            onClick={() => {
              setViewId(0);
              deleteMatch();
            }}
          >
            <CloseRoundedIcon />
          </Fab>
        </Container>
      </div>
    );
  }
}
