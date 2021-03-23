import React, { useState } from "react";

import "./board.css";

const BOARD_SIZE = 15;

const Board = () => {
  const [board, setBoard] = useState(
    new Array(BOARD_SIZE).fill(0).map((row) => new Array(BOARD_SIZE).fill(0))
  );
  const displayPos = (cell) => {
    console.log(cell);
  };

  return (
    <div className="board">
      {board.map((row, rowIdx) => (
        <div key={rowIdx} className="row">
          {row.map((cell, cellIdx) => (
            <div
              key={cellIdx}
              className="cell"
              onClick={() => {
                console.log(rowIdx, cellIdx);
              }}
            ></div>
          ))}
        </div>
      ))}
      <div>
        {board.map((row, rowIdx) => (
          <div key={rowIdx}>
            {row.map((cellValue, cellIdx) => (
              <div key={cellIdx} className="item">
                {rowIdx}, {cellIdx}
              </div>
            ))}
            {/* const className = getCellClassName(cellValue, row,);
              return (
                <div key={cellIdx} className="item">
                  {row} {"test"}
                </div>
              ); */}
          </div>
        ))}
      </div>
    </div>
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
