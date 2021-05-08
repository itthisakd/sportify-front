import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  name: {
    fontWeight: "600",
  },
  info: {
    isplay: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "left",
    textAlign: "left",
    color: "white",
    position: "absolute",
    bottom: "0px",
    left: "0px",
    padding: "15px 20px",
    textShadow: "0px 0px 11px rgba(0, 0, 0, 0.5)",
  },
  aboutMe: {
    fontWeight: "400",
  },
  greenCircle: {
    backgroundColor: "lime",
    borderRadius: "50%",
    width: "7px",
    height: "7px",
    boxShadow: "0px 0px 11px rgba(0, 0, 0, 0.5)",
    margin: "10px 5px",
  },
}));

export default function InfoContainer({ current, account }) {
  const classes = useStyles();
  return (
    <div className={classes.info}>
      <Typography variant="h4" className={classes.name}>
        {account.firstName}, {account.age}
      </Typography>
      {!!account.showActive && !!account.recentlyActive && (
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
      )}
      {current === 0 && (
        <Typography variant="body1">{account.aboutMe}</Typography>
      )}
      {/* {current === 1 && (
        <Typography variant="h6" className={classes.aboutMe}>
          {account.aboutMe}
        </Typography>
      )}
      {current === 2 && (
        <Typography variant="h6" className={classes.aboutMe}>
          {account.aboutMe}
        </Typography>
      )} */}
    </div>
  );
}
