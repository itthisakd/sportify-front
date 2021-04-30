import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  Button,
  Input,
  Grid,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SectionHeader from "../shared/SectionHeader";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "left",
    padding: "0.5rem",
    margin: "1rem 0 0 0",
  },
  input: {
    backgroundColor: "white",
    width: "100%",
    padding: "12px",
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function EditInfoPage() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#f5f7fa",
        paddingBottom: "50px",
      }}
    >
      <SectionHeader
        title="Edit Info"
        doneAction={() => history.push("/profile")}
      />
      <div className={classes.root}>
        <Grid
          container
          spacing={1}
          style={{
            justifyContent: "center",
            width: "100%",
            padding: "2px",
            margin: "0",
          }}
        >
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </div>
      <span>
        <Button
          style={{
            width: "80%",
            borderRadius: "100px",
            backgroundColor: "#ff9600",
            fontSize: "16px",
          }}
        >
          ADD MEDIA
        </Button>
      </span>
      <div>
        <h5 className={classes.title}>ABOUT ME</h5>
        <Input
          multiline={true}
          disableUnderline={true}
          className={classes.input}
        ></Input>
      </div>
      <div>
        <h5 className={classes.title}>SPORT</h5>
        <a href="/edit-passion">
          <Input
            multiline={true}
            disableUnderline={true}
            className={classes.input}
          ></Input>
        </a>
      </div>
      <div>
        <h5 className={classes.title}>JOB TITLE</h5>
        <Input
          multiline={true}
          disableUnderline={true}
          placeholder="Add Job Title"
          className={classes.input}
        ></Input>
      </div>
      <div>
        <h5 className={classes.title}>COMPANY</h5>
        <Input
          multiline={true}
          disableUnderline={true}
          placeholder="Add Company"
          className={classes.input}
        ></Input>
      </div>
      <div>
        <h5 className={classes.title}>SCHOOL</h5>
        <Input
          multiline={true}
          disableUnderline={true}
          placeholder="Add School"
          className={classes.input}
        ></Input>
      </div>
      <div>
        <h5 className={classes.title}>LIVING IN</h5>
        <Input
          multiline={true}
          disableUnderline={true}
          placeholder="Add Address"
          className={classes.input}
        ></Input>
      </div>
      <div>
        <h5 className={classes.title}>INSTAGRAM</h5>
        <Input
          multiline={true}
          disableUnderline={true}
          placeholder="Add Instagram's Username"
          className={classes.input}
        ></Input>
      </div>
      <div>
        <h5 className={classes.title}>SPOTIFY</h5>
        <Input
          multiline={true}
          disableUnderline={true}
          placeholder="Add Spotify's Username"
          className={classes.input}
        ></Input>
      </div>
      <div>
        <h5 className={classes.title}>GENDER</h5>
        <FormControl
          style={{
            width: "100%",
            textAlign: "left",
            backgroundColor: "white",
          }}
        >
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={gender}
            style={{ padding: "12px" }}
          >
            <MenuItem value={"Male"}>Male</MenuItem>
            <MenuItem value={"Female"}>Female</MenuItem>
            <MenuItem value={"Others"}>Others</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
