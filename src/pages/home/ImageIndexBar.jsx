import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  bar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "absolute",
    top: "12px",
    width: "85vw",
  },
  each: {
    height: "4px",
    borderRadius: "5px",
    boxShadow: "-2px 5px 15px 7px rgba(0,0,0,0.3)",
  },
}));

export default function ImageIndexBar({ length, current }) {
  const classes = useStyles();
  let arr = []
    
  for (let i = 0; i < length; i++) {
    arr.push(" ")
  }


  return (
    <div className={classes.bar}>
      {arr.map((a, i) => {
        return <div key={i}
          className={classes.each}
          style={{
            width: `${(100 - length * 1.5) / length}%`,
            backgroundColor: i === current ? "white" : "black",
            opacity: i === current? "100%": "20%"
            
            
        }}
        ></div>;
      })}
    </div>
  );
}
