// Assignment Code
var generateBtn = document.querySelector("#generate");
var UpperList = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var LowerList = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var NumList = ["1","2","3","4","5","6","7","8","9"];
var SpecList = ["!","@","#","$","%","&","*","?","*"];
var newtext = " "


//var password = generatePassword();
//var passwordText = document.querySelector("#password");
//var passwordText = "test"
 // passwordText.value = password;
// ------------------------
// Pass is the conbined string

// return array[Math.floor(Math.random() * Pass.length)]
// }
// for (var i = 0; i< 8; i++) {
// result += writePassword()
// }
// console.log(array);


// let result = ' ';
// const charactersLength = Pass.length;
// for ( let i = 0; i <length; i++ ) {
//   result += characters.charAt(Math.floor(Math.random() * charactersLength))
// }

// return result;

// }



//If Cancel incl_Upper will be false
var incl_Upper = window.confirm("Press OK to include Upper case letters or Cancel to Skip.")
if(incl_Upper === true) {

  console.log(UpperList)
} else {
  UpperList.length = 0
  console.log("You pressed Cancel")
  console.log(UpperList)
}

//If Cancel incl_Lpper will be false
var incl_Lower = window.confirm("Press OK to include Lower case letters or Cancel to skip.")
if(incl_Lower === true) {
  
  console.log(LowerList)
  } else {
    LowerList.length = 0
    console.log("You pressed Cancel")
    console.log(LowerList)
  }

//If Cancel incl_Num will be false
var incl_Num = window.confirm("Press OK to include Numbers or Cancel to Skip.")
if(incl_Num === true) {
  
  console.log(NumList)
  } else {
    NumList.length = 0
    console.log("You pressed Cancel")
  }

//If Cancel incl_Spec will be false
var incl_Spec = window.confirm("Press OK to include Special Characters or Cancel to skip.")
if(incl_Spec === true) {
  
  console.log(SpecList)
  } else {
    SpecList.length = 0
    console.log("You pressed Cancel")
  }

const Pass = UpperList.concat(LowerList).concat(NumList).concat(SpecList)
console.log(Pass)


 
 
 //Add event listener to generate button
 
 generateBtn.addEventListener("click", writePassword);

 //Write password to the #password input
function writePassword() {
  // Pass is the array
  //const newtext = Pass
let newtext = Pass.toString();
  
 // document.getElementById("demo");

  
  console.log(Pass)
  console.log(newtext);
  
}
