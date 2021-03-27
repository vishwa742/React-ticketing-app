import React, { useState } from "react";
import "./board.css";
import logo from "./seat.png";

const BOARD_SIZE = 10;

const Board = () => {
  const [board, setBoard] = useState(
    new Array(BOARD_SIZE).fill(0).map((row) => new Array(BOARD_SIZE).fill(0))
  );

  var pos = [];
  let newArray = [];

  const row = document.querySelector(".row");
  if (row) {
    row.addEventListener("click", () => {
      row.classlist += "active";
    });
  }

  const [rowLoc, setRowLoc] = useState([]);
  const [colLoc, setColLoc] = useState([]);
  const [user1, setUser1] = useState("");
  const [masterData, setMasterData] = useState({
    rows: "",
    cols: "",
    user: "",
  });
  const [rowItems, setRowItems] = useState("");
  const [colItems, setColItems] = useState("");
  const alphabets = [
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
    "L",
    "M",
    "N",
    "O",
  ];

  let count = 0;

  const displayPos = (rowIdx, cellIdx) => {
    setRowLoc([...rowLoc, rowIdx]);
    setColLoc([...colLoc, cellIdx]);
    console.log(rowLoc);
    // setRowItems(rowLoc.map((rowLoc) => <li>{rowLoc}</li>));
    // setColItems(colLoc.map((colLoc) => <li>{colLoc}</li>));
    setRowItems(rowLoc.map((rowLoc) => <p>{rowLoc}</p>));
    setColItems(colLoc.map((colLoc) => <p>{colLoc}</p>));
    // setRowLoc([]);
    // setColLoc([]);
  };

  const getClassName = () => {
    let userNo = user1;
    let selectedTickets = rowLoc;
    //let ticketSel = [rowItems, colItems];
    //console.log(userNo);
    //console.log(selectedTickets);
  };

  // Selecting the Tickets and submitting it -----------------------

  const submitData = () => {
    if (user1 === "") {
      setMasterData({ rows: "", cols: "", user: "" });
      alert("Select a user before choosing tickets");
    } else {
      setMasterData({ rows: rowItems, cols: colItems, user: user1 });
    }
    return setMasterData;
  };

  // setBoard(
  //   new Array(rowIdx + 1).fill(0).map((row) => new Array(cellIdx + 1).fill(0))
  // );

  return (
    <>
      <div className="board">
        {board.map((row, rowIdx) => (
          <div key={rowIdx} className="row">
            {/* <ul>
              {alphabets.map((valuess, indexss) => {
                return <p key={indexss}>{valuess}</p>;
              })}
            </ul> */}
            {row.map((cell, cellIdx) => (
              <div
                key={cellIdx}
                className="cell"
                onClick={() => displayPos(rowIdx, cellIdx)}
              >
                {<div>{/* {<img src={logo} className="img"></img>} */}</div>}
              </div>
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
        }}
      >
        User 4 : purple
      </button>

      <button className="btn" key="5" onClick={submitData}>
        Submit
      </button>
      <p>{user1}</p>

      {/* <div className="item">
        {rowLoc},{colLoc}
      </div> */}

      <div className="item">
        <h2>{masterData.user}</h2>
        <h2>{masterData.rows}</h2>
        <h2>{masterData.cols}</h2>
      </div>
      <div className="item">
        <ul>row:{rowItems}</ul>
        <ul>col:{colItems}</ul>
      </div>
    </>
  );
};

export default Board;

//   return (
//     <div className="board">
//       {board.map((row, rowIdx) => (
//         <div key={rowIdx} className="row">
//           {row.map((cell, cellIdx) => (
//             <div key={cellIdx} className="cell"></div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// onClick={() => {
//                   console.log(typeof board);
//                   return board[rowIdx][cellIdx];
//                   displayPos(rowIdx, cellIdx);
//                 }}
