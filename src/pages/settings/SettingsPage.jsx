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
    textAlign: "right"
  },
  bg: {
    backgroundColor: "ghostwhite",
  },
}));

export default function SettingsPage() {
  const classes = useStyles();
  const history = useHistory();

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
        Allow Sportify memebers to see if you were recently active within the
        last 24 hours on Sportify. If you have turned this off, they will not be
        able to see your recently active status.
      </Typography>
      <br />
    </div>
  );
}
