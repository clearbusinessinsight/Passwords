// Assignment Code
var generateBtn = document.querySelector("#generate");
var UpperList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var LowerList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var NumList = ["1","2","3","4","5","6","7","8","9"];
var SpecList = ["!","@","#","$","%","&","*","?","*"];

//If Cancel incl_Upper will be false
var incl_Upper = window.confirm("Press OK to include Upper case letters or Cancel to Skip.")
if(incl_Upper === true) {
const PassPart1 = UpperList
  console.log(PassPart1)
} else {
  console.log("You pressed Cancel")
}

//If Cancel incl_Lpper will be false
var incl_Lower = window.confirm("Press OK to include Lower case letters or Cancel to skip.")
if(incl_Lower === true) {
  const PassPart2 = LowerList
  console.log(PassPart2)
  } else {
    console.log("You pressed Cancel")
  }

//If Cancel incl_Num will be false
var incl_Num = window.confirm("Press OK to include Numbers or Cancel to Skip.")
if(incl_Num === true) {
  const PassPart3 = NumList
  console.log(PassPart3)
  } else {
    console.log("You pressed Cancel")
  }

//If Cancel incl_Spec will be false
var incl_Spec = window.confirm("Press OK to include Special Characters or Cancel to skip.")
if(incl_Spec === true) {
  const PassPart4 = SpecList
  console.log(PassPart4)
  } else {
    console.log("You pressed Cancel")
  }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
