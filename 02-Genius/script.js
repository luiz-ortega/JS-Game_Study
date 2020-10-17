let order = [];
let clickedOrder = [];
let score = 0;

// 0 - green
// 1 - red
// 2 - yellow
// 3 - blue

const green = document.querySelector(".green");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const blue = document.querySelector(".blue");

let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order(order.length) = colorOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createElement(order[i]);
    lightColor(elementColor, Number(i + 1));
  }
};

let lightColor = (element, number) => {
  number = number * 500;
  setTimeout(() => {
    element.classList.add("selected");
  }, number - 250);
  setTimeout(() => {
    element.classList.remove("selected");
  }, number - 250);
};
