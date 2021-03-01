class Cube {
  constructor() {
    this.element = HTMLDivElement;
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
      this.element.onmouseenter = (e) => {
        e.target.style.transform += "scale(1.2)";
      };
      this.element.onmouseout = (e) => {
        e.target.style.transform = "rotateZ(0)";
      };
      this.gameBoard.appendChild(this.element);
    }, 100 * time);
    setTimeout(() => {
      this.element.style.transform = "rotateZ(0)";
    }, 120 * time);

    return this.element;
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
    var r = Math.floor(Math.random() * (max / 2));
    var s = v.filter((n) => n == r);

    if (s.length != 2) {
      v.push(r);
      arr.push(r);
    } else {
      do {
        r = Math.floor(Math.random() * (max / 2));
        s = v.filter((n) => n == r);
      } while (s.length == 2);
      v.push(r);
      arr.push(r);
    }
  }
  return arr;
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

  const numbersArray = randomTwoNumbers(16);
  var x = 0;
  var y = 0;
  var actual = null;

  for (let i = 0; i < numbersArray.length; i++) {
    matriz[x][y] = numbersArray[i];

    let cube = new Cube();
    cube.create("x");
    let el = cube.render(i);
    el.setAttribute('data-x', x);
    el.setAttribute('data-y', y);


    function event(e) {
      e.stopPropagation();
      const x = e.target.getAttribute('data-x');
      const y = e.target.getAttribute('data-y');
      const subElement = e.target.querySelector('.value_cube');
      if (!actual) {
        setTimeout(() => {
          subElement.textContent = matriz[parseInt(x)][parseInt(y)];
        }, 100)
        actual = subElement;
      } else {
        let firstClick = actual;

        let elementClicked = e.target;
        let x = elementClicked.getAttribute('data-x');
        let y = elementClicked.getAttribute('data-y');
        let value = matriz[parseInt(x)][parseInt(y)];

        console.log(firstClick, value)

        if (firstClick.textContent == String(value)) {

          let el = firstClick.parentElement;

          el.style = `
            background: springgreen;
            color: white;
            transform: rotateZ(-360deg);
            border: 1px solid black;
          `;

          elementClicked.style = `
            background: springgreen;
            color: white;
            transform: rotateZ(-360deg);
            border: 1px solid black;
          `;
          elementClicked.querySelector('.value_cube').textContent = value;

          actual = null;

        } else {

          let el = firstClick.parentElement;

          elementClicked.querySelector('.value_cube').textContent = value;
          el.style = `
            background: red;
            color: white;
            transform: rotateZ(-360deg);
            border: 1px solid black;
          `;

          elementClicked.style = `
            background: red;
            color: white;
            transform: rotateZ(-360deg);
            border: 1px solid black;
          `;
          setTimeout(() => {
            el.style = `
              transform: rotateZ(-360deg);
            `;
            elementClicked.style = `
              transform: rotateZ(-360deg);
            `
            firstClick.textContent = 'x'
            elementClicked.querySelector('.value_cube').textContent = 'x'
          }, 1000)
          actual = null;
        }
      }
    }

    el.addEventListener("click", event);

    y = y < 3 ? ++y : 0;
    x = y == 0 ? ++x : x;
  }

  console.log(matriz)
}
