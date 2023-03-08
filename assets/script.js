// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", function() {
  confirm("Do you need uppercase letters?");
  confirm("Do you need lowercase letters?");
  confirm("Do you need numbers?");
  confirm("Do you need uppercase symbols?");
});

// Write password to the #password input

//function generatePassword() {
 // if (generateBtn) {
 //   alert("Do you want uppercase letters?");
//  };
//}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();
