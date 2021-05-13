import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography} from "@material-ui/core";
import LongButton from "../shared/LongButton";
import AddPhoto from "../shared/AddPhoto"

const useStyles = makeStyles((theme) => ({
  header: {
    fontWeight: 550,
    textAlign: "center",
    width: "100vw",
  },
}));

export default function PhotosPage() {
  const classes = useStyles();

  return (
    <div>
      <div style={{ marginTop: "1%" }}>
        <Typography variant="h4" className={classes.header}>
          Add photos
        </Typography>
      </div>
      <AddPhoto/>
      <div style={{ marginTop: "25%", textAlign: "center" }}>
        <LongButton name="CONTINUE" />
      </div>
    </div>
  );
}
