const nav = document.getElementById('nav');
const header = document.getElementById('header');
const burgBtn = document.getElementById('burgerBtn');
const burgBtnAlt = document.getElementById('burgerBtnAlt');

burgBtn.addEventListener("click", function(){
  document.getElementById('burger_items').style.display = "block";
  setTimeout(function() {
    document.getElementById('burger_items').classList.add("shown");
  }, 5)
  burgBtn.style.opacity = "0";
  burgBtnAlt.style.display = "flex";
  burgBtnAlt.style.opacity = "1";
  burgBtnAlt.style.zIndex = "-1";
  setTimeout(function(){
    burgBtn.style.display = "none";
    burgBtnAlt.style.zIndex = "1";
  }, 300);
})
burgBtnAlt.addEventListener("click", function(){
  document.getElementById('burger_items').classList.remove("shown")
  burgBtnAlt.style.opacity = "0";
  burgBtn.style.display = "flex";
  burgBtn.style.opacity = "1";
  burgBtn.style.zIndex = "-1";
  setTimeout(function(){
    burgBtnAlt.style.display = "none";
    burgBtn.style.zIndex = "1";
  }, 300);
  setTimeout(function() {
    document.getElementById('burger_items').style.display = "none";
  }, 150);
})

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
  } else {
    header.style.backgroundPositionY = "0px";
  }

})