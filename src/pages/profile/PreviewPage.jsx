import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import SectionHeader from "../shared/SectionHeader";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import ImageSlider from "../home/ImageSlider";
import axios from "../../config/axios";

const useStyles = makeStyles(() => ({
  flexCol: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    margin: "0px",
    padding: "0px",
    height: "100%",
  },
  flexCenter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignItems: "center",
    height: "90vh",
    width: "100vw",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "90vw",
    height: "135vw",
    borderRadius: "15px",
  },
  header: { position: "absolute", top: "0px" },
}));

export default function PreviewPage() {
  const history = useHistory();
  const classes = useStyles();
  const [account, setAccount] = useState({});

  useEffect(() => {
    const getAccount = async () => {
      const res = await axios.get("/account/myaccount");
      setAccount(res.data);
    };
    getAccount();
  }, []);

  return (
    <div className={classes.flexCol}>
      <SectionHeader
        title="Preview"
        doneAction={() => history.push("/profile")}
        className={classes.header}
      />
      <Container className={classes.flexCol}>
        <ImageSlider className={classes.paper} account={account} key="slider" />
      </Container>
    </div>
  );
}
