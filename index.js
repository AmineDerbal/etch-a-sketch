const gridContainer = document.querySelector('.grid-container');
const clear = document.querySelector('.clear');
const colorMode = document.querySelector('.color');
const eraser = document.querySelector('.eraser');
const rainbowButton = document.querySelector('.rainbow');
const box = document.querySelector('.box');
const range = document.querySelector('#range');

const gridWidth = 800;
const gridHeight = 500;
let mode = '';
let rainbowColor = 0;

let rainbowColorsOrder = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

function rainbowMode() {
  let rainbow = rainbowColorsOrder[rainbowColor];
  if (rainbowColor == 6) rainbowColor = 0;
  else rainbowColor++;
  return rainbow;
}

// return the value of yhe color selected in the pallette
function getColor() {
  let color = document.getElementById('myColor').value;
  return color;
}

// create grid according to the number of row and col given
function createGrid(row, col) {
  gridContainer.style.gridTemplateColumns = 'repeat(' + col + ',1fr)';
  gridContainer.style.gridTemplateRows = 'repeat(' + row + ',1fr)';

  //squareHeight = gridHeight / parseFloat(row);
  //squareWidth = gridWidth / parseFloat(col);
  if (gridContainer.childElementCount > 0) {
    let first = gridContainer.firstElementChild;
    while (first) {
      first.remove();
      first = gridContainer.firstElementChild;
    }
  }

  for (i = 1; i <= row; i++) {
    for (j = 1; j <= col; j++) {
      let grids = document.createElement('div');
      classname = 'grid-row' + i + '-col' + j;
      grids.classList.add(classname);
      gridContainer.appendChild(grids);
      grids.style.cssText = 'background-color: white';
      //grids.style.width = squareWidth + "px";
      //grids.style.height = squareHeight + "px";
    }
  }

  gridAddListener();
}
changeNumberGrids();

function gridAddListener() {
  let grid = document.querySelectorAll('.grid-container div');
  grid.forEach((div) => {
    div.addEventListener('mouseover', function (e) {
      switch (mode) {
        case 'color':
          e.target.style.background = getColor();
          break;

        case 'rainbow':
          e.target.style.background = rainbowMode();
          break;

        case 'eraser':
          e.target.style.background = 'white';
          break;

        default:
          break;
      }
      //e.target.style.background = getColor();
      //console.log(e.target.classList);
    });
  });
}

// EventListener for clear button

clear.addEventListener('click', () => {
  let grid = document.querySelectorAll('.grid-container div');
  mode = 'clear';
  clear.focus();
  grid.forEach((div) => {
    div.style.background = 'white';
  });
});

// EventListener for Color Mode button
colorMode.addEventListener('click', () => {
  mode = 'color';
  colorMode.focus();
});

//
eraser.addEventListener('click', () => {
  mode = 'eraser';
  eraser.focus();
});

rainbowButton.addEventListener('click', () => {
  mode = 'rainbow';
  rainbowButton.focus();
});

//
function changeNumberGrids() {
  var val = range.value;
  createGrid(val, val);

  box.textContent = ' GRID OF ' + val + 'X' + val;
}
