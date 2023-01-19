
function regist(){
    
}

var navbar = document.querySelector('#login')

window.onscroll = function() {

  // pageYOffset or scrollY
  if (window.pageYOffset > 421.3333435058594) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}