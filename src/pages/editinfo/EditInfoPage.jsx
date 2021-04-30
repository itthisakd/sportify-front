import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
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
});

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
      <div
        style={{
          borderStyle: "solid",
          borderWidth: "0 0 1px 0",
          borderBottomColor: "#e8e8e8",
          height: "43px",
          backgroundColor: "white",
          display: "flex",
        }}
      >
        <h1
          style={{
            fontSize: "18px",
            margin: "auto",
            backgroundColor: "white",
          }}
        >
          Edit Info
        </h1>
      </div>
      <Button
        style={{ top: 0, right: 0, height: "43px", position: "absolute" }}
        color="secondary"
      >
        Done
      </Button>
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
            // onChange={handleChange}
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
