
const header = document.querySelector('.header');
const timer = document.querySelector('.timer.r');
const timerContainer = document.querySelector('section.timer')
const titleNumber = document.querySelector('p.time');
let n = true;

export function responsive(e) {
  let height = e.target ? e.target.innerHeight : e.innerHeight;

  if (height <= 590) {
    timer.style = `
      position: static;
      left: none;
      top: none;
      transform: none;
    `
    titleNumber.style.color = "white"
    header.append(timer)
    n = false
  } else {
    if (!n) {
      timerContainer.append(timer)
      timer.removeAttribute('style')
      titleNumber.removeAttribute('style')
      n = true;
    }
  }
}

window.addEventListener('resize', responsive);
