import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@material-ui/core";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import ExploreRoundedIcon from "@material-ui/icons/ExploreRounded";
import QuestionAnswerRoundedIcon from "@material-ui/icons/QuestionAnswerRounded";
import FavoriteRoundedIcon from "@material-ui/icons/FavoriteRounded";
import { useHistory } from "react-router-dom";
import localStorageService from "../../services/localStorageService";

const useStyles = makeStyles({
  root: {
    width: "100%",
    margin: "0px",
    minWidth: "100vw",
  },
});

export default function LabelBottomNavigation() {
  const history = useHistory();
  const classes = useStyles();

  const currentMenu = localStorageService.getMenu();

  const handleChange = (event, newValue) => {
    localStorageService.setMenu(newValue);
  };

  return (
    <Paper
      elevation={1}
      style={{ position: "sticky", top: "0px", zIndex: "10" }}
    >
      <BottomNavigation
        value={localStorageService.getMenu()}
        onChange={handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          value="home"
          style={
            currentMenu === "home"
              ? {
                  color: "#5d00b1",
                }
              : null
          }
          onClick={() => {
            history.push("/home");
          }}
          icon={<ExploreRoundedIcon />}
        />
        <BottomNavigationAction
          value="likedby"
          onClick={() => {
            history.push("/likedby");
          }}
          icon={<FavoriteRoundedIcon />}
          style={
            currentMenu === "likedby"
              ? {
                  color: "#5d00b1",
                }
              : null
          }
        />
        <BottomNavigationAction
          value="matches"
          onClick={() => {
            history.push("/matches");
          }}
          icon={<QuestionAnswerRoundedIcon />}
          style={
            currentMenu === "matches"
              ? {
                  color: "#5d00b1",
                }
              : null
          }
        />
        <BottomNavigationAction
          value="profile"
          onClick={() => {
            history.push("/profile");
          }}
          icon={
            <AccountCircleRoundedIcon
              style={
                currentMenu === "profile"
                  ? {
                      color: "#5d00b1",
                    }
                  : null
              }
            />
          }
        />
      </BottomNavigation>
    </Paper>
  );
}
