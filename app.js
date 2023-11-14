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
var randomPass;

// console.log("Capital Alphabats==>", capAlp.length, )
// console.log("Small Alphabats==>", smAlp.length, )
// console.log("Number==>", num.length, )
// console.log("Special Character==>", spChr.length, )

for (var i = 0; i < num.length; i++) {
  // newPass = '';
  randomPass = '';
  var randNum = Math.floor(Math.random() * 10);
  newNumPass += num[randNum];
  if (newNumPass.length == 1 && newNumPass.length <= 2) {
    randomPass += newNumPass;
    }
  
}
for (var i = 0; i < capAlp.length; i++) {
  // newPass = '';
  randomPass = '';
  var randCapAl = Math.floor(Math.random() * 26);
  newCapPass += capAlp[randCapAl];
  if (newCapPass.length ==1) {
    randomPass += newCapPass;
  }
}


for (var i = 0; i < smAlp.length; i++) {
  // newPass = '';
  randomPass = '';
  var randSmAl = Math.floor(Math.random() * 26);
  newSmPass += smAlp[randSmAl];
  if (newSmPass.length > 6 && newSmPass.length <= 8) {
    randomPass += newSmPass;
  }
}

for (var i = 0; i < spChr.length; i++) {
  // newPass = '';
  randomPass = '';
  var randSplChr = Math.floor(Math.random() * 9);
  newSplPass += spChr[randSplChr];
  if (newSplPass.length == 1) {
    randomPass += newSplPass;
  }
}

// randomPass = newNumPass + newCapPass + newSmPass + newSplPass;
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
