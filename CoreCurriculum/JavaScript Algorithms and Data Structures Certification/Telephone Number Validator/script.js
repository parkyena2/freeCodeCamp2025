/* GET ELEMENTS */

const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");






/* CONSTANTS DECLARATION */

const validText = "Valid US number: ";
const invalidText = "Invalid US number: ";
const validRegex = /(?!2)(^(1\s|1))?(([0-1]|[3-9])\d{2}|\(([0-1]|[3-9])\d{2}\))(\s|-)?(\d{3})(\s|-)?(\d{4})/;






/* FUNCTIONS */

const isNotEntered = input => input === "";






/* CHECK EVENT CALLBACK */

const checkInput = () => {
  const inputVal = userInput.value;

  if (isNotEntered(inputVal)) {
    window.alert("Please provide a phone number");
    return;
  }

  const resultText = validRegex.test(inputVal) ? validText + inputVal : invalidText + inputVal;

  resultsDiv.textContent = resultText;
};






/* CLEAR EVENT CALLBACK */

const clearResult = () => {
  resultsDiv.textContent = "";
};






/* EVENT LISTENER */

checkBtn.addEventListener("click", checkInput);
clearBtn.addEventListener("click", clearResult);
