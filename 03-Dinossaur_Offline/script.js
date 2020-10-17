let jumpInterval = 20;
let jumpHeight = 20;
let jumpLimit = 150;

let isJumping = false;

const dino = document.querySelector(".dino");
const background = document.querySelector(".background");

function handleKeyUp(event) {
  if (event.keyCode === 32) {
    if (!isJumping) {
      jump();
    }
  }
}

function jump() {
  let position = 0;

  isJumping = true;

  let upInterval = setInterval(() => {
    if (position >= jumpLimit) {
      clearInterval(upInterval);

      let downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        } else {
          position -= jumpHeight;
          dino.style.bottom = position + "px";
        }
      }, jumpInterval);
    } else {
      position += jumpHeight;
      dino.style.bottom = position + "px";
    }
  }, jumpInterval);
}

function createCactus() {
  const cactus = document.createElement("div");
  let cactusPosition = 1000;

  cactus.classList.add("cactus");
  cactus.style.left = 1000 + "px";
  background.appendChild(cactus);
}

createCactus();
document.addEventListener("keyup", handleKeyUp);
