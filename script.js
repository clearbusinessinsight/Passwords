// Assignment Code
var generateBtn = document.querySelector("#generate");

//If no incl_Upper will be null
var incl_Upper = window.prompt("Press OK to include Upper case letters or Cancel to Skip.")
if(incl_Upper === null) {
console.log("You pressed Cancel")
} else {
  console.log("You pressed OK")
}


//If no incl_Lpper will be null
var incl_Lower = window.prompt("Press OK to include Lower case letters or Cancel to skip.")
if(incl_Lower === null) {
  console.log("You pressed Cancel")
  } else {
    console.log("You pressed OK")
  }

//If no incl_Num will be null
var incl_Num = window.prompt("Press OK to include Numbers or Cancel to Skip.")
if(incl_Num === null) {
  console.log("You pressed Cancel")
  } else {
    console.log("You pressed OK")
  }

//If no incl_Spec will be null
var incl_Spec = window.prompt("Press OK to include Special Characters or Cancel to skip.")
if(incl_Spec === null) {
  console.log("You pressed Cancel")
  } else {
    console.log("You pressed OK")
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
