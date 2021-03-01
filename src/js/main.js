import Cube from './Cube.js';
import { randomTwoNumbers } from './functions.js';
import { event } from './listener.js';

window.onload = () => {
  setTimeout(() => {
    run();
  }, 500);
};

function run() {
  const gameBoard = document.querySelector(".game_board");
  gameBoard.innerHTML = "";

  var matriz = [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ];

  var countCorrect = 0;

  const numbersArray = randomTwoNumbers(16);
  var x = 0;
  var y = 0;
  

  for (let i = 0; i < numbersArray.length; i++) {
    matriz[x][y] = numbersArray[i];

    let cube = new Cube(gameBoard);
    let el = cube.create("x");
    cube.render(el);
    el.setAttribute('data-x', x);
    el.setAttribute('data-y', y);

    el.addEventListener("click", (e) => {
      event(e, matriz, () => {
        if (++countCorrect == 8) {
          setTimeout(() => {
            alert('voce ganhou');
            window.location.reload();
          }, 1500)
        }
      })
    })

    y = y < 3 ? ++y : 0;
    x = y == 0 ? ++x : x;
  }
}
