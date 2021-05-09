import React from 'react'
import logo from "../../../logo.png";
import MadeButton from "../shared/Button";

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
        <MadeButton text="CREATE ACCOUNT" style={{ backgroundColor:'white' }}></MadeButton>
      </div>
      <div style={{ marginTop: "5%" }}>
        <MadeButton text="SIGN IN"></MadeButton>
      </div>
    </div>
  )
}
