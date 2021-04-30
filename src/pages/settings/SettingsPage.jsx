import React from 'react'
import {useHistory} from "react-router-dom"
import SectionHeader from "../shared/SectionHeader"

export default function SettingsPage() {
const history = useHistory()

  return (
    <div>
      <SectionHeader title="Settings" doneAction={() => history.push("/profile")}/>
      settings
    </div>
  )
}
