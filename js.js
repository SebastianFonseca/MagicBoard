const board = document.createElement("div");
board.classList.add("board");
const boardAndMenu = document.getElementById("boardAndMenu");
const boardContainer = document.querySelector("#boardContainer");
const range = document.querySelector("#range");
const rangeValueLabel = document.querySelector("#rangeValue");
rangeValueLabel.textContent = range.value;
createBoard();

range.addEventListener("change", () => {
  rangeValueLabel.textContent = range.value;
  board.innerHTML = "";
  boardContainer.removeChild(board);
  createBoard(range.value);
});

function createBoard(numberOfSquares = 16) {
  let size =
    Math.min(
      boardAndMenu.getBoundingClientRect().width,
      boardAndMenu.getBoundingClientRect().height
    ) * 0.9;
  board.style.cssText += `width:${size}px; height:${size}px;`;
  const squareSize = size / numberOfSquares;
  for (let i = 1; i <= numberOfSquares * numberOfSquares; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("squares");
    newDiv.style.cssText += `width:${squareSize}px; height:${squareSize}px;`;
    newDiv.addEventListener("mouseenter", (event) => {
      let currentOpacity = parseFloat(
        window.getComputedStyle(newDiv).getPropertyValue("opacity")
      );
      let newOpacity = Math.min(currentOpacity + 0.1, 1); // Máximo 1
      event.currentTarget.style.opacity = newOpacity;
    });
    board.appendChild(newDiv);
  }
  boardContainer.appendChild(board);
}

const toggle = document.querySelector(".toggle-container");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("on"); // Cambia entre on/off
  board.classList.toggle("no-border");
});

window.onresize = (event) => {
  board.innerHTML = "";
  boardContainer.removeChild(board);
  range.value = 16;
  createBoard(range.value);
};
