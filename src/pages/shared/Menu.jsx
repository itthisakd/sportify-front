import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import { useHistory } from "react-router-dom"
import {MenuContext }from "../../contexts/MenuContextProvider"

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function LabelBottomNavigation() {
  const history = useHistory()
  const classes = useStyles();
  const { currentMenu, setCurrentMenu } = useContext(MenuContext)

  const handleChange = (event, newValue) => {
    setCurrentMenu(newValue);
  };

  return (
    <BottomNavigation value={currentMenu} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction value="home" onClick={ () => {history.push("/home")}} icon={<SearchRoundedIcon />} />
      <BottomNavigationAction value="likedby" onClick={ () => {history.push("/likedby")}} icon={<FavoriteRoundedIcon />} />
      <BottomNavigationAction value="matches" onClick={ () => {history.push("/matches")}} icon={<QuestionAnswerRoundedIcon />} />
      <BottomNavigationAction value="profile" onClick={ () => {history.push("/profile")}} icon={<AccountCircleRoundedIcon />} />
    </BottomNavigation>
  );
}
