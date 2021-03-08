let interval;

export function stopGameOver(msg="game over") {
  document.querySelector('#status_game').style.display = 'grid'
  document.querySelector("#msg").textContent = msg
  clearInterval(interval);
}

export function counter() {
  const time = 60;
  const part = time / 100;
  const progress = document.querySelector("#progress_bar");
  const number = document.querySelector('#number_time');
  const type = document.querySelector('#type_time');

  interval = setInterval(() => {
    var width = Math.floor(parseFloat(progress.style.width.replace("%", "")))
    progress.style.width = `${Math.floor(width -= part)}%`;
    number.textContent = Math.floor(width);
    type.textContent = "%";
    if (Math.floor(width) == 0) {
      if (localStorage.getItem('finished_game') == "false") {
        stopGameOver();
      }
    }
  }, time / 10 * 100)
}

