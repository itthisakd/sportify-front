import React, { useContext, useEffect, useState } from "react";
import { EditModeContext } from "../../contexts/EditModeContextProvider";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Chip } from "@material-ui/core";
import LongButton from "../shared/LongButton";
import RegisHeader from "../shared/RegisHeader";
import { useHistory } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import axios from "../../config/axios";
import SelectSports from "./SelectSports";
import SelectSkill from "./SelectSkill";

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
    padding: "30px 0px",
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

export default function SportsPage() {
  const { editMode, setEditMode } = useContext(EditModeContext);
  const { setValues, data } = useData();
  const [selectedChips, setSelectedChips] = useState([]);
  const [oldSelectedChips, setOldSelectedChips] = useState([]);
  const [sports, setSports] = useState([]);
  const [selectMode, setSelectMode] = useState(true);
  const [outputSports, setOutputSports] = useState([]);
  const history = useHistory();
  const classes = useStyle();

  const intersection = oldSelectedChips.filter((value) =>
    selectedChips.includes(value)
  );
  const removeSports = oldSelectedChips.filter(
    (value) => intersection.includes(value) === false
  );
  const addSports = outputSports.filter((sport) =>
    selectedChips
      .filter((value) => intersection.includes(value) === false)
      .includes(sport.sportId)
  );

  //ANCHOR get sports to display
  useEffect(() => {
    const getSports = async () => {
      const res = await axios.get("/sport/");
      setSports(res.data.sports);
    };
    getSports();
  }, []);

  //ANCHOR get chips selected by user

  if (editMode) {
    useEffect(() => {
      const getUserSports = async () => {
        const res = await axios.get("/sport/user");
        setOutputSports(res.data.sports);
        setSelectedChips(res.data.sports.map((sport) => sport.sportId));
        setOldSelectedChips(res.data.sports.map((sport) => sport.sportId));
      };
      getUserSports();
    }, []);
  }

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


  const handleSubmit = async () => {
    if (editMode == false) {
      await axios.post("/auth/register", {
        ...data,
        addSports,
      });
      history.push("/photos");
    } else {
      await axios.post("/sport/", { addSports, removeSports });
      setEditMode(true);
      history.push("/edit-info");
    }
  };

  const handleEditInfo = () => {
    setEditMode(false);
    history.push("/edit-info");
  };

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
        }}
      >
        <RegisHeader
          iconType={editMode || selectMode ? "none" : "back"}
          onClick={editMode ? () => null : () => history.push("/gender")}
          text="Sports"
        >
          {selectMode ? (
            <Typography
              variant="body1"
              style={{
                zIndex: "1001",
                margin: "0px 0px 0px 40px",
                width: "80%",
              }}
            >
              You can select a maximum of 5 sports.
            </Typography>
          ) : (
            <div
              style={{
                backgroundColor: "white",
                zIndex: "1001",
              }}
            >
              <Typography
                variant="body1"
                style={{
                  margin: "0px 0px 0px 40px",
                  width: "80%",
                }}
              >
                Indicate your skill level for each sport.
              </Typography>

              <Typography
                variant="body1"
                style={{
                  margin: "0px 0px 0px 40px",
                }}
              >
                🥉 – Beginner &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🥈 –
                Intermediate
              </Typography>
              <Typography
                variant="body1"
                style={{
                  margin: "0px 0px 0px 40px",
                }}
              >
                🥇 – Advanced&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🏆
                – Champ
              </Typography>
            </div>
          )}
        </RegisHeader>
        <div>
          {selectMode ? (
            <SelectSports
              sports={sports}
              selectedChips={selectedChips}
              handleSelect={handleSelect}
              classes={classes}
            />
          ) : (
            <SelectSkill
              sports={sports}
              outputSports={outputSports}
              setOutputSports={setOutputSports}
              selectedChips={selectedChips}
              classes={classes}
              editMode={editMode}
            />
          )}
        </div>
      </div>
      {selectMode ? (
        <div className={classes.button}>
          <LongButton
            name="NEXT"
            onClick={() => {
              setSelectMode(false);
            }}
            variant={selectedChips.length > 0 ? "contained" : "disabled"}
          />
        </div>
      ) : (
        <div className={classes.button}>
          <LongButton
            name={!editMode ? "DONE" : "CONTINUE"}
            onClick={handleSubmit}
            variant={
              selectMode
                ? selectedChips.length > 0
                  ? "contained"
                  : "disabled"
                : selectedChips.filter((id) =>
                    outputSports.map((sport) => sport.sportId).includes(id)
                  ).length === selectedChips.length
                ? "contained"
                : "disabled"
            }
            //FIXME condition wrong
          />
        </div>
      )}
    </div>
  );
}
