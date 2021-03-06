import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import ImageDisplay from "../home/ImageDisplay";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";
import HouseOutlinedIcon from "@material-ui/icons/HouseOutlined";
import titleCase from "../../utilities/titleCase";
import { useParams } from "react-router-dom";
import axios from "../../config/axios";
import Geocode from "react-geocode";
import { useHistory } from "react-router-dom";
import getLocationName from "../../utilities/getLocationName";

const useStyles = makeStyles((theme) => ({
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
  center: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
    margin: "10px 0px 0px 0px",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "90vw",
    height: "135vw",
    borderRadius: "15px",
  },
  button: {
    background: "linear-gradient(45deg, #E8407D 10%, #EE7F5E 90%)",
    position: "absolute",
    right: "20px",
    top: "calc(110vw - 30px)",
    zIndex: "10",
  },
  name: {
    fontWeight: "600",
    display: "inline-block",
  },
  tag: {
    fontWeight: "400",
    display: "inline-block",
    color: "grey",
    height: "1rem",
    margin: "0px 5px 0px 0px",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    alignItem: "center",
    margin: "5px 0px",
  },
  chip: {
    height: "25px",
    padding: "0px",
    color: "grey",
  },
}));

export default function Profile() {
  const classes = useStyles();
  const { id } = useParams();
  const [account, setAccount] = React.useState({ images: "" });
  const history = useHistory();
  const [locaName, setLocaName] = React.useState("");

  React.useEffect(() => {
    const getAccount = async () => {
      const res = await axios.get("/account/matched/" + id);
      setAccount(res.data);
    };
    getAccount();
  }, []);

  React.useEffect(() => {
    const setLo = async () => {
      const loName = await getLocationName(account.currentLocation);
      setLocaName(loName);
    };
    setLo();
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <ImageDisplay account={account} />
      <Fab
        color="primary"
        className={classes.button}
        onClick={() => {
          history.goBack();
        }}
      >
        <ExpandMoreRoundedIcon style={{ fontSize: "50px" }} />
      </Fab>
      <Container style={{ padding: "20px" }}>
        <Typography
          variant="h4"
          style={{
            fontWeight: "600",
            display: "inline-block",
            color: "#303030",
          }}
        >
          {account?.firstName}
        </Typography>
        <Typography
          variant="h5"
          style={{
            fontWeight: "400",
            display: "inline-block",
            color: "#404040",
          }}
        >
          &nbsp;
          {account?.age}
        </Typography>
        {account?.currentLocation && (
          <div className={classes.flexRow}>
            <HouseOutlinedIcon className={classes.tag} />
            <Typography variant="body2" className={classes.tag}>
              {locaName}
            </Typography>
          </div>
        )}
        {account?.distance && (
          <div className={classes.flexRow}>
            <LocationOnOutlinedIcon className={classes.tag} />
            <Typography variant="body2" className={classes.tag}>
              {account?.distance} km away
            </Typography>
          </div>
        )}
        {account?.school && (
          <div className={classes.flexRow}>
            <SchoolOutlinedIcon className={classes.tag} />
            <Typography variant="body2" className={classes.tag}>
              {titleCase(account?.school)}
            </Typography>
          </div>
        )}
        {account?.job && (
          <div className={classes.flexRow}>
            <WorkOutlineOutlinedIcon className={classes.tag} />
            <Typography variant="body2" className={classes.tag}>
              {titleCase(account?.job)}
            </Typography>
          </div>
        )}
        <div className={classes.root}>
          {account?.sports?.map(({ sportName, sportId, skill }) => {
            //TODO match colors of tags if sport matches that of the user
            return (
              <Chip
                label={sportName + " " + ["????", "????", "????", "????"][skill - 1]}
                variant="outlined"
                className={classes.chip}
                key={sportId}
                variant={
                  account.commonSports?.includes(sportId)
                    ? "default"
                    : "outlined"
                }
                style={
                  account.commonSports?.includes(sportId)
                    ? { backgroundColor: "#ffcdcd" }
                    : null
                }
                color="default"
              />
            );
          })}
        </div>
      </Container>
      <Divider style={{ backgroundColor: "gainsboro" }} />
      <Container style={{ padding: "20px" }}>
        {account?.aboutMe && (
          <Typography
            variant="body1"
            style={{
              color: "gray",
            }}
          >
            {account?.aboutMe}
          </Typography>
        )}
      </Container>
      {!!account?.spotify && (
        <>
          <Divider style={{ backgroundColor: "gainsboro" }} />
          <Container className={classes.flexRow} style={{ padding: "20px" }}>
            <img
              src="/src/images/logos/spotify_logo.png"
              style={{ width: "30px", height: "30px" }}
            />
            <Typography
              variant="body1"
              style={{
                color: "gray",
              }}
              //TODO???????????????????????????????????????SPOTIFY API
            >
              &nbsp; @{account?.spotify}
            </Typography>
          </Container>
        </>
      )}
      {!!account?.instagram && (
        <>
          <Divider style={{ backgroundColor: "gainsboro" }} />
          <a
            className={classes.flexRow}
            style={{ padding: "20px" }}
            href={`https://www.instagram.com/${account.instagram}`}
          >
            <img
              src="/src/images/logos/instagram_logo.png"
              style={{ width: "30px", height: "30px" }}
            />
            <Typography
              variant="body1"
              style={{
                color: "gray",
              }}
              //TODO???????????????????????????????????????IG API
            >
              &nbsp; @{account.instagram}
            </Typography>
          </a>
        </>
      )}
    </div>
  );
}
