import React, { useContext, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import { IconButton, Paper } from "@material-ui/core";
import axios from "../../config/axios";
import ConfirmModal from "./ConfirmModal";
import { EditModeContext } from "../../contexts/EditModeContextProvider";

const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: "10px",
    display: "inline-block",
    margin: "2vw",
    width: "26vw",
    height: "calc(26vw * 1.5)",
    overflow: "hidden",
    objectFit: "cover",
    objectPosition: "50% 50%",
  },
  icon: {
    position: "absolute",
    right: "0px",
    bottom: "0px",
    zIndex: "10",
    background: "linear-gradient(45deg, #E8407D 10%, #EE7F5E 90%)",
    color: "white",
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  flexWrap: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5vw",
  },
  empty: {
    backgroundColor: "#E8E8E8",
    border: "4px lightgray dashed",
    borderRadius: "10px",
    display: "inline-block",
    margin: "1vw",
    width: "calc(26vw - 5px)",
    height: "calc(39vw - 5px)",
  },
  input: {
    opacity: "0",
    width: "100%",
    height: "100%",
    position: "absolute",
    top: "0px",
    bottom: "0px",
    padding: "0px",
    zIndex: "1000",
  },
}));

export default function AddPhoto({ addedPhoto, setAddedPhoto }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [trigger, setTrigger] = React.useState(false);
  const { editMode, setEditMode } = useContext(EditModeContext);
  const [images, setImages] = useState([]);

  const arr = [{}, {}, {}, {}, {}, {}];
  const imagesArr = arr.map((el, idx) => {
    return images[idx] || {};
  });

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const getPhotos = async () => {
    const res = await axios.get("/media/");
    setImages(res.data.images);
    setAddedPhoto(res.data.images.length);
  };

  if (editMode === false) {
    useEffect(() => {
      getPhotos();
    }, [trigger]);
  }


  const removePhoto = async (imageId) => {
    await axios.delete("/media/" + imageId);
    setTrigger(!trigger);
  };

  const addPhoto = async (photo) => {
    const formData = new FormData();
    formData.append("image", photo);
    await axios.post("/media/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    setTrigger(!trigger);
  };



  return (
    <div className={classes.flexWrap}>
      {imagesArr.map((image, idx) => {
        return image.image ? (
          <div style={{ position: "relative" }} onClick={handleOpen} key={idx}>
            <img src={image.image} className={classes.paper} key={idx} />
            <div className={classes.icon}>
              <ClearRoundedIcon fontSize="small" />
            </div>
            <ConfirmModal
              message="DELETE"
              handleClose={handleClose}
              open={open}
              setOpen={setOpen}
              confirmAction={() => {
                removePhoto(image.id);
                handleClose();
              }}
            />
          </div>
        ) : (
          <form
            style={{ position: "relative" }}
            key={idx}
            enctype="multipart/form-data"
          >
            <input
              name="file"
              accept="image/*"
              className={classes.input}
              type="file"
                onChange={(e) => {
                addPhoto(e.target.files[0])
              }}
            />
            <div className={classes.empty} />
            <div className={classes.icon}>
              <AddRoundedIcon fontSize="default" />
            </div>
          </form>
        );
      })}
    </div>
  );
}
