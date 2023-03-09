// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", function() {
  confirm("Do you need uppercase letters?");
  confirm("Do you need lowercase letters?");
  confirm("Do you need numbers?");
  confirm("Do you need symbols?");

  var length = prompt("Choose the length of your password from 8-128 characters.")

  if (length < 8 || length > 128) {
    alert("You must choose a number between 8 - 128.")
    return;
  }
  else {
    alert("Your selections have been recorded.")
    return;
  }}
);

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();
