import React, { useState } from "react";
import "./board.css";
import { Link } from "react-router-dom";
import CheckOut from "./CheckOut.js";
import { useLocation } from "react-router-dom";

const BOARD_SIZE = 10;

const Board = (props) => {
  const location = useLocation();
  // console.log(props.location.state);
  const [board, setBoard] = useState(
    new Array(BOARD_SIZE).fill(0).map((row) => new Array(BOARD_SIZE).fill(0))
  );
  const [clickCount, setClickCount] = useState(1);
  const [ifClicked, setIfClicked] = useState(false);
  const [showPrice, setShowPrice] = useState("");
  const [rowLoc, setRowLoc] = useState([]);
  const [colLoc, setColLoc] = useState([]);
  const [popUp, setPopUp] = useState([]);
  const [removeDuplicates, setRemoveDuplicates] = useState([]);
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
    setClickCount(clickCount + 1);
    setShowPrice("Price : $" + clickCount * 5);
    displayPos(rowIdx, cellIdx);

    // if (!(boardIndeces[rowIdx] && boardIndeces[rowIdx][cellIdx])) {
    if (boardIndeces[rowIdx][cellIdx] == 1) {
      boardIndeces[rowIdx][cellIdx] = 0;
    } else {
      boardIndeces[rowIdx][cellIdx] = 1;
    }
    setBoardIndeces([...boardIndeces]);
    // }
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
    let uniqueChars = [...new Set(popUp)];
    setPopUp([...uniqueChars, realTimeBeingClicked]);
    setRemoveDuplicates([...new Set(popUp)]);

    var newTempPos = tempPos.toString();
    if (newTempPos.indexOf(realTimeBeingClicked) >= 0) {
      alert("Ticket already selected");
    } else {
      setRowLoc([...rowLoc, rowLetter]);
      setColLoc([...colLoc, cellIdx + 1]);
    }
  };

  const submitData = () => {
    // setIfClicked(true);
    console.log(boardIndeces);
    // setBoard(boardIndeces);

    // if (ifClicked) {
    //   setBoard(boardIndeces);
    // }
    if (rowLoc.length === 0) {
      alert("Select Tickets Before Checking Out");
    } else {
      var combinedPosition = rowLoc.map(function (d, i) {
        return d + String(colLoc[i]);
      });
      setCombinedPos(
        combinedPosition.map((combinedPosition) => <p>{combinedPosition}</p>)
      );
      setTempPos((tempPos) => {
        return [...tempPos, combinedPosition];
      });
    }
  };

  return (
    <>
      <div className="body">
        <div className="container">
          {/* <h1>{props.location.state}</h1> */}
          <div className="board">
            {board.map((row, rowIdx) => (
              <div key={rowIdx}>
                <span className="row">{alpArray[rowIdx]}</span>

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
            Confirm
          </button>
          <Link to="/checkout">
            <button className="btn" key="6">
              Checkout
            </button>
          </Link>

          <table
            style={{
              backgroundColor: "#000",
              display: "block",
              color: "#FFF",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <tbody>
              <tr>
                <td>
                  <div style={{}}>
                    {popUp.map((item, index) => {
                      return (
                        <span className="cell_Clicked1" key={index}>
                          {item}
                        </span>
                      );
                    })}
                  </div>
                </td>
                <td>
                  <div style={{ textAlign: "right", display: "block" }}>
                    {showPrice}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          {/* <div
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
          </div> */}
          <div className="item">
            {combinedPos} : Price ${combinedPos.length * 5}
            {/* {popUp} : Price ${popUp.length * 5} */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
