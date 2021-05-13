import React, { useContext, useEffect, useState } from "react";
import { EditModeContext } from "../../contexts/EditModeContextProvider";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Chip } from "@material-ui/core";
import LongButton from "../shared/LongButton";
import RegisHeader from "../shared/RegisHeader";
import SectionHeader from "../shared/SectionHeader";
import { useHistory } from "react-router-dom";
import { useData } from "../../contexts/DataContext";

const useStyle = makeStyles(() => ({
  header: {
    fontWeight: 550,
    textAlign: "left",
    marginLeft: "10%",
    width: "40%",
  },
  inactive: {
    margin: "5px",
  },
  active: {
    margin: "5px",
  },
  button: {
    padding: "30px 10px",
    textAlign: "center",
    position: "sticky",
    bottom: "0px",
    width: "100vw",
    background:
      "linear-gradient(0deg, rgba(255,255,255,1) 70%, rgba(255,255,255,0) 100%)",
  },
  bottom: {
    padding: "30px 10px",
    textAlign: "center",
    position: "sticky",
    bottom: "0px",
    background:
      "linear-gradient(0deg, rgba(255,255,255,1) 70%, rgba(255,255,255,0) 100%)",
    height: "10px",
  },
  gradientTop: {
    background:
      "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 31%, rgba(255,255,255,1) 100%)",
    position: "absolute",
    top: "100px",
    zIndex: "1000",
    padding: "20px 32px 30px 32px",
  },
  gradientTopEdit: {
    background:
      "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 31%, rgba(255,255,255,1) 100%)",
    position: "absolute",
    top: "43px",
    zIndex: "1000",
    padding: "20px 32px 30px 32px",
    width: "100vw",
  },
}));
const sports = [
  { sportId: 1, sportName: "a" },
  { sportId: 2, sportName: "Hello World" },
  { sportId: 3, sportName: "Apex Legend" },
  { sportId: 4, sportName: "Dota 2" },
  { sportId: 5, sportName: "Water" },
  { sportId: 6, sportName: "Football" },
  { sportId: 7, sportName: "Game" },
  { sportId: 8, sportName: "Dom" },
  { sportId: 9, sportName: "Palm" },
  { sportId: 10, sportName: "Bank" },
];

export default function SportsPage() {
  const { editMode, setEditMode } = useContext(EditModeContext);
  const { setValues, data } = useData();
  const [selectedChips, setSelectedChips] = useState([]);
  const [oldSelectedChips, setOldSelectedChips] = useState([]);
  const history = useHistory();
  const classes = useStyle();

  const handleSelect = (itemId) => {
    if (selectedChips.includes(itemId) && selectedChips.length > 0) {
      setSelectedChips(selectedChips.filter((item) => item !== itemId));
    } else if (
      selectedChips.includes(itemId) === false &&
      selectedChips.length < 5
    ) {
      setSelectedChips([...selectedChips, itemId]);
    }
  };

  const intersection = oldSelectedChips.filter((value) =>
    selectedChips.includes(value)
  ); //
  const removeSports = oldSelectedChips.filter(
    (value) => intersection.includes(value) === false
  );
  const addSports = selectedChips.filter(
    (value) => intersection.includes(value) === false
  );
  const handleRegis = () => {
    setValues({ addSports, removeSports });
    history.push("/photos");
  };
  console.log(data);

  const handleEditInfo = () => {
    setEditMode(false);
    history.push("/edit-info");
  };

  // if (editMode === true) {
  //   useEffect(async () => {
  //     const res = await axios.get("/getsports")
  //     setOldSelectedChips(res.sports)
  //     setSelectedChips(res.sports)
  //   }, [])
  // }

  if (editMode === false)
    return (
      <div
        style={{ position: "relative", height: "100vh", overflow: "hidden" }}
      >
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
          }}
        >
          <RegisHeader
            iconType="back"
            onClick={() => history.push("/gender")}
            text="Sports"
          />
          <div className={classes.gradientTop}>
            <Typography variant="caption" style={{ zIndex: "1001" }}>
              You can only select a maximum of 5 sports.
            </Typography>
          </div>
          <div
            style={{
              textAlign: "left",
              padding: "60px 10vw 100px 10vw",
              overflow: "scroll",
            }}
          >
            {sports.map((item) => (
              <Chip
                className={
                  selectedChips.includes(item.sportId)
                    ? classes.active
                    : classes.inactive
                }
                variant={
                  selectedChips.includes(item.sportId) ? "default" : "outlined"
                }
                size="small"
                key={item.sportId}
                label={item.sportName}
                color={
                  selectedChips.includes(item.sportId) ? "secondary" : "default"
                }
                onClick={() => handleSelect(item.sportId)}
              />
            ))}
          </div>
        </div>
        <div className={classes.button}>
          <LongButton name="CONTINUE" onClick={handleRegis} />
        </div>
      </div>
    );
  else
    return (
      <div
        style={{ position: "relative", height: "100vh", overflow: "hidden" }}
      >
        <div
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
          }}
        >
          <SectionHeader title="Edit Sports" doneAction={handleEditInfo} />
          <div className={classes.gradientTopEdit}>
            <Typography variant="body1" style={{ zIndex: "1001" }}>
              You can only select a maximum of 5 sports.
            </Typography>
          </div>
          <div
            style={{
              textAlign: "left",
              padding: "60px 10vw 0px 10vw",
              overflow: "scroll",
            }}
          >
            {sports.map((item) => (
              <Chip
                className={
                  selectedChips.includes(item.sportId)
                    ? classes.active
                    : classes.inactive
                }
                variant={
                  selectedChips.includes(item.sportId) ? "default" : "outlined"
                }
                size="small"
                key={item.sportId}
                label={item.sportName}
                color={
                  selectedChips.includes(item.sportId) ? "secondary" : "default"
                }
                onClick={() => handleSelect(item.sportId)}
              />
            ))}
            <div className={classes.bottom}></div>
          </div>
        </div>
      </div>
    );
}
