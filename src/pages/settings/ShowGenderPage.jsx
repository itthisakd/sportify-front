import React from "react";
import LongButton from "../shared/LongButton";
import RegisHeader from "../shared/RegisHeader";
import { useData } from "../../contexts/DataContext";
import { useHistory } from "react-router-dom";

export default function GenderPage() {
  // const { setValues, data } = useData();
  const history = useHistory();

  // axios.patch("/myaccount", {searchGender: STATE});

  return (
    <div style={{ height: "100vh" }}>
      <RegisHeader text="I am a" iconType="none" />
      <div style={{ marginTop: "10%", textAlign: "center" }}>
        <LongButton
          name="MAN"
          variant={
            data.gender === "m" ? "outlined-active" : "outlined-inactive"
          }
          onClick={() => setValues({ gender: "m" })}
        />
        <LongButton
          style={{ marginTop: "5vh" }}
          name="WOMAN"
          variant={
            data.gender === "f" ? "outlined-active" : "outlined-inactive"
          }
          onClick={() => setValues({ gender: "f" })}
        />
        <LongButton
          style={{ marginTop: "30vh" }}
          name="CONTINUE"
          variant={data.gender ? "contained" : "disabled"}
          onClick={() => history.push("/settings")}
        />
      </div>
    </div>
  );
}
