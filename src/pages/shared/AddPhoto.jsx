import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import { IconButton, Paper } from "@material-ui/core";
import axios from "../../config/axios";
import ConfirmModal from "./ConfirmModal";

const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: "10px",
    display: "inline-block",
    margin: "2vw",
    width: "26vw",
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

export default function AddPhoto() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const images = [
    {
      id: 1,
      image:
        "https://i.picsum.photos/id/1002/600/900.jpg?hmac=4BSgpJzasHKS9vEgQ_Kn3WUjgvc1sUZv-E10bf1bCyA",
    },
    {
      id: 3,
      image:
        "https://i.picsum.photos/id/277/600/900.jpg?hmac=0SZDnUgJesoCsIFVR9u9uG9hUC3dQOxx0_pgop-aIoY",
    },
    {
      id: 4,
      image:
        "https://i.picsum.photos/id/705/600/900.jpg?hmac=19EE_8IKXcp7maJfLind1IgeEHKHlpbeSbN6o5uydJY",
    },
  ];

  const arr = [{}, {}, {}, {}, {}, {}];
  const imagesArr = arr.map((el, idx) => {
    return images[idx] || {};
  });

  const removePhoto = async (id) => {
    await axios.delete("/remove", { id });
  };

  const addPhoto = async (id) => {
    const formData = new FormData();
    formData.append("image", paymentSlip);
    await axios.post("/media/", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  return (
    <div className={classes.flexWrap}>
      {imagesArr.map((image) => {
        return image.image ? (
          <div style={{ position: "relative" }} onClick={handleOpen}>
            <img src={image.image} className={classes.paper} />
            <div className={classes.icon}>
              <ClearRoundedIcon fontSize="small" />
            </div>
          </div>
        ) : (
          <form style={{ position: "relative" }} onSubmit={addPhoto}>
            <input
              accept="image/*"
              className={classes.input}
              type="file"
              onChange={(e) => {
                setPhoto(e.target.files[0]);
              }}
            />
            <div className={classes.empty} />
            <div className={classes.icon}>
              <AddRoundedIcon fontSize="medium" />
            </div>
          </form>
        );
      })}
      <ConfirmModal
        message="DELETE"
        handleClose={handleClose}
        open={open}
        setOpen={setOpen}
        confirmAction={removePhoto}
      />
    </div>
  );
}
