const img = document.querySelector(".img_game");
const containerImg = document.querySelector(".img_container");
const buttonClose = document.querySelector(".close");

let opened = false;

const image = {
  changeState() {
    containerImg.classList.toggle("show_container_image");
    img.classList.toggle("show_image");
    buttonClose.classList.toggle("show_button_close");
    opened = !opened;
  },
};

buttonClose.addEventListener("click", image.changeState);
img.addEventListener("click", image.changeState);
