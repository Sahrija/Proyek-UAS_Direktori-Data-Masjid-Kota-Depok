
function regist() {


    window.localStorage("")
}

// var navbar = document.querySelector('#login')

// window.onscroll = function() {

//   // pageYOffset or scrollY
//   if (window.pageYOffset > 421.3333435058594) {
//     navbar.classList.add('scrolled')
//   } else {
//     navbar.classList.remove('scrolled')
//   }
// }


var url = window.location.href;
function ulrExist(url) {
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    if (http.status != 404)
        return true;

    else
        return false;
}

console.log(ulrExist());
console.log("AAAAAA")


// function hasLogIn(){
//     if (window.localStorage.getItem("currentUser") in ["", null, undefined]){
//         return false;
//     }
//     else{return true}
// }
// if(hasLogIn()){
//     accountName = window.localStorage.getItem("currentUser");
//     accountLabel = document.getElementById("account").innerHTML = accountName
// }

window.onload = function(){
    // darkmode toggle
    let darkModeState = false;

    const button = document.querySelector("#dark-mode-toggle");

    // MediaQueryList object
    const useDark = window.matchMedia("(prefers-color-scheme: dark)");

    // Toggles the "dark-mode" class
    function toggleDarkMode(state) {
        document.documentElement.classList.toggle("dark-mode", state);
        darkModeState = state;
    }

    // Sets localStorage state
    function setDarkModeLocalStorage(state) {
        localStorage.setItem("dark-mode", state);
    }

    // Initial setting
    toggleDarkMode(localStorage.getItem("dark-mode") == "true");

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
}