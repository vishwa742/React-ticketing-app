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
    // Map col to Letter
    let colLetter = "";
    if (cellIdx === 0) {
      colLetter = "A";
    }
    if (cellIdx === 1) {
      colLetter = "B";
    }
    if (cellIdx === 2) {
      colLetter = "C";
    }
    if (cellIdx === 3) {
      colLetter = "D";
    }
    if (cellIdx === 4) {
      colLetter = "E";
    }
    if (cellIdx === 5) {
      colLetter = "F";
    }
    if (cellIdx === 6) {
      colLetter = "G";
    }
    if (cellIdx === 7) {
      colLetter = "H";
    }
    if (cellIdx === 8) {
      colLetter = "I";
    }
    if (cellIdx === 9) {
      colLetter = "J";
    }

    setRowLoc([...rowLoc, rowIdx + 1]);
    setColLoc([...colLoc, colLetter]);

    // SetCol and SetRow are interchanged to match grid

    setColItems(rowLoc.map((rowLoc) => <p>{rowLoc}</p>));
    setRowItems(colLoc.map((colLoc) => <p>{colLoc}</p>));
    //console.log("" colItems);
    // setRowLoc([]);
    // setColLoc([]);
  };

  // let var colLetter = "";
  // if (colItems === 0) {
  //   colLetter = A;
  // }
  // if (colItems === 1) {
  //   colLetter = B;
  // }
  // if (colItems === 2) {
  //   colLetter = C;
  // }
  // if (colItems === 3) {
  //   colLetter = D;
  // }
  // if (colItems === 4) {
  //   colLetter = E;
  // }
  // if (colItems === 5) {
  //   colLetter = F;
  // }
  // if (colItems === 6) {
  //   colLetter = G;
  // }
  // if (colItems === 7) {
  //   colLetter = H;
  // }
  // if (colItems === 8) {
  //   colLetter = I;
  // }
  // if (colItems === 9) {
  //   colLetter = J;
  // }

  const getClassName = () => {
    let userNo = user1;
    let selectedTickets = rowLoc;
    //let ticketSel = [rowItems, colItems];
    //console.log(userNo);
    //console.log(selectedTickets);
  };

  // Selecting the Tickets and submitting it -----------------------

  const submitData = () => {
    //console.log(colItems);
    if (user1 === "") {
      setMasterData({ rows: "", cols: "", user: "" });
      alert("Select a user before choosing tickets");
    } else {
      //setMasterData({ rows: rowItems, cols: colItems, user: user1 });
      setMasterData({ rows: rowItems, cols: colItems, user: user1 });
      //console.log(colLetter);
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
            {}
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

        <p>{masterData.rows}</p>
        <p>{masterData.cols}</p>
        {/* <h2>{masterData.rows}</h2>
        <h2>{masterData.cols}</h2> */}
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
