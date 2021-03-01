export default class Cube {
  constructor(gameBoard) {
    this.gameBoard = gameBoard;
  }

  create(value) {
    const gameCube = document.createElement("div");
    const valueCube = document.createElement("h2");

    gameCube.classList.add("game_cube");
    valueCube.classList.add("value_cube");

    valueCube.textContent = value;

    gameCube.appendChild(valueCube);

    return gameCube;
  }

  render(element) {
    setTimeout(() => {
      this.gameBoard.appendChild(element);
    }, 100);
    setTimeout(() => {
      element.style.transform = "rotateZ(0)";
    }, 120);
  }
}