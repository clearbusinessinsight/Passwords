// Assignment Code
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
 
var UpperList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var LowerList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var NumList = ["1","2","3","4","5","6","7","8","9"];
var SpecList = ["!","@","#","$","%","&","*","?","*"];
var CharNum = "8"
var Pass = []


 //Write password to the #password input
function writePassword(array){
  var passwordText = "";

    // Set the number of Characters
  var CharNum = window.prompt("How many Characters would you like?")
  if(CharNum >= 128) {
     CharNum = 128
  }
  if(CharNum < "8") {
    CharNum = "8"
  }
  
  //If Cancel incl_Upper will be false
  var incl_Upper = window.confirm("Press OK to include Upper case letters or Cancel to Skip.")
  if(incl_Upper) {
  Pass = UpperList.concat(Pass)
  }
  console.log(Pass)

  //If Cancel incl_Lpper will be false
  var incl_Lower = window.confirm("Press OK to include Lower case letters or Cancel to skip.")
  if(incl_Lower) {
    //LowerList.length = 0
    Pass = LowerList.concat(Pass)
  }

  //If Cancel incl_Num will be false
  var incl_Num = window.confirm("Press OK to include Numbers or Cancel to Skip.")
  if(incl_Num) {
      Pass = NumList.concat(Pass)
  }

  //If Cancel incl_Spec will be false
  var incl_Spec = window.confirm("Press OK to include Special Characters or Cancel to skip.")
  if(incl_Spec) {
    Pass = SpecList.concat(Pass)
  }
  

  if(!incl_Upper) {
    if(!incl_Lower) {
      if(!incl_Num) {
        if(!incl_Spec) {
          Pass = ["A","B","c","d","!","@","#"]
        }
      }
    }
  }

    console.log(Pass)

var result = "";
  
for (var i = 0; i < CharNum; i++) {
 //result += Newdata.charAt(Math.floor(Math.random() * Newdatalength))
 result += Pass[(Math.floor(Math.random() * Pass.length))]
 }
 document.getElementById("password").innerHTML = result;
}






