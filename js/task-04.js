"use strict";

let counterValue = 0;

const downKeyBtn = document.querySelector("[data-action=decrement]");
const upKeyBtn = document.querySelector("[data-action=increment]");
const valueEl = document.querySelector("#value");

const increment = () => {
  counterValue += 1;
  document.getElementById("value").textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  document.getElementById("value").textContent = counterValue;
};

downKeyBtn.addEventListener("click", decrement);
upKeyBtn.addEventListener("click", increment);
