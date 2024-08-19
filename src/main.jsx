import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './App.css'
import da from "./assets/da.svg";
import cs from "./assets/cs.svg";
import sap from "./assets/sap.svg";
import cld from "./assets/cld.svg";
import dev from "./assets/dev.svg";
import script from "./assets/script.svg";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
export  const array2 = [
  { title: "Data Analysis", path: "/dataanalysis", icon: da},
  { title: "Product Development", path: "/prod", icon: dev },
  { title: "SAP Development", path: "/sap", icon: sap },
  { title: "Cyber Security", path: "/cs", icon: cs },
  { title: "Script/Bot Development",path: "/script",  icon: script },
  { title: "Cloud Services", path: "/cld", icon: cld  },
]