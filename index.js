const gridContainer = document.querySelector(".grid-container");
const gridSquare = 960;
/*
for (let i = 1; i < 17; i++) {
  let grids = document.createElement("div");
  grids.classList.add("grid-" + i);
  container.appendChild(grids);
}
*/
function createGrid(row, col) {
  gridContainer.style.gridTemplateColumns = "repeat(" + col + ",1fr)";

  squareHeight = gridSquare / row;
  squareWidth = gridSquare / col;
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
