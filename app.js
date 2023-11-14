var main = document.getElementById("main");
var pass =
"`1234567890-qertyuiiop!@*&*lkjhgfdsaAZXCVBNM,./ASDFGHJKLPOIUYTREWQzxcvbnm";

var newPass;

function generate(){
  newPass = '';
  for (var i = 0; i < pass.length; i++) {
    var randomV = Math.floor(Math.random() * 73);
    newPass += pass[randomV];
  
    if (newPass.length >= 8 && newPass.length <= 10) {
      main.innerHTML = `
      <p>${newPass}</p>
      `;
    }
  }
//   console.log(pass.length)
}


function validate(){
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,10}$/; 
    console.log(regex.test(newPass));
    if(regex.test(newPass)){
        main.innerHTML = `
        <p>Stong</p>
        `;
    } else {
        main.innerHTML = `
        <p>Weak</p>
        `;
    }
    

}


