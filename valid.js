var username = document.forms[0]["username"];
var password = document.forms[0]["password"];

//JavaScript names do not use "_" underscore symbol, use camelCase naming convention instead
var usernameError = document.getElementById("username_error");
var passwordError = document.getElementById("password_error"); //need to have another variable name, because the name "password" is already used above

username.addEventListener("change", usernameVerify); //textInput is not a valid event
password.addEventListener("change", passwordVerify);

//do not need this function + move "if" block inside usernameVerify function
// function validated() {
//   if (username.value.length < 9) {
//     username.style.border = "1px solid red";
//     username_error.style.display = "block";
//     username.focus();
//     return false;
//   }
// }

//JavaScript names do not use "_" underscore symbol, use camelCase naming convention instead
function usernameVerify() {
  if (username.value.length >= 8) {
    username.style.border = "1px solid silver";
    usernameError.style.display = "none";
    return true;
  }

  if (username.value.length < 9) {
    username.style.border = "1px solid red";
    usernameError.style.display = "block";
    username.focus();
    return false;
  }
}

//move "if" block inside the function
function passwordVerify() {
  if (password.value.length >= 5) {
    password.style.border = "1px solid silver";
    passwordError.style.display = "none";
    return true;
  }

  if (password.value.length < 6) {
    password.style.border = "1px solid red";
    passwordError.style.display = "block";
    password.focus();
    return false;
  }
}
