import React from "react";
import "./grid.css";
import GridSquare from "./GridSquare";

export default function GridBoard(props) {
  const grid = [];
  const x = [];
  const y = [];
  for (let row = 0; row < 18; row++) {
    grid.push([]);
    x.push(row);
    for (let col = 0; col < 10; col++) {
      y.push(col);
      grid[row].push(<GridSquare key={`${x}${y}`} color="1" />);
    }
  }

  return (
    <div
      className="grid-board"
      // Current clicking grid borad -> need to click grid
      onClick={() => {
        grid[1].map((item, index) => {
          <p key={index}>{item}</p>;
          console.log((index, item));
        });
      }}

      //console.log("Entire Grid");
      //return grid.map((n) => ({ value: n }));
      //console.log(grid.map((n, m) => ({ value: n, test: m })));
      //console.log(grid[0][0]);
    >
      {grid}
    </div>
  );
}
