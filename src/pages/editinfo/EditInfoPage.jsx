import React from "react";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";

export default function EditInfoPage() {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#f5f7fa",
      }}
    >
      <div
        style={{
          borderStyle: "solid",
          borderWidth: "0 0 1px 0",
          borderBottomColor: "#e8e8e8",
          alignItem: "center",
          justifyConten: "center",
          height: "43px",
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <h1
          style={{
            fontSize: "1.6rem",
            margin: 0,
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
      <div>
        <h5
          style={{ textAlign: "left", padding: "0.5rem", margin: "1rem 0 0 0" }}
        >
          ABOUT ME
        </h5>
        <Input
          multiline={true}
          disableUnderline={true}
          style={{ backgroundColor: "white", width: "100%", padding: "12px" }}
        ></Input>
      </div>
      <a href="">
        <div>
          <h5
            style={{
              textAlign: "left",
              padding: "0.5rem",
              margin: "1rem 0 0 0",
            }}
          >
            SPORT
          </h5>
          <Input
            multiline={true}
            disableUnderline={true}
            style={{ backgroundColor: "white", width: "100%", padding: "12px" }}
          ></Input>
        </div>
      </a >
      <div>
        <h5
          style={{ textAlign: "left", padding: "0.5rem", margin: "1rem 0 0 0" }}
        >
          JOB TITLE
        </h5>
        <Input
          multiline={true}
          disableUnderline={true}
          placeholder="Add Job Title"
          style={{ backgroundColor: "white", width: "100%", padding: "12px" }}
        ></Input>
      </div>
      <div>
        <h5
          style={{ textAlign: "left", padding: "0.5rem", margin: "1rem 0 0 0" }}
        >
          COMPANY
        </h5>
        <Input
          multiline={true}
          disableUnderline={true}
          placeholder="Add Company"
          style={{ backgroundColor: "white", width: "100%", padding: "12px" }}
        ></Input>
      </div>
      <div>
        <h5
          style={{ textAlign: "left", padding: "0.5rem", margin: "1rem 0 0 0" }}
        >
          SCHOOL
        </h5>
        <Input
          multiline={true}
          disableUnderline={true}
          placeholder="Add School"
          style={{ backgroundColor: "white", width: "100%", padding: "12px" }}
        ></Input>
      </div>
      <div>
        <h5
          style={{ textAlign: "left", padding: "0.5rem", margin: "1rem 0 0 0" }}
        >
          LIVING IN
        </h5>
        <Input
          multiline={true}
          disableUnderline={true}
          placeholder="Add Address"
          style={{ backgroundColor: "white", width: "100%", padding: "12px" }}
        ></Input>
      </div>
      <div>
        <h5
          style={{ textAlign: "left", padding: "0.5rem", margin: "1rem 0 0 0" }}
        >
          GENDER
        </h5>
        <FormControl
          style={{
            width: "95%",
            textAlign: "left",
            backgroundColor: "white",
            padding: "0.5rem",
          }}
        >
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            // value={gender}
            // onChange={handleChange}
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
