import React from "react";
import { Button, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SectionHeader from "../shared/SectionHeader"
import axios from 'axios'

const useStyles = makeStyles({
  tag: {
    margin: "4px",
    border: "solid 1px",
  },
});
export default function EditSportPassionPage() {
  const classes = useStyles();
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <div style={{ backgroundColor: "#f5f7fa", paddingBottom: "50px" }}>
      <SectionHeader title="Edit Sports" doneAction={() => history.push("/profile")} />
      <div>
        <div
          style={{
            fontSize: "14px",
            padding: "0 12px",
            margin: "20px 0",
            letterSpacing: "0",
            textAlign: "left",
          }}
        >
          Select passions that you'd like to share with the people you connect
          with. Choose a minimun of 3.
        </div>
        <div
          style={{
            margin: "20px 0",
            padding: "0 12px",
            letterSpacing: "0",
            textAlign: "left",
            fontWeight: "800",
            fontSize: "12px",
          }}
        >
          <span>PASSIONS</span>
        </div>
        <div
          style={{
            margin: "12px 0",
            padding: "16px 12px",
            backgroundColor: "white",
          }}
        >
          <Chip
            className={classes.tag}
            variant="outlined"
            size="small"
            label="Clickable"
            onClick={handleClick}
          />
          <Chip
            className={classes.tag}
            variant="outlined"
            size="small"
            label="Football"
            onClick={handleClick}
          />
          <Chip
            className={classes.tag}
            variant="outlined"
            size="small"
            label="Surf Skate"
            onClick={handleClick}
          />
          <Chip
            className={classes.tag}
            variant="outlined"
            size="small"
            label="Basketball"
            onClick={handleClick}
          />
          <Chip
            className={classes.tag}
            variant="outlined"
            size="small"
            label="Bowling"
            onClick={handleClick}
          />
          <Chip
            className={classes.tag}
            variant="outlined"
            size="small"
            label="Running"
            onClick={handleClick}
          />
          <Chip
            className={classes.tag}
            variant="outlined"
            size="small"
            label="Hikinh"
            onClick={handleClick}
          />
          <Chip
            className={classes.tag}
            variant="outlined"
            size="small"
            label="Badminton"
            onClick={handleClick}
          />
          <Chip
            className={classes.tag}
            variant="outlined"
            size="small"
            label="Golf"
            onClick={handleClick}
          />
          <Chip
            className={classes.tag}
            variant="outlined"
            size="small"
            label="Tennis"
            onClick={handleClick}
          />
          <Chip
            className={classes.tag}
            variant="outlined"
            size="small"
            label="Swimming"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
}
