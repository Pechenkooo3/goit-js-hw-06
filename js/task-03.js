"use strict";

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listElements = document.querySelector(".gallery");
const elements = images
  .map(
    (image) => `<li>
  <img src='${image.url}' alt= '${image.alt}'
  width = '300'
</li>`
  )
  .join("");

listElements.insertAdjacentHTML("beforeend", elements);
listElements.style.cssText = `displey: flex;
flex-wrap: wrap;
`;
// const arr = [];

// // for (let i = 0; i < images.length; i += 1) {
// //   const newItem = document.createElement("li");
// //   const newImg = document.createElement("img");
// //   newImg.setAttribute("src", images[i].url);
// //   newImg.setAttribute("alt", images[i].alt);
// //   newItem.append(newImg);
// //   arr.push(newItem);
// // }
// listElements.append(...arr);
// console.log(listElements);
