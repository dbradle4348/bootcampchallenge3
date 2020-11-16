
// Get references to the #generate element

var passwordText = document.querySelector("#password");

var generateBtn = document.querySelector("#generate");


// Assignment code here
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numberCharacters = "123456789";
const specialCharacters = "!@#$%^&*()[];',./<>?:{}+`~";
 var password = writePassword();
 // Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {

  var newPass = "";
  var passSet = "";
  

  // lower case characters
  var passLengthQuestion = window.prompt("How many characters would you like to use for the password?");
    
    if (Number(passLengthQuestion < 8) | Number(passLengthQuestion > 128)) {
      alert("Password must be between 8 and 128 characters in length!");
      return;
    }

    // lower case characters

    var lowerQuestion = confirm("Would you like to include lower case characters?");

    if (lowerQuestion) {
      passSet += lowerQuestion;
    }

    // upper case characters
  
    var upperQuestion = confirm("Would you like to include upper case characters?");

    if (upperQuestion) {
      passSet += upperQuestion;
    }

    // number characters

    var numQuestion = confirm("Would you like to include numbers in your password?")
    
    if (numQuestion) {
      passSet += numQuestion;
    }
    // special characters

    var specQuestion = confirm("Almost done! Would you like to include special characters in you password?")

    if (specQuestion) {
      passSet += specQuestion;
    }

    if (!lowerQuestion && !upperQuestion && !numQuestion && !specQuestion) {
      window.alert("Please select at least one of these character types!")
    }

    //variable loop stuff
  if (Number(passLengthQuestion >= 8) && Number(passLengthQuestion <= 128)) {
    for (var i = 0; i < passLengthQuestion; i++) {
      newPass += passSet.charAt(Math.floor(Math.random() * passSet.length));
      
      localStorage.setItem("password", newPass);
        var newPassStr = localStorage.getItem("password");
        passwordText.textContent = newPassStr;
    
      };
 
 
};

};







