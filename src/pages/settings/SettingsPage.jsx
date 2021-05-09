import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import SectionHeader from "../shared/SectionHeader";
import {
  Paper,
  Typography,
  Container,
  Divider,
  Slider,
  Switch,
  Input,
} from "@material-ui/core";
import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
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
  section: {
    margin: "0 0 5px 10px",
    display: "block",
    textAlign: "left",
  },
  caption: {
    margin: "5px 5px 5px 10px",
    display: "block",
    textAlign: "left",
    color: "grey",
  },
  head: {
    fontWeight: "400",
  },
  tail: {
    color: "grey",
    textAlign: "right",
  },
  bg: {
    backgroundColor: "ghostwhite",
  },
}));

export default function SettingsPage() {
  const classes = useStyles();
  const history = useHistory();
  const { register, handleSubmit } = useForm();

  //TODO
  // const res = await axios.get("/accounts");
  // setAccounts(res)
  // };

  //TODO
  // useEffect(() => {
  //   getAccounts();
  // }, []);

  const account = {
    id: 1,
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
    //––––––––––––––––––––––––––FROM SEPERATE TABLE––––––––––––––––––––––––
    planName: "lite",
    planId: "1",
    sports: [
      { id: 1, sportName: "Basketball" },
      { id: 3, sportName: "Badminton" },
      { id: 6, sportName: "Tennis" },
      { id: 7, sportName: "Golf" },
      { id: 96, sportName: "Fencing" },
    ],
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

    //––––––––––––––––––––––––––GENERATE–––––––––––––––––––––––––
    distance: "6km",
    age: 18,
    // age: DateTime.now().diff(DateTime.fromISO(this.dob), "years"),
  };

  return (
    <div className={classes.bg}>
      <SectionHeader
        title="Settings"
        doneAction={() => history.push("/profile")}
      />
      <br />
      <Typography variant="caption" className={classes.section}>
        ACCOUNT SETTINGS
      </Typography>
      <Paper variant="outlined" className={classes.paper}>
        <Container
          className={classes.row}
          onClick={() => {
            //TODO bring to register phone number page
          }}
        >
          <Typography variant="body1" className={classes.head}>
            Phone Number
          </Typography>
          <Typography variant="body1" className={classes.tail}>
            0925419369
          </Typography>
        </Container>
        <Divider />
        <Container className={classes.row}>
          <Typography variant="body1" className={classes.head}>
            Email
          </Typography>
          <Typography
            variant="body1"
            className={classes.tail}
            onClick={() => {
              //TODO bring to register email page
            }}
          >
            itthisakds@gmail.com
          </Typography>
        </Container>
      </Paper>

      <br />
      <Typography variant="caption" className={classes.section}>
        DISCOVERY
      </Typography>
      <Paper variant="outlined" className={classes.paper}>
        <Container className={classes.row}>
          <Typography
            variant="body1"
            className={classes.head}
            onClick={() => {
              //TODO bring to sports page
            }}
          >
            Sports
          </Typography>
          <Typography variant="body1" className={classes.tail}>
            INSERT PAGE
          </Typography>
        </Container>
        <Divider />

        <Container className={classes.row}>
          <Typography
            variant="body1"
            className={classes.head}
            onClick={() => {
              //TODO bring to choose location page
            }}
          >
            Location
          </Typography>
          <Typography variant="body1" className={classes.tail}>
            Bangkok, Thailand
          </Typography>
        </Container>
        <Divider />

        <Container className={classes.row}>
          <Typography variant="body1" className={classes.head}>
            Maximum Distance
          </Typography>
          <Typography variant="body1" className={classes.tail}>
            21 km
          </Typography>
        </Container>
        <Container className={classes.center}>
          <Slider
            style={{ width: "90%" }}
            min={2}
            max={160}
            name="maxDistance"
            // value={value}
            // onChange={handleChange}
          />
        </Container>
        <Divider />
        <Container
          className={classes.row}
          onClick={() => {
            //TODO bring to choose show me gender page
          }}
        >
          <Typography variant="body1" className={classes.head}>
            Show me
          </Typography>
          <Typography variant="body1" className={classes.tail}>
            Women
          </Typography>
        </Container>
        <Divider />
        <Container className={classes.row}>
          <Typography variant="body1" className={classes.head}>
            Age Range
          </Typography>
          <Typography variant="body1" className={classes.tail}>
            18-39
          </Typography>
        </Container>
        <Container className={classes.center}>
          <Slider
            value={[18, 39]} //TODO ––––––––––––––– ADD STATE
            style={{ width: "90%" }}
            min={18}
            max={100}
            name="ageRange"
            // value={value}
            // onChange={handleChange}
          />
        </Container>
      </Paper>

      <br />
      <Typography variant="caption" className={classes.section}>
        SHOW ME
      </Typography>
      <Paper variant="outlined" className={classes.paper}>
        <Container className={classes.row}>
          <Typography variant="body1" className={classes.head}>
            Show me on Sportify
          </Typography>
          <Switch
            // checked={state.checkedB}
            // onChange={handleChange}
            name="showMe"
            color="primary"
            style={{ margin: "0px" }}
          />
        </Container>
      </Paper>
      <Typography variant="caption" className={classes.caption}>
        While turned off, you will not be shown in the card stack. Please you
        have already liked may still see your profile and match with you. You
        can still see and chat with your matches.
      </Typography>

      <br />
      <Typography variant="caption" className={classes.section}>
        ACTIVE STATUS
      </Typography>
      <Paper variant="outlined" className={classes.paper}>
        <Container className={classes.row}>
          <Typography variant="body1" className={classes.head}>
            Show Activity Status
          </Typography>
          <Switch
            // checked={state.checkedB}
            // onChange={handleChange}
            name="showMe"
            color="primary"
            style={{ margin: "0px" }}
          />
        </Container>
      </Paper>
      <Typography variant="caption" className={classes.caption}>
        Allow Sportify members to see if you were recently active within the
        last 24 hours on Sportify. If you have turned this off, they will not be
        able to see your recently active status.
      </Typography>
      <br />
    </div>
  );
}
