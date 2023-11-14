var main = document.getElementById("main");
// var pass = "`1234567890-qertyuiiop!@*&*lkjhgfdsaAZXCVBNM,./ASDFGHJKLPOIUYTREWQzxcvbnm";
var num = "1234567890";
var capAlp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var smAlp = "abcdefghijklmnopqrstuvwxyz";
var spChr = "@!#$%&*_?";
var newPass = "";

// console.log("Capital Alphabats==>", capAlp.length, )
// console.log("Small Alphabats==>", smAlp.length, )
// console.log("Number==>", num.length, )
// console.log("Special Character==>", spChr.length, )

for (var i = 0; i < num.length; i++) {
  // newPass = '';
  var randNum = Math.floor(Math.random() * 10);
  newPass += num[randNum];
  if (newPass.length == 1 || newPass.length <= 2) {
    console.log("number", newPass);
  }
}
for (var i = 0; i < capAlp.length; i++) {
  // newPass = '';
  var randCapAl = Math.floor(Math.random() * 26);
  newPass += capAlp[randCapAl];
  if (newPass.length == 1) {
    console.log("capital alphabats", newPass);
  }
}

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
