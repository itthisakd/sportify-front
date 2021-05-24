import React from "react";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles(() => ({
  button: {
    border: "1px gainsboro solid",
    fontSize: "25px",
    padding: "0px 20px",
  },
}));

export default function SelectSkill({
  selectedChips,
  sports,
  setOutputSports,
  outputSports,
  editMode,
}) {
  const classes = useStyle();

  const selectedSports = sports.filter((sport) =>
    selectedChips.includes(sport.sportId)
  );

  if (!editMode) {
    React.useEffect(() => {
      setOutputSports(
        selectedChips.map((sportId) => {
          return { sportId, skill: 0 };
        })
      );
    }, []);
  }

  const styledButton = {};

  return (
    <div
      style={{
        textAlign: "left",
        padding: "60px 10vw 100px 10vw",
        overflow: "scroll",
        height: "50vh",
      }}
    >
      {selectedSports.map((sport) => {
        return (
          <div style={{ padding: "0px 0px" }}>
            <Typography variant="h6" style={{ padding: "5px 0px" }}>
              {sport.sportName}
            </Typography>
            <div style={{ padding: "0px" }}>
              <ButtonGroup size="small">
                {["🥉", "🥈", "🥇", "🏆"].map((skill, idx) => (
                  <Button
                    className={classes.button}
                    variant="outlined"
                    color="secondary"
                    style={
                      outputSports?.filter(
                        (spt) => spt.sportId === sport.sportId
                      )[0]?.skill ===
                      idx + 1
                        ? { backgroundColor: "#ffb4b4" }
                        : null
                    }
                    onClick={() => {
                      setOutputSports([
                        ...outputSports.filter(
                          (spt) => spt.sportId !== sport.sportId
                        ),
                        { sportId: sport.sportId, skill: idx + 1 },
                      ]);
                    }}
                  >
                    {skill}
                  </Button>
                ))}
              </ButtonGroup>
            </div>
          </div>
        );
      })}
      <div style={{ height: "100px" }} />
    </div>
  );
}
