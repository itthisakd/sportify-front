import React from "react";
import LongButton from "../shared/LongButton";
import RegisHeader from "../shared/RegisHeader";
import { useData } from "../../contexts/DataContext";
import { useHistory } from "react-router-dom";

export default function GenderPage() {
  const { setValues, data } = useData();
  const history = useHistory();

  console.log(data);
  return (
    <div style={{height: '100vh'}}>
      <RegisHeader
        text="I am a"
        iconType="back"
        onClick={() => history.push("/birthdate")}
      />
      <div style={{ marginTop: "10%", textAlign: "center" }}>
        <LongButton
          name="MALE"
          variant={
            data.gender === "m" ? "outlined-active" : "outlined-inactive"
          }
          onClick={() => setValues({ gender: "m" })}
        ></LongButton>
      </div>
      <div style={{ marginTop: "5%", textAlign: "center" }}>
        <LongButton
          name="FEMALE"
          variant={
            data.gender === "f" ? "outlined-active" : "outlined-inactive"
          }
          onClick={() => setValues({ gender: "f" })}
        ></LongButton>
      </div>
      <div style={{ marginTop: "70%", textAlign: "center" }}>
        <LongButton
          name="CONTINUE"
          variant={data.gender ? "contained" : "disabled"}
          onClick={() => history.push("/sports")}
        ></LongButton>
      </div>
    </div>
  );
}
