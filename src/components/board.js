import React, { useState } from "react";

import "./board.css";

const BOARD_SIZE = 15;

const Board = () => {
  const [board, setBoard] = useState(
    new Array(BOARD_SIZE).fill(0).map((row) => new Array(BOARD_SIZE).fill(0))
  );

  const [rowLoc, setRowLoc] = useState([]);
  const [colLoc, setColLoc] = useState([]);
  const [user1, setUser1] = useState(["black"]);

  const getCellClassName = (user1) => {
    let className = "cell";
    console.log(className);

    return className;
  };

  const displayPos = (rowIdx, cellIdx) => {
    console.log(rowIdx, cellIdx);
    setRowLoc(rowIdx);
    setColLoc(cellIdx);
    setBoard(
      new Array(rowIdx + 1).fill(0).map((row) => new Array(cellIdx + 1).fill(0))
    );
  };

  return (
    <>
      <button
        className="btn"
        key="1"
        onClick={() => {
          setUser1("red");
        }}
      >
        User 1 :red
      </button>
      <button
        className="btn"
        key="2"
        onClick={() => {
          setUser1("green");
        }}
      >
        User 2 : green
      </button>
      <button
        className="btn"
        key="3"
        onClick={() => {
          setUser1("blue");
        }}
      >
        User 3 : blue
      </button>
      <button
        className="btn"
        key="4"
        onClick={() => {
          setUser1("purple");
        }}
      >
        User 4 : purple
      </button>

      <p>{user1}</p>

      <div className="board">
        {board.map((row, rowIdx) => (
          <div key={rowIdx} className="row">
            {row.map((cell, cellIdx) => (
              <div
                key={cellIdx}
                className="cell"
                onClick={() => displayPos(rowIdx, cellIdx)}
              ></div>
            ))}
          </div>
        ))}
      </div>

      <div className="item">
        {rowLoc},{colLoc}
      </div>
    </>

    // <div className="board">
    //     {board.map((row, rowIdx) => (
    //       <div key={rowIdx} className="row">
    //         {row.map((cell, cellIdx) => (
    //           <div
    //             key={cellIdx}
    //             className="cell"
    //             onClick={() => displayPos(rowIdx, cellIdx)}
    //           ></div>
    //         ))}
    //       </div>
    //     ))}
    //     <div className="item">
    //       {" "}
    //       {rowLoc},{colLoc}
    //     </div>
    //   </div>
    // </>
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
