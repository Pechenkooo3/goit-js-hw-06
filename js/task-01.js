"use strict";

const ref = {
  firstEl: document.querySelector("#categories"),
  secEl: document.querySelectorAll(".item"),
};

console.log(`Number of categories: ${ref.secEl.length}`);

for (let i = 0; i < ref.secEl.length; i += 1) {
  console.log(`Category: ${ref.secEl[i].querySelector("h2").textContent}`);
  console.log(`Elements: ${ref.secEl[i].querySelectorAll("li").length}`);
}
