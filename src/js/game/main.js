import Cube from './Cube.js';
import { randomTwoNumbers, animation, resetAnimation } from './functions.js';
import { event } from './listener.js';
import { responsive } from '../utils/responsive.js';
import { stopGameOver } from './counter.js';
import Actions from './Actions.js';


window.onload = () => {
  setTimeout(() => {

    run();
    responsive(window)
  }, 500);
};

function run() {
  
  const gameBoard = document.querySelector(".game_board");
  let countCorrect = 0;

  const matriz = [
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
  ];

  const numbersArray = randomTwoNumbers(16);

  let x = 0;
  let y = 0;

  for (let i = 0; i < numbersArray.length; i++) {
    matriz[x][y] = numbersArray[i];

    let cube = new Cube(gameBoard);
    let el = cube.create("x");
    cube.render(el);
    el.setAttribute('data-x', x);
    el.setAttribute('data-y', y);

    el.style.pointerEvents = 'none';
    el.addEventListener("click", (e) => {
      event(e, matriz, () => {
        if (++countCorrect == 8) {
          setTimeout(() => {
            stopGameOver("winner winner")
            localStorage.setItem('finished_game', true)
          }, 1500)
        }
      })
    })

    y = y < 3 ? ++y : 0;
    x = y == 0 ? ++x : x;
  }

  let timer;
  setTimeout(() => {
    var elements = [...document.querySelectorAll('.game_cube').values()];
    animation(Actions, elements, matriz);
    timer = setTimeout(() => {
      resetAnimation(Actions, elements, matriz);
      clearTimeout(timer);
    }, 200 * 16);
  }, 1000)
}
