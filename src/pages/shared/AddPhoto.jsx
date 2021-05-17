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
    boxShadow: theme.shadows[1],
  },
  icon: {
    position: "absolute",
    right: "0px",
    bottom: "0px",
    background: "linear-gradient(45deg, #E8407D 10%, #EE7F5E 90%)",
    color: "white",
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: theme.shadows[2],
  },
  Xicon: {
    position: "absolute",
    right: "0px",
    bottom: "0px",
    color: "linear-gradient(45deg, #E8407D 10%, #EE7F5E 90%)",
    backgroundColor: "white",
    width: "25px",
    height: "25px",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: theme.shadows[2],
  },
  flexWrap: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5vw",
  },
  empty: {
    backgroundColor: "#f1f0f0",
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
  },
}));

export default function AddPhoto({ addedPhoto, setAddedPhoto }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [trigger, setTrigger] = React.useState(false);
  const { editMode, setEditMode } = useContext(EditModeContext);
  const [images, setImages] = useState([]);
  const [imageId, setImageId] = useState("");

  const arr = [{}, {}, {}, {}, {}, {}];
  const imagesArr = arr.map((el, idx) => {
    return images[idx] || {};
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const getPhotos = async () => {
    const res = await axios.get("/media/");
    setImages(res.data.images);
    setAddedPhoto(res.data.images.length);
  };

  useEffect(() => {
    getPhotos();
  }, [trigger]);

  const removePhoto = async (id) => {
    await axios.delete("/media/" + id);
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
          <div
            style={{ position: "relative" }}
            onClick={
              images.length > 1
                ? () => {
                    setOpen(true);
                    setImageId(image.id);
                  }
                : null
            }
            key={idx}
          >
            <img src={image.image} className={classes.paper} key={idx} />
            <div className={classes.Xicon}>
              <AddRoundedIcon
                fontSize="default"
                style={{ transform: "rotateZ(45deg)", color: "#E8407D" }}
              />
            </div>
          </div>
        ) : (
          <div style={{ position: "relative" }} key={idx}>
            <input
              name="file"
              accept="image/*"
              className={classes.input}
              type="file"
              onChange={(e) => {
                addPhoto(e.target.files[0]);
              }}
            />
            <div className={classes.empty} />
            <div className={classes.icon}>
              <AddRoundedIcon fontSize="default" />
            </div>
          </div>
        );
      })}
      <ConfirmModal
        message="DELETE"
        handleClose={() => {
          setOpen(false);
        }}
        open={open}
        confirmAction={() => {
          removePhoto(imageId);
          setOpen(false);
        }}
        cancelAction={() => {
          setOpen(false);
        }}
      />
    </div>
  );
}
