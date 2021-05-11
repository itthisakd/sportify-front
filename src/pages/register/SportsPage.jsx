import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MadeButton from "../shared/Button";
import HeadButton from "../shared/HeadRegisterButton";
import { Chip } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  header: {
    fontWeight: 550,
    textAlign: "left",
    marginLeft: "10%",
    width: "40%",
  },
  tag: {
    margin: "4px",
    border: "solid 1px",
  },
}));

export default function SportsPage() {
  const classes = useStyle();
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <div>
      <HeadButton />
      <div style={{ marginTop: "1%" }}>
        <Typography variant="h4" className={classes.header}>
          Sports
        </Typography>
      </div>
      <div style={{ marginTop: '5%'}}>
        <Chip
          className={classes.tag}
          variant="outlined"
          size="small"
          label="Clickable"
          onClick={handleClick}
        />
      </div>
      <div style={{ marginTop: "5%" }}>
        <MadeButton text="CONTINUE" />
      </div>
    </div>
  );
}
