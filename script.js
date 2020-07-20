// Assignment Code
var generateBtn = document.querySelector("#generate");
// Password variables
// lowercase characters
var lowercaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
// uppercase characters
var uppercaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
// numberical characters
var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// special characters
var specialCharArray = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

function generatePassword() {
  // variables of generatePassword
  var validChars = [];
  var passwordLength = 0;
  var passwordOutput = "";

  // asks user for input to determine length of password
  passwordLength = parseInt(
    prompt(
      "How long would you like your password to be? Enter a number between 8 and 128"
    )
  );

  // if they don't input a number or put an invalid number
  if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
    alert("You must enter a number between 8 and 128");
  } else {
    // prompts for each type of password options
    confirmNumber = confirm(
      "Do you want your password to contain numbers? Click OK for YES or CANCEL for NO"
    );

    confirmSpecial = confirm(
      "Do you want your password to contain special characters? Click OK for YES or CANCEL for NO"
    );

    confirmUppercase = confirm(
      "Do you want your password to contain uppercase letters? Click OK for YES or CANCEL for NO"
    );

    confirmLowercase = confirm(
      "Do you want your password to contain lowercase letters? Click OK for YES or CANCEL for NO"
    );

    // EVALUATE RESPONSES AND CONCAT THE CHARACTERS THAT WERE SELECTED TO VALIDCHARS
    if (confirmLowercase === true) {
      validChars = validChars.concat(lowercaseArray);
    }
    if (confirmNumber === true) {
      validChars = validChars.concat(numbersArray);
    }
    if (confirmSpecial === true) {
      validChars = validChars.concat(specialCharArray);
    }
    if (confirmUppercase === true) {
      validChars = validChars.concat(uppercaseArray);
    }
    // EVALUTATES IF ANY CHARACTER TYPE WAS SELECTED
    console.log("valid chars===", validChars);
    if (validChars.length <= 0) {
      alert("You must input at least one set of characters");
      return; //RETURN EARLY DUE TO INVALID PASSWORD GENERATOR CONFIG
    }
  }

  while (passwordLength > 0) {
    passwordOutput += validChars[Math.floor(Math.random() * validChars.length)];
    passwordLength--;
  }
  return passwordOutput;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
