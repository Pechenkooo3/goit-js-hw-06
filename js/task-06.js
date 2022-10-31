// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// // Яка кількість смиволів повинна бути в інпуті, зазначається в його
// атрибуті data - length.
//     // Якщо введена правильна кількість символів, то border інпуту стає
//     зеленим, якщо неправильна кількість - червоним.
// // Для додавання стилів використовуй CSS-класи valid і invalid,
//  які ми вже додали у вихідні файли завдання.

const inputTxt = document.querySelector("#validation-input");

inputTxt.addEventListener("blur", onChangeFocus);

function onChangeFocus(evt) {
  if (evt.currentTarget.value.length === Number(inputTxt.dataset.length)) {
    inputTxt.classList.add("valid");
    inputTxt.classList.remove("invalid");
  } else {
    inputTxt.classList.remove("valid");
    inputTxt.classList.add("invalid");
  }
}
