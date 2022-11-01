"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// const newIng = [...ingredients];
// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredient = document.createElement("li");

//   ingredient.classList.add("item");
//   ingredient.textContent = ingredients[i];
//   console.log(ingredient);
//   const ingredientsAdd = document.getElementById("ingredients");
//   ingredientsAdd.append(ingredient);
//   console.log(ingredientsAdd);
// }

const elem = document.querySelector("ingredients");
const list = document.querySelector("ul");
const arr = [];
ingredients.forEach((item) => {
  const ingredient = document.createElement("li");
  ingredient.classList.add("item");
  ingredient.textContent = item;
  arr.push(ingredient);
});
console.log(arr);
list.append(...arr);
