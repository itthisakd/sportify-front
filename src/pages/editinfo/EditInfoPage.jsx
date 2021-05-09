import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  IconButton,
  Input,
  Grid,
  Paper,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SectionHeader from "../shared/SectionHeader";
import MadeButton from "../shared/Button";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";

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
  flexWrap: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px",
  },
  paper: {
    padding: theme.spacing(1),
    margin: "5px",
    textAlign: "center",
    color: theme.palette.text.secondary,
    position: "relative",
    width: "24vw",
    height: "40vw",
  },
  icon: {
    position: "absolute",
    right: "-5px",
    bottom: "-5px",
    zIndex: "10",
    backgroundColor: "#ff9600",
    color: "white",
    width: "25px",
    height: "25px",
  },
}));

export default function EditInfoPage() {
  const classes = useStyles();

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
      <div className={classes.flexWrap}>
        <Paper className={classes.paper}>
          <IconButton
            size="small"
            className={classes.icon}
            onClick={() => console.log("test")}
          >
            <ClearRoundedIcon style={{fontSize:"100%"}}/>
          </IconButton>
        </Paper>
        <Paper className={classes.paper}>
          <IconButton
            size="small"
            className={classes.icon}
            onClick={console.log("test")}
          >
            <ClearRoundedIcon style={{fontSize:"100%"}}/>
          </IconButton>
        </Paper>
        <Paper className={classes.paper}>
          <IconButton
            size="small"
            className={classes.icon}
            onClick={console.log("test")}
          >
            <ClearRoundedIcon style={{fontSize:"100%"}}/>
          </IconButton>
        </Paper>
        <Paper className={classes.paper}>
          <IconButton
            size="small"
            className={classes.icon}
            onClick={console.log("test")}
          >
            <ClearRoundedIcon style={{fontSize:"100%"}}/>
          </IconButton>
        </Paper>
        <Paper className={classes.paper}>
          <IconButton
            size="small"
            className={classes.icon}
            onClick={console.log("test")}
          >
            <ClearRoundedIcon style={{fontSize:"100%"}}/>
          </IconButton>
        </Paper>
        <Paper className={classes.paper}>
          <IconButton
            size="small"
            className={classes.icon}
            onClick={console.log("test")}
          >
            <ClearRoundedIcon style={{fontSize:"100%"}}/>
          </IconButton>
        </Paper>
      </div>
      <span>
        <MadeButton text="ADD MEDIA"></MadeButton>
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
          </Select>
        </FormControl>
      </div>
    </div>
  );
}
