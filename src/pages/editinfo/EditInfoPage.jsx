import React, { useContext } from "react";
import { EditModeContext } from "../../contexts/EditModeContextProvider";
import {
  Select,
  MenuItem,
  FormControl,
  Input,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SectionHeader from "../shared/SectionHeader";
import LongButton from "../shared/LongButton";

import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useData } from "../../contexts/DataContext"
import AddPhoto from "../shared/AddPhoto"

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
  
}));
const schema = yup.object().shape({
  aboutMe: yup.string(),
  job: yup.string(),
  instagram: yup.string(),
  school: yup.string(),
  gender: yup.string().required(),
});

export default function EditInfoPage() {
  const classes = useStyles();
  const history = useHistory();
  const { editMode, setEditMode } = useContext(EditModeContext);
  const {setValues, data} = useData()
  const { register, handleSubmit, formState: {errors}} = useForm({
    defaultValue: {},
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  const handleEditSports = () => {
    setEditMode(true);
    history.push("/sports");
  };
  const onSubmit = (edit) => {
    setValues(edit)
    history.push("/profile")
  };

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
      <AddPhoto/>
      <div style={{ textAlign: "center" }}>
        <LongButton name="ADD MEDIA"></LongButton>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h5 className={classes.title}>ABOUT ME</h5>
        <Input
          {...register("aboutMe")}
          multiline={true}
          disableUnderline={true}
          className={classes.input}
        ></Input>
      </div>
      <div onClick={handleEditSports} >
        <h5 className={classes.title}>SPORT</h5>
        <div style={{ height: "43px", backgroundColor: 'white' }}></div>
      </div>
      <div>
        <h5 className={classes.title}>JOB TITLE</h5>
        <Input
        {...register("job")}
          multiline={true}
          disableUnderline={true}
          placeholder="Add Job Title"
          className={classes.input}
        ></Input>
      </div>
      <div>
        <h5 className={classes.title}>SCHOOL</h5>
        <Input
        {...register("school")}
          multiline={true}
          disableUnderline={true}
          placeholder="Add School"
          className={classes.input}
        ></Input>
      </div>
      <div>
        <h5 className={classes.title}>INSTAGRAM</h5>
        <Input
        {...register("instagram")}
          multiline={true}
          disableUnderline={true}
          placeholder="Add Instagram's Username"
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
          }}>
          <Select
          {...register("gender")}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            style={{ padding: "12px" }}>
            <MenuItem value={"m"}>Male</MenuItem>
            <MenuItem value={"f"}>Female</MenuItem>
          </Select>
        </FormControl>
      </div>
      </form>
    </div>
  );
}
