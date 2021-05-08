import React from "react";
import { useHistory } from "react-router-dom";
import Menu from "../shared/Menu";
import { Fab, Container, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import VisibilityRoundedIcon from "@material-ui/icons/VisibilityRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import { DateTime } from "luxon";

const data = {
  planName: "lite",
  planId: "lite",
  firstName: "Amy",
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
  images: {
    1: "https://img.freepik.com/free-photo/young-asian-girl-portrait-isolated_53876-70968.jpg?size=626&ext=jpg",
    2: "https://img.freepik.com/free-photo/young-asian-girl-portrait-isolated_53876-70968.jpg?size=626&ext=jpg",
    3: "https://img.freepik.com/free-photo/young-asian-girl-portrait-isolated_53876-70968.jpg?size=626&ext=jpg",
    //REVIEW use Object.values to rearrange order of images
  },
  age: 18,
  // age: DateTime.now().diff(DateTime.fromISO(this.dob), "years"),
};

const useStyles = makeStyles(() => ({
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px 0",
  },
  flexCol: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100px",
    margin: "0px",
    padding: "0px",
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
  button: {
    margin: "10px 15px",
  },
  imgCircle: {
    margin: "20px 0px 10px 0px",
    objectFit: "cover",
    borderRadius: "50%",
    height: "200px",
    width: "200px",
    boxShadow:
      "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
  },
  name: { fontWeight: "500" },
}));

export default function ProfilePage() {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div>
      <Menu />

      <Container>
        <img
          src="https://img.freepik.com/free-photo/young-asian-girl-portrait-isolated_53876-70968.jpg?size=626&ext=jpg"
          className={classes.imgCircle}
        />
        <Typography variant="h5" className={classes.name}>
            {data.firstName}, {data.age}
        </Typography>
      </Container>

      <Container className={classes.flexRow}>
        <Fab
          color="primary"
          className={classes.button}
          onClick={() => {
            history.push("/settings");
          }}
        >
          <SettingsRoundedIcon />
        </Fab>
          <Fab
            color="primary"
            className={classes.button}
            onClick={() => {
              history.push("/preview");
            }}
          >
            <VisibilityRoundedIcon />
          </Fab>

          <Fab
            color="primary"
            className={classes.button}
            onClick={() => {
              history.push("/edit-info");
            }}
          >
            <EditRoundedIcon />
          </Fab>

          {/* <Container className={classes.flexCol}>
            <Fab
              color="primary"
              className={classes.button}
              onClick={() => {
                history.push("/settings");
              }}
            >
              <SettingsRoundedIcon />
            </Fab>
            <Typography variant="caption" component="body1">
              Settings
            </Typography>
          </Container>

          <Container className={classes.flexCol}>
            <Fab
              color="primary"
              className={classes.button}
              onClick={() => {
                history.push("/preview");
              }}
            >
              <VisibilityRoundedIcon />
            </Fab>
            <Typography variant="caption" component="body1">
              Preview
            </Typography>
          </Container>

          <Container className={classes.flexCol}>
            <Fab
              color="primary"
              className={classes.button}
              onClick={() => {
                history.push("/edit-info");
              }}
            >
              <EditRoundedIcon />
            </Fab>
            <Typography variant="caption" component="body1">
              Edit Info
            </Typography>
          </Container> */}
      </Container>

      <Container>ADS HERE</Container>
    </div>
  );
}






// const data = {
//   sports: [
//     {
//       sportId: 1
//       sportName: }"Basketball"
//   ]
// }