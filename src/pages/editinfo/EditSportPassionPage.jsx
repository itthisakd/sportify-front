import React from "react";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";

export default function EditSportPassionPage() {
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <div style={{ backgroundColor: "#f5f7fa", paddingBottom: "50px" }}>
      <div
        style={{
          borderStyle: "solid",
          borderWidth: "0 0 1px 0",
          borderBottomColor: "#e8e8e8",
          height: "43px",
          backgroundColor: "white",
          display: 'flex'
        }}
      >
        <h1
          style={{
            fontSize: "18px",
            margin: "auto",
            backgroundColor: "white",
          }}
        >
          Edit Passions
        </h1>
      </div>
      <Button
        style={{
          top: 0,
          right: 0,
          height: "43px",
          position: "absolute",
          textTransform: "none",
        }}
        color="secondary"
      >
        Done
      </Button>
      <div>
        <div
          style={{
            fontSize: "14px",
            padding: "0 12px",
            margin: "20px 0",
            letterSpacing: "0",
            textAlign: "left",
          }}
        >
          Select passions that you'd like to share with the people you connect
          with. Choose a minimun of 3.
        </div>
        <div
          style={{
            margin: "20px 0",
            padding: "0 12px",
            letterSpacing: "0",
            textAlign: "left",
            fontWeight: "800",
            fontSize: '12px'
          }}
        >
          <span>PASSIONS</span>
        </div>
        <div
          style={{
            margin: "12px 0",
            padding: "16px 12px",
            backgroundColor: "white",
          }}
        >
          <Chip
            variant="outlined"
            size="small"
            label="Clickable"
            onClick={handleClick}
            style={{ margin: "4px", border: "solid 1px" }}
          />
          <Chip
            variant="outlined"
            size="small"
            label="Clickable"
            onClick={handleClick}
            style={{ margin: "4px", border: "solid 1px" }}
          />
          <Chip
            variant="outlined"
            size="small"
            label="Clickable"
            onClick={handleClick}
            style={{ margin: "4px", border: "solid 1px" }}
          />
          <Chip
            variant="outlined"
            size="small"
            label="Clickable"
            onClick={handleClick}
            style={{ margin: "4px", border: "solid 1px" }}
          />
          <Chip
            variant="outlined"
            size="small"
            label="Clickable"
            onClick={handleClick}
            style={{ margin: "4px", border: "solid 1px" }}
          />
          <Chip
            variant="outlined"
            size="small"
            label="Clickable"
            onClick={handleClick}
            style={{ margin: "4px", border: "solid 1px" }}
          />
          <Chip
            variant="outlined"
            size="small"
            label="Clickable"
            onClick={handleClick}
            style={{ margin: "4px", border: "solid 1px" }}
          />
          <Chip
            variant="outlined"
            size="small"
            label="Clickable"
            onClick={handleClick}
            style={{ margin: "4px", border: "solid 1px" }}
          />
          <Chip
            variant="outlined"
            size="small"
            label="Clickable"
            onClick={handleClick}
            style={{ margin: "4px", border: "solid 1px" }}
          />
          <Chip
            variant="outlined"
            size="small"
            label="Clickable"
            onClick={handleClick}
            style={{ margin: "4px", border: "solid 1px" }}
          />
          <Chip
            variant="outlined"
            size="small"
            label="Clickable"
            onClick={handleClick}
            style={{ margin: "4px", border: "solid 1px" }}
          />
        </div>
      </div>
    </div>
  );
}
