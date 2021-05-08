import React from "react";
import { useHistory } from "react-router-dom";
import SectionHeader from "../shared/SectionHeader";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import ImageSlider from "../home/ImageSlider";

const useStyles = makeStyles(() => ({
  flexCol: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
  },
  flexCenter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
    height: "90vh",
    width: "100vw",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "90vw",
    height: "135vw",
    borderRadius: "15px",
  },
  header: { position: "absolute", top: "0px" },
}));

export default function PreviewPage() {
  const history = useHistory();
  const classes = useStyles();

  const getAccounts = async () => {
    //TODO
    // const res = await axios.get("/accounts");
    // setAccounts(res)
  };

  //TODO
  // useEffect(() => {
  //   getAccounts();
  // }, []);

  const account = {
    id: 1,
    planName: "lite",
    planId: "1",
    firstName: "Amy",
    gender: "female",
    email: "amy@gmail.com",
    dob: "2001-09-09",
    aboutMe:
      "I am nice because I am veyr very nice and also extremely kind and nice.",
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
    distance: "6km",
  };

  return (
    <div style={{ position: "relative" }}>
      <SectionHeader
        title="Preview"
        doneAction={() => history.push("/profile")}
        className={classes.header}
      />
      <Container className={classes.flexCenter}>
        <ImageSlider className={classes.paper} account={account} key="slider" />
      </Container>
    </div>
  );
}
