// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
 
var UpperList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var LowerList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var NumList = ["1","2","3","4","5","6","7","8","9"];
var SpecList = ["!","@","#","$","%","&","*","?","*"];
var CharNum = "8"

// Set the number of Characters
var CharNum = window.prompt("How many Characters would you like?")
if(CharNum === null) {
 CharNum = "8"
}
console.log(CharNum)


//If Cancel incl_Upper will be false
var incl_Upper = window.confirm("Press OK to include Upper case letters or Cancel to Skip.")
if(incl_Upper === true) {

 } else {
  UpperList.length = 0

}

//If Cancel incl_Lpper will be false
var incl_Lower = window.confirm("Press OK to include Lower case letters or Cancel to skip.")
if(incl_Lower === true) {
  
  } else {
    LowerList.length = 0
  }

//If Cancel incl_Num will be false
var incl_Num = window.confirm("Press OK to include Numbers or Cancel to Skip.")
if(incl_Num === true) {
  
  } else {
    NumList.length = 0
  }

//If Cancel incl_Spec will be false
var incl_Spec = window.confirm("Press OK to include Special Characters or Cancel to skip.")
if(incl_Spec === true) {
  
  } else {
    SpecList.length = 0
  }

  const Pass = UpperList.concat(LowerList).concat(NumList).concat(SpecList)

  
 
 //Write password to the #password input
function writePassword(array) {
  String(passwordText = "");

return array[Math.floor(Math.random() * array.length)]

}
result = "";
for (var i = 0; i < CharNum; i++) {
  result += writePassword(Pass)
  // document.getElementById("#password").innerHTML = result;
  }

console.log(result)



