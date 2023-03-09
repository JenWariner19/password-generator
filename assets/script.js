// Assignment code here
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
var numberChoices = "1234567890".split("");
var symbolChoices = "!@#$%^&*".split("");
var passwordChars = [];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function generatePassword() {  
  var uppercase = confirm("Do you need uppercase letters?");
   console.log("Use uppercase?", uppercase);
  if (uppercase) {
    passwordChars = passwordChars.concat(uppercaseLetters);
  }
    console.log(passwordChars);

  var lowercase = confirm("Do you need lowercase letters?");
  console.log("Use lowercase?", lowercase);
  if (lowercase) {
    passwordChars = passwordChars.concat(lowercaseLetters);
  }
    console.log(passwordChars);

  var number = confirm("Do you need numbers?");
  console.log("Use numbers?", number);
  if (number) {
    passwordChars = passwordChars.concat(numberChoices);
  }
    console.log(passwordChars);

  var symbol = confirm("Do you need special characters?");
  console.log("Use symbols?", symbol);
  if (symbol) {
    passwordChars = passwordChars.concat(symbolChoices);
  }
    console.log(passwordChars);
  
  if (!uppercase && !lowercase && !number && !symbol) {
    alert("You must select at least one character type for your password.")
    return "You must select at least one character type for your password. Please start again.";
  }
  
  var range = prompt("Choose the length of your password from 8-128 characters.")
  
  if (range < 8 || range > 128) {
    alert("You must choose a number between 8 - 128.")
    return "You must choose a number between 8 - 128. Please start again.";
  }
  else {
    alert("Your selections have been recorded.")
   }
   return 
  }
  ;


// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  var index = Math.floor(Math.random() * passwordChars.length);
  var completePassword = passwordChars[index];

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

