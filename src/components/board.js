import React, { useState, useEffect } from "react";
import "./board.css";
import { Link } from "react-router-dom";
import CheckOut from "./CheckOut.js";
import { useLocation } from "react-router-dom";
import Bkg from "./erd.png";

const BOARD_SIZE = 10;
const rowSize = 10;
const colSize = 15;

const Board = (props) => {
  const movieTitle = props.location.state.titleName;
  const movieImg = props.location.state.imgLink;
  //console.log(props.location.state.titleName);

  const location = useLocation();
  // console.log(props.location.state);
  const [board, setBoard] = useState(
    new Array(rowSize).fill(0).map((row) => new Array(colSize).fill(0))
  );
  const [ifSelected, setIfSelected] = useState([]);
  const [rowLoc, setRowLoc] = useState([]);
  const [colLoc, setColLoc] = useState([]);
  const [popUp, setPopUp] = useState([]);
  const [combinedPos, setCombinedPos] = useState([]);
  const [tempPos, setTempPos] = useState("");

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 900) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  // React.useEffect(() => {
  //   const data = localStorage.getItem("checkout-board");
  //   if (data) {
  //     setBoardIndeces(JSON.parse(data));
  //     console.log(data);
  //   }
  // }, []);

  // React.useEffect(() => {
  //   localStorage.setItem("checkout-board", JSON.stringify(boardIndeces));
  // });

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

  const initArray = new Array(rowSize)
    .fill(0)
    .map((row) => new Array(colSize).fill(0));

  const [boardIndeces, setBoardIndeces] = useState(initArray);

  const onCellClick = (rowIdx, cellIdx) => {
    // if (ifSelected.length >= 10) {
    //   alert("Cant select more than 10 tickets");
    // }
    // if (ifSelected.length < 10) {
    //displayPos(rowIdx, cellIdx);

    if (boardIndeces[rowIdx][cellIdx] == 1) {
      boardIndeces[rowIdx][cellIdx] = 0;
    } else {
      boardIndeces[rowIdx][cellIdx] = 1;
    }
    setBoardIndeces([...boardIndeces]);

    if (ifSelected.indexOf(displayPos(rowIdx, cellIdx)) === -1) {
      ifSelected.push(displayPos(rowIdx, cellIdx));
    } else {
      const index = ifSelected.indexOf(displayPos(rowIdx, cellIdx));
      if (index > -1) {
        ifSelected.splice(index, 1);
      }
      //console.log("popped");
    }
    // }
    //console.log(ifSelected);
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

    var newTempPos = tempPos.toString();
    if (newTempPos.indexOf(realTimeBeingClicked) >= 0) {
      alert("Ticket already selected");
    } else {
      setRowLoc([...rowLoc, rowLetter]);
      setColLoc([...colLoc, cellIdx + 1]);
    }
    return realTimeBeingClicked;
  };

  const submitData = () => {
    //console.log(boardIndeces);

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
      {isMobile && (
        <div className="body-mobile">
          <div
            className="movie-details-mobile"
            style={{
              position: "relative",
              backgroundImage: "url(" + movieImg + ")",
              backgroundSize: "cover",
              WebkitFilter: " saturate(2)",
            }}
          ></div>
          {isDesktop && (
            <img
              src={movieImg}
              style={{
                height: "49%",
                width: "20%",
                position: "absolute",
                //textAlign: "center",
                top: "0px",
                //  left: "600px",
                left: "40%",
                zIndex: "100",
              }}
            ></img>
          )}
          <div
            style={{
              position: "absolute",

              top: "175px",
              left: "70px",
              zIndex: "5",
            }}
          >
            <div
              className="movie-title-mobile"
              style={{
                fontSize: "20px",
                // backgroundColor: "red",
                color: "white",
                height: "40px",
                marginLeft: "10px",
                padding: "10px",
              }}
            >
              {movieTitle}
            </div>

            <div
              className="movie-title-mobile"
              style={{
                // backgroundColor: "red",
                color: "white",
              }}
            >
              AMC, Clifton Commons, 12:30pm
            </div>
          </div>
          <div className="board-mobile" style={{ backgroundColor: "white" }}>
            <div style={{ marginBottom: "1%" }}>
              <div
                className="inactive_class-mobile"
                style={{ marginRight: "20%", marginLeft: "8%" }}
              >
                <div style={{ paddingLeft: "99%" }}> Available</div>
              </div>
              <div
                className="cell_Clicked-mobile"
                style={{ marginRight: "20%" }}
              >
                <div style={{ paddingLeft: "99%" }}> Selected</div>
              </div>
              <div
                className="cell_Clicked1-mobile"
                style={{ marginRight: "20%" }}
              >
                <div style={{ paddingLeft: "99%" }}> Unavailable</div>
              </div>
            </div>

            {board.map((row, rowIdx) => (
              <div key={rowIdx} style={{ width: "100%", height: "9%" }}>
                <span>{alpArray[rowIdx]}</span>

                {row.map((cell, cellIdx) => (
                  <span
                    key={cellIdx}
                    className={
                      boardIndeces[rowIdx][cellIdx] === 1
                        ? "cell_Clicked-mobile"
                        : "inactive_class-mobile"
                    }
                    onClick={() => onCellClick(rowIdx, cellIdx)}
                  ></span>
                ))}
              </div>
            ))}
            <div style={{ color: "black" }}>??? SCREEN THIS WAY ???</div>
          </div>
          {/* <button className="btn" onClick={submitData}>
            Confirm
          </button> */}
          {ifSelected.length > 0 && (
            <table
              style={{
                display: "block",
                color: "#FFF",
                justifyContent: "space-between",
                width: "100%",
                height: "8%",
                position: "fixed",
                bottom: "0%",
                backgroundColor: "#393838",
                opacity: "1",
              }}
            >
              <tbody>
                <tr>
                  <td>
                    <div className="element4-mobile">Ticket Info:</div>
                  </td>
                  <td>
                    <div className="element1-mobile">
                      {ifSelected.map((item, index) => {
                        return (
                          <span className="cell_Clicked-mobile" key={index}>
                            {item}
                          </span>
                        );
                      })}
                    </div>
                  </td>
                  <td>
                    <div className="element2-mobile">TOTAL (USD)</div>
                  </td>
                  <td>
                    <div className="element2-mobile">
                      {ifSelected.length * 5}
                    </div>
                  </td>
                  <td>
                    <Link to="/checkout">
                      <div className="element3-mobile">
                        <button className="btn" key="6">
                          Checkout
                        </button>
                      </div>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      )}
      {/* -------------------------------------------------------------- */}
      {isDesktop && (
        <div className="body">
          <div
            className="movie-details"
            style={{
              // overflow: "hidden",
              position: "relative",
              backgroundImage: "url(" + movieImg + ")",
              // backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              WebkitFilter: "blur(10px) saturate(2)",
            }}
          ></div>
          <img
            src={movieImg}
            style={{
              height: "355px",
              width: "300px",
              position: "absolute",

              top: "0px",
              left: "600px",
              zIndex: "100",
            }}
          ></img>

          <div
            style={{
              position: "absolute",

              top: "175px",
              left: "70px",
              zIndex: "5",
            }}
          >
            <div
              className="movie-title"
              style={{
                fontSize: "20px",
                // backgroundColor: "red",
                color: "white",
                height: "40px",
                marginLeft: "10px",
                padding: "10px",
              }}
            >
              {movieTitle}
            </div>

            <div
              className="movie-title"
              style={{
                // backgroundColor: "red",
                color: "white",
              }}
            >
              AMC, Clifton Commons, 12:30pm
            </div>
          </div>

          <div className="board" style={{ backgroundColor: "white" }}>
            <div style={{ marginBottom: "12px" }}>
              <div
                className="inactive_class"
                style={{ marginRight: "150px", marginLeft: "40px" }}
              >
                <div style={{ paddingLeft: "30px" }}> Available</div>
              </div>
              <div className="cell_Clicked" style={{ marginRight: "150px" }}>
                <div style={{ paddingLeft: "30px" }}> Selected</div>
              </div>
              <div className="cell_Clicked1" style={{ marginRight: "150px" }}>
                <div style={{ paddingLeft: "30px" }}> Unavailable</div>
              </div>
            </div>

            {board.map((row, rowIdx) => (
              <div
                key={rowIdx}
                style={
                  {
                    // position: "relative",
                    // top: 0 + { rowIdx },
                    // zIndex: { rowIdx },
                  }
                }
              >
                <span>{alpArray[rowIdx]}</span>

                {row.map((cell, cellIdx) => (
                  <span
                    key={cellIdx}
                    className={
                      boardIndeces[rowIdx][cellIdx] === 1
                        ? "cell_Clicked"
                        : "inactive_class"
                    }
                    onClick={() => onCellClick(rowIdx, cellIdx)}
                  ></span>
                ))}
              </div>
            ))}
            <div style={{ color: "black" }}>??? SCREEN THIS WAY ???</div>
          </div>

          {/* <button className="btn" onClick={submitData}>
            Confirm
          </button> */}

          {ifSelected.length > 0 && (
            <table
              style={{
                display: "block",
                color: "#FFF",
                justifyContent: "space-between",
                width: "100%",
                height: "60px",
                position: "fixed",
                bottom: "0%",
                backgroundColor: "#393838",
                opacity: "1",
              }}
            >
              <tbody>
                <tr>
                  <td>
                    <div className="element4">Ticket Info:</div>
                  </td>
                  <td>
                    <div className="element1">
                      {ifSelected.map((item, index) => {
                        return (
                          <span className="cell_Clicked" key={index}>
                            {item}
                          </span>
                        );
                      })}
                    </div>
                  </td>
                  <td>
                    <div className="element2">TOTAL (USD)</div>
                  </td>
                  <td>
                    <div className="element2">{ifSelected.length * 5}</div>
                  </td>
                  <td>
                    <Link to="/checkout">
                      <div className="element3">
                        <button className="btn" key="6">
                          Checkout
                        </button>
                      </div>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      )}
    </>
  );
};

export default Board;
