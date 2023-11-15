var main = document.getElementById("main");
var input = document.getElementById("Password").value;
var copyIcon = document.getElementById("copy");
var pastIcon = document.getElementById("past");
var err = document.querySelector(".error")
// var pass = "`1234567890-qertyuiiop!@*&*lkjhgfdsaAZXCVBNM,./ASDFGHJKLPOIUYTREWQzxcvbnm";
var genRanPas;

function generate() {
  copyIcon.style.display = "block";
  pastIcon.style.display = "none";
  err.style.display = "none";
  var num = "1234567890";
  var capAlp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var smAlp = "abcdefghijklmnopqrstuvwxyz";
  var spChr = "@!#$%&*_?";
  var newNumPass = "";
  var newCapPass = "";
  var newSmPass = "";
  var newSplPass = "";
  var randomPass = "";

  // =====**** loop run to get random number ****====

  for (var i = 0; i < num.length; i++) {
    var randNum = Math.floor(Math.random() * 10);
    newNumPass += num[randNum];
  }

  // =====**** loop run to get random Captial Alphabets ****====

  for (var i = 0; i < capAlp.length; i++) {
    var randCapAl = Math.floor(Math.random() * 26);
    newCapPass += capAlp[randCapAl];
  }

  // =====**** loop run to get random Small Alphabets ****====

  for (var i = 0; i < smAlp.length; i++) {
    var randSmAl = Math.floor(Math.random() * 26);
    newSmPass += smAlp[randSmAl];
  }
  // =====**** loop run to get random Special Characters ****====

  for (var i = 0; i < spChr.length; i++) {
    var randSplChr = Math.floor(Math.random() * 9);
    newSplPass += spChr[randSplChr];
  }

  randomPass = newNumPass + newCapPass + newSmPass + newSplPass;
  genRanPas =
    randomPass.slice(10, 11) +
    randomPass.slice(36, 44) +
    randomPass.slice(1, 2) +
    randomPass.slice(62, 63);

  // =====**** Regex added to check validation  ****====

  var regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{11,11}$/;
  if (regex.test(genRanPas)) {
    document.getElementById("Password").value = genRanPas;
    main.innerHTML = `
      <p style="color:green; text-align: right">* Stong Password</p>
      `;
  } else {
    document.getElementById("Password").value = genRanPas;
    main.innerHTML = `
        <p style="color:red; text-align: right" >* Weak Password</p>
        `;
  }
}

function copy() {
  copyIcon.style.display = "none";
  pastIcon.style.display = "block";
  pastIcon.style.cursor = "not-allowed";
  input = document.getElementById("Password");
  if(input.value === ""){
    err.innerHTML = `
    <p>*this field id empty</p>
    `
  }else{
    input.select();
    document.execCommand("copy") ; 
      }
}


