import React from "react";
import { Button, Grid, Typography, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  margin: {
    top: 0,
    right: 0,
    height: "43px",
    position: "absolute",
    margin: "5px",
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function SectionHeader({ title, doneAction, type, style }) {
  const classes = useStyles();

  return (
    <div
      style={{
        ...style,
        width: "100vw",
        position: "sticky",
        zIndex: "1000",
        top: "0px",
        left: "0px",
      }}
    >
      <Paper elevation={1}>
        <Grid container style={{ height: "55px" }}>
          <Grid item xs={4}></Grid>
          <Grid
            item
            xs={4}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" component="p">
              {title}
            </Typography>
          </Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </Paper>
      <Button
        size="medium"
        color="secondary"
        className={classes.margin}
        onClick={doneAction}
        type={type}
        style={{
          zIndex: "100000",
        }}
      >
        Done
      </Button>
    </div>
  );
}

// TO USE
{
  /* <SectionHeader title="Settings" doneAction={() => history.push("/profile")} />; */
}
