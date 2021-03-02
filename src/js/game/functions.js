export function randomTwoNumbers(max) {
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

export function error(firstClick, secondClick) {
  firstClick.style = `
    background: red;
    color: white;
    border: 1px solid black;
  `;

  secondClick.style = `
    background: red;
    color: white;
    border: 1px solid black;
  `;

  setTimeout(() => {
    firstClick.querySelector('.value_cube').textContent = 'x'
    secondClick.querySelector('.value_cube').textContent = 'x'
    firstClick.style = '';
    secondClick.style = '';
  }, 1000)
}

export function accept(firstClick, secondClick) {
  firstClick.style = `
    background: springgreen;
    color: white;
    border: 1px solid black;
    cursor: not-allowed;
  `;

  secondClick.style = `
    background: springgreen;
    color: white;
    border: 1px solid black;
    cursor: not-allowed;
  `;
}

export function animation(Actions, elements, matriz) {
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

export function resetAnimation(Actions, elements, matriz) {
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