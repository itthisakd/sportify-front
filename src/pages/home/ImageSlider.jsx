import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ImageIndexBar from "./ImageIndexBar";
import InfoContainer from "./InfoContainer"

const useStyles = makeStyles(() => ({
  paper: {
    width: "90vw",
    height: "135vw",
    borderRadius: "15px",
  },
  float: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "90vw",
    height: "135vw",
  },
  rightTap: {
    width: "45vw",
    height: "135vw",
    position: "absolute",
    top: "0px",
    right: "0px",
    fontSize: "3rem",
    color: "#000",
    zIndex: "10",
    cursor: "pointer",
    userSelect: "none",
  },
  leftTap: {
    width: "45vw",
    height: "135vw",
    position: "absolute",
    top: "0px",
    left: "0px",
    fontSize: "3rem",
    color: "#000",
    zIndex: "10",
    cursor: "pointer",
    userSelect: "none",
  },
  slide: {
    opacity: "0",
    transitionDuration: "1s ease",
  },
  active: {
    opacity: "1",
    transitionDuration: "1s",
    transform: "scale(1.08)",
  },
  imageIndexBar: {
    position: "relative",
    top: "150px",
    width: "85vw",
  },
  container: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    position: "absolute",
    textAlign: "left",
    
  },
}));

export default function ImageSlider({account}) {
  const classes = useStyles();
  const [current, setCurrent] = useState(0);

  const slides = account.images;

  const nextSlide = () => {
    if (current !== slides.length-1)
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (current !== 0)
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className={classes.container}>
      <InfoContainer current={current} account={account}/>
      <ImageIndexBar
        className={classes.imageIndexBar}
        current={current}
        length={slides.length}
      />
      {slides.map((slide, index) => {
        return (
          <>
            {index === current && (
              <Paper
                elevation={3}
                className={index === current ? classes.active : classes.slide}
                key={index}
                className={classes.paper}
              >
                <img className={classes.paper} src={slide.image} key={index} />
              </Paper>
            )}
          </>
        );
      })}
      <div className={classes.leftTap} onClick={prevSlide}></div>
      <div className={classes.rightTap} onClick={nextSlide}></div>
    </div>
  );
}
