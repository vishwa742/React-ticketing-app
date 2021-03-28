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
      </div>
    </>
  );
}

export default App;
