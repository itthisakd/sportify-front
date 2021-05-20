import React, { useContext, useEffect, useState } from "react";
import { EditModeContext } from "../../contexts/EditModeContextProvider";
import { Input } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SectionHeader from "../shared/SectionHeader";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useData } from "../../contexts/DataContext";
import AddPhoto from "../shared/AddPhoto";
import Typography from "@material-ui/core/Typography";
import NavigateNextRoundedIcon from "@material-ui/icons/NavigateNextRounded";
import axios from "../../config/axios";

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "left",
    padding: "0.5rem",
    margin: "10px 0px 0px 10px",
    fontWeight: "400",
  },
  input: {
    backgroundColor: "white",
    padding: "12px 12px 12px 22px",
    borderTop: "0.5px solid #eeeded",
    borderBottom: "0.5px solid #eeeded",
    width: "100vw",
    height: "40px",
  },
  inputWordBreak: {
    backgroundColor: "white",
    padding: "12px 12px 12px 22px",
    borderTop: "0.5px solid #eeeded",
    borderBottom: "0.5px solid #eeeded",
    width: "100vw",
    wordBreak: "break-all",
  },
}));
const schema = yup.object().shape({
  aboutMe: yup.string(),
  job: yup.string(),
  instagram: yup
    .string()
    .matches(
      /^[a-z_.0-9]+$/,
      "Username must not contain spaces, capital letters or special characters."
    ),
  spotify: yup
    .string()
    .matches(
      /^[a-z_.0-9]+$/,
      "Username must not contain spaces, capital letters or special characters."
    ),
  school: yup.string(),
});

export default function EditInfoPage() {
  const classes = useStyles();
  const history = useHistory();
  const [account, setAccount] = useState({});
  const { editMode, setEditMode } = useContext(EditModeContext);
  const [addedPhoto, setAddedPhoto] = useState(0);

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      aboutMe: "",
      job: "",
      instagram: "",
      spotify: "",
      school: "",
    },
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  React.useEffect(() => {
    const getAccount = async () => {
      const res = await axios.get("/account/myaccount");
      setAccount(res.data);
      setAddedPhoto(res.data.images.length);
      console.log(res.data);
      reset({
        aboutMe: res.data.aboutMe,
        job: res.data.job,
        school: res.data.school,
        instagram: res.data.instagram,
        spotify: res.data.spotify,
      });
    };
    getAccount();
  }, [reset]);

  const handleEditSports = () => {
    setEditMode(true);
    history.push("/sports");
  };

  const onSubmit = async (edit) => {
    await axios.patch("/account/myaccount", edit);
    setEditMode(false);
    history.push("/profile");
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
        style={{
          backgroundColor: "ghostwhite",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <SectionHeader
          title="Edit Info"
          style={{
            width: "100vw",
            position: "sticky",
            top: "0px",
            left: "0px",
          }}
          type="submit"
        />
        <AddPhoto addedPhoto={addedPhoto} setAddedPhoto={setAddedPhoto} />

        <div>
          <Typography variant="body2" className={classes.title}>
            ABOUT ME
          </Typography>
          <Controller
            defaultValue={account.aboutMe}
            name="aboutMe"
            control={control}
            render={({ field }) => (
              <Input
                className={classes.inputWordBreak}
                disableUnderline={true}
                multiline={true}
                placeholder="About Me"
                {...field}
              />
            )}
          />
        </div>
        <div onClick={handleEditSports}>
          <Typography variant="body2" className={classes.title}>
            SPORT
          </Typography>
          <div
            style={{
              position: "relative",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "12px 12px 12px 22px",
                borderTop: "0.5px solid #eeeded",
                borderBottom: "0.5px solid #eeeded",
                width: "100vw",
                lineHeight: "1.5rem",
              }}
            >
              {account.sports?.map((item) => item.sportName).join(",  ")}
            </div>
            <NavigateNextRoundedIcon
              style={{
                color: "lightgray",
                position: "absolute",
                right: "5px",
                top: "3px",
              }}
              fontSize="large"
            />
          </div>
        </div>
        <div>
          <Typography variant="body2" className={classes.title}>
            JOB TITLE
          </Typography>
          <Controller
            defaultValue={account.job}
            name="job"
            control={control}
            render={({ field }) => (
              <Input
                className={classes.input}
                disableUnderline={true}
                placeholder="Add Job Title"
                {...field}
              />
            )}
          />
        </div>
        <div>
          <Typography variant="body2" className={classes.title}>
            SCHOOL
          </Typography>
          <Controller
            defaultValue={account.school}
            name="school"
            control={control}
            render={({ field }) => (
              <Input
                className={classes.input}
                disableUnderline={true}
                placeholder="Add School"
                {...field}
              />
            )}
          />
        </div>
        <div>
          <Typography variant="body2" className={classes.title}>
            INSTAGRAM
          </Typography>
          <Controller
            defaultValue={account.instagram}
            name="instagram"
            control={control}
            render={({ field }) => (
              <Input
                className={classes.input}
                disableUnderline={true}
                placeholder="Add Instagram Username"
                {...field}
                error={!!errors?.instagram}
                helperText={errors?.instagram?.message}
              />
            )}
          />
          {!!errors?.instagram ? (
            <Typography
              variant="caption"
              component="p"
              style={{ padding: "0px 20px", color: "red" }}
            >
              {errors?.instagram?.message}
            </Typography>
          ) : (
            <Typography variant="caption" component="p"></Typography>
          )}
        </div>
        <div>
          <Typography variant="body2" className={classes.title}>
            SPOTIFY
          </Typography>
          <Controller
            defaultValue={account.spotify}
            name="spotify"
            control={control}
            render={({ field }) => (
              <Input
                className={classes.input}
                disableUnderline={true}
                placeholder="Add Spotify Username"
                {...field}
              />
            )}
          />
          {!!errors?.spotify ? (
            <Typography
              variant="caption"
              component="p"
              style={{ padding: "0px 20px", color: "red" }}
            >
              {errors?.spotify?.message}
            </Typography>
          ) : (
            <Typography variant="caption" component="p"></Typography>
          )}
        </div>
      </form>
      <div style={{ height: "40px", backgroundColor: "ghostwhite" }}></div>
    </div>
  );
}
