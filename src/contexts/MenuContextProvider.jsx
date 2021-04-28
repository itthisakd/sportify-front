import React, { useState, createContext } from 'react'

export const MenuContext = createContext()

export default function MenuContextProvider({ children }) {
  const [currentMenu, setCurrentMenu] = useState("home")
  return (
    <MenuContext.Provider value={{ currentMenu, setCurrentMenu }}>
      {children}
    </MenuContext.Provider>
  )
}
