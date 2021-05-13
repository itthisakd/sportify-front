import React from 'react'
import logo from "../../images/branding/new_logo.png"
import LongButton from "../shared/LongButton";

export default function LoginPage() {
  return (
    <div>
      <div>
        <img
          alt="logo"
          src={logo}
          style={{ width: "80%", marginTop: "60%" }}
        ></img>
      </div>
      <div style={{ marginTop: "8rem"}}>
        <LongButton name="CREATE ACCOUNT" type="outlined-active"></LongButton>
      </div>
      <div style={{ marginTop: "5%" }}>
        <LongButton name="SIGN IN"></LongButton>
      </div>
    </div>
  )
}
