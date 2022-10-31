const inputTxt = document.querySelector("#name-input");
console.log(inputTxt);
const outputTxt = document.querySelector("#name-output");
console.log(outputTxt);
const txtBefor = outputTxt.textContent;

inputTxt.addEventListener("input", (Event) => {
  if (Event.currentTarget.value) {
    outputTxt.textContent = Event.currentTarget.value;
    return;
  }
  outputTxt.textContent = txtBefor;
});
