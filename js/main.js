const nav = document.getElementById('nav');

window.addEventListener("scroll", function(){
  var offset = window.pageYOffset; 
  if(offset > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
})