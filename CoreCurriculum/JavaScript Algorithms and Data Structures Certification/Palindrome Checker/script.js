// GET ELEMENTS

const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");





// FUNCTION: GET WORD

const getChars = () => {
  const regex = /[A-Za-z0-9]/g;
  return textInput.value.match(regex).map((c) => c.toLowerCase());
}





// FUNCTION: HAS INPUT

const hasInput = () => {
  return textInput.value ? true : false;
}





// FUNCTION: IS PALINDROME

const isPalindrome = () => {
  const lowerArr = getChars();
  const charLen = lowerArr.length - 1;

  for (let i = 0; i < charLen/2; i++) {
    if (lowerArr[i] !== lowerArr[charLen-i]) {
      return false
    }
  }

  return true;
}





// FUNCTION: PALINDROME CHECKER

const palindromeChecker = () => {
   if (hasInput()) {
    result.innerText = isPalindrome() ? `${textInput.value} is a palindrome`: `${textInput.value} is not a palindrome`;
  } else {
    window.alert("Please input a value");
  }
}





// EXECUTE PALINDROME CHECKER

checkBtn.addEventListener("click", palindromeChecker);
