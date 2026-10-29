import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import App2 from "./App2";
import Chill from "./Chill"
import ClassComponent from "./ClassComponent.jsx"

function App() {
  let name = "BMW";
  let color = "blue";
  let year = 2024;

  return (
    <>
      <ClassComponent name="Someone" surname="KKKK" grade='a' />
    </>
  );
}

export default App;
