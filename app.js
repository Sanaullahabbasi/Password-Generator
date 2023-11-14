var main = document.getElementById("main");
// var pass = "`1234567890-qertyuiiop!@*&*lkjhgfdsaAZXCVBNM,./ASDFGHJKLPOIUYTREWQzxcvbnm";
var num = "1234567890";
var capAlp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var smAlp = "abcdefghijklmnopqrstuvwxyz";
var spChr = "@!#$%&*_?";
var newNumPass = "";
var newCapPass = "";
var newSmPass = "";
var newSplPass = "";

// console.log("Capital Alphabats==>", capAlp.length, )
// console.log("Small Alphabats==>", smAlp.length, )
// console.log("Number==>", num.length, )
// console.log("Special Character==>", spChr.length, )

for (var i = 0; i < num.length; i++) {
  // newPass = '';
  var randNum = Math.floor(Math.random() * 10);
  newNumPass += num[randNum];
  if (newNumPass.length == 1 || newNumPass.length <= 2) {
    console.log("number", newNumPass);
  }
}

for (var i = 0; i < capAlp.length; i++) {
  // newPass = '';
  var randCapAl = Math.floor(Math.random() * 26);
  newCapPass += capAlp[randCapAl];
  if (newCapPass.length == 1) {
    console.log("capital alphabats", newCapPass);
  }
}
for (var i = 0; i < smAlp.length; i++) {
  // newPass = '';
  var randSmAl = Math.floor(Math.random() * 26);
  newSmPass += smAlp[randSmAl];
  if (newSmPass.length > 6 && newSmPass.length <= 8) {
    console.log("small alphabats", newSmPass);
  }
}

for (var i = 0; i < spChr.length; i++) {
  // newPass = '';
  var randSplChr = Math.floor(Math.random() * 10);
  newSplPass += spChr[randSplChr];
  if (newSplPass.length === 1 ) {
    console.log("number", newSplPass);
  }
}

var randomPass;
randomPass = newNumPass + newCapPass + newSmPass + newSplPass;
console.log(randomPass);

// function generate(){
//   newPass = '';
//   for (var i = 0; i < pass.length; i++) {
//     var randomV = Math.floor(Math.random() * 73);
//     newPass += pass[randomV];

//     if (newPass.length >= 8 && newPass.length <= 10) {
//       main.innerHTML = `
//       <p>${newPass}</p>
//       `;
//     }
//   }
// //   console.log(pass.length)
// }

// function validate(){
//     var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,10}$/;
//     console.log(regex.test(newPass));
//     if(regex.test(newPass)){
//         main.innerHTML = `
//         <p>Stong</p>
//         `;
//     } else {
//         main.innerHTML = `
//         <p>Weak</p>
//         `;
//     }
// }
