import React, { useContext, useEffect, useState } from "react";
import { EditModeContext } from "../../contexts/EditModeContextProvider";
import { Select, MenuItem, Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SectionHeader from "../shared/SectionHeader";
import LongButton from "../shared/LongButton";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useData } from "../../contexts/DataContext";
import AddPhoto from "../shared/AddPhoto";
import Typography from "@material-ui/core/Typography";
import NavigateNextRoundedIcon from "@material-ui/icons/NavigateNextRounded";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "left",
    padding: "0.5rem",
    margin: "10px 0px 0px 10px",
    fontWeight: "500",
  },
  input: {
    backgroundColor: "white",
    padding: "12px 12px 12px 22px",
    borderTop: "0.5px solid lightgray",
    borderBottom: "0.5px solid lightgray",

    width: "100vw",
  },
}));
const schema = yup.object().shape({
  aboutMe: yup.string(),
  job: yup.string(),
  instagram: yup
    .string()
    .matches(/^[a-z_.0-9]+$/, "Username must be in correct format"),
  spotify: yup
    .string()
    .matches(/^[a-z_.0-9]+$/, "Username must be in correct format"),
  school: yup.string(),
});

export default function EditInfoPage() {
  const classes = useStyles();
  const history = useHistory();
  const [userById, setUserById] = useState({});
  const { editMode, setEditMode } = useContext(EditModeContext);
  const { setValues, data } = useData();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValue: {},
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  // useEffect(async () => {
  //   const res = await axios.get("/account/myaccount");
  //   setUserById(res.data);
  // }, []);

  const handleEditSports = () => {
    setEditMode(true);
    history.push("/sports");
  };

  const onSubmit = (edit) => {
    setValues(edit);
    // history.push("/profile")
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          backgroundColor: "ghostwhite",
        }}
      >
        <SectionHeader
          title="Edit Info"
          type="submit"
          style={{
            width: "100vw",
            position: "sticky",
            zIndex: "1000",
            top: "0px",
            left: "0px",
          }}
        />
        <AddPhoto />
        <div>
          <h5 className={classes.title}>ABOUT ME</h5>
          <Input
            {...register("aboutMe")}
            multiline={true}
            disableUnderline={true}
            className={classes.input}
          ></Input>
        </div>
        <div onClick={handleEditSports}>
          <h5 className={classes.title}>SPORT</h5>
          <div
            style={{
              height: "43px",
              backgroundColor: "white",
              position: "relative",
              width: "100vw",
            }}
          >
            <div className={classes.input} style={{ width: "100vw" }}>
              HELLO
            </div>
            <NavigateNextRoundedIcon
              style={{
                color: "lightgray",
                position: "absolute",
                right: "-5px",
                top: "3px",
              }}
              fontSize="large"
            />
          </div>
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
            placeholder="Add Instagram Username"
            className={classes.input}
          ></Input>
        </div>
        <div>
          <h5 className={classes.title}>SPOTIFY</h5>
          <Input
            {...register("spotify")}
            multiline={true}
            disableUnderline={true}
            placeholder="Add Spotify Username"
            className={classes.input}
          ></Input>
        </div>
      </form>
    </div>
  );
}
