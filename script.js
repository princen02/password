// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword(){
  var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var numberCharacters = "0123456789";
  var specialCharacters = "!@#$%^&*()";
  var lengthOfPassword = parseInt(prompt("Enter the length of the password"))
  if(lengthOfPassword < 8 || lengthOfPassword > 126 ||isNaN(lengthOfPassword)){
    return "Invalid password length"
  }
  var useUpper = confirm("Do you like to have uppercase letters in password");
  var useLower = confirm("Do you like to have lowercase letters in password");
  var useNumber = confirm("Do you like to have number letters in password");
  var useSpecial = confirm("Do you like to have special character letters in password");
  var acceptedCharacters =[]
  if(useUpper){
    acceptedCharacters += acceptedCharacters + upperCaseCharacters
  }
  if(useLower){
    acceptedCharacters += acceptedCharacters + lowerCaseCharacters
  }
  if(useNumber){
    acceptedCharacters += acceptedCharacters + numberCharacters
  }
  if(useSpecial){
    acceptedCharacters += acceptedCharacters + specialCharacters
  }
  if(acceptedCharacters.length == 0){
    return "Choose more than one option"
  }
}