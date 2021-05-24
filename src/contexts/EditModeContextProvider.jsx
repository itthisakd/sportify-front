import React, { useState, createContext } from "react";

export const EditModeContext = createContext();

export default function EditModeContextProvider({ children }) {
  const [editMode, setEditMode] = useState(true);
  return (
    <EditModeContext.Provider value={{ editMode, setEditMode }}>
      {children}
    </EditModeContext.Provider>
  );
}
