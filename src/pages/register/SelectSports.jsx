import React, { useContext, useEffect, useState } from "react";
import { EditModeContext } from "../../contexts/EditModeContextProvider";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Chip } from "@material-ui/core";
import LongButton from "../shared/LongButton";
import RegisHeader from "../shared/RegisHeader";
import { useHistory } from "react-router-dom";
import { useData } from "../../contexts/DataContext";
import axios from "../../config/axios";

export default function ({ sports, selectedChips, handleSelect, classes }) {
  return (
    <div>
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
  );
}
