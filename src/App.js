import React, { useState } from "react";
import "./App.css";
import Node from "./components/grid.js";

function App() {
  const [modal, setModal] = useState("");
  const [count, setCount] = useState("");
  const [value, setValue] = useState("purple");

  const redClick = () => {
    setValue("red");
    setModal("");
    setCount("");
  };
  const greenClick = () => {
    setValue("green");
    setModal("");
    setCount("");
  };
  const yellowClick = () => {
    setValue("yellow");
    setModal("");
    setCount("");
  };
  const blueClick = () => {
    setValue("blue");
    setModal("");
    setCount("");
  };
  var clicks = 0;

  function countClick() {
    clicks += 1;
    console.log(value, clicks);
  }

  function submitCount() {
    setModal(clicks);
    setCount(value);
  }

  return (
    <>
      <div className="container">
        <Node></Node>

        <h2>Button and Colors</h2>
        <h1>{value}</h1>
        <h1>
          {count} {modal}
        </h1>

        <button className="btn" onClick={redClick}>
          Red
        </button>
        <button className="btn" onClick={greenClick}>
          Green
        </button>
        <button className="btn" onClick={yellowClick}>
          Yellow
        </button>
        <button className="btn" onClick={blueClick}>
          Blue
        </button>
        <button className="btn" onClick={submitCount}>
          Submit
        </button>
      </div>

      <div class="grid" style={{ backgroundColor: value }} onClick={countClick}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
}

export default App;
