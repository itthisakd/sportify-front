import React from 'react'
import { useHistory } from 'react-router-dom';
import logo from "../../images/branding/new_logo.png"
import LongButton from "../shared/LongButton";

export default function LoginPage() {
  const history = useHistory()
  return (
    <div>
      <div>
        <img
          alt="logo"
          src={logo}
          style={{ width: "100vw", margin: "60% auto 0 auto", }}
        ></img>
      </div>
      <div style={{ marginTop: "8rem", textAlign: 'center'}}>
        <LongButton name="CREATE ACCOUNT" variant="outlined-active" onClick={() => history.push("/name")}></LongButton>
      </div>
      <div style={{ marginTop: "5%", textAlign: 'center'}}>
        <LongButton name="SIGN IN"></LongButton>
      </div>
    </div>
  )
}
