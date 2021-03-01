import Cube from './Cube.js';
import { randomTwoNumbers } from './functions.js';
import { event } from './listener.js';
import Actions from './Actions.js';


window.onload = () => {
  setTimeout(() => {
    run();
  }, 500);
};

function animation(elements, matriz) {
  let interval;
  let i =  0;
  let x = 0;
  let y = 0;

  const action = new Actions(matriz);
  interval = setInterval(() => {
    let el = elements[i];
    el.style = 'pointer-events: none;'

    action.mark(el, el.children[0], [x, y], '#c56cf0');
    y = y < 3 ? ++y : 0;
    x = y == 0 ? ++x : x;
    if (i == 15) {
      clearInterval(interval);
    }
    i++;
  }, 200);
}

function resetAnimation(elements, matriz) {
  let interval;
  let i =  0;
  let x = 0;
  let y = 0;

  const action = new Actions(matriz);
  interval = setInterval(() => {
    let el = elements[i];

    action.reset(el, el.children[0])
    y = y < 3 ? ++y : 0;
    x = y == 0 ? ++x : x;
    if (i == 15) {
      clearInterval(interval);
    }
    i++;
  }, 200);
}

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

    el.style.pointerEvents = 'none';
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
  } // for

  let timer;
  setTimeout(() => {
    var elements = [...document.querySelectorAll('.game_cube').values()];
    animation(elements, matriz);
    timer = setTimeout(() => {
      resetAnimation(elements, matriz);
    }, 200 * 16);
  }, 1000)

}
