import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import Menu from "../shared/Menu";
import { Fab, Container, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import VisibilityRoundedIcon from "@material-ui/icons/VisibilityRounded";
import SettingsRoundedIcon from "@material-ui/icons/SettingsRounded";
import { DateTime } from "luxon";
import axios from "../../config/axios";
import { EditModeContext } from "../../contexts/EditModeContextProvider";
import logo from "../../../icon.png";

const useStyles = makeStyles(() => ({
  flexRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: "10px 0",
  },
  flexCol: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100px",
    margin: "0px",
    padding: "0px",
  },
  row: {
    padding: "10px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  center: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: "10px 15px",
    width: "20vw",
    height: "20vw",
  },
  imgCircle: {
    margin: "20px 0px 10px 0px",
    objectFit: "cover",
    borderRadius: "50%",
    height: "200px",
    width: "200px",
    boxShadow:
      "0px 3px 5px -1px rgb(0 0 0 / 20%), 0px 6px 10px 0px rgb(0 0 0 / 14%), 0px 1px 18px 0px rgb(0 0 0 / 12%)",
  },
  name: { fontWeight: "500" },
}));

export default function ProfilePage() {
  const history = useHistory();
  const classes = useStyles();
  const [account, setAccount] = React.useState({images: [{image: logo}]});
  const { editMode, setEditMode } = useContext(EditModeContext);

  useEffect(() => {
    const getAccount = async () => {
      const res = await axios.get("/account/myaccount");
      setAccount(res.data);
    };
    getAccount();
  }, []);

  // console.log(account.images)

  return (
    <div>
      <Menu />

      <Container className={classes.center}>
          <img
            src={account?.images[0]?.image}
            className={classes.imgCircle}
          />
        <Container style={{ padding: "20px" }} className={classes.center}>
          <Typography
            variant="h4"
            style={{
              fontWeight: "600",
              display: "inline-block",
              color: "#303030",
            }}
          >
            {account.firstName}
            <Typography
              variant="h5"
              style={{
                fontWeight: "400",
                display: "inline-block",
                color: "#404040",
              }}
            >
              &nbsp;
              {account.age}
            </Typography>
          </Typography>
        </Container>
      </Container>

      <Container className={classes.flexRow}>
        <Fab
          color="primary"
          className={classes.button}
          onClick={() => {
            setEditMode(true);
            history.push("/settings");
          }}
        >
          <SettingsRoundedIcon />
        </Fab>
        <Fab
          color="primary"
          className={classes.button}
          onClick={() => {
            history.push("/preview");
          }}
        >
          <VisibilityRoundedIcon />
        </Fab>

        <Fab
          color="primary"
          className={classes.button}
          onClick={() => {
            setEditMode(true);
            history.push("/edit-info");
          }}
        >
          <EditRoundedIcon />
        </Fab>
      </Container>

      <Container>ADS HERE</Container>
    </div>
  );
}
