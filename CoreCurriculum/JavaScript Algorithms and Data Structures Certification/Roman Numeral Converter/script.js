/* DEFINE GLOBAL CONSTANTS & VARIABLES */

/* GET ELEMENTS */
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputDiv = document.getElementById("output");






/* romanConvert FUNCTION */

const romanConvert = (remain, str) => {
  /* GET ROMAN NUMERAL */
  if (remain >= 1000) {
    str.push("M");
    remain -= 1000;
  } else if (remain >= 900 && remain < 1000) {
    str.push("CM");
    remain -= 900;
  } else if (remain >= 500 && remain < 900) {
    str.push("D");
    remain -= 500;
  } else if (remain >= 400 && remain < 500) {
    str.push("CD");
    remain -= 400;
  } else if (remain >= 100 && remain < 400) {
    str.push("C");
    remain -= 100;
  } else if (remain >= 90 && remain < 100) {
    str.push("XC");
    remain -= 90;
  } else if (remain >= 50 && remain < 90) {
    str.push("L");
    remain -= 50;
  } else if (remain >= 40 && remain < 50) {
    str.push("XL");
    remain -= 40;
  } else if (remain >= 10 && remain < 40) {
    str.push("X");
    remain -= 10;
  } else if (remain >= 9 && remain < 10) {
    str.push("IX");
    remain -= 9;
  } else if (remain >= 5 && remain < 9) {
    str.push("V");
    remain -= 5;
  } else if (remain >= 4 && remain < 5) {
    str.push("IV");
    remain -= 4;
  } else if (remain >= 1 && remain < 4) {
    str.push("I");
    remain -= 1;
  } else {
    return str;
  }
  
  /* RECURSIVE CALL */
  romanConvert(remain, str);
  
  /* RETURN ROMAN NUMERAL STRING */
  return str;
};






/* getInvalidText FUNCTION */

const getInvalidText = (input) => {
  if (!input) {
    /* NOT ENTERED */
    return "Please enter a valid number";
  } else if (input < 1) {
    /* UNDER 1 */
    return "Please enter a number greater than or equal to 1";
  } else if (input > 3999) {
    /* OVER 3999 */
    return "Please enter a number less than or equal to 3999";
  }
};






/* CONVERT FUNCTION */

const convert = () => {
  
  /* DEFINE LOCAL CONSTANTS & VARIABLES */
  const inputVal = numberInput.value;
  const textArr = [];
  let outputText = "";
  
  if(!inputVal || inputVal < 1 || inputVal > 3999) {
    /* INVALID INPUT */
    outputText = getInvalidText(inputVal);
  } else {
    /* VALID INPUT */
    outputText = romanConvert(inputVal, textArr).join("");
  }
  
  /* SET OUTPUT TEXT */
  outputDiv.innerText = outputText;
};






/* CLICK CONVERT BUTTON */

convertBtn.addEventListener("click", convert);
