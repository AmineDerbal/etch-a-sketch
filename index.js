const gridContainer = document.querySelector(".grid-container");
const clear = document.querySelector(".clear");
const colorMode = document.querySelector(".color");
const eraser = document.querySelector(".eraser");
const rainbowButton = document.querySelector(".rainbow");
const gridWidth = 960;
const gridHeight = 600;
let mode = "";

let rainbowColorsOrder = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
];
let rainbowColor = 0;
function rainbowMode() {
  let rainbow = rainbowColorsOrder[rainbowColor];
  if (rainbowColor == 6) rainbowColor = 0;
  else rainbowColor++;
  return rainbow;
}
function getColor() {
  let color = document.getElementById("myColor").value;
  return color;
}

// create grid according to the number of row and col given
function createGrid(row, col) {
  gridContainer.style.gridTemplateColumns = "repeat(" + col + ",1fr)";

  squareHeight = gridHeight / row;
  squareWidth = gridWidth / col;
  for (i = 1; i <= row; i++) {
    for (j = 1; j <= col; j++) {
      let grids = document.createElement("div");
      classname = "grid-row" + i + "-col" + j;
      grids.classList.add(classname);

      grids.style.cssText = "background-color: white";
      grids.style.width = squareWidth + "px";
      grids.style.height = squareHeight + "px";

      gridContainer.appendChild(grids);
    }
  }
}
createGrid(16, 16);

const grid = document.querySelectorAll(".grid-container div");
grid.forEach((div) => {
  div.addEventListener("mouseover", function (e) {
    switch (mode) {
      case "color":
        e.target.style.background = getColor();
        break;

      case "rainbow":
        e.target.style.background = rainbowMode();
        break;

      case "eraser":
        e.target.style.background = "white";
    }
    //e.target.style.background = getColor();
    //console.log(e.target.classList);
  });
});

// EventListener for clear button
clear.addEventListener("click", () => {
  grid.forEach((div) => {
    div.style.background = "white";
  });
});

// EventListener for Color Mode button
colorMode.addEventListener("click", () => {
  mode = "color";
});

eraser.addEventListener("click", () => {
  mode = "eraser";
});

rainbowButton.addEventListener("click", () => {
  mode = "rainbow";
});
