// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


generateBtn.addEventListener("click", function verifyInputs() {  
  var uppercase = confirm("Do you need uppercase letters?");
  var lowercase = confirm("Do you need lowercase letters?");
  var number = confirm("Do you need numbers?");
  var symbol = confirm("Do you need special characters?");
  
  if (!uppercase && !lowercase && !number && !symbol) {
    alert("You must select at least one character type for your password.")
    return;
  }
  
  var range = prompt("Choose the length of your password from 8-128 characters.")
  
  if (range < 8 || range > 128) {
    alert("You must choose a number between 8 - 128.")
    return;
  }
  else {
    alert("Your selections have been recorded.")
   }
  }
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
