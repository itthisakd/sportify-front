import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ImageIndexBar from "./ImageIndexBar";
import InfoContainer from "./InfoContainer";
import InfoIcon from "@material-ui/icons/Info";

const useStyles = makeStyles(() => ({
  paper: {
    width: "100vw",
    height: "150vw",
  },
  float: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100vw",
    height: "135vw",
  },
  leftTap: {
    width: "50vw",
    height: "100%",
    position: "absolute",
    top: "0px",
    left: "0px",
    zIndex: "10",
    cursor: "pointer",
    userSelect: "none",
  },
  rightTap: {
    width: "50vw",
    height: "100%",
    position: "absolute",
    top: "0px",
    right: "0px",
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
    //REVIEW transition to become smoother
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
    boxShadow: "-2px 5px 15px 7px rgba(0,0,0,0.2)",
  },
  info: {
    position: "absolute",
    textAlign: "left",
  },
}));

export default function ImageSlider({ account, viewProfile }) {
  const classes = useStyles();
  const [current, setCurrent] = useState(0);

  const slides = account.images;

  const nextSlide = () => {
    if (current !== slides.length - 1)
      setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (current !== 0)
      setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className={classes.container}>
      <div className={classes.leftTap} onClick={prevSlide}></div>
      <div className={classes.rightTap} onClick={nextSlide}></div>
      <ImageIndexBar
        className={classes.imageIndexBar}
        current={current}
        length={slides.length}
      />
      <div
        style={{
          width: "100vw",
          height: "110vw",
          overflow: "hidden",
          objectFit: "cover",
          objectPosition: "50% 50%",
        }}
      >
        {slides.map((slide, index) => {
          return (
            <div key={index}>
              {index === current && (
                <Paper
                  elevation={3}
                  className={index === current ? classes.active : classes.slide}
                  key={index}
                  className={classes.paper}
                >
                  <img
                    className={classes.paper}
                    src={slide.image}
                    key={index}
                  />
                </Paper>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
