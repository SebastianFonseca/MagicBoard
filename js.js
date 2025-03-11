const board = document.getElementById("board");
(function createBoard(numberOfSquares = 16) {
  for (let i = 1; i <= numberOfSquares * numberOfSquares; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("squares");
    newDiv.style.width = `${(board.offsetWidth * 0.7) / numberOfSquares - 2}px`;
    newDiv.style.height = `${board.offsetHeight / numberOfSquares - 2}px`;
    newDiv.addEventListener(
      "mouseenter",
      () => (newDiv.style.backgroundColor = "blue")
    );
    board.appendChild(newDiv);
  }
})();
