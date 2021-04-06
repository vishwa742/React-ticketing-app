import React, { useState } from "react";
import "./board.css";
//import logo from "./seat.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CheckOut from "./CheckOut.js";
import $ from "jquery";

const BOARD_SIZE = 15;

const Board = () => {
  const [board, setBoard] = useState(
    new Array(BOARD_SIZE).fill(0).map((row) => new Array(BOARD_SIZE).fill(0))
  );

  const [rowLoc, setRowLoc] = useState([]);
  const [colLoc, setColLoc] = useState([]);
  const [user1, setUser1] = useState("");

  const [masterData, setMasterData] = useState({
    position: "",
    user: "",
  });
  const [checkInsideDisplay, setcheckInsideDisplay] = useState({
    row: "",
    col: "",
  });

  const [rowItems, setRowItems] = useState("");
  const [colItems, setColItems] = useState("");
  const [combinedPos, setCombinedPos] = useState([]);
  const [selectedTickets, setSelectedTickets] = useState([]);
  const [tempPos, setTempPos] = useState("");
  const [tempPosCopy, setTempPosCopy] = useState("");

  const test = () => {
    console.log("test");
  };

  const initArray = (arr) => {
    let rows = [];
    for (let i = 0; i < arr.length; i++) {
      let row = [];
      const currBoard = arr[i];
      for (let z = 0; z < currBoard.length; z++) {
        row[z] = false;
      }
      rows[i] = row;
    }
    return rows;
  };

  const [boardIndeces, setBoardIndeces] = useState(initArray(board));

  const onCellClick = (rowIdx, cellIdx) => {
    displayPos(rowIdx, cellIdx);
    if (!(boardIndeces[rowIdx] && boardIndeces[rowIdx][cellIdx])) {
      boardIndeces[rowIdx][cellIdx] = true;
      setBoardIndeces([...boardIndeces]);
    }
  };

  const displayPos = (rowIdx, cellIdx) => {
    let cellString = cellIdx + 1;
    cellString.toString();
    // Map col to Letter --------------------------------------
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

    // TO be changed that so that only unselected seats are passed

    var realTimeBeingClicked = rowLetter + cellString;
    console.log(realTimeBeingClicked);
    //console.log(tempPos);
    var newTempPos = tempPos.toString();

    // if String in string
    if (newTempPos.indexOf(realTimeBeingClicked) >= 0) {
      alert("Ticket already selected");
    } else {
      setRowLoc([...rowLoc, rowLetter]);
      setColLoc([...colLoc, cellIdx + 1]);
    }
    // return <div className="item">{setRowLoc}</div>;
  };

  // Selecting the Tickets and submitting it -----------------------

  const submitData = () => {
    setTempPosCopy("");
    //setCombinedPos([]);
    if (user1 === "") {
      setMasterData({ position: "", user: "" });
      alert("Select a user before choosing tickets");
    } else {
      var combinedPosition = rowLoc.map(function (d, i) {
        return d + String(colLoc[i]);
      });

      // Covert Position to P tag
      setCombinedPos(
        combinedPosition.map((combinedPosition) => <p>{combinedPosition}</p>)
      );
      setMasterData({ position: combinedPos, user: user1 });

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
              <div key={rowIdx}>
                {row.map((cell, cellIdx) => (
                  <div
                    key={cellIdx}
                    className={
                      boardIndeces[rowIdx][cellIdx]
                        ? "cell_Clicked"
                        : "your_inactive_class"
                    }
                    onClick={() => onCellClick(rowIdx, cellIdx)}
                  ></div>
                ))}
              </div>
            ))}
          </div>

          <button
            className="btn"
            key="1"
            onClick={() => {
              setUser1("red");
              setMasterData({ rows: "", cols: "", user: "" });
              setRowLoc([]);
              setColLoc([]);
              setCombinedPos([]);
            }}
          >
            User 1 :red
          </button>
          <button
            className="btn"
            key="2"
            onClick={() => {
              setUser1("green");
              setMasterData({ rows: "", cols: "", user: "" });
              setRowLoc([]);
              setColLoc([]);
              setCombinedPos([]);
            }}
          >
            User 2 : green
          </button>
          <button
            className="btn"
            key="3"
            onClick={() => {
              setUser1("blue");
              setMasterData({ rows: "", cols: "", user: "" });
              setRowLoc([]);
              setColLoc([]);
              setCombinedPos([]);
            }}
          >
            User 3 : blue
          </button>
          <button
            className="btn"
            key="4"
            onClick={() => {
              setUser1("purple");
              setMasterData({ rows: "", cols: "", user: "" });
              setRowLoc([]);
              setColLoc([]);
              setCombinedPos([]);
            }}
          >
            User 4 : purple
          </button>

          <button className="btn" key="5" onClick={submitData}>
            Submit
          </button>
          <p>{user1}</p>
          <Router>
            <Link to="/checkout">
              <button className="btn" key="6">
                Test Submit
              </button>
            </Link>
          </Router>

          <div className="item">
            <h2>{masterData.user}</h2>
            <p>{combinedPos}</p>
          </div>
          <div className="item">
            {combinedPos} : Price ${combinedPos.length * 5}
          </div>
          <div className="item">Click History:{tempPos}</div>
        </div>
      </div>
    </>
  );
};

export default Board;
