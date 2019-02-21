const nav = document.getElementById('nav');
const header = document.getElementById('header');

window.addEventListener("scroll", function(){
  var offset = window.pageYOffset; 

  // ANIMATION NAVBAR WHEN SCROLLED DOWN
  if(offset > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }

  // HEADER BACKGROUND PARALLAX
  if (window.innerWidth > 780) {
    header.style.backgroundPositionY = Math.floor(offset * .3) + "px";
  }

})