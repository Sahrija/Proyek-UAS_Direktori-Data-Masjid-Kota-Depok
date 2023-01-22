
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
function ulrExist(url){
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
