import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Life from "./Life"
import State from "./State"
import Login from "./Login"
import CheckBox from "./Check"
import Radioo from "./radio"
import CC from "./CC"
import GenralizedComp from "./GenralizedComp"
import HOC from "./HOC"
import ChildrenWithProps from "./ChildrenWithProps"
import Render from "./Render"
import Todo from "./Todo"
// import Parent from "./ParentChild/Parent"
// import Parent from "./ParentChild/Parent"
import Parent from "./Siblings/Parent"
import ContextExample from "./ContextExample"
import Ref from "./Ref"
import Cricket from "./Cricket"
import UseCustomHook from "./UseCustomHook"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cricket />
  </StrictMode>,
)
