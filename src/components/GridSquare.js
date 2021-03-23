import React from "react";

// Represents a grid square with a color

export default function GridSquare(props) {
  let classes = `grid-square color-1`;

  const changeColor = () => {
    classes = `grid-square color-2`;
    console.log("Individual boxes");
  };
  return <div className={classes} onClick={changeColor} />;
}
