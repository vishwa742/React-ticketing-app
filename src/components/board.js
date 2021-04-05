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
    if (!(boardIndeces[rowIdx] && boardIndeces[rowIdx][cellIdx])) {
      boardIndeces[rowIdx][cellIdx] = true;
      setBoardIndeces([...boardIndeces]);
    }
  };


  return (
    <>
      <div className="container">
        <div class="wrapper">
          <header></header>
          <main>
            <div>
              {board.map((row, rowIdx) => (
                <div key={rowIdx}>
                  {row.map((cell, cellIdx) => (
                    <div
                      key={cellIdx}
                      className={
                        boardIndeces[rowIdx].includes(cellIdx)
                          ? "your_active_class"
                          : "your_inactive_class"
                      }
                      onClick={() => onCellClick(rowIdx, cellIdx)}
                    ></div>
                  ))}
                </div>
              ))}
            </div>
          </main>
          <footer></footer>
        </div>
      </div>
    </>
  );
};

export default Board;
