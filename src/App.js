import React from "react";
import "./App.css";
// import Node from "./components/grid.js";
import Board from "./components/board.js";

function App() {
  // const [modal, setModal] = useState("");
  // const [value, setValue] = useState("purple");

  // const redClick = () => {
  //   setValue("red");
  //   setModal("");
  // };
  // const greenClick = () => {
  //   setValue("green");
  //   setModal("");
  // };
  // const yellowClick = () => {
  //   setValue("yellow");
  //   setModal("");
  // };
  // const blueClick = () => {
  //   setValue("blue");
  //   setModal("");
  // };

  return (
    <>
      <div className="container">
        {/* <Node></Node> */}
        <Board />

        {/* <h2>Button and Colors</h2>
        <h1>{value}</h1>
        <h1>{modal}</h1>

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
        <button className="btn">Submit</button> */}
      </div>
    </>
  );
}

export default App;
