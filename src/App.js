import React, { useState } from "react";
import "./App.css";
import Navbar from "./Navbar";

const App = () => {
  const [mode, setMode] = useState("light");

  const toggelemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <>
      <Navbar mode={mode} toggelemode={toggelemode} />
    </>
  );
};
export default App;
