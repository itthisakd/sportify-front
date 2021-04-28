import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import MenuContextProvider from './contexts/MenuContextProvider'

ReactDOM.render(
  <React.StrictMode>
    <MenuContextProvider>
      <App />
      </MenuContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
