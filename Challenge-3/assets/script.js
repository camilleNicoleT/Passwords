// Assignment code here
var password = ""

var lowerConfirm = ["abcdefghijklmnopqrstuvwxyz"]
var upperConfirm = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var numberConfirm = ['0123456789']
var specialConfirm = ["!#$%&()*+,-./:;<=>?@[^_`{|}~"]
var passwordLength = ""
var wordBank = [];

//All of the choices that were selected now combined into a string
var inputConfirmed = function(choice) {
  console.log(choice);
  if (choice == "upper") {
    wordBank = wordBank.concat (upperConfirm) 
  } 
  if (choice == "lower") {
    wordBank = wordBank.concat (lowerConfirm)
  }
  if (choice == "special") {
    wordBank = wordBank.concat (specialConfirm)
  }
  if (choice == "numbers") {
    wordBank = wordBank.concat (numberConfirm)
  }
//if any of the passwordRequirements are confirmed
 console.log(wordBank.join(""));
};

// Collect users password requirements by asking a series of questions
var passwordRequirements = function() {
  //gather the number of characters needed
  passLength = function() {
    passwordLength = window.prompt ("How long would you like your password to be?");
      passwordLength = parseInt(passwordLength);
    
    if (passwordLength < 8) {
      alert("Please use a number equal to or greater than 8.")
      return passLength();
    } else if (passwordLength > 128) {
    alert("Please use a number equal or greater than 128")
      return passLength();
    } else {
      console.log(passwordLength);
      return passwordLength;
    }
  }
  passLength();
  //Ask if password needs uppercase letters
    var uppercase = window.confirm ("Do you need uppercase letters in your password?")
     console.log(uppercase);
        if (uppercase == true) {
           inputConfirmed("upper");
        }
  //Ask if password needs lowercase letters
    var lowercase = window.confirm ("Do you need lowercase letters in your password?")
     console.log (lowercase);
      if (lowercase == true) {
        inputConfirmed("lower");
      } 
      
    //Ask if password needs numbers
    var specialCharacter = window.confirm ("Do you need special characters?")
     console.log (specialCharacter);
      if (specialCharacter == true) {
        inputConfirmed('special')
      }
     
    //Ask if password needs numbers
      var numbers = window.confirm ("Do you need numbers in your password")
    console.log (numbers);
      if (numbers== true) {
        inputConfirmed("numbers")
      } 
};

/*This function ensures the information is placed in the correct identifier*/
 function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = getRandomString(passwordLength); 
};

//Combine requirements with random selection
function generatePassword() {
  //collect password input
  passwordRequirements();
  getRandomString();
  //password provided to user;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Start the process of making the password
generateBtn.addEventListener("click", writePassword);

/**
 * 
 * @param {number} length This is where we pass in password along with random string information
 * @returns {string}
 */
function getRandomString(length) {
  var randomChars = wordBank.join("")
  var result = '';
  for ( var i = 0; i < length; i++ ) {
      result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
};
