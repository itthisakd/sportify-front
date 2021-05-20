import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import HouseOutlinedIcon from "@material-ui/icons/HouseOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import getLocationName from "../../utilities/getLocationName";

const useStyles = makeStyles((theme) => ({
  name: {
    fontWeight: "600",
    textShadow: "0px 0px 11px rgba(0, 0, 0, 0.5)",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "10px 0px",
  },
  tag: {
    fontWeight: "400",
    display: "inline-block",
    height: "1rem",
  },

  info: {
    textAlign: "left",
    color: "white",
    position: "absolute",
    bottom: "0px",
    left: "0px",
    padding: "15px 20px",
    textShadow: "0px 0px 11px rgba(0, 0, 0, 0.5)",
    width: "calc(90vw - 70px)",
  },
  aboutMe: {
    fontWeight: "400",
    maxHeight: "80px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    lineHeight: "20px",
    textShadow: "0px 0px 11px rgba(0, 0, 0, 0.5)",
  },
  greenCircle: {
    backgroundColor: "lime",
    borderRadius: "50%",
    width: "7px",
    height: "7px",
    boxShadow: "0px 0px 11px rgba(0, 0, 0, 0.5)",
    margin: "10px 5px",
  },
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  chip: {
    height: "25px",
    padding: "0px",
  },
  icon: {
    height: "25px",
    textShadow: "0px 0px 11px rgba(0, 0, 0, 0.5)",
  },
}));

export default function InfoContainer({ current, account }) {
  const classes = useStyles();
  const [locaName, setLocaName] = React.useState("");

  React.useEffect(() => {
    const setLo = async () => {
      console.log("inside");
      const loName = await getLocationName(account.currentLocation);
      setLocaName(loName);
    };
    setLo();
  }, []);

  return (
    <div className={classes.info}>
      <Typography
        variant="h4"
        style={{
          fontWeight: "600",
          display: "inline-block",
        }}
      >
        {account.firstName}
      </Typography>
      <Typography
        variant="h5"
        style={{
          fontWeight: "400",
          display: "inline-block",
        }}
      >
        &nbsp;
        {account.age}
      </Typography>
      {account.showActive && account.recentlyActive ? (
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
      ) : null}
      {current === 0 && (
        <div className={classes.flexRow}>
          <LocationOnOutlinedIcon className={classes.tag} />
          <Typography variant="body1" className={classes.tag}>
            {account.distance} km away
          </Typography>
        </div>
      )}

      {current === 0 && (
        <Typography variant="body1" className={classes.aboutMe}>
          {account.aboutMe}
        </Typography>
      )}
      {current === 1 && (
        <div className={classes.flexRow}>
          <HouseOutlinedIcon className={classes.tag} />
          <Typography variant="body2" className={classes.tag}>
            {locaName}
          </Typography>
        </div>
      )}
      {current === 1 && (
        <div className={classes.root}>
          {account.sports.map(({ sportName, id }, idx) => {
            return (
              <Chip
                label={sportName}
                className={classes.chip}
                color={
                  account.commonSports?.includes(id) ? "secondary" : "default"
                }
                key={idx}
              />
            );
          })}
        </div>
        //TODO match colors of tags if sport matches that of the user
      )}
    </div>
  );
}
