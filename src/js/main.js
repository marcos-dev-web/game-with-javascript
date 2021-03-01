class Cube {
  constructor() {
    this.element = "";
    this.gameBoard = document.querySelector(".game_board");
  }

  create(value) {
    const gameCube = document.createElement("div");
    const valueCube = document.createElement("h2");

    gameCube.classList.add("game_cube");
    valueCube.classList.add("value_cube");

    valueCube.textContent = value;

    gameCube.appendChild(valueCube);

    this.element = gameCube;
  }

  render(time = 1) {
    setTimeout(() => {
      this.gameBoard.appendChild(this.element);
    }, 100 * time);
    setTimeout(() => {
      this.element.style.transform = "rotateZ(0)";
    }, 150 * time);
  }
}

window.onload = () => {
  setTimeout(() => {
    run();
  }, 500);
};

/**
 * @param {int} max - a number integer and divisible by 2
 */
function randomTwoNumbers(max) {
  let arr = [];
  let v = [];

  for (let i = 0; i < max; i++) {

    var r = Math.floor(Math.random() * (max /2));
    var s = v.filter(n => n == r);

    if (s.length != 2) {
      v.push(r);
      arr.push(r)
    } else {
      do {
        r = Math.floor(Math.random() * (max / 2));
        s = v.filter(n => n == r);
      } while (s.length == 2);
      v.push(r);
      arr.push(r)
    }
  }
  return arr;
}


function run() {

  const numbersArray = randomTwoNumbers(16)

  for (let i = 0; i < numbersArray.length; i++) {
    const cube = new Cube();
    cube.create(numbersArray[i]);
    cube.render(i);
  }
}
