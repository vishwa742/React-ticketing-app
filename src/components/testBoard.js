import React, { useState } from "react";
import "./board.css";

const BOARD_SIZE = 11;

const NewBoard = () => {
  const [board, setBoard] = useState(
    new Array(BOARD_SIZE).fill(0).map((row) => new Array(BOARD_SIZE).fill(0))
  );

  const [rowLoc, setRowLoc] = useState([]);
  const [colLoc, setColLoc] = useState([]);
  const [ivalue, setIvalue] = useState(2);

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
    setIvalue(ivalue + 1);
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

    // removeDuplicates.push(...removeDuplicates, realTimeBeingClicked);
    // console.log(removeDuplicates);
    // let removeDuplicates1 = [...new Set(removeDuplicates)];
    // setPopUp([...popUp, removeDuplicates1]);

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
                      cellIdx == 5 ? "cell_Clicked" : "your_inactive_class"
                    }
                    onClick={() => onCellClick(rowIdx, cellIdx)}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewBoard;
