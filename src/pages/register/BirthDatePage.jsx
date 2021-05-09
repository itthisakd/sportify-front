import React from "react";
import { Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MadeButton from "../shared/Button";
import HeadButton from "../shared/HeadRegisterButton";

const useStyles = makeStyles((theme) => ({
  header: {
    fontWeight: 550,
    textAlign: "left",
    marginLeft: "10%",
    width: "55%",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '70%',
  },
}));

export default function BirthDatePage() {
  const classes = useStyles();
  return (
    <div>
      <HeadButton />
      <div style={{ marginTop: "1%" }}>
        <Typography variant="h4" className={classes.header}>
          My Birthday is
        </Typography>
      </div>
      <div style={{ marginTop: "10%" }}>
        <TextField
          id="date"
          label="Birthday"
          type="date"
          defaultValue=""
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div style={{ marginTop: "10%" }}>
        <MadeButton text="CONTINUE" textColor='white'></MadeButton>
      </div>
    </div>
  );
}
