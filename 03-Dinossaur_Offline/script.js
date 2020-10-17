let jumpInterval = 20;
let jumpHeight = 20;
let jumpLimit = 150;

let isJumping = false;

const dino = document.querySelector(".dino");

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

document.addEventListener("keyup", handleKeyUp);
