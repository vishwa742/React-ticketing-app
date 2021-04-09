import React, { useState } from "react";
import "./board.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CheckOut from "./CheckOut.js";

const BOARD_SIZE = 10;

const Board = () => {
  const [board, setBoard] = useState(
    new Array(BOARD_SIZE).fill(0).map((row) => new Array(BOARD_SIZE).fill(0))
  );

  const [rowLoc, setRowLoc] = useState([]);
  const [colLoc, setColLoc] = useState([]);
  const [popUp, setPopUp] = useState([]);
  const space = " ";
  const [masterData, setMasterData] = useState({
    position: "",
    user: "",
  });

  const [combinedPos, setCombinedPos] = useState([]);
  const [tempPos, setTempPos] = useState("");
  const alpArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "z",
  ];

  const initArray = new Array(BOARD_SIZE)
    .fill(0)
    .map((row) => new Array(BOARD_SIZE).fill(0));

  const [boardIndeces, setBoardIndeces] = useState(initArray);

  const onCellClick = (rowIdx, cellIdx) => {
    // var combinedPosition1 = rowLoc.map(function (d, i) {
    //   return d + String(colLoc[i]);
    // });
    // var x = combinedPosition1.map((combinedPosition1) => (
    //   <p>{combinedPosition1}</p>
    // ));
    // console.log(x);

    displayPos(rowIdx, cellIdx);
    if (!(boardIndeces[rowIdx] && boardIndeces[rowIdx][cellIdx])) {
      boardIndeces[rowIdx][cellIdx] = 1;
      setBoardIndeces([...boardIndeces]);
    }
  };

  const displayPos = (rowIdx, cellIdx) => {
    let cellString = cellIdx + 1;
    cellString.toString();

    // Map col to Letter
    let rowLetter = "";
    if (rowIdx === 0) {
      rowLetter = "A";
    }
    if (rowIdx === 1) {
      rowLetter = "B";
    }
    if (rowIdx === 2) {
      rowLetter = "C";
    }
    if (rowIdx === 3) {
      rowLetter = "D";
    }
    if (rowIdx === 4) {
      rowLetter = "E";
    }
    if (rowIdx === 5) {
      rowLetter = "F";
    }
    if (rowIdx === 6) {
      rowLetter = "G";
    }
    if (rowIdx === 7) {
      rowLetter = "H";
    }
    if (rowIdx === 8) {
      rowLetter = "I";
    }
    if (rowIdx === 9) {
      rowLetter = "J";
    }
    if (rowIdx === 10) {
      rowLetter = "K";
    }
    if (rowIdx === 11) {
      rowLetter = "L";
    }
    if (rowIdx === 12) {
      rowLetter = "M";
    }
    if (rowIdx === 13) {
      rowLetter = "N";
    }
    if (rowIdx === 14) {
      rowLetter = "O";
    }
    if (rowIdx === 15) {
      rowLetter = "P";
    }

    var realTimeBeingClicked = rowLetter + cellString;
    setPopUp([...popUp, realTimeBeingClicked]);
    //console.log(realTimeBeingClicked);
    //alert(realTimeBeingClicked);
    var newTempPos = tempPos.toString();

    // if String in string
    if (newTempPos.indexOf(realTimeBeingClicked) >= 0) {
      alert("Ticket already selected");
    } else {
      setRowLoc([...rowLoc, rowLetter]);
      setColLoc([...colLoc, cellIdx + 1]);
    }
  };

  // Selecting the Tickets and submitting it

  const submitData = () => {
    //console.log(boardIndeces);
    if (rowLoc.length === 0) {
      setMasterData({ position: "", user: "" });
      alert("Select Tickets Before Checking Out");
    } else {
      var combinedPosition = rowLoc.map(function (d, i) {
        return d + String(colLoc[i]);
      });

      // Covert Position to P tag
      setCombinedPos(
        combinedPosition.map((combinedPosition) => <p>{combinedPosition}</p>)
      );
      setMasterData({ position: combinedPos, user: "test" });

      // Trying to Combine all previously selected positions ----------------
      setTempPos((tempPos) => {
        return [...tempPos, combinedPosition];
      });
    }
    return setMasterData;
  };

  return (
    <>
      <div className="body">
        <div className="container">
          <div className="board">
            {board.map((row, rowIdx) => (
              <div key={rowIdx} className="row">
                {alpArray[rowIdx]}

                {row.map((cell, cellIdx) => (
                  <div
                    key={cellIdx}
                    className={
                      boardIndeces[rowIdx][cellIdx] === 1
                        ? "cell_Clicked"
                        : "your_inactive_class"
                    }
                    onClick={() => onCellClick(rowIdx, cellIdx)}
                  ></div>
                ))}
              </div>
            ))}
          </div>

          <button className="btn" onClick={submitData}>
            Check Out
          </button>
          <Router>
            <Link to="/checkout">
              <button className="btn" key="6">
                Test Submit
              </button>
            </Link>
          </Router>
          <div></div>
          <div
            style={{
              backgroundColor: "white",
              marginTop: "10px",
            }}
          >
            {popUp.map((item, index) => {
              return (
                <span className="cell_Clicked1" key={index}>
                  {item}
                </span>
              );
            })}
          </div>
          <div className="item">
            {combinedPos} : Price ${combinedPos.length * 5}
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
