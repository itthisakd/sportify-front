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
import axios from "../../config/axios";
import getCurrentLocation from "../../utilities/getCurrentLocation";

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

export default function SportsPage() {
  const { editMode, setEditMode } = useContext(EditModeContext);
  const { setValues, data } = useData();
  const [selectedChips, setSelectedChips] = useState([]);
  const [oldSelectedChips, setOldSelectedChips] = useState([]);
  const [sports, setSports] = useState([]);
  const history = useHistory();
  const classes = useStyle();

  const intersection = oldSelectedChips.filter((value) =>
    selectedChips.includes(value)
  );
  const removeSports = oldSelectedChips.filter(
    (value) => intersection.includes(value) === false
  );
  const addSports = selectedChips.filter(
    (value) => intersection.includes(value) === false
  );

  console.log(editMode);

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
        console.log("sports", res.data.sports);
        setSelectedChips(res.data.sports);
        setOldSelectedChips(res.data.sports);
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

  console.log("data", data);

  const handleSubmit = async () => {
    if (editMode == false) {
      setValues({ addSports, removeSports });
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
          iconType={editMode ? "none" : "back"}
          onClick={editMode ? () => null : () => history.push("/gender")}
          text="Sports"
        >
          <Typography
            variant="body1"
            style={{ zIndex: "1001", margin: "0px 0px 0px 40px" }}
          >
            You can select a maximum of 5 sports.
          </Typography>
        </RegisHeader>
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
        <LongButton
          name={editMode ? "DONE" : "CONTINUE"}
          onClick={handleSubmit}
          variant={selectedChips.length > 0 ? "contained" : "disabled"}
        />
      </div>
    </div>
  );
}
