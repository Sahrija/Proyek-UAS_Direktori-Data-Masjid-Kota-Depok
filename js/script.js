
function regist() {
  let password = document.getElementById("password").value;
  let checkPassword = document.getElementById("check-password").value;

  event.preventDefault()

  if (password == checkPassword) {
    username = document.getElementById("username").value;
    
    window.localStorage.setItem("currentUser", username);
    alert("Anda berhasil membuat akun");
    window.location = "home.html";
  }else{
    alert("Cek password dan password yang anda masukkan tidak sesuai");
  }
}



// darkmode for all documents
let darkModeState = false;

const button = document.querySelector("#dark-mode-toggle");

// MediaQueryList object
const useDark = window.matchMedia("(prefers-color-scheme: dark)");


// Sets localStorage state
function setDarkModeLocalStorage(state) {
  localStorage.setItem("dark-mode", state);
}

// Listen for changes in the OS settings.
// Note: the arrow function shorthand works only in modern browsers,
// for older browsers define the function using the function keyword.
useDark.addListener((evt) => toggleDarkMode(evt.matches));

// Toggles the "dark-mode" class on click and sets localStorage state
button.addEventListener("click", () => {
  darkModeState = !darkModeState;

  toggleDarkMode(darkModeState);
  setDarkModeLocalStorage(darkModeState);
});

function tdnn() {
  document.getElementsByClassName("moon")[0].classList.toggle("sun");
  document.getElementsByClassName("tdnn")[0].classList.toggle("day");
  document.getElementsByTagName("BODY")[0].classList.toggle("light");
}



var currentUser = window.localStorage.getItem("currentUser");
function hasLogIn() {
  if (window.localStorage.getItem("currentUser") == "null") {
    return false;
  }
  else { return true }
}


if (hasLogIn()) {
  console.log(window.localStorage.getItem("currentUser"));
  document.getElementById("login-element").innerHTML = '<img src="img/account-photo-profile.jpg" alt"" class="account-photo-profile">' + currentUser;
  accountName = window.localStorage.getItem("currentUser");
}
else {
  currentUser = window.localStorage.getItem("currentUser");
}

// logout
const accountElement = document.getElementById("login-element");

accountElement.addEventListener("click", function () {
  if (hasLogIn()) {
    if (confirm("Logout dari akun?") == true) {
    window.localStorage.setItem("currentUser", "null");
    window.location = "home.html";
    } else {

    }
  }
});


