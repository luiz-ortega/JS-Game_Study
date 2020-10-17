let jumpInterval = 20;
let jumpHeight = 20;

const dino = document.querySelector(".dino");

function handleKeyUp(event) {
  if (event.keyCode === 32) {
    jump();
  }
}

function jump() {
  let position = 0;

  let upInterval = setInterval(() => {
    if (position >= 150) {
      clearInterval(upInterval);

      let downInterval = setInterval(() => {
        if (position <= 0) {
          clearInterval(downInterval);
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
