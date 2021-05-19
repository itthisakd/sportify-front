import React, { useEffect, useState } from "react";
import LongButton from "../shared/LongButton";
import RegisHeader from "../shared/RegisHeader";
import { useHistory } from "react-router-dom";
import axios from 'axios'

export default function GenderPage() {
  const history = useHistory();
  const [showGender, setShowGender] = useState("");
  const [values, setValues] = useState({})

  useEffect(() => {
    const getAccount = async () => {
      const res = await axios.get("/account/myaccount");
      setShowGender(res.data.searchGender);
      setValues({searchGender: res.data.searchGender})
    };
    getAccount();
  }, []);

  return (
    <div style={{ height: "100vh" }}>
      <RegisHeader text="Show Me" iconType="none" />
      <div style={{ marginTop: "10%", textAlign: "center" }}>
        <LongButton
          name="MAN"
          variant={
            values.searchGender === "m" ? "outlined-active" : "outlined-inactive"
          }
          onClick={() => setValues({ searchGender: "m" })}
        />
        <LongButton
          style={{ marginTop: "5vh" }}
          name="WOMAN"
          variant={
            values.searchGender === "f" ? "outlined-active" : "outlined-inactive"
          }
          onClick={() => setValues({ searchGender: "f" })}
        />
        <LongButton
          style={{ marginTop: "5vh" }}
          name="EVERY ONE"
          variant={
            values.searchGender === "mf" ? "outlined-active" : "outlined-inactive"
          }
          onClick={() => setValues({ searchGender: "mf" })}
        />
        <LongButton
          style={{ marginTop: "20vh" }}
          name="CONTINUE"
          variant={values.searchGender ? "contained" : "disabled"}
          onClick={async () => {
            await axios.patch("/account/myaccount", values);
            history.push("/settings");
          }}
        />
      </div>
    </div>
  );
}
