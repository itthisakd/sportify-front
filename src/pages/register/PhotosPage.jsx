import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import LongButton from "../shared/LongButton";
import AddPhoto from "../shared/AddPhoto";
import RegisHeader from "../shared/RegisHeader";
import { useHistory } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import getCurrentLocation from "../../utilities/getCurrentLocation";
import axios from "../../config/axios";

const useStyles = makeStyles((theme) => ({
  header: {
    fontWeight: 550,
    textAlign: "center",
    width: "100vw",
  },
}));

export default function PhotosPage() {
  const { setValues, data } = useData();
  const classes = useStyles();
  const history = useHistory();
  const [addedPhoto, setAddedPhoto] = useState(0);
  const [currentLocation, setCurrentLocation] = useState("");

  useEffect(() => {
    async function getLocation() {
      const currentLo = await getCurrentLocation();
      setCurrentLocation(currentLo);
    }
    getLocation();
  }, []);

  console.log("currentLocation :>> ", currentLocation);

  const submitLocation = async () => {
    setTimeout(async () => {
      axios.patch("/account/currentlocation", {
        currentLocation,
        addSearchLo: true,
      });
    }, 5000);
  };

  console.log(data);

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <RegisHeader
        text="Add Photos"
        onClick={() => history.push("/birthdate")}
        style={{ height: "105px" }}
        iconType="none"
      >
        <Typography
          variant="body1"
          style={{ zIndex: "1001", margin: "0px 0px 0px 40px" }}
        >
          You must add at least 1 photo.
        </Typography>
      </RegisHeader>

      <AddPhoto addedPhoto={addedPhoto} setAddedPhoto={setAddedPhoto} />
      <div style={{ position: "absolute", bottom: "0px", margin: "auto" }}>
        <LongButton
          name="CONTINUE"
          onClick={() => {
            submitLocation();
            history.push("/welcome");
          }}
          variant={addedPhoto > 0 ? "contained" : "disabled"}
        />
      </div>
    </div>
  );
}
